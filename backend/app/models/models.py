from sqlalchemy import Column, Integer, String, Text, JSON
from app.db import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    image_url = Column(String)
    tags = Column(JSON)  # Store tags as a JSON list
    live_url = Column(String, nullable=True)
    repo_url = Column(String, nullable=True)

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    subject = Column(String)
    message = Column(Text)
