/**
 * Translation Service
 * Manages language state and translations
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'es';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private currentLang = new BehaviorSubject<Language>('en');
    public currentLang$ = this.currentLang.asObservable();

    private translations: any = {
        en: {
            NAV: {
                ABOUT: 'About',
                PROJECTS: 'Projects',
                APPROACH: 'Approach',
                CONTACT: 'Contact',
                MENU: 'Menu',
                CLOSE: 'Close',
                SWITCH_LANG: 'Cambiar a español',
                SWITCH_THEME: 'Switch light / dark theme'
            },
            HOME: {
                AVAILABLE: 'Open to on-site roles · Santo Domingo',
                TAGLINE: 'Builds web apps end to end.',
                INTRO: 'Full-stack developer. I mostly work with Angular on the front end and Spring Boot or FastAPI on the back end.',
                VIEW_WORK: 'See projects',
                CONTACT: 'Get in touch',
                STATS: {
                    PROJECTS: 'Projects',
                    CERTIFICATES: 'Certificates',
                    SINCE: 'Coding since'
                },
                SERVICES_TITLE: 'What I do',
                SERVICES: {
                    FRONTEND: 'Front end',
                    FRONTEND_DESC: 'Interfaces that work on phones, tablets and laptops.',
                    BACKEND: 'Back end',
                    BACKEND_DESC: 'The business logic and the APIs the front end talks to.',
                    APIS: 'APIs & security',
                    APIS_DESC: 'REST APIs with login, roles and input validation.',
                    DATABASES: 'Databases',
                    DATABASES_DESC: 'Data models and queries that hold up as the data grows.'
                },
                SELECTED: 'Selected projects',
                ALL_PROJECTS: 'All projects'
            },
            ABOUT: {
                EYEBROW: 'About',
                TITLE: 'About me',
                SUBTITLE: 'Full-stack developer based in Santo Domingo, Dominican Republic.',
                PROFILE_TITLE: 'Profile',
                PROFILE_DESC: "I'm a full-stack developer. I build complete web applications: the REST API, the database and the interface people actually use.",
                PROFILE_DESC_2: 'I like code that someone else can open and understand, and I prefer simple solutions over clever ones. I keep learning through courses and side projects; you can see them in the certificates section.',
                TIMELINE_TITLE: 'Timeline',
                TIMELINE: {
                    Y2026: 'Full-stack e-commerce and this portfolio',
                    Y2026_DESC: 'An online store with Spring Boot and Angular, and this site with Angular and FastAPI.',
                    Y2025: 'Back end, databases and DevOps',
                    Y2025_DESC: 'Udemy courses on Python, MySQL, Django + Angular and GitLab CI/CD. First side projects: the resume matcher and the fraud detector.',
                    Y2023: 'Object-oriented programming and responsive design',
                    Y2023_DESC: 'freeCodeCamp certifications (responsive web design, JavaScript algorithms) and Fundación Carlos Slim courses (object-oriented programming, responsive sites).',
                    Y2022: 'First web development courses',
                    Y2022_DESC: 'INFOTEP: web page design with HTML, CSS and JavaScript.'
                },
                SKILLS_TITLE: 'Stack',
                CAT_LANGUAGES: 'Languages',
                CAT_FRONTEND: 'Front end',
                CAT_BACKEND: 'Back end',
                CAT_DATABASES: 'Databases',
                CAT_ORMS: 'Persistence',
                CAT_TESTING: 'APIs & integrations',
                CAT_DEVOPS: 'DevOps & tools',
                CAT_OS: 'Operating systems',
                CAT_IDIOMAS: 'Spoken languages',
                LANG_ES: 'Spanish — native',
                LANG_EN: 'English — B1',
                PHILOSOPHY_TITLE: 'How I work',
                PHILOSOPHY: {
                    CLEAN_CODE: 'Readable code',
                    CLEAN_CODE_DESC: "If a teammate can't follow it, it isn't done. Clear names, small functions, no tricks.",
                    USER_CENTRIC: 'The user first',
                    USER_CENTRIC_DESC: 'Technical decisions should make the product better for the people who use it.',
                    LEARNING: 'Always learning',
                    LEARNING_DESC: 'I take courses and build side projects to try new tools before using them for real.',
                    COLLABORATION: 'Working with others',
                    COLLABORATION_DESC: 'Clear commits, honest code reviews, and asking early when something is unclear.'
                }
            },
            PROJECTS: {
                EYEBROW: 'Work',
                TITLE: 'Projects',
                SUBTITLE: "Things I've built and courses I've completed.",
                TABS: {
                    PROJECTS: 'Projects',
                    CERTIFICATES: 'Certificates'
                },
                CERTS: {
                    INFOTEP_WEB: 'Web Page Design, CSS and Javascript',
                    INFOTEP_OFFICE: 'Office Programs and Presentations Management',
                    FCC_RESPONSIVE: 'Legacy Responsive Web Design V8',
                    FCC_JS: 'Legacy JavaScript Algorithms and Data Structures V7',
                    FCC_ENGLISH: 'A2 English for Developers',
                    SLIM_PARADIGM: 'Programming Paradigm (Object Oriented)',
                    SLIM_IMAGE: 'Web Image Manager',
                    SLIM_ASSISTANT: 'Web Assistant',
                    SLIM_OOP: 'Programmer (Object Oriented)',
                    SLIM_RESPONSIVE: 'Responsive Web Site Developer',
                    UDEMY_MYSQL: 'MySQL Intensive Course: Learn SQL from Zero to Expert',
                    UDEMY_FULLSTACK: 'Django, Angular, Python, MySql, ChatGPT AI - App Full Stack!',
                    UDEMY_DEVOPS: 'DevOps GitLab CI/CD: AWS, Docker, Java & Python Automation',
                    UDEMY_PYTHON: 'Learn to Program with Python. Practicing with projects',
                    UDEMY_JARVIS: 'Learn To Create JARVIS AI [Mark-I] Android App Using JAVA'
                },
                CERTIFICATES: {
                    VIEW: 'Verify credential'
                },
                LOADING: 'Loading…',
                ERROR: "Couldn't load the projects.",
                RETRY: 'Try again',
                NO_PROJECTS: 'Nothing here yet.',
                NOT_FOUND: "This project doesn't exist or couldn't be loaded.",
                BACK_TO_PROJECTS: 'Back to projects',
                ABOUT_PROJECT: 'About the project',
                STACK: 'Stack',
                YEAR: 'Year',
                LINKS: 'Links',
                VIEW_CODE: 'Code on GitHub',
                LIVE_DEMO: 'Live demo',
                PREV: 'Previous image',
                NEXT: 'Next image',
                CLOSE: 'Close',
                ITEMS: {
                    'ai-resume-matcher': {
                        NAME: 'Resume & job matcher',
                        DESC: 'Compares a resume with a job description and returns a compatibility score.',
                        LONG_DESC: 'A FastAPI service that reads resumes and job descriptions, extracts skills and experience with NLP, and returns a match score with a compatibility report. Written in Python with Pydantic for validation and packaged with Docker.'
                    },
                    'fraud-detection-system': {
                        NAME: 'Fraud detection system',
                        DESC: 'Gives each financial transaction a fraud risk score as it comes in.',
                        LONG_DESC: 'Analyzes transactions in real time and scores their risk by combining several machine learning models built with scikit-learn. Suspicious transactions trigger alerts. Data processing with pandas, API in FastAPI, storage in PostgreSQL and Redis.'
                    },
                    'portfolio-web': {
                        NAME: 'This portfolio',
                        DESC: "The site you're on: Angular front end, FastAPI back end.",
                        LONG_DESC: 'An Angular front end and a FastAPI back end that serves the projects and handles the contact form. The layout is mobile-first and the code is kept simple on purpose so anyone can read it.'
                    },
                    'ecommerce-platform': {
                        NAME: 'E-commerce platform',
                        DESC: 'Online store with a Spring Boot API and an Angular front end.',
                        LONG_DESC: 'A REST API in Java 21 and Spring Boot handles products, categories, the shopping cart and orders. Sessions use JWT, with role-based access through Spring Security. The front end is an Angular 19 single-page app with Angular Material, and it runs on MySQL, PostgreSQL or SQL Server.'
                    }
                }
            },
            APPROACH: {
                EYEBROW: 'Approach',
                TITLE: 'How I build software',
                SUBTITLE: 'The process I follow on every project, from the first conversation to deployment.',
                PHILOSOPHY: 'In short',
                PHILOSOPHY_DESC: 'Making it work is only the first step. It also has to be easy to change six months later, by me or by someone else.',
                WORKFLOW: 'Process',
                QUALITY: 'Quality',
                STEPS: {
                    UNDERSTAND: 'Understand',
                    UNDERSTAND_DESC: 'Ask questions until the problem, the users and the limits are clear.',
                    DESIGN: 'Design',
                    DESIGN_DESC: 'Pick the architecture and tools, and define the data and the API before writing code.',
                    BUILD: 'Build',
                    BUILD_DESC: 'Small, frequent commits, with tests for the parts that matter.',
                    REVIEW: 'Review',
                    REVIEW_DESC: 'Code review and manual testing before anything reaches production.',
                    DEPLOY: 'Deploy',
                    DEPLOY_DESC: 'Automated deploys with CI/CD, then watch how it behaves in production.'
                },
                QUALITY_QA: {
                    STANDARDS: 'Code',
                    STANDARDS_ITEMS: ['Consistent naming', 'Small functions with one job', 'No duplicated logic (DRY)', 'Keep it simple (KISS)'],
                    VCS: 'Git',
                    VCS_ITEMS: ['Descriptive commit messages', 'One branch per feature', 'Pull requests with review'],
                    TESTING: 'Testing',
                    TESTING_ITEMS: ['Unit tests', 'Integration tests', 'End-to-end tests for key flows'],
                    SECURITY: 'Security',
                    SECURITY_ITEMS: ['Validate all input', 'Authentication and authorization', 'Regular security reviews']
                }
            },
            CONTACT: {
                EYEBROW: 'Contact',
                TITLE: "Let's talk",
                SUBTITLE: 'Write to me about a job, a project or just a question.',
                INTRO: "I'm based in Santo Domingo and open to on-site roles. Use the form or reach me directly:",
                NAME: 'Name',
                EMAIL: 'Email',
                SUBJECT: 'Subject',
                MESSAGE: 'Message',
                SEND: 'Send message',
                SENDING: 'Sending…',
                SUCCESS: "Thanks, your message was sent. I'll get back to you soon.",
                ERROR: "The message couldn't be sent. Try again or email me directly.",
                ERRORS: {
                    REQUIRED: 'This field is required.',
                    EMAIL: 'Enter a valid email address.',
                    TOO_SHORT: 'This is too short.',
                    TOO_LONG: 'This is too long.',
                    INVALID: 'Check this field.'
                }
            },
            FOOTER: {
                LOCATION: 'Santo Domingo, Dominican Republic · Open to on-site roles'
            }
        },
        es: {
            NAV: {
                ABOUT: 'Sobre mí',
                PROJECTS: 'Proyectos',
                APPROACH: 'Enfoque',
                CONTACT: 'Contacto',
                MENU: 'Menú',
                CLOSE: 'Cerrar',
                SWITCH_LANG: 'Switch to English',
                SWITCH_THEME: 'Cambiar tema claro / oscuro'
            },
            HOME: {
                AVAILABLE: 'Disponible para trabajo presencial · Santo Domingo',
                TAGLINE: 'Construye aplicaciones web de punta a punta.',
                INTRO: 'Desarrollador full-stack. Trabajo sobre todo con Angular en el frontend y con Spring Boot o FastAPI en el backend.',
                VIEW_WORK: 'Ver proyectos',
                CONTACT: 'Escríbeme',
                STATS: {
                    PROJECTS: 'Proyectos',
                    CERTIFICATES: 'Certificados',
                    SINCE: 'Programando desde'
                },
                SERVICES_TITLE: 'Qué hago',
                SERVICES: {
                    FRONTEND: 'Frontend',
                    FRONTEND_DESC: 'Interfaces que funcionan en celular, tablet y laptop.',
                    BACKEND: 'Backend',
                    BACKEND_DESC: 'La lógica de negocio y las APIs con las que habla el frontend.',
                    APIS: 'APIs y seguridad',
                    APIS_DESC: 'APIs REST con inicio de sesión, roles y validación de datos.',
                    DATABASES: 'Bases de datos',
                    DATABASES_DESC: 'Modelos de datos y consultas que aguantan cuando los datos crecen.'
                },
                SELECTED: 'Proyectos destacados',
                ALL_PROJECTS: 'Todos los proyectos'
            },
            ABOUT: {
                EYEBROW: 'Sobre mí',
                TITLE: 'Sobre mí',
                SUBTITLE: 'Desarrollador full-stack en Santo Domingo, República Dominicana.',
                PROFILE_TITLE: 'Perfil',
                PROFILE_DESC: 'Soy desarrollador full-stack. Construyo aplicaciones web completas: la API REST, la base de datos y la interfaz que usa la gente.',
                PROFILE_DESC_2: 'Me gusta el código que otra persona puede abrir y entender, y prefiero las soluciones simples a las ingeniosas. Sigo aprendiendo con cursos y proyectos propios; puedes verlos en la sección de certificados.',
                TIMELINE_TITLE: 'Trayectoria',
                TIMELINE: {
                    Y2026: 'E-commerce full-stack y este portfolio',
                    Y2026_DESC: 'Una tienda en línea con Spring Boot y Angular, y este sitio con Angular y FastAPI.',
                    Y2025: 'Backend, bases de datos y DevOps',
                    Y2025_DESC: 'Cursos de Udemy de Python, MySQL, Django + Angular y CI/CD con GitLab. Primeros proyectos propios: el comparador de CV y el detector de fraude.',
                    Y2023: 'Programación orientada a objetos y diseño responsivo',
                    Y2023_DESC: 'Certificaciones de freeCodeCamp (diseño web responsivo, algoritmos en JavaScript) y cursos de la Fundación Carlos Slim (programación orientada a objetos, sitios responsivos).',
                    Y2022: 'Primeros cursos de desarrollo web',
                    Y2022_DESC: 'INFOTEP: diseño de páginas web con HTML, CSS y JavaScript.'
                },
                SKILLS_TITLE: 'Stack',
                CAT_LANGUAGES: 'Lenguajes',
                CAT_FRONTEND: 'Frontend',
                CAT_BACKEND: 'Backend',
                CAT_DATABASES: 'Bases de datos',
                CAT_ORMS: 'Persistencia',
                CAT_TESTING: 'APIs e integraciones',
                CAT_DEVOPS: 'DevOps y herramientas',
                CAT_OS: 'Sistemas operativos',
                CAT_IDIOMAS: 'Idiomas',
                LANG_ES: 'Español — nativo',
                LANG_EN: 'Inglés — B1',
                PHILOSOPHY_TITLE: 'Cómo trabajo',
                PHILOSOPHY: {
                    CLEAN_CODE: 'Código legible',
                    CLEAN_CODE_DESC: 'Si un compañero no lo entiende, no está terminado. Nombres claros, funciones pequeñas y sin trucos.',
                    USER_CENTRIC: 'Primero el usuario',
                    USER_CENTRIC_DESC: 'Las decisiones técnicas tienen que mejorar el producto para quien lo usa.',
                    LEARNING: 'Aprender siempre',
                    LEARNING_DESC: 'Hago cursos y proyectos propios para probar herramientas nuevas antes de usarlas en serio.',
                    COLLABORATION: 'Trabajo en equipo',
                    COLLABORATION_DESC: 'Commits claros, revisiones de código honestas y preguntar a tiempo cuando algo no está claro.'
                }
            },
            PROJECTS: {
                EYEBROW: 'Trabajo',
                TITLE: 'Proyectos',
                SUBTITLE: 'Lo que he construido y los cursos que he completado.',
                TABS: {
                    PROJECTS: 'Proyectos',
                    CERTIFICATES: 'Certificados'
                },
                CERTS: {
                    INFOTEP_WEB: 'Diseño de Páginas Web, CSS y Javascript',
                    INFOTEP_OFFICE: 'Manejo de Programas de Oficina y de Presentaciones',
                    FCC_RESPONSIVE: 'Diseño Web Responsivo (Legacy) V8',
                    FCC_JS: 'Algoritmos y Estructuras de Datos de JavaScript (Legacy) V7',
                    FCC_ENGLISH: 'Inglés A2 para Desarrolladores',
                    SLIM_PARADIGM: 'Paradigma de programación (orientado a objetos)',
                    SLIM_IMAGE: 'Gestor de Imagen Web',
                    SLIM_ASSISTANT: 'Asistente web',
                    SLIM_OOP: 'Programador (orientado a objetos)',
                    SLIM_RESPONSIVE: 'Desarrollador de sitios web responsivos',
                    UDEMY_MYSQL: 'Curso Intensivo de MySQL: Aprende SQL desde Cero a Experto',
                    UDEMY_FULLSTACK: 'Django, Angular, Python, MySql, ChatGPT IA - ¡App Full Stack!',
                    UDEMY_DEVOPS: 'DevOps GitLab CI/CD: Automatización AWS, Docker, Java y Python',
                    UDEMY_PYTHON: 'Aprende a Programar con Python. Practicando con proyectos',
                    UDEMY_JARVIS: 'Aprende a Crear JARVIS AI [Mark-I] App Android Usando JAVA'
                },
                CERTIFICATES: {
                    VIEW: 'Verificar credencial'
                },
                LOADING: 'Cargando…',
                ERROR: 'No se pudieron cargar los proyectos.',
                RETRY: 'Reintentar',
                NO_PROJECTS: 'Todavía no hay nada aquí.',
                NOT_FOUND: 'Este proyecto no existe o no se pudo cargar.',
                BACK_TO_PROJECTS: 'Volver a proyectos',
                ABOUT_PROJECT: 'Sobre el proyecto',
                STACK: 'Stack',
                YEAR: 'Año',
                LINKS: 'Enlaces',
                VIEW_CODE: 'Código en GitHub',
                LIVE_DEMO: 'Ver demo',
                PREV: 'Imagen anterior',
                NEXT: 'Imagen siguiente',
                CLOSE: 'Cerrar',
                ITEMS: {
                    'ai-resume-matcher': {
                        NAME: 'Comparador de CV y ofertas',
                        DESC: 'Compara un currículum con una oferta de trabajo y devuelve un porcentaje de compatibilidad.',
                        LONG_DESC: 'Un servicio en FastAPI que lee currículums y ofertas de trabajo, extrae habilidades y experiencia con PLN y devuelve una puntuación con un informe de compatibilidad. Escrito en Python, con Pydantic para validar los datos y empaquetado con Docker.'
                    },
                    'fraud-detection-system': {
                        NAME: 'Detector de fraude',
                        DESC: 'Asigna a cada transacción financiera un nivel de riesgo de fraude en el momento en que llega.',
                        LONG_DESC: 'Analiza transacciones en tiempo real y calcula su riesgo combinando varios modelos de machine learning hechos con scikit-learn. Las transacciones sospechosas generan alertas. Procesamiento de datos con pandas, API en FastAPI y almacenamiento en PostgreSQL y Redis.'
                    },
                    'portfolio-web': {
                        NAME: 'Este portfolio',
                        DESC: 'El sitio en el que estás: frontend en Angular y backend en FastAPI.',
                        LONG_DESC: 'Un frontend en Angular y un backend en FastAPI que sirve los proyectos y gestiona el formulario de contacto. El diseño es mobile-first y el código se mantiene simple a propósito para que cualquiera lo pueda leer.'
                    },
                    'ecommerce-platform': {
                        NAME: 'Plataforma de e-commerce',
                        DESC: 'Tienda en línea con una API en Spring Boot y un frontend en Angular.',
                        LONG_DESC: 'Una API REST en Java 21 y Spring Boot gestiona productos, categorías, el carrito y los pedidos. Las sesiones usan JWT, con acceso por roles mediante Spring Security. El frontend es una SPA en Angular 19 con Angular Material, y funciona con MySQL, PostgreSQL o SQL Server.'
                    }
                }
            },
            APPROACH: {
                EYEBROW: 'Enfoque',
                TITLE: 'Cómo construyo software',
                SUBTITLE: 'El proceso que sigo en cada proyecto, desde la primera conversación hasta el despliegue.',
                PHILOSOPHY: 'En resumen',
                PHILOSOPHY_DESC: 'Que funcione es solo el primer paso. También tiene que ser fácil de cambiar seis meses después, por mí o por otra persona.',
                WORKFLOW: 'Proceso',
                QUALITY: 'Calidad',
                STEPS: {
                    UNDERSTAND: 'Entender',
                    UNDERSTAND_DESC: 'Preguntar hasta tener claros el problema, los usuarios y los límites.',
                    DESIGN: 'Diseñar',
                    DESIGN_DESC: 'Elegir arquitectura y herramientas, y definir los datos y la API antes de escribir código.',
                    BUILD: 'Construir',
                    BUILD_DESC: 'Commits pequeños y frecuentes, con pruebas en las partes importantes.',
                    REVIEW: 'Revisar',
                    REVIEW_DESC: 'Revisión de código y pruebas manuales antes de que algo llegue a producción.',
                    DEPLOY: 'Desplegar',
                    DEPLOY_DESC: 'Despliegue automático con CI/CD y seguimiento de cómo se comporta en producción.'
                },
                QUALITY_QA: {
                    STANDARDS: 'Código',
                    STANDARDS_ITEMS: ['Nombres consistentes', 'Funciones pequeñas con un solo propósito', 'Sin lógica duplicada (DRY)', 'Mantenerlo simple (KISS)'],
                    VCS: 'Git',
                    VCS_ITEMS: ['Mensajes de commit descriptivos', 'Una rama por funcionalidad', 'Pull requests con revisión'],
                    TESTING: 'Pruebas',
                    TESTING_ITEMS: ['Pruebas unitarias', 'Pruebas de integración', 'Pruebas end-to-end en los flujos clave'],
                    SECURITY: 'Seguridad',
                    SECURITY_ITEMS: ['Validar toda entrada', 'Autenticación y autorización', 'Revisiones de seguridad periódicas']
                }
            },
            CONTACT: {
                EYEBROW: 'Contacto',
                TITLE: 'Hablemos',
                SUBTITLE: 'Escríbeme por un trabajo, un proyecto o simplemente una pregunta.',
                INTRO: 'Vivo en Santo Domingo y estoy disponible para trabajo presencial. Usa el formulario o escríbeme directamente:',
                NAME: 'Nombre',
                EMAIL: 'Correo',
                SUBJECT: 'Asunto',
                MESSAGE: 'Mensaje',
                SEND: 'Enviar mensaje',
                SENDING: 'Enviando…',
                SUCCESS: 'Gracias, tu mensaje se envió. Te respondo pronto.',
                ERROR: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme al correo.',
                ERRORS: {
                    REQUIRED: 'Este campo es obligatorio.',
                    EMAIL: 'Escribe un correo válido.',
                    TOO_SHORT: 'Es demasiado corto.',
                    TOO_LONG: 'Es demasiado largo.',
                    INVALID: 'Revisa este campo.'
                }
            },
            FOOTER: {
                LOCATION: 'Santo Domingo, República Dominicana · Disponible para trabajo presencial'
            }
        }
    };

    constructor() {
        const savedLang = localStorage.getItem('lang') as Language;
        if (savedLang) {
            this.setLanguage(savedLang);
        }
    }

    setLanguage(lang: Language) {
        this.currentLang.next(lang);
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
    }

    getCurrentLang(): Language {
        return this.currentLang.value;
    }

    translate(key: string): string {
        const keys = key.split('.');
        let value = this.translations[this.currentLang.value];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    }
}
