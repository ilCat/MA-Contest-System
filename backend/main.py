import uvicorn
if __name__ == '__main__':
    uvicorn.run('app.api.api:app', host='0.0.0.0', port=8080, reload=True)



# from fastapi import FastAPI
# from db import getAllPlayers, createPlayer
# from models import Player

# app = FastAPI()

# @app.get('/')
# def home():
#     return {'Welcome':'It is my home'}

# @app.get('/api/getPlayers')
# async def getPlayers():
#     players = await getAllPlayers()
#     return players
    
# #[{'id':1, 'name':'Alexis', 'lastName':'Silva','weight':69, 'category':'dan'},{'id':2, 'name':'Gustavo', 'lastName':'Silva','weight':79, 'category':'dan'}]

# @app.post('/api/addPlayer')
# async def postPlayers(player: Player):
#     newPlayer = await createPlayer(player)
#     return newPlayer
    
#  #   [{'id':1, 'name':'Alexis', 'lastName':'Silva','weight':69, 'category':'dan' , 'team': 'IAC' },{'id':2, 'name':'Gustavo', 'lastName':'Silva','weight':79, 'category':'dan','team': 'IAC'}]
