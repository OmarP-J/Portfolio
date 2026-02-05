"""
Email service module.
Handles sending emails via SMTP.
"""
import logging
import asyncio
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.core.config import settings

logger = logging.getLogger(__name__)

class EmailService:
    """
    Service to handle email operations.
    """
    
    async def send_contact_email(self, nombre: str, correo: str, asunto: str, mensaje: str) -> bool:
        """
        Send a contact email asynchronously.
        """
        if not settings.EMAIL_USER or not settings.EMAIL_PASSWORD or settings.EMAIL_PASSWORD == "your_app_password":
            logger.warning("Email credentials not configured correctly. Skipping email.")
            return False

        try:
            # Run blocking SMTP in a separate thread
            await asyncio.to_thread(self._execute_send, nombre, correo, asunto, mensaje)
            return True
        except Exception as e:
            logger.error(f"Error sending email: {str(e)}")
            return False

    def _execute_send(self, nombre: str, correo: str, asunto: str, mensaje: str):
        """
        Blocking SMTP logic.
        """
        msg = MIMEMultipart()
        msg["From"] = settings.EMAIL_USER
        msg["To"] = settings.CONTACT_EMAIL_TO
        msg["Subject"] = f"Nuevo contacto: {asunto}"

        body = f"""
        Has recibido un nuevo mensaje de contacto:
        
        Nombre: {nombre}
        Correo: {correo}
        Asunto: {asunto}
        
        Mensaje:
        {mensaje}
        """
        msg.attach(MIMEText(body, "plain"))

        print(f"📧 Iniciando conexión SMTP con {settings.EMAIL_HOST}:{settings.EMAIL_PORT}...")
        with smtplib.SMTP(settings.EMAIL_HOST, settings.EMAIL_PORT, timeout=10) as server:
            server.starttls()
            print("🔐 TLS iniciado. Autenticando...")
            server.login(settings.EMAIL_USER, settings.EMAIL_PASSWORD)
            print("🔑 Autenticación exitosa. Enviando correo...")
            server.send_message(msg)
            print("✅ Correo enviado correctamente.")
