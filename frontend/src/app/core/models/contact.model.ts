/**
 * Contact form interface
 */
export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

/**
 * API Response for contact form submission
 */
export interface ContactResponse {
    success: boolean;
    message: string;
}
