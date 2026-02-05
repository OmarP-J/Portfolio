"""
Contact schemas for API request/response validation.
"""
from typing import Optional
from pydantic import BaseModel, Field, EmailStr


class ContactRequest(BaseModel):
    """Schema for contact form submission in Spanish."""
    nombre: str = Field(..., min_length=2, max_length=100, description="Nombre del remitente")
    correo: EmailStr = Field(..., description="Correo electrónico del remitente")
    asunto: str = Field(..., min_length=3, max_length=200, description="Asunto del mensaje")
    mensaje: str = Field(..., min_length=10, max_length=2000, description="Contenido del mensaje")
    
    class Config:
        json_schema_extra = {
            "example": {
                "nombre": "John Doe",
                "correo": "john.doe@example.com",
                "asunto": "Oportunidad de Colaboración",
                "mensaje": "Hola, me gustaría discutir una posible colaboración...",
            }
        }


class ContactResponse(BaseModel):
    """Schema for contact form response in Spanish."""
    success: bool
    error: Optional[str] = Field(None, description="Mensaje de error si falla")
    
    class Config:
        json_schema_extra = {
            "example": {
                "success": True,
                "error": None,
            }
        }
