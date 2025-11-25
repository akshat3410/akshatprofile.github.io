from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app import schemas
from app.models import models
from app.db import get_db

router = APIRouter()

# Projects
@router.get("/projects", response_model=List[schemas.Project])
def get_projects(db: Session = Depends(get_db)):
    projects = db.query(models.Project).all()
    # Seed data if empty (for demo purposes)
    if not projects:
        demo_project = models.Project(
            title="Portfolio V1",
            description="My first portfolio site built with HTML/CSS.",
            image_url="/assets/project1.jpg",
            tags=["HTML", "CSS", "JavaScript"],
            live_url="https://example.com",
            repo_url="https://github.com/example/repo"
        )
        db.add(demo_project)
        db.commit()
        db.refresh(demo_project)
        return [demo_project]
    return projects

@router.get("/projects/{project_id}", response_model=schemas.Project)
def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(models.Project).filter(models.Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

# Contact
@router.post("/contact", response_model=schemas.Contact)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    # 1. Save to DB
    db_contact = models.Contact(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    
    # 2. Send Email (Mock)
    # In production, use aiosmtplib or FastAPI-Mail here
    print(f"--------------------------------------------------")
    print(f"NEW MESSAGE FROM: {contact.name} <{contact.email}>")
    print(f"SUBJECT: {contact.subject}")
    print(f"MESSAGE: {contact.message}")
    print(f"--------------------------------------------------")
    
    return db_contact
