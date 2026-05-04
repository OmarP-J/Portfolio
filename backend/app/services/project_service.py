"""
Project business logic service.
Handles all project-related operations.
"""
from typing import List, Optional
from datetime import datetime

from app.models.project import Project


class ProjectService:
    """
    Service layer for project operations.
    In a real application, this would interact with a database.
    For now, we're using in-memory storage.
    """
    
    def __init__(self):
        """Initialize service with sample projects."""
        self._projects = self._get_initial_projects()
    
    def _get_initial_projects(self) -> List[Project]:
        """
        Initialize with sample projects.
        In production, this would be loaded from a database.
        """
        return [
            Project(
                id="ai-resume-matcher",
                name="AI Resume & Job Matcher",
                description="Intelligent system that matches resumes with job descriptions using AI and NLP",
                long_description="""
                An advanced AI-powered application that analyzes resumes and job descriptions to provide 
                intelligent matching scores and recommendations. Built with Python, FastAPI, and modern 
                AI libraries, this system helps recruiters and job seekers find the best matches.
                
                Key Features:
                - Resume parsing and analysis
                - Job description intelligence
                - AI-powered matching algorithm
                - Detailed compatibility reports
                - RESTful API with comprehensive documentation
                """,
                technologies=["Python", "FastAPI", "NLP", "AI/ML", "Pydantic", "Docker"],
                repository_url="https://github.com/OmarP-J/ai-resume-matcher",
                image_url="assets/projects/ai_resume.jpg",
                gallery_images=[
                    "https://placehold.co/800x450/1a1a1a/ffffff?text=Resume+Analysis",
                    "https://placehold.co/800x450/2d2d2d/ffffff?text=Job+Matching",
                    "https://placehold.co/800x450/404040/ffffff?text=Compatibility+Report"
                ],
                featured=True,
                created_at=datetime(2025, 12, 20),
            ),
            Project(
            id="ecommerce-platform",
            name="Full-Stack E-Commerce Platform",
            description="Scalable e-commerce platform built with Spring Boot and Angular",
            long_description="""
            A complete e-commerce platform developed using a decoupled client-server architecture,
            delivering a secure and scalable online shopping experience.

            The backend is built with Java 21 and Spring Boot, exposing a robust REST API that handles
            business logic, authentication, and data persistence. It uses JWT-based authentication
            to ensure secure user sessions and role-based access control.

            The frontend is developed with Angular 19 as a dynamic Single Page Application (SPA),
            providing a smooth and responsive user experience. It integrates Angular Material for
            modern UI components and is prepared for Server-Side Rendering (SSR) to enhance performance.

            Key Features:
            - Secure authentication with JWT
            - RESTful API architecture
            - Product and category management
            - Shopping cart and order workflow
            - Multi-database support (MySQL, PostgreSQL, SQL Server)
            - Responsive UI with Angular Material
            - Scalable client-server architecture
            """,
            technologies=[ "Java 21", "Spring Boot", "Spring Security", "JWT", "Angular 19", "Angular Material", "REST API", "MySQL", "PostgreSQL", "SQL Server" ],
            repository_url="https://github.com/OmarP-J/E-Commerce-SpringBoot",
            image_url="assets/projects/ecommerce.jpg",
            gallery_images=[
                "https://placehold.co/800x450/1a1a1a/ffffff?text=Home+Page",
                "https://placehold.co/800x450/2d2d2d/ffffff?text=Product+Management",
                "https://placehold.co/800x450/404040/ffffff?text=Shopping+Cart"
            ],
            featured=True,
            created_at=datetime(2026, 1, 15),
            ),
            Project(
                id="fraud-detection-system",
                name="Fraud Detection System",
                description="Machine learning system for real-time fraud detection in financial transactions",
                long_description="""
                A production-ready fraud detection system that analyzes financial transactions in real-time
                to identify potential fraud. Uses machine learning models and statistical analysis to
                provide accurate fraud risk assessments.
                
                Key Features:
                - Real-time transaction analysis
                - Multiple ML models ensemble
                - Risk scoring and alerts
                - Historical pattern analysis
                - Comprehensive reporting
                - High performance and scalability
                """,
                technologies=["Python", "Scikit-learn", "Pandas", "FastAPI", "PostgreSQL", "Redis"],
                repository_url="https://github.com/OmarP-J/fraud-detection-system",
                image_url="assets/projects/fraud_detection.jpg",
                gallery_images=[
                    "https://placehold.co/800x450/1a1a1a/ffffff?text=Real-time+Detection",
                    "https://placehold.co/800x450/2d2d2d/ffffff?text=Model+Performance",
                    "https://placehold.co/800x450/404040/ffffff?text=Risk+Alerts"
                ],
                featured=True,
                created_at=datetime(2025, 12, 20),
            ),
            Project(
                id="portfolio-web",
                name="Professional Portfolio Platform",
                description="Modern full-stack portfolio application with Angular and FastAPI",
                long_description="""
                A complete, production-ready portfolio platform showcasing modern web development
                best practices. Features a FastAPI backend with layered architecture and an Angular
                frontend with lazy loading and responsive design.
                
                Key Features:
                - Clean architecture (backend and frontend)
                - RESTful API with OpenAPI documentation
                - Modular Angular application
                - Responsive design (mobile-first)
                - Form validations and error handling
                - Professional UI/UX
                """,
                technologies=["Angular", "TypeScript", "Python", "FastAPI", "Pydantic", "CSS3"],
                repository_url="https://github.com/OmarP-J/Portfolio",
                live_url="https://github.com/OmarP-J/Portfolio",
                image_url="assets/projects/portfolio.jpg",
                gallery_images=[
                    "https://placehold.co/800x450/1a1a1a/ffffff?text=Frontend+Overview",
                    "https://placehold.co/800x450/2d2d2d/ffffff?text=Backend+API",
                    "https://placehold.co/800x450/404040/ffffff?text=Responsive+Design"
                ],
                featured=False,
                created_at=datetime.now(),
            ),
        ]
    
    def get_all_projects(self) -> List[Project]:
        """
        Retrieve all projects.
        
        Returns:
            List of all projects
        """
        return self._projects
    
    def get_project_by_id(self, project_id: str) -> Optional[Project]:
        """
        Retrieve a specific project by ID.
        
        Args:
            project_id: Unique project identifier
            
        Returns:
            Project if found, None otherwise
        """
        for project in self._projects:
            if project.id == project_id:
                return project
        return None
    
    def get_featured_projects(self) -> List[Project]:
        """
        Retrieve only featured projects.
        
        Returns:
            List of featured projects
        """
        return [p for p in self._projects if p.featured]
