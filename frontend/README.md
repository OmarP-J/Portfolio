# Frontend - Portfolio Angular App

Modern Angular 17 application with standalone components and clean architecture.

## 🛠️ Prerequisites

- **Node.js 18+** (Required)
  - Verify: `node --version`
  - Already installed ✓

## 🚀 Quick Start

### 1. Install Dependencies

```powershell
npm install
```

This will install Angular and all required packages.

### 2. Run Development Server

```powershell
npm start
```

The app will be available at: **http://localhost:4200**

The app will automatically reload when you make changes.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── core/                  # Core functionality
│   │   │   ├── models/            # TypeScript interfaces
│   │   │   └── services/          # API services
│   │   ├── shared/                # Shared components
│   │   │   └── components/
│   │   │       ├── header/
│   │   │       ├── footer/
│   │   │       └── project-card/
│   │   ├── features/              # Feature modules (pages)
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── approach/
│   │   │   └── contact/
│   │   ├── app.component.ts       # Root component
│   │   ├── app.config.ts          # App configuration
│   │   └── app.routes.ts          # Routing configuration
│   ├── environments/              # Environment configs
│   ├── styles.css                 # Global styles
│   └── index.html                 # Entry HTML
├── angular.json                   # Angular CLI config
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencies
```

## 🎨 Architecture

### Standalone Components
Uses Angular's modern standalone component architecture - no NgModules needed!

### Path Aliases
Configured for clean imports:
- `@core/*` - Core services and models
- `@shared/*` - Shared components
- `@features/*` - Feature components
- `@environments/*` - Environment configs

### Services
- `ProjectService` - Handles project API calls
- `ContactService` - Handles contact form submission

### Routing
All pages configured with lazy loading support:
- `/` - Home
- `/about` - About Me
- `/projects` - Projects List
- `/projects/:id` - Project Detail
- `/approach` - Development Approach
- `/contact` - Contact Form

## 🔧 Available Scripts

```powershell
# Start development server
npm start

# Build for production
npm run build

# Run tests (if configured)
npm test
```

## 📡 API Integration

The app connects to the backend API at `http://localhost:8000/api` (configurable in `src/environments/environment.ts`)

Make sure the backend is running before starting the frontend.

## 🎨 Customization

### Update Content
- Edit component templates (`.html` files)
- Modify component styles (`.css` files)
- Update services for different API endpoints

### Change Theme
- Edit `src/styles.css` for global styles
- Modify component-specific CSS files
- Update color variables throughout

### Add Pages
1. Create component in `src/app/features/`
2. Add route in `app.routes.ts`
3. Add navigation link in `header.component.ts`

## 📱 Responsive Design

The app is fully responsive and works on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)

Uses modern CSS with Flexbox and Grid.

## ✨ Features

- **Reactive Forms** - Contact form with validation
- **HTTP Client** - API communication
- **Routing** - Multiple pages with navigation
- **Error Handling** - Loading states and error messages
- **TypeScript** - Full type safety
- **Modern CSS** - Flexbox, Grid, animations

## 💡 Tips

- Frontend runs on port 4200 by default
- Backend should be running on port 8000
- Hot reload is enabled - changes reflect immediately
- Check browser console for errors

## 🔗 Learn More

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
