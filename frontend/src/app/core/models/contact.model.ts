/**
 * Contact form interface
 */
export interface ContactForm {
    nombre: string;
    correo: string;
    asunto: string;
    mensaje: string;
}

/**
 * API Response for contact form submission
 */
export interface ContactResponse {
    success: boolean;
    error?: string;
}
