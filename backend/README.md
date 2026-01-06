# Backend - Portfolio API

FastAPI backend with clean architecture and best practices.

## 🛠️ Prerequisites

- **Python 3.11+** (Required)
  - Windows: Download from [python.org](https://www.python.org/downloads/)
  - Verify installation: `python --version`

## 🚀 Quick Start

### 1. Install Python (if not installed)

**Windows:**
1. Download Python from https://www.python.org/downloads/
2. Run installer and check "Add Python to PATH"
3. Verify: `python --version`

### 2. Create Virtual Environment (Recommended)

```powershell
# Create virtual environment
python -m venv venv

# Activate it
venv\Scripts\activate

# You should see (venv) in your terminal
```

### 3. Install Dependencies

```powershell
pip install -r requirements.txt
```

### 4. Configure Environment

```powershell
# Copy example env file
copy .env.example .env

# Edit .env if needed (optional for development)
```

### 5. Run the Server

```powershell
# Using Python module
python -m app.main

# Or using uvicorn directly
uvicorn app.main:app --reload
```

The API will be available at:
- **API**: http://localhost:8000
- **Swagger Docs**: http://localhost:8000/api/docs
- **ReDoc**: http://localhost:8000/api/redoc

## 📁 Project Structure

```
backend/
├── app/
│   ├── core/              # Configuration and exceptions
│   │   ├── config.py      # Environment settings
│   │   └── exceptions.py  # Custom error handlers
│   ├── models/            # Domain models
│   │   ├── project.py
│   │   └── contact.py
│   ├── schemas/           # Pydantic validation schemas
│   │   ├── project.py
│   │   └── contact.py
│   ├── services/          # Business logic
│   │   ├── project_service.py
│   │   └── contact_service.py
│   ├── routers/           # API endpoints
│   │   ├── projects.py
│   │   ├── contact.py
│   │   └── health.py
│   └── main.py            # Application entry point
├── requirements.txt       # Dependencies
└── .env.example          # Environment template
```

## 🔌 API Endpoints

### Projects
- `GET /api/projects` - List all projects
- `GET /api/projects/featured` - List featured projects
- `GET /api/projects/{id}` - Get project detail

### Contact
- `POST /api/contact` - Submit contact form

### Health
- `GET /api/health` - Health check

## 📝 Adding New Projects

Edit `app/services/project_service.py` and add projects to the `_get_initial_projects()` method.

## 🧪 Testing

The API includes automatic validation and error handling. Test endpoints using:
- Swagger UI at `/api/docs`
- ReDoc at `/api/redoc`
- Any HTTP client (Postman, curl, etc.)

## 📦 Dependencies

- **FastAPI** - Modern web framework
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation
- **python-dotenv** - Environment management

## 🔒 Environment Variables

See `.env.example` for all available configuration options.

## 💡 Tips

- Backend runs on port 8000 by default
- Frontend expects backend at http://localhost:8000/api
- CORS is configured for http://localhost:4200 (Angular dev server)
