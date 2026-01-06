# 🏗️ Architecture Documentation

## Overview

This portfolio application follows a **clean, layered architecture** with clear separation between frontend and backend, ensuring maintainability, scalability, and testability.

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       USER BROWSER                          │
│                     (http://localhost:4200)                 │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTP Requests
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    ANGULAR FRONTEND                         │
│                                                             │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Features   │  │   Shared     │  │    Core      │      │
│  │  (Pages)    │  │  Components  │  │  Services    │      │
│  └─────────────┘  └──────────────┘  └──────────────┘      │
│         │                │                   │              │
│         └────────────────┴───────────────────┘              │
│                          │                                  │
│                    Router Outlet                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ REST API Calls
                         │ (http://localhost:8000/api)
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    FASTAPI BACKEND                          │
│                                                             │
│  ┌──────────────────────────────────────────────────┐      │
│  │                   Routers                         │      │
│  │  (API Endpoints - HTTP Layer)                    │      │
│  │  - projects.py   - contact.py   - health.py     │      │
│  └────────────┬─────────────────────────────────────┘      │
│               │                                             │
│  ┌────────────▼─────────────────────────────────────┐      │
│  │                  Services                         │      │
│  │  (Business Logic Layer)                          │      │
│  │  - project_service.py   - contact_service.py    │      │
│  └────────────┬─────────────────────────────────────┘      │
│               │                                             │
│  ┌────────────▼─────────────────────────────────────┐      │
│  │                   Models                          │      │
│  │  (Domain Entities)                               │      │
│  │  - project.py   - contact.py                     │      │
│  └──────────────────────────────────────────────────┘      │
│                                                             │
│  ┌──────────────────────────────────────────────────┐      │
│  │                  Schemas                          │      │
│  │  (Pydantic Validation)                           │      │
│  │  - project.py   - contact.py                     │      │
│  └──────────────────────────────────────────────────┘      │
│                                                             │
│  ┌──────────────────────────────────────────────────┐      │
│  │                    Core                           │      │
│  │  - config.py   - exceptions.py                   │      │
│  └──────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

## Backend Architecture (FastAPI)

### Layered Architecture Pattern

```
┌──────────────────────────────────────────────┐
│                 HTTP Request                  │
└───────────────────┬──────────────────────────┘
                    │
┌───────────────────▼──────────────────────────┐
│               ROUTER LAYER                    │
│  • Receives HTTP requests                    │
│  • Route definitions                         │
│  • HTTP status codes                         │
│  • Response formatting                       │
└───────────────────┬──────────────────────────┘
                    │
┌───────────────────▼──────────────────────────┐
│              SCHEMA LAYER                     │
│  • Request validation (Pydantic)             │
│  • Response serialization                    │
│  • Type checking                             │
│  • Data transformation                       │
└───────────────────┬──────────────────────────┘
                    │
┌───────────────────▼──────────────────────────┐
│              SERVICE LAYER                    │
│  • Business logic                            │
│  • Data processing                           │
│  • Orchestration                             │
│  • Independent of HTTP                       │
└───────────────────┬──────────────────────────┘
                    │
┌───────────────────▼──────────────────────────┐
│               MODEL LAYER                     │
│  • Domain entities                           │
│  • Business rules                            │
│  • Pure Python classes                       │
│  • Framework agnostic                        │
└───────────────────────────────────────────────┘
```

### Benefits of This Architecture:

✅ **Separation of Concerns** - Each layer has a single responsibility
✅ **Testability** - Easy to unit test each layer independently
✅ **Maintainability** - Changes in one layer don't affect others
✅ **Scalability** - Easy to extend with new features
✅ **Flexibility** - Can swap implementations without breaking code

## Frontend Architecture (Angular)

### Feature-Based Organization

```
src/app/
│
├── core/                      # Core functionality (singleton services)
│   ├── models/               # TypeScript interfaces
│   │   ├── project.model.ts
│   │   └── contact.model.ts
│   └── services/             # API services
│       ├── project.service.ts
│       └── contact.service.ts
│
├── shared/                    # Reusable components
│   └── components/
│       ├── header/
│       ├── footer/
│       └── project-card/
│
├── features/                  # Feature modules (pages)
│   ├── home/
│   ├── about/
│   ├── projects/
│   │   ├── projects.component.ts
│   │   └── project-detail/
│   ├── approach/
│   └── contact/
│
├── app.component.ts          # Root component
├── app.config.ts             # App configuration
└── app.routes.ts             # Routing configuration
```

### Data Flow

```
┌─────────────────────────────────────────────────┐
│              USER ACTION                         │
│   (Click, Form Submit, Navigation)              │
└───────────────────┬─────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────┐
│             COMPONENT                            │
│  • Event handling                               │
│  • User interactions                            │
│  • Template bindings                            │
└───────────────────┬─────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────┐
│              SERVICE                             │
│  • HTTP calls to backend                        │
│  • Data transformation                          │
│  • State management                             │
│  • Error handling                               │
└───────────────────┬─────────────────────────────┘
                    │
                    │ HTTP Request
                    ▼
            [Backend API]
                    │
                    │ HTTP Response
                    ▼
┌───────────────────────────────────────────────┐
│           COMPONENT (Update)                  │
│  • Receive data via Observable               │
│  • Update template                           │
│  • Display to user                           │
└───────────────────────────────────────────────┘
```

## API Communication Flow

### Example: Loading Projects

```
1. USER navigates to /projects

2. ProjectsComponent.ngOnInit()
   ↓
3. ProjectService.getAllProjects()
   ↓
4. HTTP GET http://localhost:8000/api/projects
   ↓
5. BACKEND Router receives request
   ↓
6. Schema validates request (if needed)
   ↓
7. Service processes business logic
   ↓
8. Models represent data
   ↓
9. Schema serializes response
   ↓
10. Router sends HTTP response
    ↓
11. ProjectService receives response
    ↓
12. Component updates with data
    ↓
13. Template renders projects
```

## Design Patterns Used

### Backend
- **Layered Architecture** - Separation of concerns
- **Dependency Injection** - Services injected into routers
- **Repository Pattern** - Services abstract data access
- **DTO Pattern** - Schemas for data transfer
- **Exception Handling** - Centralized error handlers

### Frontend
- **Component Pattern** - Reusable UI components
- **Service Pattern** - Business logic in services
- **Observable Pattern** - Reactive data streams (RxJS)
- **Module Pattern** - Feature organization
- **Lazy Loading** - On-demand module loading

## Security Considerations

### Backend
- ✅ Input validation with Pydantic
- ✅ CORS configured for specific origins
- ✅ Environment variable management
- ✅ Error messages don't leak sensitive info
- ✅ Request/response validation

### Frontend
- ✅ Form validation (frontend & backend)
- ✅ Type safety with TypeScript
- ✅ Sanitized user inputs
- ✅ HTTP-only error handling
- ✅ Secure API communication

## Performance Optimizations

### Backend
- Async/await for I/O operations
- Efficient data structures
- Minimal database queries (in-memory for demo)
- Response caching headers

### Frontend
- Lazy loading of routes
- OnPush change detection (where applicable)
- Efficient RxJS operators
- CSS optimization
- Tree-shaking with production build

## Testing Strategy

### Backend Unit Tests (Recommended)
```python
# test_project_service.py
def test_get_all_projects():
    service = ProjectService()
    projects = service.get_all_projects()
    assert len(projects) > 0
```

### Frontend Unit Tests (Recommended)
```typescript
// project.service.spec.ts
it('should get all projects', () => {
  service.getAllProjects().subscribe(projects => {
    expect(projects.length).toBeGreaterThan(0);
  });
});
```

## Deployment Considerations

### Backend
- Use production ASGI server (Gunicorn + Uvicorn)
- Set DEBUG=False in production
- Use environment variables for secrets
- Configure proper CORS origins
- Set up logging and monitoring

### Frontend
- Build with `ng build --configuration production`
- Serve static files from CDN
- Configure production API URL
- Enable compression
- Set up proper routing (hash or server-side)

---

**This architecture ensures the portfolio is:**
- ✅ Professional and production-ready
- ✅ Easy to maintain and extend
- ✅ Well-documented and understandable
- ✅ Following industry best practices
- ✅ Ready to impress recruiters and technical interviewers
