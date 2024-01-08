from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float, DateTime, Table
from sqlalchemy.orm import relationship , DeclarativeBase

from app.db.db import Base

# class Base(DeclarativeBase):
#     pass

class SecurityGroup(Base):
    __tablename__ = "security_groups"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, index=True)
    user = relationship('User',backref='SecurityGroup', cascade='delete,merge')
    
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    last_name = Column(String)
    use_name = Column(String, unique=True)
    password = Column(String)
    group_Id = Column(Integer, ForeignKey('SecurityGroup','security_groups.Id', ondelete="CASCADE"))
    is_active = Column(Boolean, default=True)
    team =relationship('Team')

class Team(Base):
    __tablename__ = "teams"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(Integer, nullable=False)
    description = Column(String)
    location = Column(String)
    owner_id = Column(Integer,ForeignKey('User','users.id'))
    is_active = Column(Boolean, default=True)
    player = relationship('Player')

# category_spec = Table(
#     "category_spec",
#     Base.metadata,
#     Column('categories',ForeignKey('categories.Id')),
#     Column('spec1', ForeignKey('specifications.Id')),
#     Column('spec2', ForeignKey('specifications.Id')),
#     Column('spec3', ForeignKey('specifications.Id')),
#     Column('spec4', ForeignKey('specifications.Id'))
# )

'''
Specifications like
    Weight -> UpperWeight , LowerWeight
    Age -> UpperAge, LowerAge
    BeltColor -> [Blank, Yellow,Orane] -> target=A
'''  
class Specification(Base):
    __tablename__= "specifications"

    id = Column(Integer, primary_key=True, index=True)
    description = Column(String,nullable=False)
    upper = Column(String)
    lower = Column(String)
    target = Column(String)
    extended_Info = Column(String)
    Is_Active = Column(Boolean)
    # category = relationship(secondary=category_spec)
'''
Categories like
    Sparring point
    wrestling
    choreography
'''  
class Category(Base):
    __tablename__= "categories"
    
    id = Column(Integer, primary_key=True, index=True)
    description = Column(String,nullable=False)
    spec_Id = Column(Integer, ForeignKey('Specification', 'specifications.Id'))
    # spec = relationship(secondary=category_spec)
    duel = relationship('Duel')


class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String,nullable=False)
    last_name = Column(String,nullable=False)
    age = Column(Integer, index=True,nullable=False)
    weight = Column(Float, index=True)
    belt_category = Column(String, nullable=False)
    team_id = Column(Integer, ForeignKey('Team','teams.id'))
    is_HPTeam = Column(Boolean, default=True) ## High Performance Team

class Duel(Base):
    __tablename__= "Duels"

    id = Column(Integer, primary_key=True, index=True)
    category_Id = Column(Integer, ForeignKey('Category', 'categories.Id'))
    player1_Id = Column(Integer, ForeignKey('Player', 'players.Id'))
    player2_Id = Column(Integer, ForeignKey('Player', 'players.Id'))
    player1_score = Column(Integer)
    plater2_score = Column(Integer)
    player1_fault = Column(Integer)
    plater2_fault = Column(Integer)
    win_id = Column(int)
    start_time = Column(DateTime)
    endTime = Column(DateTime)

