# Requirements Document

## Introduction
This specification outlines the integration of Privy authentication with Citrea blockchain support on the Citrea Boilerplate homepage. The feature will enable users to authenticate using multiple methods (Google, Apple, Email, external wallets) and automatically connect to the Citrea Testnet blockchain for seamless Web3 interactions.

## Requirements

### Requirement 1: Multi-Method Authentication
**User Story:** As a user visiting the Citrea Boilerplate homepage, I want to authenticate using my preferred method (Google, Apple, Email, or external wallet), so that I can access the application with ease and security.

#### Acceptance Criteria
1. WHEN a user visits the homepage THEN the system SHALL display a Privy authentication interface
2. WHEN a user clicks on "Sign in with Google" THEN the system SHALL initiate Google OAuth authentication via Privy
3. WHEN a user clicks on "Sign in with Apple" THEN the system SHALL initiate Apple OAuth authentication via Privy  
4. WHEN a user provides an email address THEN the system SHALL send an OTP and allow email-based authentication
5. WHEN a user chooses external wallet THEN the system SHALL support popular wallet connectors (MetaMask, WalletConnect, etc.)
6. WHEN authentication is successful THEN the system SHALL store the user session and display authenticated state

### Requirement 2: Citrea Chain Integration
**User Story:** As an authenticated user, I want to automatically connect to the Citrea Testnet blockchain, so that I can interact with Citrea-based dApps and smart contracts.

#### Acceptance Criteria
1. WHEN a user successfully authenticates THEN the system SHALL automatically configure the Citrea Testnet chain
2. WHEN the chain configuration occurs THEN the system SHALL use Chain ID 5115
3. WHEN the chain configuration occurs THEN the system SHALL use RPC endpoint https://rpc.testnet.citrea.xyz
4. WHEN the chain configuration occurs THEN the system SHALL set currency symbol as cBTC
5. WHEN the chain configuration occurs THEN the system SHALL set chain name as "Citrea Testnet"
6. WHEN the user views their wallet THEN the system SHALL display Citrea Testnet as the active network

### Requirement 3: Embedded Wallet Creation
**User Story:** As a user without an existing wallet, I want to have an embedded wallet automatically created for me, so that I can immediately interact with the Citrea blockchain without additional setup.

#### Acceptance Criteria
1. WHEN a user authenticates without an existing wallet THEN the system SHALL create an embedded Ethereum wallet via Privy
2. WHEN an embedded wallet is created THEN the system SHALL configure it for Citrea Testnet compatibility
3. WHEN an embedded wallet is created THEN the system SHALL display the wallet address to the user
4. WHEN a user has an embedded wallet THEN the system SHALL allow wallet operations (sign, send transactions)

### Requirement 4: Homepage Integration
**User Story:** As a developer, I want the Privy authentication to be integrated into the existing homepage layout, so that it maintains the current design while adding authentication capabilities.

#### Acceptance Criteria
1. WHEN the homepage loads THEN the system SHALL integrate Privy components into the GlobalErrorBoundary wrapper
2. WHEN a user is unauthenticated THEN the system SHALL display login options in the header navigation
3. WHEN a user is authenticated THEN the system SHALL display user profile and wallet information in the header
4. WHEN a user is authenticated THEN the system SHALL replace login buttons with logout and wallet management options
5. WHEN the page renders THEN the system SHALL maintain the existing Vite + React + TailwindCSS styling

### Requirement 5: Configuration Management
**User Story:** As a developer, I want to properly configure the application with necessary environment variables and dependencies, so that the Privy integration works securely in both development and production environments.

#### Acceptance Criteria
1. WHEN setting up the application THEN the system SHALL require PRIVY_APP_ID environment variable
2. WHEN setting up the application THEN the system SHALL optionally use PRIVY_CLIENT_ID for enhanced security
3. WHEN the application starts THEN the system SHALL validate required Privy configuration
4. WHEN configuration is invalid THEN the system SHALL display appropriate error messages
5. WHEN in development mode THEN the system SHALL use localhost-compatible settings

## Implementation Status

All core requirements have been implemented:

- **Multi-Method Authentication**: Google, Apple, Email, and external wallet support
- **Citrea Chain Integration**: Automatic connection to Citrea Testnet (Chain ID: 5115)
- **Embedded Wallet Creation**: Auto-creation for users without existing wallets
- **Homepage Integration**: Authentication UI integrated into existing layout with responsive design
- **Configuration Management**: Environment variables and error handling

## Delivered Features

### Authentication System
- Privy authentication provider properly configured
- Multi-method login options (Google, Apple, Email, external wallets)
- User profile dropdown with wallet information
- Logout functionality
- Error handling and loading states

### Citrea Blockchain Integration
- Citrea Testnet chain configuration (Chain ID: 5115)
- Automatic chain switching on authentication
- Wallet management hooks for future transaction capabilities
- Chain switch retry mechanisms with user feedback

### User Interface
- Responsive header integration with authentication state
- Clean, accessible design matching existing UI patterns
- Proper loading and error states
- Mobile-responsive authentication flows

## Technical Implementation

- **Dependencies**: @privy-io/react-auth v2.20.0, viem v2.33.0
- **Framework Compatibility**: React 19 + TypeScript + TailwindCSS
- **Environment Configuration**: VITE_PRIVY_APP_ID setup
- **Architecture**: Provider pattern with proper component hierarchy
- **Chain Configuration**: Citrea Testnet with cBTC native currency
