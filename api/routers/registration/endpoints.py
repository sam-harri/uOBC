from uuid import uuid4
from fastapi import APIRouter, HTTPException, Depends
from models import RegistrationInput
from database import get_database
from pymongo.database import Database
from routers.emailing.test_email_logic import send_registration_email
import time

registration_router = APIRouter()


@registration_router.post("/register")
async def register_for_class(
    data: RegistrationInput, db: Database = Depends(get_database)
):
    # Fetch the class based on class_id
    target_class = db.classes.find_one({"id": data.class_id})

    # Check if the class exists
    if not target_class:
        raise HTTPException(status_code=404, detail="Class not found")

    # Check if the user is already registered or waitlisted
    for person in target_class["registration"]:
        if person["email"] == data.email:
            raise HTTPException(
                status_code=400, detail="Already registered for this class"
            )
    for person in target_class["waitlist"]:
        if person["email"] == data.email:
            raise HTTPException(
                status_code=400, detail="Already on the waitlist for this class"
            )
    id = str(uuid4())
    # Create the new person
    new_person = {
        "id": id,
        "first_name": data.first_name,
        "last_name": data.last_name,
        "email": data.email,
        "registration_time": int(time.time()),  # UNIX timestamp
    }

    # Check if the class has space
    if len(target_class["registration"]) < target_class["max_capacity"]:
        # Add the person to the registration list
        db.classes.update_one(
            {"id": data.class_id}, {"$push": {"registration": new_person}}
        )
        send_registration_email(
            email=data.email, name=data.first_name, class_id=data.class_id, id=id
        )
        return {
            "status": "registered",
            "message": "Successfully registered for the class",
        }
    else:
        # Add the person to the waitlist
        db.classes.update_one(
            {"id": data.class_id}, {"$push": {"waitlist": new_person}}
        )
        return {
            "status": "waitlisted",
            "message": "Successfully waitlisted for the class",
        }


@registration_router.get("/unregister/{class_id}/{person_id}")
async def unregister_from_class(
    class_id: str, person_id: str, db: Database = Depends(get_database)
):
    target_class = db.classes.find_one({"id": class_id})

    if not target_class:
        raise HTTPException(status_code=404, detail="Class not found")

    # Check if the person is in the registration list using their _id
    is_registered = False
    for person in target_class["registration"]:
        if person["id"] == person_id:
            is_registered = True
            break

    if is_registered:
        # Remove the person from the registration list
        db.classes.update_one(
            {"id": class_id}, {"$pull": {"registration": {"id": person_id}}}
        )

        # If there's a waitlist, move the first person from the waitlist to the registration list
        if target_class["waitlist"]:
            moved_person = target_class["waitlist"][0]
            db.classes.update_one(
                {"id": class_id},
                {
                    "$push": {"registration": moved_person},
                    "$pull": {"waitlist": {"id": moved_person["id"]}},
                },
            )
            # TODO: Send a notification/email to the moved person about their registration
        return {
            "status": "unregistered",
            "message": "Successfully unregistered from the class",
        }
    else:
        # Check if the person is in the waitlist
        is_waitlisted = False
        for person in target_class["waitlist"]:
            if person["id"] == person_id:
                is_waitlisted = True
                break
        if is_waitlisted:
            # Remove the person from the waitlist
            db.classes.update_one(
                {"id": class_id}, {"$pull": {"waitlist": {"id": person_id}}}
            )
            return {
                "status": "removed_from_waitlist",
                "message": "Successfully removed from the class waitlist",
            }
        else:
            return {
                "status": "already_removed_from_class",
                "message": "You have already unregistered from this class",
            }
