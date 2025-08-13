# Advanced Tech Portfolio Website

## Overview

This is a cutting-edge portfolio website for Avumile Tati, showcasing advanced software engineering skills and modern development expertise. The application features an enhanced tech-focused design with interactive elements including animated terminal simulations, GitHub activity integration, live code showcases, and dynamic typing animations. Built as a sophisticated full-stack web application demonstrating expertise in React, TypeScript, modern UI/UX patterns, and contemporary web technologies.

## Recent Updates (Latest Stage)

- **Enhanced Hero Section**: Added animated typing effect cycling through professional roles, terminal-style greeting, and side-by-side layout with interactive terminal animation
- **Code Showcase Component**: Interactive code viewer displaying TypeScript, Node.js, and SQL examples with syntax highlighting and copy functionality
- **GitHub Activity Dashboard**: Comprehensive GitHub statistics display with repository showcases, language breakdowns, and contribution metrics
- **Advanced Animations**: Floating elements, gradient text effects, and smooth transitions throughout the interface
- **Professional Tech Stack**: Updated to showcase modern technologies (TypeScript, PostgreSQL, Docker, AWS) with enhanced visual representations
- **Expanded Projects**: Enhanced project descriptions with technical stack tags and GitHub integration links
- **Advanced Statistics**: Detailed metrics including 10+ projects, 15+ technologies, and comprehensive achievement tracking

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system featuring dark theme and gradient accents
- **State Management**: TanStack Query for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API endpoints for contact form submission and message retrieval
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Cloud Provider**: Neon Database for serverless PostgreSQL hosting
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Authentication and Authorization
- **Current Implementation**: No authentication system in place
- **Future Considerations**: Prepared for session-based authentication with PostgreSQL session store
- **Contact Access**: Contact messages stored without authentication (suitable for portfolio use case)

### External Service Integrations
- **Fonts**: Google Fonts integration for typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Image Hosting**: External image hosting via personal domain and CDN services
- **Development Tools**: Replit integration for development environment and runtime error handling

## External Dependencies

### Core Runtime Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **express**: Web application framework for backend API
- **wouter**: Lightweight routing library for React frontend

### UI and Styling Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives (dialogs, forms, navigation, etc.)
- **tailwindcss**: Utility-first CSS framework for responsive design
- **class-variance-authority**: Utility for creating consistent component variants
- **clsx**: Conditional className utility for dynamic styling

### Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking for JavaScript
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

### Form Handling and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolver integrations
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Additional Utilities
- **@tanstack/react-query**: Data fetching and caching library
- **date-fns**: Modern date utility library
- **nanoid**: URL-safe unique string ID generator
- **cmdk**: Command palette component for enhanced UX