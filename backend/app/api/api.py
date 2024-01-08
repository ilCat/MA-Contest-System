import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .enpoints import users
from db.db import engine ,Base


def create_tables():
    return Base.metadata.create_all(bind=engine)

create_tables()

app = FastAPI()
app.include_router(users.router)
origins = [
    'http://localhost',
    'localhost'
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

