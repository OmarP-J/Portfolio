"""
Project schemas for API request/response validation.
Using Pydantic for data validation and serialization.
"""
from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel, Field, HttpUrl


class ProjectBase(BaseModel):
    """Base schema for project data."""
    name: str = Field(..., min_length=1, max_length=200, description="Project name")
    description: str = Field(..., min_length=1, max_length=500, description="Short project description")
    long_description: str = Field(..., min_length=1, description="Detailed project description")
    technologies: List[str] = Field(..., min_items=1, description="List of technologies used")
    repository_url: Optional[str] = Field(None, description="GitHub repository URL")
    live_url: Optional[str] = Field(None, description="Live demo URL")
    image_url: Optional[str] = Field(None, description="Project image URL")
    gallery_images: List[str] = Field(default_factory=list, description="List of gallery image URLs")
    featured: bool = Field(False, description="Whether project is featured")


class ProjectCreate(ProjectBase):
    """Schema for creating a new project."""
    pass


class ProjectUpdate(BaseModel):
    """Schema for updating a project (all fields optional)."""
    name: Optional[str] = Field(None, min_length=1, max_length=200)
    description: Optional[str] = Field(None, min_length=1, max_length=500)
    long_description: Optional[str] = Field(None, min_length=1)
    technologies: Optional[List[str]] = Field(None, min_items=1)
    repository_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    featured: Optional[bool] = None


class ProjectResponse(ProjectBase):
    """Schema for project response."""
    id: str = Field(..., description="Project unique identifier")
    created_at: datetime = Field(..., description="Project creation timestamp")
    
    class Config:
        from_attributes = True


class ProjectListResponse(BaseModel):
    """Schema for listing projects."""
    success: bool = True
    data: List[ProjectResponse]
    total: int = Field(..., description="Total number of projects")


class ProjectDetailResponse(BaseModel):
    """Schema for single project detail."""
    success: bool = True
    data: ProjectResponse
