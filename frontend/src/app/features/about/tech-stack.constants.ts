/**
 * Tecnologías que aparecen en "Sobre mí", agrupadas por categoría.
 * titleKey es la clave de traducción del nombre de la categoría.
 */
export interface TechCategory {
    titleKey: string;
    items: string[];
}

export const TECH_STACK: TechCategory[] = [
    {
        titleKey: 'ABOUT.CAT_LANGUAGES',
        items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java', 'SQL']
    },
    {
        titleKey: 'ABOUT.CAT_FRONTEND',
        items: ['Angular', 'React', 'Next.js', 'HTML', 'CSS']
    },
    {
        titleKey: 'ABOUT.CAT_BACKEND',
        items: ['Spring Boot', 'FastAPI', 'Django', 'Node.js', 'Express.js', 'NestJS', '.NET / ASP.NET']
    },
    {
        titleKey: 'ABOUT.CAT_DATABASES',
        items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis']
    },
    {
        titleKey: 'ABOUT.CAT_ORMS',
        items: ['SQL (Stored Procedures)', 'SQLAlchemy', 'TypeORM']
    },
    {
        titleKey: 'ABOUT.CAT_TESTING',
        items: ['REST APIs', 'Postman', 'API Integration', 'Data Flows']
    },
    {
        titleKey: 'ABOUT.CAT_DEVOPS',
        items: ['Docker', 'Git / GitHub', 'GitLab CI/CD', 'AWS', 'VS Code', 'Visual Studio', 'Cursor', 'Android Studio', 'NetBeans', 'SSMS']
    },
    {
        titleKey: 'ABOUT.CAT_OS',
        items: ['macOS', 'Windows', 'Linux']
    }
];
