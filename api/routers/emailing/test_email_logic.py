import smtplib
from email.message import EmailMessage
import os
import dotenv

dotenv.load_dotenv()

EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")


def send_registration_email(email: str, name: str, class_id: str, id: str) -> None:
    msg = EmailMessage()
    msg["Subject"] = "Registration Confirmation"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = email

    html_file_path = "routers/emailing/v2.html"
    with open(html_file_path, "r", encoding="utf-8") as file:
        html_content = file.read()

    unregister_link = f"http://localhost:3000/unregister?class_id={class_id}&id={id}"

    personalized_html_content = html_content.replace(
        "{UNREGISTER_LINK}", unregister_link
    )
    personalized_html_content = personalized_html_content.replace("{NAME}", name)

    msg.add_alternative(personalized_html_content, subtype="html")

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)
    return