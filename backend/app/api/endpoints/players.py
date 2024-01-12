from fastapi import APIRouter, Depends, HTTPException
from api.schemas import Player, Id
from typing import Annotated 
from sqlalchemy.orm import Session
from db.db import get_db
from db import models as model 

db_dependency = Annotated[Session, Depends(get_db)]
router = APIRouter(
    prefix='/player',
    tags=['player']
)


# players: list[Player]=[{'id':1, 'name':'Alexis', 'lastName':'Silva','weight':69, 'belt_category':'dan', 'team_id': 1},{'id':2, 'name':'Gustavo', 'lastName':'Silva','weight':79, 'belt_category':'dan','team_id': 1}]

@router.get('/getPlayers',response_model= None)
async def getPlayers(db:db_dependency ):
    result = db.query(model.Player).all()
    if not result:
        raise HTTPException(detail='DB error getting players',status_code=404)
    print(result)
    return result


@router.get('/getPlayer/{Id}',response_model= None)
async def getPlayers(player_id:int,db:db_dependency ):
    result = db.query(model.Player).filter(model.Player.id == player_id )
    if not result:
        raise HTTPException(detail='DB error getting player info',status_code=404)
    print(result)
    return result
    
@router.post('/addPlayer',response_model= None)
async def postPlayer(players: list[Player], db: db_dependency):
    for player in players:
        newPlayer = model.Player(player)
        db.add(newPlayer)
    db.commit()
    return players
    
#   [{'id':1, 'name':'Alexis', 'lastName':'Silva','weight':69, 'category':'dan' , 'team': 'IAC' },{'id':2, 'name':'Gustavo', 'lastName':'Silva','weight':79, 'category':'dan','team': 'IAC'}]
