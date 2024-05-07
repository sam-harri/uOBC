from fastapi.testclient import TestClient
from main import app
from database import get_database
from uuid import uuid4

client = TestClient(app)

# Global variable to store class_id
inserted_class_id = None


def setup_module():
    global inserted_class_id

    # Add a sample class to the database
    db = get_database()
    sample_class = {
        "_id": str(uuid4()),
        "name": "Sample Class",
        "description": "A test class",
        "max_capacity": 2,
        "registration": [],
        "waitlist": [],
    }
    db.classes.insert_one(sample_class)

    # Store inserted class ID
    inserted_class_id = sample_class["_id"]


def get_person_id(email, class_id):
    """Utility function to fetch person_id based on email and class_id."""
    db = get_database()
    target_class = db.classes.find_one({"_id": class_id})

    for person in target_class["registration"]:
        if person["email"] == email:
            return person[
                "_id"
            ]  # Assuming the registration entry has an '_id' field for the person
    return None


def test_successful_registration():
    response = client.post(
        "/register",
        json={
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@example.com",
            "class_id": inserted_class_id,
        },
    )
    assert response.status_code == 200
    assert response.json()["status"] == "registered"


def test_full_class_registration():
    client.post(
        "/register",
        json={
            "first_name": "Jane",
            "last_name": "Doe",
            "email": "jane@example.com",
            "class_id": inserted_class_id,
        },
    )
    response = client.post(
        "/register",
        json={
            "first_name": "Alice",
            "last_name": "Smith",
            "email": "alice@example.com",
            "class_id": inserted_class_id,
        },
    )
    assert response.status_code == 200
    assert response.json()["status"] == "waitlisted"


def test_duplicate_registration():
    response = client.post(
        "/register",
        json={
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@example.com",
            "class_id": inserted_class_id,
        },
    )
    assert response.status_code == 400
    assert "Already registered" in response.json()["detail"]


def test_successful_unregistration():
    person_id = get_person_id("john@example.com", inserted_class_id)
    response = client.get(f"/unregister/{inserted_class_id}/{person_id}")
    assert response.status_code == 200
    assert response.json()["status"] == "unregistered"


def test_move_from_waitlist():
    person_id = get_person_id("jane@example.com", inserted_class_id)
    response = client.get(f"/unregister/{inserted_class_id}/{person_id}")
    assert response.status_code == 200
    assert response.json()["status"] == "unregistered"

    # Check if Alice Smith was moved from waitlist to registration
    db = get_database()
    target_class = db.classes.find_one({"_id": inserted_class_id})
    assert any(
        person["email"] == "alice@example.com"
        for person in target_class["registration"]
    )
