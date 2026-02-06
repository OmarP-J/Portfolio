"""
Projects API router.
Handles all project-related endpoints.
"""
from typing import List
from fastapi import APIRouter, HTTPException, status

from app.schemas.project import (
    ProjectResponse,
    ProjectListResponse,
    ProjectDetailResponse,
)
from app.services.project_service import ProjectService

# Initialize router
router = APIRouter(
    prefix="/projects",
    tags=["Projects"],
    responses={404: {"description": "Not found"}},
)

# Initialize service (in production, this would be dependency-injected)
project_service = ProjectService()


@router.get(
    "",
    summary="Get all projects",
    description="Retrieve a list of all portfolio projects",
)
async def get_projects():
    """
    Retrieve all portfolio projects.
    
    Returns a list of all projects with their basic information.
    """
    projects = project_service.get_all_projects()
    
    return {
        "success": True,
        "data": [p.to_dict() for p in projects],
        "total": len(projects),
    }


@router.get(
    "/featured",
    response_model=ProjectListResponse,
    summary="Get featured projects",
    description="Retrieve only featured/highlighted projects",
)
async def get_featured_projects():
    """
    Retrieve featured projects.
    
    Returns only the projects marked as featured, typically shown on the homepage.
    """
    projects = project_service.get_featured_projects()
    return {
        "success": True,
        "data": [ProjectResponse(**p.to_dict()) for p in projects],
        "total": len(projects),
    }


@router.get(
    "/{project_id}",
    response_model=ProjectDetailResponse,
    summary="Get project details",
    description="Retrieve detailed information about a specific project",
    responses={
        200: {"description": "Project found"},
        404: {"description": "Project not found"},
    },
)
async def get_project_detail(project_id: str):
    """
    Retrieve detailed information about a specific project.
    
    Args:
        project_id: Unique project identifier
        
    Returns:
        Detailed project information
        
    Raises:
        HTTPException: 404 if project not found
    """
    project = project_service.get_project_by_id(project_id)
    
    if not project:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project with ID '{project_id}' not found",
        )
    
    return {
        "success": True,
        "data": ProjectResponse(**project.to_dict()),
    }
