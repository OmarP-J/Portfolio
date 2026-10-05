/**
 * Enlaces de contacto.
 * Se usan en el footer y en la página de contacto, así se cambian en un solo lugar.
 */
export interface SocialLink {
    label: string;    // Nombre corto: "GitHub"
    handle: string;   // Lo que se muestra en Contacto: "github.com/OmarP-J"
    url: string;
    newTab: boolean;  // false para mailto:, que no debe abrir una pestaña vacía
}

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: 'Email',
        handle: 'j.omar.polanco.j@gmail.com',
        url: 'mailto:j.omar.polanco.j@gmail.com',
        newTab: false
    },
    {
        label: 'LinkedIn',
        handle: 'in/jarolyomarpolanco',
        url: 'https://www.linkedin.com/in/jarolyomarpolanco',
        newTab: true
    },
    {
        label: 'GitHub',
        handle: 'github.com/OmarP-J',
        url: 'https://github.com/OmarP-J',
        newTab: true
    },
    {
        label: 'WhatsApp',
        handle: '+1 829 922 5649',
        url: 'https://wa.me/18299225649',
        newTab: true
    }
];
