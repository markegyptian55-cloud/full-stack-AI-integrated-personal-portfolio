from pydantic import BaseModel, EmailStr
from typing import Optional

class ContactRequest(BaseModel):
    full_name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str

class ChatRequest(BaseModel):
    message: str
