export interface TechItem {
    name: string;
    iconClass: string; // DevIcon class name
}

export interface TechCategory {
    titleKey: string;
    items: TechItem[];
}

export const TECH_STACK: TechCategory[] = [
    {
        titleKey: 'ABOUT.CAT_LANGUAGES',
        items: [
            { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
            { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
            { name: 'Python', iconClass: 'devicon-python-plain-wordmark colored' },
            { name: 'C#', iconClass: 'devicon-csharp-plain colored' },
            { name: 'Java', iconClass: 'devicon-java-plain colored' },
            { name: 'SQL', iconClass: 'devicon-azuresqldatabase-plain colored' }
        ]
    },
    {
        titleKey: 'ABOUT.CAT_FRONTEND',
        items: [
            { name: 'React', iconClass: 'devicon-react-original colored' },
            { name: 'Next.js', iconClass: 'devicon-nextjs-plain-wordmark colored' },
            { name: 'HTML', iconClass: 'devicon-html5-plain colored' },
            { name: 'CSS', iconClass: 'devicon-css3-plain colored' },
            { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' }
        ]
    },
    {
        titleKey: 'ABOUT.CAT_BACKEND',
        items: [
            { name: 'Node.js', iconClass: 'devicon-nodejs-plain-wordmark colored' },
            { name: 'Express.js', iconClass: 'devicon-express-original colored' },
            { name: 'NestJS', iconClass: 'devicon-nestjs-plain colored' },
            { name: '.NET / ASP.NET', iconClass: 'devicon-dotnetcore-plain colored' },
            { name: 'Django', iconClass: 'devicon-django-plain-wordmark colored' },
            { name: 'Spring', iconClass: 'devicon-spring-plain colored' },
            { name: 'Spring Boot', iconClass: 'devicon-spring-plain colored' }
        ]
    },
    {
        titleKey: 'ABOUT.CAT_DATABASES',
        items: [
            { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
            { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
            { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored' },
            { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
            { name: 'Redis', iconClass: 'devicon-redis-plain colored' }
        ]
    },
    {
        titleKey: 'ABOUT.CAT_ORMS',
        items: [
            { name: 'SQL (Stored Proc)', iconClass: 'devicon-azuresqldatabase-plain colored' },
            { name: 'SQLAlchemy', iconClass: 'devicon-sqlalchemy-plain colored' },
            { name: 'TypeORM', iconClass: 'devicon-typescript-plain colored' }
        ]
    },
    {
        titleKey: 'ABOUT.CAT_TESTING',
        items: [
            { name: 'REST APIs', iconClass: 'devicon-insomnia-plain colored' },
            { name: 'Postman', iconClass: 'devicon-postman-plain colored' },
            { name: 'API Integration', iconClass: 'devicon-fastapi-plain colored' },
            { name: 'Data Flows', iconClass: 'devicon-networkx-plain colored' }
        ]
    },
    {
        titleKey: 'ABOUT.CAT_DEVOPS',
        items: [
            { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
            { name: 'Git / GitHub', iconClass: 'devicon-github-original colored' },
            { name: 'GitLab CI/CD', iconClass: 'devicon-gitlab-plain colored' },
            { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark colored' },
            { name: 'VS Code', iconClass: 'devicon-vscode-plain colored' },
            { name: 'Visual Studio', iconClass: 'devicon-visualstudio-plain colored' },
            { name: 'Cursor', iconClass: 'devicon-vscode-plain colored' },
            { name: 'Android Studio', iconClass: 'devicon-androidstudio-plain colored' },
            { name: 'NetBeans', iconClass: 'devicon-java-plain colored' },
            { name: 'SSMS', iconClass: 'devicon-microsoftsqlserver-plain colored' }
        ]
    },
    {
        titleKey: 'ABOUT.CAT_OS',
        items: [
            { name: 'macOS', iconClass: 'devicon-apple-original colored' },
            { name: 'Windows', iconClass: 'devicon-windows8-original colored' },
            { name: 'Linux', iconClass: 'devicon-linux-plain colored' }
        ]
    }
];
