"""
Contact domain models.
"""
from datetime import datetime


class ContactMessage:
    """
    Contact message domain model.
    """
    def __init__(
        self,
        name: str,
        email: str,
        subject: str,
        message: str,
        created_at: datetime = None,
    ):
        self.name = name
        self.email = email
        self.subject = subject
        self.message = message
        self.created_at = created_at or datetime.now()
    
    def to_dict(self) -> dict:
        """Convert model to dictionary."""
        return {
            "name": self.name,
            "email": self.email,
            "subject": self.subject,
            "message": self.message,
            "created_at": self.created_at.isoformat(),
        }
