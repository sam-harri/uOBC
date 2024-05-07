import os
import sys
from pymongo import MongoClient
from pymongo.server_api import ServerApi
import dotenv

dotenv.load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = os.getenv("MONGO_DBNAME")

client = None


def init_db():
    global client
    client = MongoClient(MONGO_URI, server_api=ServerApi(version="1"))


def get_database():
    if client is None:
        raise RuntimeError("Database not initialized. call init_db() first.")
    return client[DATABASE_NAME]


def check_connection():
    if client is None:
        raise RuntimeError("Database not initialized. call init_db() first.")
    try:
        client.admin.command("ping")
        sys.stdout.write("Connection to MongoDB Succesful\n")
    except Exception as e:
        raise ConnectionError(f"Failed to connect to MongoDB : {str(e)}")
