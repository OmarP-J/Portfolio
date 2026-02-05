"""
Contact business logic service.
Handles contact form submissions and email notifications.
"""
import logging
import asyncio
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional

from app.models.contact import ContactMessage
from app.core.config import settings

from app.services.email_service import EmailService

# Configure logging
logger = logging.getLogger(__name__)


class ContactService:
    """
    Service layer for contact form operations.
    """
    def __init__(self):
        self.email_service = EmailService()
    
    async def process_contact_message(self, contact_data: dict) -> bool:
        """
        Process a contact form submission.
        
        Args:
            contact_data: Dictionary with contact form data (Spanish fields)
            
        Returns:
            True if successful, False otherwise
        """
        try:
            # Log the receipt
            logger.info(f"Mensaje de contacto recibido de {contact_data.get('nombre')} ({contact_data.get('correo')})")
            
            # Send email via the specialized service
            # We don't await it here if we want background sending, 
            # but user requirements imply checking success.
            # However, for production "non-blocking" usually means create_task.
            # BUT the user also wants to return success: false if it fails.
            # To balance this: we can await it for now to ensure feedback,
            # or use a background task and assume success if validation passes.
            # Let's await it to fulfill "Manejar errores correctamente" requirement.
            
            success = await self.email_service.send_contact_email(
                nombre=contact_data["nombre"],
                correo=contact_data["correo"],
                asunto=contact_data["asunto"],
                mensaje=contact_data["mensaje"]
            )
            
            return success
            
        except Exception as e:
            logger.error(f"Error procesando mensaje de contacto: {str(e)}")
            return False
