import os
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from .endpoints import users
from .endpoints import players
from .endpoints import login
from db.db import engine
from db import models as model
from typing import Annotated
from sqlalchemy.orm import Session


app = FastAPI()

model.Base.metadata.create_all(bind=engine)

# create_tables()

app.include_router(users.router)
app.include_router(players.router)
app.include_router(login.router)

origins = ["http://localhost", "localhost"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# db_dependency = Annotated[Session, Depends(get_db)]

# @app.get("/")
# async def root():
#     return {"message": "Hello World"}
