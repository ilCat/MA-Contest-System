from schemas.schemas import User, SecurityGroup
from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated
from sqlalchemy.orm import Session
from db.db import get_db
from models import models as model
from core.auth.auth_bearer import JWTBearer

db_dependency = Annotated[Session, Depends(get_db)]
dependencies = Depends(JWTBearer())
router = APIRouter(prefix="/user", tags=["user"])


# Secury Groups
@router.post("/createSecurityGroup")
async def createSecurityGroup(SecurityGroup: SecurityGroup, db: db_dependency):
    result = model.SecurityGroup(
        name=SecurityGroup.name, description=SecurityGroup.description
    )
    db.add(result)
    db.commit()
    print(SecurityGroup.model_dump())
    return SecurityGroup.model_dump()


@router.get("/getSecuryGroup")
async def getSecurityGroups(db: db_dependency):
    result = db.query(model.SecurityGroup).all()
    if not result:
        raise HTTPException(detail="DB error getting users", status_code=404)
    print(result)
    return result


@router.delete("/deleteSecurityGroup/{Id}")
async def deleteSecurityGroups(Id: int, db: db_dependency):
    result = db.query(model.SecurityGroup).filter(model.SecurityGroup.Id == Id)
    if not result:
        raise HTTPException(detail="The {Id} does not exist", status_code=404)
    db.delete(result)
    db.commit()
    print(result)
    return "message: Delete saccesfull"


# Secury Groups
@router.post("/createUser")
async def createUser(user: User, db: db_dependency):
    new_user = model.User(
        email=user.email,
        name=user.name,
        last_name=user.last_name,
        user_name=user.user_name,
        password=user.password,
        group_Id=user.group_Id,
        is_active=user.is_active,
    )
    db.add(new_user)
    db.commit()
    print(user.model_dump())
    return user.model_dump()


@router.get("/getAllUsers")
async def getAllUsers(dependencies, db: db_dependency):
    result = db.query(model.User).all()
    if not result:
        raise HTTPException(detail="DB error getting users", status_code=404)
    print(result)
    return result


@router.delete("deleteUser/{Id}")
async def deleteUser(Id: int, db: db_dependency):
    result = db.query(model.User).filter(model.User.id == Id)
    if not result:
        raise HTTPException(detail="The {Id} does not exist", status_code=404)
    db.delete(result)
    db.commit()
    print(result)
    return "message: Delete saccesfull"
