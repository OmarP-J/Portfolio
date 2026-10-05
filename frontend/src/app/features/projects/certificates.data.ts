/**
 * Certificados que se muestran en la pestaña "Certificados".
 * name es una clave de traducción (PROJECTS.CERTS.*).
 */
import { Certificate } from '@core/models/certificate.model';

export const CERTIFICATES: Certificate[] = [
    {
        id: '1',
        name: 'PROJECTS.CERTS.INFOTEP_WEB',
        issuer: 'INFOTEP',
        date: '2022-09',
        credential_id: '18',
        url: 'https://www.infotep.gob.do',
        image_url: 'assets/certificates/infotep_web.jpg'
    },
    {
        id: '2',
        name: 'PROJECTS.CERTS.INFOTEP_OFFICE',
        issuer: 'INFOTEP',
        date: '2022-08',
        credential_id: '17',
        url: 'https://www.infotep.gob.do',
        image_url: 'assets/certificates/infotep_oficina.jpg'
    },
    {
        id: '3',
        name: 'PROJECTS.CERTS.FCC_RESPONSIVE',
        issuer: 'freeCodeCamp',
        date: '2023-02',
        credential_id: 'responsive-web-design',
        url: 'https://freecodecamp.org/certification/fcceac0e569-a6e0-4a35-bc06-dc17187af095/responsive-web-design',
        image_url: 'assets/certificates/fcc_responsive.jpg'
    },
    {
        id: '4',
        name: 'PROJECTS.CERTS.FCC_JS',
        issuer: 'freeCodeCamp',
        date: '2023-02',
        credential_id: 'javascript-algorithms-and-data-structures',
        url: 'https://freecodecamp.org/certification/fcceac0e569-a6e0-4a35-bc06-dc17187af095/javascript-algorithms-and-data-structures',
        image_url: 'assets/certificates/fcc_js_algorithms.jpg'
    },
    {
        id: '5',
        name: 'PROJECTS.CERTS.FCC_ENGLISH',
        issuer: 'freeCodeCamp',
        date: '2025-12',
        credential_id: 'a2-english-for-developers',
        url: 'https://freecodecamp.org/certification/fcceac0e569-a6e0-4a35-bc06-dc17187af095/a2-english-for-developers',
        image_url: 'assets/certificates/fcc_english.jpg'
    },
    {
        id: '6',
        name: 'PROJECTS.CERTS.SLIM_PARADIGM',
        issuer: 'Capacítate para el empleo / Fundación Carlos Slim',
        date: '2023-05',
        credential_id: '1C7C7F65-EB0D-44E9-B707-8E5797825DFE',
        url: 'https://capacitateparaelempleo.org/verifica/0c148a1d-4770-4ee4-ba4d-2c5cbe9d49c1/1c7c7f65-eb0d-44e9-b707-8e5797825dfe',
        image_url: 'assets/certificates/slim_paradigma.jpg'
    },
    {
        id: '7',
        name: 'PROJECTS.CERTS.SLIM_IMAGE',
        issuer: 'Capacítate para el empleo / Fundación Carlos Slim',
        date: '2023-11',
        credential_id: '7AFF148A-0B77-4D78-BCC5-060A56C5882C',
        url: 'https://capacitateparaelempleo.org/verifica/0c148a1d-4770-4ee4-ba4d-2c5cbe9d49c1/7aff148a-0b77-4d78-bcc5-060a56c5882c',
        image_url: 'assets/certificates/slim_gestor.jpg'
    },
    {
        id: '8',
        name: 'PROJECTS.CERTS.SLIM_ASSISTANT',
        issuer: 'Capacítate para el empleo / Fundación Carlos Slim',
        date: '2023-12',
        credential_id: '11C02F37-F2BF-4E81-B7F5-2C8EE7C742E6',
        url: 'https://capacitateparaelempleo.org/verifica/0c148a1d-4770-4ee4-ba4d-2c5cbe9d49c1/11c02f37-f2bf-4e81-b7f5-2c8ee7c742e6',
        image_url: 'assets/certificates/slim_asistente.jpg'
    },
    {
        id: '9',
        name: 'PROJECTS.CERTS.SLIM_OOP',
        issuer: 'Capacítate para el empleo / Fundación Carlos Slim',
        date: '2023-07',
        credential_id: '66D6182D-040D-456D-826E-BD67384721D1',
        url: 'https://capacitateparaelempleo.org/verifica/0c148a1d-4770-4ee4-ba4d-2c5cbe9d49c1/66d6182d-040d-456d-826e-bd67384721d1',
        image_url: 'assets/certificates/slim_programador.jpg'
    },
    {
        id: '10',
        name: 'PROJECTS.CERTS.SLIM_RESPONSIVE',
        issuer: 'Capacítate para el empleo / Fundación Carlos Slim',
        date: '2023-11',
        credential_id: 'C605B76D-2865-45FD-A56C-9D502DCAEAAB',
        url: 'https://capacitateparaelempleo.org/verifica/0c148a1d-4770-4ee4-ba4d-2c5cbe9d49c1/c605b76d-2865-45fd-a56c-9d502dcaeaab',
        image_url: 'assets/certificates/slim_responsivos.jpg'
    },
    {
        id: '11',
        name: 'PROJECTS.CERTS.UDEMY_MYSQL',
        issuer: 'Udemy',
        date: '2025-12',
        credential_id: 'UC-3e9d9c94-31e5-4bda-8979-462346da98e4',
        url: 'https://ude.my/UC-3e9d9c94-31e5-4bda-8979-462346da98e4',
        image_url: 'assets/certificates/udemy_mysql.jpg'
    },
    {
        id: '12',
        name: 'PROJECTS.CERTS.UDEMY_FULLSTACK',
        issuer: 'Udemy',
        date: '2025-12',
        credential_id: 'UC-4a22497f-3147-4a55-baec-49d2679d29ed',
        url: 'https://ude.my/UC-4a22497f-3147-4a55-baec-49d2679d29ed',
        image_url: 'assets/certificates/udemy_fullstack.jpg'
    },
    {
        id: '13',
        name: 'PROJECTS.CERTS.UDEMY_DEVOPS',
        issuer: 'Udemy',
        date: '2025-12',
        credential_id: 'UC-7e2a6fc7-2e4a-48da-bff2-0a34cba4d54f',
        url: 'https://ude.my/UC-7e2a6fc7-2e4a-48da-bff2-0a34cba4d54f',
        image_url: 'assets/certificates/udemy_devops.jpg'
    },
    {
        id: '14',
        name: 'PROJECTS.CERTS.UDEMY_PYTHON',
        issuer: 'Udemy',
        date: '2025-12',
        credential_id: 'UC-445f2d8d-9427-4d39-9ed3-dc4d0e43999c',
        url: 'https://ude.my/UC-445f2d8d-9427-4d39-9ed3-dc4d0e43999c',
        image_url: 'assets/certificates/udemy_python.jpg'
    },
    {
        id: '15',
        name: 'PROJECTS.CERTS.UDEMY_JARVIS',
        issuer: 'Udemy',
        date: '2025-12',
        credential_id: 'UC-a4aa15b6-4866-46c4-9c32-2e5fa4b9e5f0',
        url: 'https://ude.my/UC-a4aa15b6-4866-46c4-9c32-2e5fa4b9e5f0',
        image_url: 'assets/certificates/udemy_jarvis.jpg'
    }
];
