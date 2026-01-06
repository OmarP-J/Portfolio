"""
Contact schemas for API request/response validation.
"""
from pydantic import BaseModel, Field, EmailStr


class ContactRequest(BaseModel):
    """Schema for contact form submission."""
    name: str = Field(..., min_length=2, max_length=100, description="Sender's name")
    email: EmailStr = Field(..., description="Sender's email address")
    subject: str = Field(..., min_length=3, max_length=200, description="Message subject")
    message: str = Field(..., min_length=10, max_length=2000, description="Message content")
    
    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john.doe@example.com",
                "subject": "Collaboration Opportunity",
                "message": "Hi, I'd like to discuss a potential project collaboration...",
            }
        }


class ContactResponse(BaseModel):
    """Schema for contact form response."""
    success: bool = True
    message: str = Field(..., description="Response message")
    
    class Config:
        json_schema_extra = {
            "example": {
                "success": True,
                "message": "Thank you for your message! I'll get back to you soon.",
            }
        }
