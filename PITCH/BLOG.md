# Citrea Boilerplate: A Modern React Starter for Blockchain Applications

## Introduction

Building blockchain applications can be complex, especially when you need to integrate wallet authentication, handle Web3 interactions, and create a seamless user experience. The Citrea Boilerplate eliminates these barriers by providing a production-ready React starter template specifically designed for building applications on the Citrea network.

## What is Citrea Boilerplate?

Citrea Boilerplate is a modern, comprehensive React starter template that provides everything you need to build scalable Web3 applications on the Citrea blockchain network. Built with the latest technologies and best practices, it offers seamless wallet integration through Privy authentication, real-time balance fetching with 18-decimal precision, and a beautiful, responsive UI powered by Tailwind CSS and shadcn/ui components.

The boilerplate serves as a solid foundation for developers who want to focus on building their application logic rather than setting up the basic infrastructure. Whether you're building DeFi protocols, NFT marketplaces, gaming applications, or DAO tools, this template provides the essential building blocks to get started quickly.

## Tech Stack & Architecture

The Citrea Boilerplate leverages a carefully curated set of modern technologies:

### Frontend & UI Technologies
- **React 19** - Latest React with modern features and improved performance
- **TypeScript** - Full type safety and enhanced developer experience
- **Vite** - Lightning-fast build tool with Hot Module Replacement
- **Tailwind CSS** - Utility-first CSS framework with custom amber theme
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **Lucide React** - Comprehensive icon library
- **React Router** - Client-side routing for single-page applications

### Blockchain & Web3 Technologies
- **Privy** - Web3 authentication and wallet management
- **viem** - Type-safe Ethereum interactions and utilities
- **Citrea Integration** - Pre-configured testnet connectivity

### Backend & Database Technologies
- **Supabase** - Backend-as-a-Service with real-time capabilities
- **PostgreSQL** - Robust relational database (via Supabase)

### Development Tools
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Testing utilities for React components
- **ESLint & Prettier** - Code quality and formatting
- **Bun** - Fast JavaScript runtime and package manager

## Development Methodology: Kiro Specifications

This project follows a rigorous spec-driven development approach using Kiro specifications, ensuring every feature is thoroughly planned, designed, and implemented with clear requirements and acceptance criteria.

### Specifications Created:

1. **Navigation Ideas Tab** - Added a dedicated Ideas section to showcase project concepts and inspiration for building on Citrea, complete with navigation integration and responsive design.

2. **Homepage Redesign** - Transformed the homepage from a complex multi-section layout to a clean, focused introduction that immediately communicates the project's purpose to developers.

3. **Citrea Wallet Integration** - Implemented comprehensive wallet connectivity with Privy authentication, real-time balance fetching, and seamless Web3 interactions.

4. **Privy Citrea Integration** - Configured authentication system specifically for Citrea network with proper testnet settings and wallet management.

5. **Vite React Supabase shadcn** - Established the foundational architecture combining Vite build system, React framework, Supabase backend, and shadcn/ui component library.

Each specification follows the three-file Kiro format:
- **Requirements**: User stories and acceptance criteria using EARS notation
- **Design**: Technical architecture and implementation approach
- **Tasks**: Discrete, trackable implementation steps with clear success criteria

## Key Features

1. **Wallet Authentication**: Seamless Web3 authentication powered by Privy, supporting multiple wallet providers with a clean, intuitive interface.

2. **Real-time Balance Display**: Accurate balance fetching with 18-decimal precision, automatically updating when wallet connections change.

3. **Responsive Design**: Mobile-first approach ensuring perfect functionality across all devices, from smartphones to desktop computers.

4. **Type Safety**: Full TypeScript implementation providing compile-time error checking and enhanced developer experience.

5. **Modern UI Components**: Beautiful, accessible components from shadcn/ui with consistent design system and smooth animations.

6. **Testing Infrastructure**: Comprehensive testing setup with Vitest and React Testing Library for reliable, maintainable code.

## Demo

### Homepage - Clean and Focused
![Citrea Boilerplate Homepage](https://supabase.uratmangun.ovh/object/sign/screenshots/homepage-1753363362.png?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzY3JlZW5zaG90cy9ob21lcGFnZS0xNzUzMzYzMzYyLnBuZyIsImlhdCI6MTc1MzM2MzQwMSwiZXhwIjoxNzg0ODk5NDAxfQ.6UTCpRuZxIZsQSUDsqqf0dXUpuoDRaPNtWPSEj9zp2k)

The homepage features a clean, centered design that immediately communicates the project's purpose. The minimalist approach ensures developers can quickly understand what the boilerplate offers without distractions.

### Ideas Page - Project Inspiration
![Ideas Page with Project Concepts](https://supabase.uratmangun.ovh/object/sign/screenshots/ideas-1753363387.png?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzY3JlZW5zaG90cy9pZGVhcy0xNzUzMzYzMzg3LnBuZyIsImlhdCI6MTc1MzM2MzQxMCwiZXhwIjoxNzg0ODk5NDEwfQ.UnYUp8m4VZD_lTR7BtpeAEflzdTS8uGF-ujuc__I1Vc)

The Ideas page showcases various project concepts that can be built on Citrea, including DeFi protocols, NFT marketplaces, gaming applications, and more. This provides inspiration and demonstrates the versatility of the boilerplate.

**Live Demo**: [https://cfeee2b8.citrea-boilerplate.pages.dev](https://cfeee2b8.citrea-boilerplate.pages.dev)

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- A Privy app ID (create one at [privy.io](https://privy.io))
- GitHub CLI (optional, for template usage)

### Quick Setup

#### Option 1: Using GitHub CLI (Recommended)
```bash
# Create a new repository from this template
gh repo create my-citrea-app --template uratmangun/citrea-boilerplate --public

# Clone your new repository
gh repo clone my-citrea-app
cd my-citrea-app
```

#### Option 2: Using GitHub Web Interface
1. Visit the [Citrea Boilerplate repository](https://github.com/uratmangun/citrea-boilerplate)
2. Click "Use this template" → "Create a new repository"
3. Clone your new repository and navigate to the project directory

### Installation and Configuration
```bash
# Install dependencies
bun install

# Copy environment variables
cp .env.example .env.local

# Add your Privy App ID to .env.local
VITE_PRIVY_APP_ID=your_privy_app_id_here

# Start development server
bun dev
```

## Conclusion

The Citrea Boilerplate represents a significant step forward in Web3 development tooling. By combining modern React practices with blockchain-specific functionality, it eliminates the complexity typically associated with building Web3 applications. The spec-driven development approach using Kiro specifications ensures that every feature is well-planned, thoroughly tested, and properly documented.

Whether you're a seasoned blockchain developer or just starting your Web3 journey, this boilerplate provides the foundation you need to build production-ready applications on the Citrea network. The comprehensive testing suite, type safety, and modern architecture patterns make it suitable for both rapid prototyping and large-scale applications.

## Technical Deep Dive

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── layout/         # Layout components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
└── styles/             # Global styles and Tailwind config
```

### Key Dependencies

**Core Framework**:
- `react@^19.1.0` - Latest React with concurrent features
- `typescript@~5.8.3` - Type safety and developer experience
- `vite@^7.0.4` - Fast build tool and development server

**Web3 Integration**:
- `@privy-io/react-auth@^2.20.0` - Wallet authentication
- `viem@^2.33.0` - Ethereum interactions and utilities

**UI Framework**:
- `tailwindcss@^3.4.0` - Utility-first CSS framework
- `@radix-ui/react-*` - Accessible component primitives
- `lucide-react@^0.525.0` - Icon library

**Backend Services**:
- `@supabase/supabase-js@^2.52.0` - Backend-as-a-Service

**Testing & Quality**:
- `vitest@^3.2.4` - Fast unit testing framework
- `@testing-library/react@^16.3.0` - React testing utilities
- `eslint@^9.30.1` - Code linting and quality

### Development Workflow

The development process follows a structured approach:

1. **Specification Creation**: Every feature begins with a comprehensive Kiro specification defining requirements, design, and implementation tasks.

2. **Type-Safe Development**: TypeScript ensures compile-time error checking and provides excellent IntelliSense support.

3. **Component-Driven Architecture**: Reusable components built with shadcn/ui provide consistency and maintainability.

4. **Testing Integration**: Comprehensive test coverage with Vitest and React Testing Library ensures reliability.

5. **Continuous Integration**: ESLint and Prettier maintain code quality and consistency across the project.

The combination of modern tooling, comprehensive specifications, and best practices makes the Citrea Boilerplate an ideal starting point for any Web3 application development project.
