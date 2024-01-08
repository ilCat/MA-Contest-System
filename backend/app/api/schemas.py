from pydantic import BaseModel
from typing import Optional, Annotated
from datetime import datetime

class User(BaseModel):
    id: int
    email: str
    name: str
    last_name: str
    user_name:str 
    password: str
    group_Id: str
    is_active: bool

class Player(BaseModel):
    id: int
    name: str
    last_name: str
    age: int
    weight: float
    belt_category: str
    team_id: int
    is_HPTeam: Optional[bool] ## High Performance Team