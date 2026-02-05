/**
 * Certificate interface representing a professional certification
 */
export interface Certificate {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credential_id?: string;
    url?: string;
    image_url?: string;
}
