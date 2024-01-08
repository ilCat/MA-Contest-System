from fastapi import APIRouter
from api.schemas import User

router = APIRouter(
    prefix='/user',
    tags=['user']
)

@router.post('/createUser')
def createUser(user:User):
    print(user.model_dump())
    return {'responce: User creted'}

@router.get('/users')
def getAllUsers():
    print('getting all')
    return {'responce: List of users'}