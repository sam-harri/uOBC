from pydantic import BaseModel
from typing import List


class Person(BaseModel):
    id: str
    email: str
    first_name: str
    last_name: str
    registration_time: int


class Class(BaseModel):
    id: str
    name: str
    time: int
    max_capacity: int
    registration: List[Person]
    waitlist: List[Person]
