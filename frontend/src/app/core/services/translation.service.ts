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
                PROJECTS: 'Projects',
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
                PROFILE_DESC: 'I\'m a passionate full-stack software developer with a strong focus on building scalable, maintainable web applications.',
                SKILLS_TITLE: 'Technical Expertise',
                PHILOSOPHY_TITLE: 'Development Philosophy'
            },
            PROJECTS: {
                TITLE: 'My Projects',
                SUBTITLE: 'A showcase of my work and technical expertise',
                LOADING: 'Loading projects...',
                NO_PROJECTS: 'No projects found.',
                VIEW_DETAILS: 'View Details',
                FEATURED: 'Featured'
            },
            APPROACH: {
                TITLE: 'My Approach',
                SUBTITLE: 'Building software with best practices and clean code principles',
                PHILOSOPHY: 'Development Philosophy',
                WORKFLOW: 'Development Workflow'
            },
            CONTACT: {
                TITLE: 'Get In Touch',
                SUBTITLE: 'Let\'s discuss your next project or collaboration opportunity',
                NAME: 'Name',
                EMAIL: 'Email',
                SUBJECT: 'Subject',
                MESSAGE: 'Message',
                SEND: 'Send Message',
                SENDING: 'Sending...',
                SUCCESS: 'Message sent successfully!',
                ERROR: 'Failed to send message.'
            }
        },
        es: {
            NAV: {
                HOME: 'Inicio',
                ABOUT: 'Sobre Mí',
                PROJECTS: 'Proyectos',
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
                SKILLS_TITLE: 'Experiencia Técnica',
                PHILOSOPHY_TITLE: 'Filosofía de Desarrollo'
            },
            PROJECTS: {
                TITLE: 'Mis Proyectos',
                SUBTITLE: 'Una muestra de mi trabajo y experiencia técnica',
                LOADING: 'Cargando proyectos...',
                NO_PROJECTS: 'No se encontraron proyectos.',
                VIEW_DETAILS: 'Ver Detalles',
                FEATURED: 'Destacado'
            },
            APPROACH: {
                TITLE: 'Mi Enfoque',
                SUBTITLE: 'Construyendo software con mejores prácticas y código limpio',
                PHILOSOPHY: 'Filosofía de Desarrollo',
                WORKFLOW: 'Flujo de Trabajo'
            },
            CONTACT: {
                TITLE: 'Contáctame',
                SUBTITLE: 'Hablemos de tu próximo proyecto u oportunidad de colaboración',
                NAME: 'Nombre',
                EMAIL: 'Correo',
                SUBJECT: 'Asunto',
                MESSAGE: 'Mensaje',
                SEND: 'Enviar Mensaje',
                SENDING: 'Enviando...',
                SUCCESS: '¡Mensaje enviado con éxito!',
                ERROR: 'Error al enviar el mensaje.'
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
