from api.schemas import User
from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated 
from sqlalchemy.orm import Session
from db.db import get_db
from db import models as model 

db_dependency = Annotated[Session, Depends(get_db)] 
router = APIRouter(
    prefix='/user',
    tags=['user']
)
# TODO: review  is dis line 'new_user = model.User(user)' is well used
@router.post('/createUser', response_model= None)
async def createUser(user:User,db:db_dependency):
    new_user = model.User(user)
    db.add(new_user)
    db.commit()
    print(user.model_dump())
    return user.model_dump()

@router.get('/users')
async def getAllUsers(db:db_dependency):
    result = db.query(model.User).all()
    if not result:
        raise HTTPException(detail='DB error getting users',status_code=404)
    print(result)
    return result
