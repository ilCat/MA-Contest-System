from pydantic import BaseModel
from typing import Optional, Annotated
from datetime import datetime


class SecurityGroup(BaseModel):
    id: Annotated[int, None]
    name: str
    description: str

    # def __init__(self, id: Annotated[int, None], name: str, description: str):
    #     self.id: id
    #     self.name: name
    #     self.description: description


class User(BaseModel):
    id: int
    email: str
    name: str
    last_name: str
    user_name: str
    password: str
    group_Id: int
    is_active: bool


class Player(BaseModel):
    id: int
    name: str
    last_name: str
    age: int
    weight: float
    belt_category: str
    team_id: int
    is_HPTeam: bool  ## High Performance Team


class Id(BaseModel):
    Id: int
