from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import routes
from app.db import engine
from app.models import models

# Create DB tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API")

# CORS
origins = [
    "http://localhost:5173",
    "http://localhost:5174", # Added 5174 just in case
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Portfolio API. Visit /docs for Swagger UI."}
