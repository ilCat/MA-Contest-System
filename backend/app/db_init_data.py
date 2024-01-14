from api.endpoints import users
from db.db import get_db
from fastapi import Depends
from sqlalchemy.orm import Session
from typing import Annotated
import asyncio
from api.schemas import User, SecurityGroup


# db_dependency = Annotated[Session, Depends(get_db)]


sg1 = SecurityGroup(
    id=0, name="Admin", description="Administrator, Score Loader, referee"
)
sg2 = SecurityGroup(id=0, name="Team Owner", description="Team director, professor")
# security_groups: list[SecurityGroup] = [sg1, sg2]


async def mainSG():
    db_dependency = Annotated[Session, Depends(get_db)]

    sg1 = SecurityGroup(
        id=0, name="Admin", description="Administrator, Score Loader, referee"
    )
    sg1.name = "Admin"
    sg1.description = "Administrator, Score Loader, referee"

    # for sg in security_groups:
    result = await users.createSecurityGroup(SecurityGroup=sg1, db=db_dependency)
    print("createSecuryGroup from script ", result)

    print("Security groups ready")


if __name__ == "__main__":
    asyncio.run(mainSG())
