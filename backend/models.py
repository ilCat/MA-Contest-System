from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship

from db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    # items = relationship("Item", back_populates="owner")

# class Item(Base):
#     __tablename__ = "items"

#     id = Column(Integer, primary_key=True, index=True)
#     title = Column(String, index=True)
#     description = Column(String, index=True)
#     owner_id = Column(Integer, ForeignKey("users.id"))

#     owner = relationship("User", back_populates="items")

class Team(Base):
    __tablename__ = "team"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(Integer, nullable=False)
    description = Column(String)
    location = Column(String)
    owner_id = Column(Integer,ForeignKey('User','user.id'))
    is_active = Column(Boolean, default=True)
    # owner = relationship("Player", back_populates="teamId")


class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String,nullable=False)
    lastName = Column(String,nullable=False)
    age = Column(Integer, index=True,nullable=False)
    weight = Column(Float, index=True)
    category = Column(String, index=True, nullable=False)
    team_id = Column(Integer, ForeignKey('Team','team.id'), index=True, nullable=False)
    is_HPTeam = Column(Boolean, default=True) ## High Performance Team


