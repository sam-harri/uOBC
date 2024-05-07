from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import registration_router, query_router

from database.database import init_db, check_connection

init_db()
check_connection()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(registration_router, prefix="")
app.include_router(query_router, prefix="")


@app.get(path="/ping")
def ping():
    return {"status": "active"}


# uvicorn main:app --host 0.0.0.0 --port 5001 --reload &
# http://192.168.0.122:5001/
