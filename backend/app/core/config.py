"""
Core configuration module.
Manages all application settings using Pydantic Settings.
"""
from typing import List
from pydantic_settings import BaseSettings
from pydantic import field_validator


class Settings(BaseSettings):
    """
    Application settings loaded from environment variables.
    """
    # API Configuration
    API_TITLE: str = "Portfolio API"
    API_VERSION: str = "1.0.0"
    API_DESCRIPTION: str = "Professional Portfolio Backend API"
    
    # Server Configuration
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    DEBUG: bool = True
    
    # CORS Configuration
    CORS_ORIGINS: str = "http://localhost:4200,http://localhost:8000"
    
    # Email Configuration
    EMAIL_HOST: str = "smtp.gmail.com"
    EMAIL_PORT: int = 587
    EMAIL_USER: str = ""
    EMAIL_PASSWORD: str = ""
    CONTACT_EMAIL_TO: str = "j.omar.polanco.j@gmail.com"
    
    @field_validator("CORS_ORIGINS")
    @classmethod
    def parse_cors_origins(cls, v: str) -> List[str]:
        """Parse CORS origins from comma-separated string."""
        return [origin.strip() for origin in v.split(",")]
    
    class Config:
        env_file = ".env"
        case_sensitive = True


# Global settings instance
settings = Settings()
