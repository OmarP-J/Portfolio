"""
Health check router.
Provides API health status endpoints.
"""
from fastapi import APIRouter
from datetime import datetime

router = APIRouter(
    prefix="/health",
    tags=["Health"],
)


@router.get(
    "",
    summary="Health check",
    description="Check if the API is running",
)
async def health_check():
    """
    Simple health check endpoint.
    
    Returns the API status and current timestamp.
    Useful for monitoring and load balancers.
    """
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "service": "Portfolio API",
    }
