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
                repository_url="https://github.com/yourusername/ai-resume-matcher",
                featured=True,
                created_at=datetime(2025, 12, 20),
            ),
            Project(
                id="intelligent-support-bot",
                name="Intelligent Customer Support Bot",
                description="AI-powered customer support system using RAG (Retrieval-Augmented Generation)",
                long_description="""
                A sophisticated customer support bot that leverages RAG technology to provide accurate,
                context-aware responses. The system can understand customer queries, retrieve relevant
                information from a knowledge base, and generate helpful responses.
                
                Key Features:
                - RAG-based question answering
                - Knowledge base management
                - Context-aware conversations
                - Multi-language support
                - Analytics and insights dashboard
                """,
                technologies=["Python", "LangChain", "RAG", "Vector DB", "FastAPI", "React"],
                repository_url="https://github.com/yourusername/ai-support-bot",
                featured=True,
                created_at=datetime(2025, 12, 20),
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
                repository_url="https://github.com/yourusername/fraud-detection-system",
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
                repository_url="https://github.com/yourusername/portfolio",
                live_url="https://yourportfolio.com",
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
