from pydantic import BaseModel


class RegistrationInput(BaseModel):
    first_name: str
    last_name: str
    email: str
    class_id: str
