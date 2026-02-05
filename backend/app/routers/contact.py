"""
Contact API router.
Handles contact form submissions.
"""
from fastapi import APIRouter, HTTPException, status

from app.schemas.contact import ContactRequest, ContactResponse
from app.services.contact_service import ContactService

# Initialize router
router = APIRouter(
    prefix="/contact",
    tags=["Contact"],
)

# Initialize service
contact_service = ContactService()


@router.post(
    "",
    response_model=ContactResponse,
    status_code=status.HTTP_200_OK,
    summary="Submit contact form",
    description="Process a contact form submission",
    responses={
        200: {"description": "Message sent successfully"},
        422: {"description": "Validation error"},
        500: {"description": "Internal server error"},
    },
)
async def submit_contact_form(contact_data: ContactRequest):
    """
    Process a contact form submission.
    
    Validates the contact information and processes the message.
    In production, this would send an email notification and store the message.
    
    Args:
        contact_data: Contact form data (name, email, subject, message)
        
    Returns:
        Success confirmation message
        
    Raises:
        HTTPException: 500 if message processing fails
    """
    success = await contact_service.process_contact_message(contact_data.model_dump())
    
    if not success:
        return ContactResponse(
            success=False,
            error="No se pudo procesar el mensaje de contacto. Por favor, inténtelo de nuevo más tarde."
        )
    
    return ContactResponse(
        success=True,
        error=None
    )
