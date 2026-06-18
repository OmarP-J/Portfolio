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
        # If Resend API Key is set, use Resend API (HTTP POST)
        if settings.RESEND_API_KEY:
            try:
                await asyncio.to_thread(self._execute_send_resend, nombre, correo, asunto, mensaje)
                return True
            except Exception as e:
                logger.error(f"Error sending email via Resend: {str(e)}")
                return False

        # Otherwise, fall back to SMTP
        if not settings.EMAIL_USER or not settings.EMAIL_PASSWORD or settings.EMAIL_PASSWORD == "your_app_password":
            logger.warning("Neither Resend API Key nor Email SMTP credentials are configured correctly. Skipping email.")
            return False

        try:
            # Run blocking SMTP in a separate thread
            await asyncio.to_thread(self._execute_send, nombre, correo, asunto, mensaje)
            return True
        except Exception as e:
            logger.error(f"Error sending email: {str(e)}")
            return False

    def _execute_send_resend(self, nombre: str, correo: str, asunto: str, mensaje: str):
        """
        Send email using Resend API (HTTP POST).
        """
        import json
        import urllib.request
        from urllib.error import HTTPError

        # HTML version with modern design
        html_body = f"""
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 40px 20px;">
                        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                            <!-- Header -->
                            <tr>
                                <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center;">
                                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                                        📬 Nuevo Mensaje de Contacto
                                    </h1>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            <tr>
                                <td style="padding: 40px 30px;">
                                    <p style="margin: 0 0 30px; color: #666; font-size: 15px; line-height: 1.6;">
                                        Has recibido un nuevo mensaje desde tu portfolio:
                                    </p>
                                    
                                    <!-- Info Card -->
                                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                                        <tr>
                                            <td style="padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                        <td style="padding: 8px 0;">
                                                            <span style="display: inline-block; width: 80px; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</span>
                                                            <span style="color: #1a1a1a; font-size: 15px; font-weight: 500;">{nombre}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 8px 0; border-top: 1px solid #e9ecef;">
                                                            <span style="display: inline-block; width: 80px; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Correo</span>
                                                            <a href="mailto:{correo}" style="color: #007bff; font-size: 15px; text-decoration: none;">{correo}</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 8px 0; border-top: 1px solid #e9ecef;">
                                                            <span style="display: inline-block; width: 80px; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Asunto</span>
                                                            <span style="color: #1a1a1a; font-size: 15px; font-weight: 500;">{asunto}</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <!-- Message -->
                                    <div style="margin-bottom: 30px;">
                                        <h3 style="margin: 0 0 15px; color: #1a1a1a; font-size: 16px; font-weight: 600;">Mensaje:</h3>
                                        <div style="padding: 20px; background-color: #f8f9fa; border-left: 4px solid #007bff; border-radius: 4px;">
                                            <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">{mensaje}</p>
                                        </div>
                                    </div>
                                    
                                    <!-- Action Button -->
                                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td align="center" style="padding-top: 10px;">
                                                <a href="mailto:{correo}?subject=Re: {asunto}" style="display: inline-block; padding: 14px 32px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 15px; font-weight: 600; transition: background-color 0.3s;">
                                                    Responder
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="padding: 30px; background-color: #f8f9fa; border-top: 1px solid #e9ecef; text-align: center;">
                                    <p style="margin: 0; color: #888; font-size: 13px; line-height: 1.6;">
                                        Este mensaje fue enviado desde el formulario de contacto de tu portfolio.<br>
                                        <strong style="color: #666;">Portfolio - Jaroly Omar Polanco</strong>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        """

        url = "https://api.resend.com/emails"
        headers = {
            "Authorization": f"Bearer {settings.RESEND_API_KEY}",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
        }
        payload = {
            "from": "Portfolio Contact <onboarding@resend.dev>",
            "to": settings.CONTACT_EMAIL_TO,
            "subject": f"Nuevo contacto: {asunto}",
            "html": html_body
        }

        print(f"📧 Enviando correo mediante la API de Resend a {settings.CONTACT_EMAIL_TO}...")
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(url, data=data, headers=headers, method="POST")
        
        try:
            with urllib.request.urlopen(req, timeout=15) as response:
                res_body = response.read().decode("utf-8")
                print(f"✅ Correo enviado exitosamente vía Resend: {res_body}")
        except HTTPError as e:
            err_body = e.read().decode("utf-8")
            print(f"❌ Error HTTP al llamar a Resend: {e.code} - {err_body}")
            raise e
        except Exception as e:
            print(f"❌ Error al enviar vía Resend: {str(e)}")
            raise e

    def _execute_send(self, nombre: str, correo: str, asunto: str, mensaje: str):
        """
        Blocking SMTP logic with professional HTML template.
        """
        msg = MIMEMultipart("alternative")
        msg["From"] = settings.EMAIL_USER
        msg["To"] = settings.CONTACT_EMAIL_TO
        msg["Subject"] = f"Nuevo contacto: {asunto}"

        # Plain text version (fallback)
        text_body = f"""
        Has recibido un nuevo mensaje de contacto:
        
        Nombre: {nombre}
        Correo: {correo}
        Asunto: {asunto}
        
        Mensaje:
        {mensaje}
        """

        # HTML version with modern design
        html_body = f"""
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 40px 20px;">
                        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                            <!-- Header -->
                            <tr>
                                <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center;">
                                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                                        📬 Nuevo Mensaje de Contacto
                                    </h1>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            <tr>
                                <td style="padding: 40px 30px;">
                                    <p style="margin: 0 0 30px; color: #666; font-size: 15px; line-height: 1.6;">
                                        Has recibido un nuevo mensaje desde tu portfolio:
                                    </p>
                                    
                                    <!-- Info Card -->
                                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                                        <tr>
                                            <td style="padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                    <tr>
                                                        <td style="padding: 8px 0;">
                                                            <span style="display: inline-block; width: 80px; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</span>
                                                            <span style="color: #1a1a1a; font-size: 15px; font-weight: 500;">{nombre}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 8px 0; border-top: 1px solid #e9ecef;">
                                                            <span style="display: inline-block; width: 80px; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Correo</span>
                                                            <a href="mailto:{correo}" style="color: #007bff; font-size: 15px; text-decoration: none;">{correo}</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 8px 0; border-top: 1px solid #e9ecef;">
                                                            <span style="display: inline-block; width: 80px; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Asunto</span>
                                                            <span style="color: #1a1a1a; font-size: 15px; font-weight: 500;">{asunto}</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <!-- Message -->
                                    <div style="margin-bottom: 30px;">
                                        <h3 style="margin: 0 0 15px; color: #1a1a1a; font-size: 16px; font-weight: 600;">Mensaje:</h3>
                                        <div style="padding: 20px; background-color: #f8f9fa; border-left: 4px solid #007bff; border-radius: 4px;">
                                            <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">{mensaje}</p>
                                        </div>
                                    </div>
                                    
                                    <!-- Action Button -->
                                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td align="center" style="padding-top: 10px;">
                                                <a href="mailto:{correo}?subject=Re: {asunto}" style="display: inline-block; padding: 14px 32px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 15px; font-weight: 600; transition: background-color 0.3s;">
                                                    Responder
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="padding: 30px; background-color: #f8f9fa; border-top: 1px solid #e9ecef; text-align: center;">
                                    <p style="margin: 0; color: #888; font-size: 13px; line-height: 1.6;">
                                        Este mensaje fue enviado desde el formulario de contacto de tu portfolio.<br>
                                        <strong style="color: #666;">Portfolio - Jaroly Omar Polanco</strong>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        """

        # Attach both versions
        part1 = MIMEText(text_body, "plain")
        part2 = MIMEText(html_body, "html")
        msg.attach(part1)
        msg.attach(part2)

        print(f"📧 Iniciando conexión SMTP con {settings.EMAIL_HOST}:{settings.EMAIL_PORT}...")
        try:
            if settings.EMAIL_PORT == 465:
                # Use SSL for port 465
                context = __import__('ssl').create_default_context()
                with smtplib.SMTP_SSL(settings.EMAIL_HOST, settings.EMAIL_PORT, timeout=15, context=context) as server:
                    print("🔐 Conexión SSL establecida. Autenticando...")
                    server.login(settings.EMAIL_USER, settings.EMAIL_PASSWORD)
                    print("🔑 Autenticación exitosa. Enviando correo...")
                    server.send_message(msg)
                    print("✅ Correo enviado correctamente.")
            else:
                # Use STARTTLS for 587 or others
                with smtplib.SMTP(settings.EMAIL_HOST, settings.EMAIL_PORT, timeout=15) as server:
                    print("📡 Conexión establecida. Iniciando STARTTLS...")
                    server.starttls()
                    print("🔐 TLS iniciado. Autenticando...")
                    server.login(settings.EMAIL_USER, settings.EMAIL_PASSWORD)
                    print("🔑 Autenticación exitosa. Enviando correo...")
                    server.send_message(msg)
                    print("✅ Correo enviado correctamente.")
        except Exception as e:
            print(f"❌ Error en _execute_send: {str(e)}")
            raise e
