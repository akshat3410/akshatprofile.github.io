from pydantic import BaseModel, EmailStr
from typing import List, Optional

# Contact Schemas
class ContactBase(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: int
    
    class Config:
        from_attributes = True

# Project Schemas
class ProjectBase(BaseModel):
    title: str
    description: str
    image_url: str
    tags: List[str]
    live_url: Optional[str] = None
    repo_url: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int

    class Config:
        from_attributes = True
