from pydantic import BaseModel
from typing import Optional, Annotated
from datetime import datetime


class SecurityGroup(BaseModel):
    id: Optional[int]
    name: str
    description: str


class User(BaseModel):
    id: Optional[int]
    email: str
    name: str
    last_name: str
    user_name: str
    password: str
    group_Id: int
    is_active: bool


class Player(BaseModel):
    id: Optional[int]
    name: str
    last_name: str
    age: int
    weight: float
    belt_category: str
    team_id: int
    is_HPTeam: bool  ## High Performance Team


class Id(BaseModel):
    Id: int


class LoginRequest(BaseModel):
    email: str
    password: str


class TokenSchema(BaseModel):
    access_token: str
    refresh_token: str


class changepassword(BaseModel):
    email: str
    old_password: str
    new_password: str


class TokenCreate(BaseModel):
    user_id: str
    access_token: str
    refresh_token: str
    status: bool
    created_date: datetime
