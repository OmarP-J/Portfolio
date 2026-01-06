# 💼 Professional Portfolio - Full-Stack Web Application

[![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.109+-green.svg)](https://fastapi.tiangolo.com/)
[![Angular](https://img.shields.io/badge/Angular-17+-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2+-blue.svg)](https://www.typescriptlang.org/)

A complete, professional, and production-ready portfolio web application built with modern technologies and clean architecture principles.

## 🎯 Project Overview

This is a **full-stack portfolio application** designed to showcase professional projects, skills, and experience. Built with industry best practices, clean code, and scalable architecture.

### ✨ Key Features

- **Professional Design**: Modern, responsive UI with mobile-first approach
- **Clean Architecture**: Layered backend structure with separation of concerns
- **Type Safety**: TypeScript frontend with strict mode enabled
- **API Documentation**: Auto-generated OpenAPI/Swagger documentation
- **Form Validation**: Frontend and backend validation for data integrity
- **Error Handling**: Comprehensive error handling and user feedback
- **Scalable**: Structured for easy maintenance and feature additions

---

## 🏗️ Project Structure

```
Portfolio/
├── backend/                 # FastAPI Backend
│   ├── app/
│   │   ├── core/           # Core configuration and exceptions
│   │   ├── models/         # Domain models
│   │   ├── schemas/        # Pydantic schemas for validation
│   │   ├── services/       # Business logic layer
│   │   ├── routers/        # API endpoints
│   │   └── main.py         # Application entry point
│   ├── requirements.txt    # Python dependencies
│   └── .env.example        # Environment variables template
│
└── frontend/               # Angular Frontend
    ├── src/
    │   ├── app/
    │   │   ├── core/       # Core services and models
    │   │   ├── shared/     # Shared components
    │   │   ├── features/   # Feature modules (pages)
    │   │   └── app.component.ts
    │   ├── environments/   # Environment configurations
    │   └── styles.css      # Global styles
    ├── package.json
    └── angular.json
```

---

## 🛠️ Technology Stack

### Backend
- **Python 3.11+** - Modern Python features
- **FastAPI** - High-performance async web framework
- **Pydantic** - Data validation using Python type annotations
- **Uvicorn** - ASGI server for production

### Frontend
- **Angular 17** - Latest stable version with standalone components
- **TypeScript 5.2+** - Strong typing and modern JavaScript features
- **RxJS** - Reactive programming for async operations
- **Reactive Forms** - Form handling with validation

### Architecture
- **Layered Architecture** - Clear separation between routers, services, and models
- **SOLID Principles** - Maintainable and extensible code
- **Clean Code** - Readable, well-documented code
- **RESTful API** - Standard HTTP methods and status codes

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Python 3.11 or higher** - [Download here](https://www.python.org/downloads/)
- **Node.js 18 or higher** - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js

### 1. Clone the Repository

git clone https://github.com/yourusername/portfolio.git
cd Portfolio


### 2. Backend Setup

#### A. Navigate to backend directory
cd backend


#### B. Create a virtual environment (recommended)
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate


#### C. Install dependencies
pip install -r requirements.txt


#### D. Configure environment variables
# Copy the example file
cp .env.example .env

# Edit .env with your settings (optional for development)


#### E. Run the backend server
# Development mode (with auto-reload)
python -m app.main

# Or using uvicorn directly
uvicorn app.main:app --reload


The backend API will be available at: **http://localhost:8000**
- API Documentation (Swagger): **http://localhost:8000/api/docs**
- ReDoc Documentation: **http://localhost:8000/api/redoc**

---

### 3. Frontend Setup

#### A. Open a new terminal and navigate to frontend directory
cd frontend


#### B. Install dependencies
npm install


#### C. Run the development server
npm start


The frontend application will be available at: **http://localhost:4200**

---

## 📄 Available Pages

### 1. **Home** (`/`)
- Professional introduction
- Highlights of skills and expertise
- Call-to-action buttons

### 2. **About** (`/about`)
- Professional profile
- Technical skills categorized by frontend, backend, and tools
- Development philosophy and values

### 3. **Projects** (`/projects`)
- Dynamic project listing from API
- Project cards with technologies and descriptions
- Featured projects highlighted

### 4. **Project Detail** (`/projects/:id`)
- Full project information
- Detailed description
- Technologies used
- Links to repository and live demo

### 5. **Approach** (`/approach`)
- Development methodology
- Best practices and principles
- Quality assurance process
- Workflow explanation

### 6. **Contact** (`/contact`)
- Functional contact form
- Frontend and backend validation
- Success/error feedback
- Alternative contact methods

---

## 🔌 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects only
- `GET /api/projects/{id}` - Get project details

### Contact
- `POST /api/contact` - Submit contact form

### Health
- `GET /api/health` - API health check

Full API documentation available at `/api/docs` when backend is running.

---

## 📦 Build for Production

### Backend

# Make sure you're in the backend directory
cd backend

# Set environment variables for production
# Update .env file with production settings

# Run with production ASGI server
uvicorn app.main:app --host 0.0.0.0 --port 8000


### Frontend

# Make sure you're in the frontend directory
cd frontend

# Build for production
npm run build

# Output will be in dist/ directory


---

## 🧪 Code Quality Features

### Backend
- ✅ **Layered Architecture** - Routers, Services, Models, Schemas
- ✅ **Input Validation** - Pydantic schemas with type checking
- ✅ **Error Handling** - Custom exception handlers
- ✅ **CORS Configuration** - Configured for frontend integration
- ✅ **Environment Configuration** - Centralized settings management
- ✅ **Logging** - Structured logging for debugging

### Frontend
- ✅ **Modular Structure** - Feature-based organization
- ✅ **Standalone Components** - Modern Angular architecture
- ✅ **Type Safety** - Strict TypeScript configuration
- ✅ **Reactive Forms** - Form validation and error handling
- ✅ **HTTP Services** - Centralized API communication
- ✅ **Responsive Design** - Mobile-first CSS with Flexbox and Grid
- ✅ **Path Aliases** - Clean imports with @core, @shared, @features

---

## 🎨 Design Principles

- **Professional & Minimalist** - Clean, focused design
- **Responsive** - Works on all devices (mobile, tablet, desktop)
- **Accessible** - Semantic HTML and ARIA attributes
- **Modern Typography** - Inter font for readability
- **Consistent Color Scheme** - Professional blue palette
- **Smooth Animations** - Subtle hover effects and transitions

---

## 🔒 Security Features

- Input validation on both frontend and backend
- Email validation using Pydantic
- CORS configuration for allowed origins
- Environment variable management for sensitive data
- HTTP-only error messages in production

---

## 📝 Customization

### Update Personal Information

1. **Backend Projects** - Edit `backend/app/services/project_service.py`
2. **Frontend Content** - Update text in component templates
3. **Contact Links** - Update footer and contact page
4. **Styling** - Modify component CSS files

### Add New Projects

Edit `backend/app/services/project_service.py` and add your project to the `_get_initial_projects()` method.

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourusername)
- **GitHub**: [Your Profile](https://github.com/yourusername)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👏 Acknowledgments

- Built with ❤️ using Angular and FastAPI
- Designed with modern web development best practices
- Inspired by industry-leading portfolio sites

---

**Ready for recruiters and production deployment** ✨
