from fastapi import APIRouter, HTTPException, Depends
from models import Class
from database import get_database
from pymongo.database import Database
from pymongo.errors import PyMongoError
import time
from typing import List


query_router = APIRouter()

"""
from pydantic import BaseModel
from typing import List

class Person(BaseModel):
    id: str
    email: str
    first_name: str
    last_name: str
    registration_time: int

class Class(BaseModel):
    id : str
    name: str
    time : int
    max_capacity: int
    registration: List[Person]
    waitlist: List[Person]
"""


@query_router.get("/getclasses", response_model=List[Class])
async def get_classes(db: Database = Depends(get_database)):
    try:
        # Current time in seconds since epoch
        current_time = int(time.time())
        # Time in two weeks (14 days) in seconds since epoch
        two_weeks_time = current_time + 86400 * 14

        classes = db["classes"].find(
            {
                "time": {
                    "$gt": current_time,  # greater than current time
                    "$lt": two_weeks_time,  # less than time in two weeks
                }
            }
        )

        return classes

    except PyMongoError as e:
        # Log the exception details here if you have a logging setup
        # Handle any database-related errors
        raise HTTPException(status_code=500, detail="A database error occurred.") from e

    except Exception as e:
        # Log the exception details here if you have a logging setup
        # Handle unexpected errors
        raise HTTPException(
            status_code=500, detail="An unexpected error occurred."
        ) from e
