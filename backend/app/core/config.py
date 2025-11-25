from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Portfolio API"
    API_V1_STR: str = "/api"
    DATABASE_URL: str = "sqlite:///./portfolio.db"
    
    # Email Settings (Mock for now, can be replaced with real SMTP)
    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = "your-email@gmail.com"
    SMTP_PASSWORD: str = "your-app-password"
    
    class Config:
        env_file = ".env"

settings = Settings()
