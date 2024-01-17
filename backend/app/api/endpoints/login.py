from ..schemas import User, SecurityGroup, changepassword, TokenSchema, LoginRequest
from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated
from sqlalchemy.orm import Session
from db.db import get_db
from db import models as model
from core.auth.auth_bearer import JWTBearer
from core.auth.util import (
    get_hashed_password,
    verify_password,
    create_access_token,
    create_refresh_token,
)
from core.config import SECRET_KEY, REFRESH_SECRET_KEY, ALGORITHM
from jwt.jwt import JWT
from datetime import datetime


db_dependency = Annotated[Session, Depends(get_db)]
dependencies = Depends(JWTBearer())
router = APIRouter(prefix="/login", tags=["login"])


@router.post("/registrer")
async def register_user(user: User, db: db_dependency):
    existing_user = db.query(model.User).filter_by(email=user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    encrypted_password = get_hashed_password(user.password)

    new_user = model.User(
        name=user.name,
        last_name=user.name,
        is_active=user.is_active,
        group_Id=user.group_Id,
        user_name=user.user_name,
        email=user.email,
        password=encrypted_password,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "user created successfully"}


@router.post("/login", response_model=TokenSchema)
def login(request: LoginRequest, db: db_dependency):
    user = db.query(model.User).filter(model.User.email == request.email).first()
    if user is None:
        raise HTTPException(status_code=400, detail="Incorrect email")
    hashed_pass = user.password
    if not verify_password(request.password, hashed_pass):
        raise HTTPException(status_code=400, detail="Incorrect password")

    access = create_access_token(user.id)
    refresh = create_refresh_token(user.id)

    token_db = model.Token(
        user_id=user.id, access_toke=access, refresh_toke=refresh, status=True
    )
    db.add(token_db)
    db.commit()
    db.refresh(token_db)
    return {
        "access_token": access,
        "refresh_token": refresh,
    }


@router.post("/change-password")
def change_password(request: changepassword, db: db_dependency):
    user = db.query(User).filter(User.email == request.email).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    if not verify_password(request.old_password, user.password):
        raise HTTPException(status_code=404, detail="Invalid old password")

    encrypted_password = get_hashed_password(request.new_password)
    user.password = encrypted_password

    db.commit()

    return {"message": "Password changed successfully"}


@router.post("/logout")
def logout(dependencies, db: db_dependency):
    token = dependencies
    payload = JWT.decode(token, SECRET_KEY, ALGORITHM)
    user_id = payload["sub"]
    db_tokens = db.query(model.Token).all()
    info = []
    for token in db_tokens:
        print("record", token)
        if (datetime.utcnow() - token.created_date).days > 1:
            info.append(token.user_id)
    if info:
        existing_token = db.query(model.Token).where(token.user_id.in_(info)).delete()
        db.commit()

    existing_token = (
        db.query(model.Token)
        .filter(model.Token.user_id == user_id, model.Token.access_toke == token)
        .first()
    )
    if existing_token:
        existing_token.status = False
        db.add(existing_token)
        db.commit()
        db.refresh(existing_token)
    return {"message": "Logout Successfully"}
