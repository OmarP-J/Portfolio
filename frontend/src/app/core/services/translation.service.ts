/**
 * Translation Service
 * Manages language state and translations
 */
import { Injectable, signal } from '@angular/core';
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
                HOME: 'Home',
                ABOUT: 'About',
                PROJECTS: 'Projects & Certs',
                APPROACH: 'Approach',
                CONTACT: 'Contact'
            },
            HOME: {
                HI: "Hi, I'm",
                SUBTITLE: 'Full-Stack Software Developer',
                DESC: 'I build modern, scalable web applications with clean architecture, best practices, and a focus on delivering exceptional user experiences.',
                VIEW_WORK: 'View My Work',
                GET_TOUCH: 'Get In Touch',
                MODERN_STACK: 'Modern Stack',
                BEST_PRACTICES: 'Best Practices',
                PROBLEM_SOLVER: 'Problem Solver'
            },
            ABOUT: {
                TITLE: 'About Me',
                SUBTITLE: 'Full-Stack Developer | Clean Code Advocate | Problem Solver',
                PROFILE_TITLE: 'Professional Profile',
                PROFILE_DESC: "I'm a passionate full-stack software developer with a strong focus on building scalable, maintainable web applications.",
                PROFILE_DESC_2: "My approach combines technical excellence with business understanding, ensuring that every line of code contributes to real user value and business objectives.",
                SKILLS_TITLE: 'Technical Expertise',
                FRONTEND: 'Frontend',
                BACKEND: 'Backend',
                TOOLS: 'Tools & Practices',
                PHILOSOPHY_TITLE: 'Development Philosophy',
                PHILOSOPHY: {
                    CLEAN_CODE: 'Clean Code',
                    CLEAN_CODE_DESC: 'Code should be readable, maintainable, and self-documenting. I follow SOLID principles and design patterns.',
                    USER_CENTRIC: 'User-Centric',
                    USER_CENTRIC_DESC: 'Every technical decision should ultimately serve the end user and deliver real business value.',
                    LEARNING: 'Continuous Learning',
                    LEARNING_DESC: 'Technology evolves rapidly. I stay current with industry trends and continuously refine my skills.',
                    COLLABORATION: 'Collaboration',
                    COLLABORATION_DESC: 'Great software is built by great teams. Clear communication and knowledge sharing are essential.'
                }
            },
            PROJECTS: {
                TITLE: 'My Work',
                SUBTITLE: 'A showcase of my projects and professional certifications',
                TABS: {
                    PROJECTS: 'Projects',
                    CERTIFICATES: 'Certificates'
                },
                CERTIFICATES: {
                    ISSUED_BY: 'Issued by',
                    DATE: 'Issued on',
                    ID: 'Credential ID',
                    VIEW: 'Verify Credential'
                },
                LOADING: 'Loading...',
                NO_PROJECTS: 'No items found.',
                VIEW_DETAILS: 'View Details',
                FEATURED: 'Featured',
                RETRY: 'Retry'
            },
            APPROACH: {
                TITLE: 'My Approach',
                SUBTITLE: 'Building software with best practices and clean code principles',
                PHILOSOPHY: 'Development Philosophy',
                PHILOSOPHY_DESC: "Great software is not just about making things work—it's about creating maintainable, scalable solutions that deliver value over time. My approach combines technical excellence with pragmatic problem-solving.",
                WORKFLOW: 'Development Workflow',
                QUALITY: 'Quality Assurance',
                STEPS: {
                    UNDERSTAND: 'Understand',
                    UNDERSTAND_DESC: 'Deep dive into requirements, business context, and user needs',
                    DESIGN: 'Design',
                    DESIGN_DESC: 'Plan architecture, select technologies, define interfaces',
                    BUILD: 'Build',
                    BUILD_DESC: 'Write clean, tested code following best practices',
                    REVIEW: 'Review',
                    REVIEW_DESC: 'Code review, testing, and quality assurance',
                    DEPLOY: 'Deploy',
                    DEPLOY_DESC: 'CI/CD pipeline, monitoring, and continuous improvement'
                },
                QUALITY_QA: {
                    STANDARDS: 'Code Standards',
                    STANDARDS_ITEMS: ['Consistent naming conventions', 'Meaningful variable names', 'DRY principle', 'KISS principle'],
                    VCS: 'Version Control',
                    VCS_ITEMS: ['Meaningful commit messages', 'Feature branches', 'Pull requests', 'Git best practices'],
                    TESTING: 'Testing Strategy',
                    TESTING_ITEMS: ['Unit tests', 'Integration tests', 'E2E tests', 'Coverage monitoring'],
                    SECURITY: 'Security',
                    SECURITY_ITEMS: ['Input validation', 'AuthN & AuthZ', 'Best practices', 'Regular audits']
                }
            },
            CONTACT: {
                TITLE: 'Get In Touch',
                SUBTITLE: "Let's discuss your next project or collaboration opportunity",
                INTRO: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form below or via email.",
                NAME: 'Name',
                EMAIL: 'Email',
                SUBJECT: 'Subject',
                MESSAGE: 'Message',
                SEND: 'Send Message',
                SENDING: 'Sending...',
                SUCCESS: 'Message sent successfully!',
                ERROR: 'Failed to send message.',
                OTHER_WAYS: 'Other Ways to Connect',
                REQUIRED: 'is required'
            },
            FOOTER: {
                NAME_ROLE: 'Jaroly Omar Polanco – Full Stack Developer',
                LOCATION: 'Santo Domingo, Dominican Republic – Open to on-site opportunities',
                COPYRIGHT: '© 2026 Jaroly Omar Polanco',
                DESC: 'Building modern, scalable web applications with clean code and best practices.',
                QUICK_LINKS: 'Quick Links',
                TECHNOLOGIES: 'Technologies',
                BUILT_WITH: 'Built with'
            }
        },
        es: {
            NAV: {
                HOME: 'Inicio',
                ABOUT: 'Sobre Mí',
                PROJECTS: 'Proyectos y Certs',
                APPROACH: 'Enfoque',
                CONTACT: 'Contacto'
            },
            HOME: {
                HI: "Hola, soy",
                SUBTITLE: 'Desarrollador de Software Full-Stack',
                DESC: 'Construyo aplicaciones web modernas y escalables con arquitectura limpia, mejores prácticas y un enfoque en ofrecer experiencias de usuario excepcionales.',
                VIEW_WORK: 'Ver Mi Trabajo',
                GET_TOUCH: 'Contáctame',
                MODERN_STACK: 'Stack Moderno',
                BEST_PRACTICES: 'Mejores Prácticas',
                PROBLEM_SOLVER: 'Resolución de Problemas'
            },
            ABOUT: {
                TITLE: 'Sobre Mí',
                SUBTITLE: 'Desarrollador Full-Stack | Clean Code | Solucionador',
                PROFILE_TITLE: 'Perfil Profesional',
                PROFILE_DESC: 'Soy un apasionado desarrollador full-stack con un fuerte enfoque en construir aplicaciones web escalables y mantenibles.',
                PROFILE_DESC_2: 'Mi enfoque combina la excelencia técnica con la comprensión del negocio, asegurando que cada línea de código contribuya al valor real del usuario y los objetivos comerciales.',
                SKILLS_TITLE: 'Experiencia Técnica',
                FRONTEND: 'Frontend',
                BACKEND: 'Backend',
                TOOLS: 'Herramientas y Prácticas',
                PHILOSOPHY_TITLE: 'Filosofía de Desarrollo',
                PHILOSOPHY: {
                    CLEAN_CODE: 'Código Limpio',
                    CLEAN_CODE_DESC: 'El código debe ser legible, mantenible y autodocumentado. Sigo los principios SOLID y patrones de diseño.',
                    USER_CENTRIC: 'Centrado en el Usuario',
                    USER_CENTRIC_DESC: 'Cada decisión técnica debe servir en última instancia al usuario final y entregar valor comercial real.',
                    LEARNING: 'Aprendizaje Continuo',
                    LEARNING_DESC: 'La tecnología evoluciona rápidamente. Me mantengo al día con las tendencias de la industria y refino continuamente mis habilidades.',
                    COLLABORATION: 'Colaboración',
                    COLLABORATION_DESC: 'El gran software es construido por grandes equipos. La comunicación clara y el intercambio de conocimientos son esenciales.'
                }
            },
            PROJECTS: {
                TITLE: 'Mi Trabajo',
                SUBTITLE: 'Una muestra de mis proyectos y certificaciones profesionales',
                TABS: {
                    PROJECTS: 'Proyectos',
                    CERTIFICATES: 'Certificados'
                },
                CERTIFICATES: {
                    ISSUED_BY: 'Emitido por',
                    DATE: 'Fecha de emisión',
                    ID: 'ID de credencial',
                    VIEW: 'Verificar Credencial'
                },
                LOADING: 'Cargando...',
                NO_PROJECTS: 'No se encontraron elementos.',
                VIEW_DETAILS: 'Ver Detalles',
                FEATURED: 'Destacado',
                RETRY: 'Reintentar'
            },
            APPROACH: {
                TITLE: 'Mi Enfoque',
                SUBTITLE: 'Construyendo software con mejores prácticas y código limpio',
                PHILOSOPHY: 'Filosofía de Desarrollo',
                PHILOSOPHY_DESC: "El gran software no se trata solo de hacer que las cosas funcionen; se trata de crear soluciones mantenibles y escalables que aporten valor a lo largo del tiempo. Mi enfoque combina la excelencia técnica con la resolución pragmática de problemas.",
                WORKFLOW: 'Flujo de Trabajo',
                QUALITY: 'Garantía de Calidad',
                STEPS: {
                    UNDERSTAND: 'Comprender',
                    UNDERSTAND_DESC: 'Inmersión profunda en los requisitos, el contexto empresarial y las necesidades del usuario',
                    DESIGN: 'Diseñar',
                    DESIGN_DESC: 'Planificar arquitectura, seleccionar tecnologías, definir interfaces',
                    BUILD: 'Construir',
                    BUILD_DESC: 'Escribir código limpio y probado siguiendo las mejores prácticas',
                    REVIEW: 'Revisar',
                    REVIEW_DESC: 'Revisión de código, pruebas y garantía de calidad',
                    DEPLOY: 'Desplegar',
                    DEPLOY_DESC: 'Pipeline de CI/CD, monitoreo y mejora continua'
                },
                QUALITY_QA: {
                    STANDARDS: 'Estándares de Código',
                    STANDARDS_ITEMS: ['Convenciones de nombres consistentes', 'Nombres significativos', 'Principio DRY', 'Principio KISS'],
                    VCS: 'Control de Versiones',
                    VCS_ITEMS: ['Mensajes de commit significativos', 'Ramas de características', 'Pull requests', 'Mejores prácticas de Git'],
                    TESTING: 'Estrategia de Pruebas',
                    TESTING_ITEMS: ['Pruebas unitarias', 'Pruebas de integración', 'Pruebas E2E', 'Monitoreo de cobertura'],
                    SECURITY: 'Seguridad',
                    SECURITY_ITEMS: ['Validación de entradas', 'AuthN & AuthZ', 'Mejores prácticas', 'Auditorías regulares']
                }
            },
            CONTACT: {
                TITLE: 'Contáctame',
                SUBTITLE: 'Hablemos de tu próximo proyecto u oportunidad de colaboración',
                INTRO: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión. No dudes en contactarme a través del siguiente formulario o por correo electrónico.',
                NAME: 'Nombre',
                EMAIL: 'Correo',
                SUBJECT: 'Asunto',
                MESSAGE: 'Mensaje',
                SEND: 'Enviar Mensaje',
                SENDING: 'Enviando...',
                SUCCESS: '¡Mensaje enviado con éxito!',
                ERROR: 'Error al enviar el mensaje.',
                OTHER_WAYS: 'Otras formas de conectar',
                REQUIRED: 'es requerido'
            },
            FOOTER: {
                NAME_ROLE: 'Jaroly Omar Polanco – Full Stack Developer',
                LOCATION: 'Santo Domingo, República Dominicana – Disponible para oportunidades presenciales',
                COPYRIGHT: '© 2026 Jaroly Omar Polanco',
                DESC: 'Construyendo aplicaciones web modernas y escalables con código limpio y mejores prácticas.',
                QUICK_LINKS: 'Enlaces Rápidos',
                TECHNOLOGIES: 'Tecnologías',
                BUILT_WITH: 'Construido con'
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
