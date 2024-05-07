from pymongo import MongoClient
from random import randint
import time
import uuid


# Establish a connection to the MongoDB server
client = MongoClient(
    "mongodb+srv://sharr125:c4PnNOYinNFH93wO@uobc.grtza8m.mongodb.net/?retryWrites=true&w=majority"
)

# Select your database
db = client["uOBC"]

# Select your collection
classes_collection = db["classes"]

classes = [
    {
        "id": str(uuid.uuid4()),
        "name": "Mock Class 1",
        "time": int(time.time()) - 10000,
        "max_capacity": randint(10, 30),
        "registration": [],
        "waitlist": [],
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Mock Class 2",
        "time": int(time.time()) + 5000,
        "max_capacity": randint(10, 30),
        "registration": [],
        "waitlist": [],
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Mock Class 3",
        "time": int(time.time()) + (86400 * 7),
        "max_capacity": randint(10, 30),
        "registration": [],
        "waitlist": [],
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Mock Class 4",
        "time": int(time.time()) + (86400 * 12),
        "max_capacity": randint(10, 30),
        "registration": [],
        "waitlist": [],
    },
    {
        "id": str(uuid.uuid4()),
        "name": "Mock Class 5",
        "time": int(time.time()) + (86400 * 15),
        "max_capacity": randint(10, 30),
        "registration": [],
        "waitlist": [],
    },
]

result = classes_collection.insert_many(classes)
