# from motor.motor_asyncio import AsyncIOMotorClient
# from models import Player
# client = AsyncIOMotorClient("mongodb://localhost:27017")
# db = client.contestDB

# collection = db.players

# async def getPlayer(id):
#     player = await collection.find_one({'id': id})
#     return player

# async def getAllPlayers():
#     players=[]
#     cursor = collection.find({})
#     async for doc in cursor:
#         players.append(Player(**doc))
#     return players


# async def createPlayer(player):
#     newPlayer = await collection.insert_one(player)
#     # createdPlayer = await collection.find_one({'_id':newPlayer.inserted_id})
#     return newPlayer.inserted_id

# async def createPlayers(players):
#     newPlayers = await collection.insert_many(players)
#     playercollection = []
#     for np in newPlayers.inserted_ids :
#         playerInstance = await collection. find_one({'id':np})
#         playercollection.append(playerInstance)
#     return playercollection