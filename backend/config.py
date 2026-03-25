import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()

class Settings:
    # Project Info
    PROJECT_NAME: str = "Mohamed Portfolio API"
    PROJECT_VERSION: str = "1.0.0"

    # Infrastructure
    PORT: int = int(os.getenv("PORT", 8000))
    HOST: str = os.getenv("HOST", "0.0.0.0")
    DEBUG: bool = os.getenv("DEBUG", "True").lower() == "true"

    # Security
    SECRET_KEY: str = os.getenv("SECRET_KEY", "super-secret-key")
    ALLOWED_ORIGINS: list = os.getenv("ALLOWED_ORIGINS", "*").split(",")

    # External APIs
    GOOGLE_API_KEY: str = os.getenv("GOOGLE_API_KEY")

    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./portfolio.db")

settings = Settings()
