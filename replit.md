# TiltUp Learning Platform

## Overview

TiltUp is an e-learning platform designed to teach Tilt-Up construction techniques through interactive educational modules. The platform provides a structured learning experience where users can browse construction modules, track their progress, and complete courses on various aspects of Tilt-Up construction methodology—from planning and design to finishing work.

The application follows a modern full-stack architecture with a React-based frontend and Express backend, using PostgreSQL for data persistence and implementing a clean separation of concerns between client, server, and shared code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Application Structure

**Monorepo Organization**: The codebase uses a monorepo structure with three main directories:
- `client/` - Frontend React application
- `server/` - Backend Express API
- `shared/` - Shared TypeScript schemas and types

This architecture ensures type safety across the full stack while maintaining clear boundaries between frontend and backend concerns.

**Build System**: Uses Vite for frontend bundling and development, with esbuild for production server builds. The development environment includes hot module replacement (HMR) for rapid iteration.

### Frontend Architecture

**UI Framework**: React with TypeScript, using functional components and hooks exclusively.

**Routing**: Implements wouter for client-side routing, providing a lightweight alternative to React Router. Routes are defined centrally in `App.tsx` with support for:
- Home page (module grid)
- Module detail pages (dynamic routes)
- 404 handling

**State Management**: Adopts TanStack Query (React Query) for server state management. This choice eliminates the need for Redux or similar libraries by:
- Caching API responses automatically
- Handling loading and error states
- Providing optimistic updates through mutations
- Invalidating queries after data changes

**Component Library**: Built on shadcn/ui components (Radix UI primitives with Tailwind styling). This provides:
- Accessible, unstyled primitives from Radix UI
- Custom styling via Tailwind CSS
- Consistent design system through CSS variables
- Full component customization without fighting framework opinions

**Styling Approach**: Uses Tailwind CSS with a custom design system defined through CSS variables. The design draws inspiration from modern e-learning platforms (Coursera, Udemy) while incorporating construction industry aesthetics. Key decisions:
- CSS variables for theme consistency
- Responsive grid layouts for module cards
- Navy blue primary color palette (#003366)
- Inter and Open Sans font families
- Elevation system using hover/active states

### Backend Architecture

**API Framework**: Express.js with TypeScript, implementing a RESTful API pattern.

**Route Structure**: Clean route definitions in `server/routes.ts` with endpoints for:
- GET `/api/modules` - List all modules
- GET `/api/modules/:id` - Get specific module
- PATCH `/api/modules/:id/progress` - Update progress
- POST `/api/modules/:id/complete` - Mark complete

**Validation**: Uses Zod schemas from the shared layer for request validation, ensuring type safety and runtime validation consistency between client and server.

**Data Layer Abstraction**: Implements a storage interface pattern (`IStorage`) allowing for different storage backends. Current implementation:
- `MemStorage` - In-memory storage for development
- Ready for migration to PostgreSQL via Drizzle ORM

This abstraction means switching to a real database requires only implementing the interface with database calls, without changing route handlers.

**Error Handling**: Consistent error responses with appropriate HTTP status codes (400 for validation errors, 404 for not found, 500 for server errors).

### Data Layer

**ORM Choice**: Drizzle ORM selected for PostgreSQL interactions. This decision provides:
- Type-safe database queries
- SQL-like syntax familiarity
- Lightweight compared to TypeORM/Prisma
- Excellent TypeScript integration
- Schema-first approach with migrations

**Database Schema**: Defined in `shared/schema.ts` using Drizzle's schema builders:
- `modules` table with fields: id, number, title, description, content, imageUrl, progress, completed
- Uses drizzle-zod for automatic Zod schema generation from database schemas
- Ensures type consistency between database, API validation, and TypeScript types

**Migration Strategy**: Configured via `drizzle.config.ts` to use PostgreSQL with Neon serverless driver, outputting migrations to `/migrations` directory.

### Type Safety Strategy

**Shared Schema Layer**: The `shared/` directory contains Drizzle table definitions and Zod schemas that are:
- Imported by both client and server
- Used for TypeScript type inference
- Used for runtime validation on the server
- Referenced for form validation on the client

This eliminates type duplication and ensures the entire stack stays in sync.

**Path Aliases**: Configured in `tsconfig.json` and `vite.config.ts`:
- `@/` maps to `client/src/`
- `@shared/` maps to `shared/`
- `@assets/` maps to `attached_assets/`

### Development Workflow

**Development Server**: Custom Vite integration in `server/vite.ts` runs both Express and Vite dev server in middleware mode, enabling:
- Single command to start full stack
- HMR for frontend changes
- Backend restart on server changes
- Request/response logging

**Build Process**: 
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server to `dist/index.js`
- Production uses static file serving from built frontend

**Environment Configuration**: Uses environment variables for configuration, with DATABASE_URL required for Drizzle connection.

## External Dependencies

### UI Component System

**shadcn/ui**: Provides pre-built, accessible React components built on Radix UI primitives. Components are copied into the project (not installed as npm package), allowing full customization. Located in `client/src/components/ui/`.

**Radix UI**: Headless UI component library providing accessibility features and behavior without styling opinions. Used as foundation for all UI components.

### Styling Framework

**Tailwind CSS**: Utility-first CSS framework configured with custom design tokens via CSS variables. PostCSS processes Tailwind directives during build.

**class-variance-authority (CVA)**: Used for managing component variants in a type-safe way, particularly in button and badge components.

### Database and ORM

**Neon Serverless PostgreSQL**: PostgreSQL database provider with serverless driver (`@neondatabase/serverless`) for edge/serverless compatibility.

**Drizzle ORM**: Type-safe ORM with schema defined in TypeScript, migrations managed via drizzle-kit CLI.

### Form Handling

**React Hook Form**: Form state management with `@hookform/resolvers` for Zod schema integration, enabling declarative validation.

### API Client

**TanStack Query (React Query)**: Server state management library handling:
- Data fetching
- Caching strategies
- Mutation management
- Automatic background refetching

### Routing

**wouter**: Lightweight React router (1.5KB) providing hooks-based routing without the complexity of React Router.

### Development Tools

**Replit Plugins**: Development environment integrations:
- `@replit/vite-plugin-runtime-error-modal` - Error overlay
- `@replit/vite-plugin-cartographer` - Code navigation
- `@replit/vite-plugin-dev-banner` - Development indicator

### Build Tools

**Vite**: Frontend build tool and dev server
**esbuild**: Fast JavaScript bundler for server build
**tsx**: TypeScript execution for development server
**TypeScript**: Type system across entire stack

### Utility Libraries

**date-fns**: Date manipulation and formatting
**clsx** + **tailwind-merge**: Conditional className utilities
**nanoid**: Unique ID generation
**lucide-react**: Icon library with React components