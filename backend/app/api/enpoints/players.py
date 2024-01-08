from fastapi import APIRouter
from api.schemas import Player

router = APIRouter(
    prefix='/player',
    tags=['player']
)


players: list[Player]=[{'id':1, 'name':'Alexis', 'lastName':'Silva','weight':69, 'belt_category':'dan', 'team_id': 1},{'id':2, 'name':'Gustavo', 'lastName':'Silva','weight':79, 'belt_category':'dan','team_id': 1}]
@router.get('getPlayers')
def getPlayers():
    print(players)
    return players
    


@router.post('/api/addPlayer')
def postPlayer(player: Player):
    newPlayer = player.model_dump()
    players.append(newPlayer)
    return newPlayer
    
 #   [{'id':1, 'name':'Alexis', 'lastName':'Silva','weight':69, 'category':'dan' , 'team': 'IAC' },{'id':2, 'name':'Gustavo', 'lastName':'Silva','weight':79, 'category':'dan','team': 'IAC'}]
