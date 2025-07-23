# Citrea Boilerplate

A modern, production-ready React starter template for building Citrea blockchain applications. Built with Vite, TypeScript, Privy authentication, and Tailwind CSS. This template provides a solid foundation for building scalable Web3 applications on the Citrea network with wallet integration and blockchain connectivity.

## ✨ Features

- ⚡ **Vite** - Fast build tool with HMR and optimized production builds
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Full type safety and IntelliSense support
- 🔐 **Privy** - Web3 authentication and wallet management
- 🌐 **Citrea Integration** - Ready-to-use Citrea testnet configuration
- 💰 **Wallet Balance Display** - Real-time balance fetching with 18-decimal precision
- 🔄 **viem** - Type-safe Ethereum interactions
- 🎯 **Tailwind CSS** - Utility-first CSS framework with custom amber theme
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- 📏 **ESLint & Prettier** - Code quality and formatting
- 🔄 **React Router** - Client-side routing
- 📱 **Responsive Design** - Mobile-first approach

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
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Privy App ID:
   ```env
   VITE_PRIVY_APP_ID=your_privy_app_id
   ```

3. **Start the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── layout/         # Layout components
│   ├── wallet/         # Wallet-related components
│   └── ui/            # UI components
├── hooks/              # Custom React hooks
├── config/            # Configuration files
│   └── citrea-chain.ts # Citrea network configuration
├── pages/             # Page components
├── types/             # TypeScript type definitions
├── test/              # Test utilities
└── assets/            # Static assets
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

## 📦 Technologies Used

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide React icons
- **Web3**: Privy, viem, Citrea network
- **Routing**: React Router DOM
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **Package Manager**: Bun (recommended) or npm

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
