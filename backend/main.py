from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def home():
    return {'Welcome':'It is my home'}

@app.get('/api/getPlayers')
async def getPlayers():
    return [{'id':1, 'name':'Alexis', 'lastName':'Silva','weight':69, 'category':'dan'},{'id':2, 'name':'Gustavo', 'lastName':'Silva','weight':79, 'category':'dan'}]
