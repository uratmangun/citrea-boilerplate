# Design Document

## System Architecture
The Privy + Citrea integration will follow a provider-wrapper pattern, integrating into the existing React application structure. The design leverages Privy's React SDK to handle authentication and wallet management, while extending it with Citrea-specific chain configuration.

```
┌─────────────────────────────────────────────────────────────┐
│                     App.tsx (Root)                          │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │            GlobalErrorBoundary                          │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │              PrivyProvider                          │ │ │
│  │  │  ┌─────────────────────────────────────────────────┐ │ │ │
│  │  │  │            ThemeProvider                        │ │ │ │
│  │  │  │  ┌─────────────────────────────────────────────┐ │ │ │ │
│  │  │  │  │          BrowserRouter                      │ │ │ │ │
│  │  │  │  │    ┌─────────────────────────────────────┐   │ │ │ │ │
│  │  │  │  │    │         Layout Component           │   │ │ │ │ │
│  │  │  │  │    │  ┌─────────────────────────────────┐ │   │ │ │ │ │
│  │  │  │  │    │  │     Header w/ Auth UI           │ │   │ │ │ │ │
│  │  │  │  │    │  └─────────────────────────────────┘ │   │ │ │ │ │
│  │  │  │  │    │  ┌─────────────────────────────────┐ │   │ │ │ │ │
│  │  │  │  │    │  │        HomePage                 │ │   │ │ │ │ │
│  │  │  │  │    │  └─────────────────────────────────┘ │   │ │ │ │ │
│  │  │  │  │    └─────────────────────────────────────┘   │ │ │ │ │
│  │  │  │  └─────────────────────────────────────────────┘ │ │ │ │
│  │  │  └─────────────────────────────────────────────────┘ │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Component Design

### PrivyProvider Configuration
Wraps the application with Privy authentication capabilities and Citrea chain configuration.

**Props:**
- `appId`: Environment variable VITE_PRIVY_APP_ID
- `config.loginMethods`: Array including email, google, apple, wallet
- `config.embeddedWallets.ethereum.createOnLogin`: "users-without-wallets"
- `config.supportedChains`: Includes Citrea Testnet configuration

### AuthenticationHeader Component
New component that integrates into the existing Layout header to handle authentication state.

**States:**
- Unauthenticated: Shows "Connect Wallet" button
- Authenticated: Shows user profile dropdown with wallet address, logout option

### CitreaChainConfig Utility
Configuration object defining Citrea Testnet parameters for Privy.

**Configuration:**
```typescript
{
  id: 5115,
  name: "Citrea Testnet", 
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.citrea.xyz"]
    }
  },
  nativeCurrency: {
    name: "Citrea Bitcoin",
    symbol: "cBTC",
    decimals: 18
  },
  blockExplorers: {
    default: {
      name: "Citrea Explorer",
      url: "https://explorer.testnet.citrea.xyz"
    }
  }
}
```

### WalletManager Hook
Custom React hook to manage wallet operations and Citrea chain interactions.

**Functions:**
- `switchToCitrea()`: Switch user's wallet to Citrea Testnet
- `getWalletBalance()`: Fetch cBTC balance
- `signMessage()`: Sign messages with embedded or external wallet
- `sendTransaction()`: Send transactions on Citrea network

## Sequence Diagrams

### Authentication Flow
```
User -> Homepage: Visits site
Homepage -> PrivyProvider: Initialize with config
PrivyProvider -> Privy API: Validate app credentials
User -> AuthButton: Clicks "Connect Wallet"
AuthButton -> Privy Modal: Opens authentication modal
User -> Privy Modal: Selects Google/Apple/Email/Wallet
Privy Modal -> OAuth Provider: Handles authentication
OAuth Provider -> Privy API: Returns user credentials
Privy API -> PrivyProvider: User authenticated
PrivyProvider -> WalletManager: Auto-create embedded wallet
WalletManager -> Citrea Network: Configure chain
Homepage -> AuthButton: Updates to show user profile
```

### Chain Switching Flow
```
User -> WalletManager: switchToCitrea()
WalletManager -> Privy Wallet: Request chain switch
Privy Wallet -> User: Prompt for approval (if external wallet)
User -> Privy Wallet: Confirms switch
Privy Wallet -> Citrea RPC: Verify connection
Citrea RPC -> WalletManager: Return success
WalletManager -> UI: Update chain indicator
```

## Technical Considerations

### Dependencies
- `@privy-io/react-auth`: Core Privy React SDK
- `@privy-io/wagmi`: For enhanced wallet integration (optional)
- `viem`: For blockchain interactions and chain definitions

### Constraints
- Must maintain existing React 19 + TypeScript compatibility
- Cannot break current TailwindCSS styling system
- Must work with existing router structure
- Should not interfere with Supabase integration

### Trade-offs
1. **Privy vs Custom Implementation**: Privy provides robust authentication but adds external dependency
2. **Embedded vs External Wallets**: Supporting both increases complexity but improves user experience
3. **Auto Chain Switching vs Manual**: Auto-switching is convenient but may surprise users

## Implementation Strategy

### Phase 1: Core Integration
1. Install and configure Privy dependencies
2. Wrap app with PrivyProvider
3. Create basic authentication UI components
4. Test authentication flow

### Phase 2: Citrea Configuration
1. Define Citrea chain configuration
2. Implement chain switching logic
3. Test wallet connection to Citrea Testnet
4. Verify transaction capabilities

### Phase 3: UI Enhancement
1. Integrate authentication UI into existing header
2. Style components to match existing design
3. Add user profile and wallet management features
4. Test responsive design

### Phase 4: Production Preparation
1. Add environment variable configuration
2. Implement error handling and loading states
3. Add comprehensive testing
4. Documentation and deployment preparation

## Implementation Results

All core design components have been built and integrated:

### Completed Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     App.tsx (Root)                          │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │            GlobalErrorBoundary                          │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │              PrivyProvider                          │ │ │
│  │  │  ┌─────────────────────────────────────────────────┐ │ │ │
│  │  │  │            ThemeProvider                        │ │ │ │
│  │  │  │  ┌─────────────────────────────────────────────┐ │ │ │ │
│  │  │  │  │          BrowserRouter                      │ │ │ │ │
│  │  │  │  │    ┌─────────────────────────────────────┐   │ │ │ │ │
│  │  │  │  │    │         Layout Component           │   │ │ │ │ │
│  │  │  │  │    │  ┌─────────────────────────────────┐ │   │ │ │ │ │
│  │  │  │  │    │  │  Header w/ Auth UI             │ │   │ │ │ │ │
│  │  │  │  │    │  │  CitreaChainSwitch             │ │   │ │ │ │ │
│  │  │  │  │    │  └─────────────────────────────────┘ │   │ │ │ │ │
│  │  │  │  │    └─────────────────────────────────────┘   │ │ │ │ │
│  │  │  │  └─────────────────────────────────────────────┘ │ │ │ │
│  │  │  └─────────────────────────────────────────────────┘ │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Delivered Components

#### PrivyProvider Configuration
- **Location**: `src/App.tsx`
- **Features**: Multi-method auth, embedded wallets, Citrea chain support
- **Configuration**: Environment-based app ID, proper error handling

#### Authentication Components
- **AuthenticationButton**: `src/components/auth/AuthenticationButton.tsx`
- **UserProfile**: `src/components/auth/UserProfile.tsx`
- **Features**: Responsive design, dropdown menu, wallet address display

#### Chain Management
- **CitreaChainSwitch**: `src/components/auth/CitreaChainSwitch.tsx`
- **useWalletManager**: `src/hooks/useWalletManager.ts`
- **Configuration**: `src/config/citrea-chain.ts`

#### Citrea Chain Configuration
```typescript
{
  id: 5115,
  name: "Citrea Testnet",
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.citrea.xyz"]
    }
  },
  nativeCurrency: {
    name: "Citrea Bitcoin",
    symbol: "cBTC",
    decimals: 18
  },
  blockExplorers: {
    default: {
      name: "Citrea Explorer",
      url: "https://explorer.testnet.citrea.xyz"
    }
  }
}
```

### Integration Success

- **Authentication Flow**: Seamless login with Google, Apple, Email, external wallets
- **Chain Switching**: Automatic Citrea Testnet connection on authentication
- **UI Integration**: Properly integrated into existing header and layout
- **Error Handling**: Loading states, error messages, retry mechanisms
- **Responsive Design**: Mobile-friendly authentication interface
- **TypeScript Support**: Full type safety throughout implementation

### Performance & Compatibility

- **React 19 Compatible**: No conflicts with React 19 features
- **TailwindCSS Integration**: Matches existing design system
- **Bundle Size**: Minimal impact on application size
- **Environment Configuration**: Proper development/production setup

### Security Implementation

- **OAuth Security**: Handled by Privy's secure infrastructure
- **Private Key Management**: Secured through Privy's TEE system
- **Environment Variables**: Proper configuration management
- **Error Boundaries**: Graceful failure handling
