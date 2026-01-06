"""
Project domain models.
These represent the core business entities.
"""
from typing import List, Optional
from datetime import datetime


class Project:
    """
    Project domain model representing a portfolio project.
    """
    def __init__(
        self,
        id: str,
        name: str,
        description: str,
        long_description: str,
        technologies: List[str],
        repository_url: Optional[str] = None,
        live_url: Optional[str] = None,
        image_url: Optional[str] = None,
        featured: bool = False,
        created_at: Optional[datetime] = None,
    ):
        self.id = id
        self.name = name
        self.description = description
        self.long_description = long_description
        self.technologies = technologies
        self.repository_url = repository_url
        self.live_url = live_url
        self.image_url = image_url
        self.featured = featured
        self.created_at = created_at or datetime.now()
    
    def to_dict(self) -> dict:
        """Convert model to dictionary."""
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "long_description": self.long_description,
            "technologies": self.technologies,
            "repository_url": self.repository_url,
            "live_url": self.live_url,
            "image_url": self.image_url,
            "featured": self.featured,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }
