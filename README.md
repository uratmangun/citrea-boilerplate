# Citrea Boilerplate

A comprehensive, production-ready React starter template for building modern web applications with Citrea blockchain integration. This boilerplate combines the latest React ecosystem tools with Web3 capabilities, Supabase backend, and a complete development workflow.

## ✨ Features

### Frontend & Development
- ⚡ **Vite** - Lightning-fast build tool with HMR and optimized production builds
- ⚛️ **React 19** - Latest React with concurrent features and modern hooks
- 🔷 **TypeScript** - Full type safety with strict configuration
- 🎯 **Tailwind CSS** - Utility-first CSS with custom amber theme and animations
- 📱 **Responsive Design** - Mobile-first approach with modern UI components
- 🔄 **React Router** - Client-side routing with lazy loading and error boundaries

### Web3 & Blockchain
- 🔐 **Privy Authentication** - Seamless Web3 wallet connection and management
- 🌐 **Citrea Integration** - Pre-configured for Citrea testnet with chain switching
- 💰 **Wallet Balance Display** - Real-time balance fetching with 18-decimal precision
- 🔄 **viem** - Type-safe Ethereum interactions and contract calls
- ⛓️ **Multi-chain Support** - Ready for additional blockchain networks

### Backend & Database
- 🗄️ **Supabase** - Complete backend-as-a-service with PostgreSQL
- 👤 **User Management** - User profiles with Row Level Security (RLS)
- 📁 **File Storage** - Screenshot uploads with public bucket configuration
- 🔄 **Edge Functions** - Serverless functions with Deno runtime
- 🔐 **Authentication** - JWT-based auth with multiple providers

### Development Experience
- 🧪 **Vitest** - Fast unit testing with React Testing Library and coverage
- 📏 **ESLint & Prettier** - Comprehensive code quality and formatting
- 🎨 **shadcn/ui** - Beautiful, accessible UI components
- 🔧 **Bun/PNPM** - Fast package management (no npm/yarn)
- 🚀 **CI/CD Ready** - GitHub Actions workflow templates

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- A Privy app ID (create one at [privy.io](https://privy.io))
- GitHub CLI (optional, for template usage)

### Creating a New Project from Template

#### Option 1: Using GitHub CLI (Recommended)

```bash
# Create a new repository from this template
gh repo create my-citrea-app --template uratmangun/citrea-boilerplate --public

# Clone your new repository
gh repo clone my-citrea-app
cd my-citrea-app
```

#### Option 2: Using GitHub Web Interface

1. Go to [github.com/uratmangun/citrea-boilerplate](https://github.com/uratmangun/citrea-boilerplate)
2. Click the green **"Use this template"** button
3. Choose **"Create a new repository"**
4. Fill in your repository details and click **"Create repository"**
5. Clone your new repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

#### Option 3: Manual Clone (Development)

```bash
# For contributing to this template or development purposes
git clone https://github.com/uratmangun/citrea-boilerplate.git
cd citrea-boilerplate
```

### Installation

1. **Install dependencies**
   ```bash
   bun install
   # or
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   # Supabase Configuration
   VITE_SUPABASE_URL=http://127.0.0.1:54321
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   JWT_SECRET=your_32_character_random_string
   
   # Privy Configuration
   VITE_PRIVY_APP_ID=your_privy_app_id
   ```

3. **Start Supabase (Local Development)**
   ```bash
   bunx supabase start
   ```
   
   This will start all Supabase services locally and display the connection details including your `VITE_SUPABASE_ANON_KEY`.

4. **Apply database migrations**
   ```bash
   # Get project ID from config
   set PROJECT_ID (grep '^project_id' supabase/config.toml | cut -d'"' -f2)
   set CONTAINER_ID (docker ps --filter "name=supabase_db_$PROJECT_ID" --format "{{.ID}}")
   
   # Apply migrations
   cat supabase/migrations/20250723000844_create_users_table.sql | docker exec -i $CONTAINER_ID psql -U postgres -d postgres
   cat supabase/migrations/20250724000001_create_screenshots_bucket.sql | docker exec -i $CONTAINER_ID psql -U postgres -d postgres
   ```

5. **Start the development server**
   ```bash
   bun dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── auth/           # Authentication (Privy, chain switching)
│   │   ├── common/         # Shared components (error boundaries, loading)
│   │   ├── icons/          # Custom icon components
│   │   ├── layout/         # Layout components and navigation
│   │   ├── providers/      # React context providers
│   │   ├── ui/            # shadcn/ui components
│   │   └── wallet/        # Wallet-related components
│   ├── config/            # Configuration files
│   │   └── citrea-chain.ts # Citrea network configuration
│   ├── hooks/             # Custom React hooks
│   │   ├── use-error-handler.ts # Error handling utilities
│   │   ├── use-toast.ts   # Toast notifications
│   │   └── useWalletManager.ts # Wallet management
│   ├── lib/               # Utility libraries
│   │   ├── supabase.ts    # Supabase client configuration
│   │   ├── supabase-errors.ts # Error handling for Supabase
│   │   └── utils.ts       # General utilities
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx   # Landing page with wallet integration
│   │   ├── AboutPage.tsx  # About page
│   │   ├── IdeasPage.tsx  # Ideas/features page
│   │   └── NotFoundPage.tsx # 404 error page
│   ├── types/             # TypeScript type definitions
│   │   └── database.ts    # Supabase database types
│   └── test/              # Test configuration and utilities
├── supabase/              # Supabase backend configuration
│   ├── config.toml        # Supabase local development config
│   ├── functions/         # Edge Functions (Deno)
│   │   └── hello-world/   # Example edge function
│   └── migrations/        # Database migrations
│       ├── 20250723000844_create_users_table.sql
│       └── 20250724000001_create_screenshots_bucket.sql
├── .windsurf/             # Windsurf IDE configuration
│   ├── rules/            # Development rules and standards
│   └── workflows/        # Automated workflows
└── coverage/              # Test coverage reports
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun build` | Build for production |
| `bun preview` | Preview production build |
| `bun test` | Run tests in watch mode |
| `bun test:run` | Run tests once |
| `bun test:ui` | Run tests with UI |
| `bun test:coverage` | Run tests with coverage |
| `bun lint` | Lint code |
| `bun lint:fix` | Fix linting issues |
| `bun format` | Format code with Prettier |
| `bun format:check` | Check code formatting |
| `bun type-check` | Check TypeScript types |
| `bun check-all` | Run all checks (type, lint, format, test) |

## 🔐 Web3 Configuration

### Environment Setup

1. Create a new app at [privy.io](https://privy.io)
2. Go to your dashboard to find your App ID
3. Update your `.env` file with your credentials

### Wallet Integration

The project includes:
- **Wallet Connection**: Privy handles wallet authentication
- **Balance Display**: Real-time balance fetching with full 18-decimal precision
- **Network Management**: Automatic Citrea testnet configuration
- **Chain Switching**: Seamless network switching capabilities

### Citrea Network

The application is pre-configured for Citrea testnet with:
- RPC endpoints
- Chain ID configuration
- Native token (cBTC) support
- Block explorer integration

### Error Handling

The project includes comprehensive error handling for:
- Wallet connection failures
- Network switching errors
- Balance fetching issues
- Transaction failures

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components built on top of:
- **Radix UI** - Unstyled, accessible components
- **Tailwind CSS** - Utility-first styling
- **Class Variance Authority** - Component variants
- **Lucide React** - Beautiful icons

### Adding New Components

```bash
bunx shadcn@latest add button
# or
npx shadcn@latest add button
```

## 🧪 Testing

The project is configured with:
- **Vitest** - Fast test runner
- **React Testing Library** - Component testing utilities
- **jsdom** - DOM environment for tests
- **@testing-library/jest-dom** - Custom matchers

### Running Tests

```bash
# Run tests in watch mode
bun test

# Run tests once
bun test:run

# Run tests with coverage
bun test:coverage

# Run tests with UI
bun test:ui
```

## 🗄️ Supabase Configuration

### Local Development Setup

This project uses Supabase for backend services. The local development environment is fully configured and ready to use.

#### Starting Supabase Services

```bash
# Start all Supabase services locally
bunx supabase start

# Stop services when done
bunx supabase stop
```

#### Database Schema

The project includes pre-configured database migrations:

**Users Table** (`public.users`)
- User profile management with Row Level Security (RLS)
- Fields: `id`, `email`, `full_name`, `avatar_url`, `created_at`, `updated_at`
- Policies: Users can only access their own data

**Storage Bucket** (`screenshots`)
- Public file storage for screenshots and images
- Supports: PNG, JPEG, WebP formats
- Size limit: 10MB per file

#### Edge Functions

Located in `supabase/functions/`, these serverless functions run on Deno:

```bash
# Deploy function to local environment
set PROJECT_ID (grep '^project_id' supabase/config.toml | cut -d'"' -f2)
set CONTAINER_ID (docker ps --filter "name=supabase_edge_runtime_$PROJECT_ID" --format "{{.ID}}")
docker cp supabase/functions/hello-world $CONTAINER_ID:/functions/
docker restart $CONTAINER_ID

# Test function
curl -X POST http://127.0.0.1:54321/functions/v1/hello-world \
  -H "Authorization: Bearer [your-anon-key]" \
  -H "Content-Type: application/json" \
  -d '{"name": "World"}'
```

#### Migration Management

Apply new migrations directly to the PostgreSQL container:

```bash
# Get project configuration
set PROJECT_ID (grep '^project_id' supabase/config.toml | cut -d'"' -f2)
set CONTAINER_ID (docker ps --filter "name=supabase_db_$PROJECT_ID" --format "{{.ID}}")

# Apply migration
cat supabase/migrations/your_migration.sql | docker exec -i $CONTAINER_ID psql -U postgres -d postgres
```

#### Supabase Services

When running locally, the following services are available:

| Service | URL | Purpose |
|---------|-----|---------|
| API Gateway | http://127.0.0.1:54321 | REST API and GraphQL |
| Studio | http://127.0.0.1:54323 | Database management UI |
| Inbucket | http://127.0.0.1:54324 | Email testing |
| Edge Functions | http://127.0.0.1:54321/functions/v1 | Serverless functions |

### Production Deployment

For production deployment:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Update your environment variables with production URLs
3. Run migrations: `bunx supabase db push`
4. Deploy edge functions: `bunx supabase functions deploy`

## 📦 Technologies Used

### Core Stack
- **Frontend**: React 19, TypeScript, Vite
- **Backend**: Supabase (PostgreSQL, Edge Functions, Storage, Auth)
- **Styling**: Tailwind CSS, shadcn/ui, Lucide React icons
- **Web3**: Privy, viem, Citrea network integration

### Development Tools
- **Package Manager**: Bun (recommended) or PNPM
- **Testing**: Vitest, React Testing Library, Coverage reporting
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **Routing**: React Router DOM with lazy loading
- **State Management**: React hooks, Context API

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run the checks: `bun check-all`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all checks pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue if needed
3. Refer to the [Supabase Documentation](https://supabase.com/docs)
4. Check the [shadcn/ui Documentation](https://ui.shadcn.com/)

---

**Happy coding! 🚀**
