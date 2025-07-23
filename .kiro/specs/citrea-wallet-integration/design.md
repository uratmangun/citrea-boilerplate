# Citrea Wallet Integration Design

## Architecture Overview
The Citrea wallet integration follows a modular React architecture with clear separation of concerns between authentication, wallet management, UI components, and blockchain interactions. The system leverages Privy for authentication while using viem for direct blockchain operations to ensure reliability and type safety.

## Technical Approach
The implementation uses a hook-based architecture where `useWalletManager` serves as the central state management layer for all wallet operations. This hook abstracts the complexity of wallet interactions and provides a clean interface for UI components. The system prioritizes direct blockchain calls over provider abstractions to avoid chain configuration issues.

## Component Design

### WalletInfo Component
- **Purpose**: Display wallet connection status, address, network, and balance information
- **Dependencies**: `usePrivy` for authentication state, `useWalletManager` for wallet operations
- **Interface**: Self-contained component with internal state management for balance loading and error handling
- **Styling**: Integrates with amber theme using Tailwind CSS classes and Lucide React icons

### GitHubCliCommand Component  
- **Purpose**: Provide easy access to template creation command with copy functionality
- **Dependencies**: Browser clipboard API, React state for copy feedback
- **Interface**: Standalone component that can be embedded in any page
- **Features**: One-click copy, visual feedback, installation guidance

### useWalletManager Hook
- **Purpose**: Central wallet state management and blockchain interaction layer
- **Dependencies**: Privy for authentication, viem for blockchain calls, Citrea chain configuration
- **Interface**: Exposes wallet state, balance fetching, transaction capabilities, and error handling
- **Implementation**: Uses React hooks pattern with callback optimization for performance

## Data Flow

### Wallet Connection Flow
1. User authenticates through Privy authentication system
2. `useWalletManager` detects authentication state change
3. Hook extracts primary wallet from Privy wallet list
4. Wallet address and connection status propagated to UI components
5. `WalletInfo` component conditionally renders based on connection state

### Balance Fetching Flow
1. `WalletInfo` component triggers balance fetch on wallet connection
2. `useWalletManager.getWalletBalance()` creates viem public client
3. Public client connects directly to Citrea testnet RPC endpoint
4. Balance retrieved using `publicClient.getBalance()` with wallet address
5. Raw balance converted from wei to ether using `formatEther()`
6. Full 18-decimal precision balance returned to UI component
7. Component updates display with loading states and error handling

### Manual Refresh Flow
1. User clicks refresh icon in `WalletInfo` component
2. Component calls `fetchBalance()` function directly
3. Loading state activated, refresh icon shows spinning animation
4. New balance fetch initiated through `useWalletManager`
5. UI updates with new balance or error state
6. Loading state cleared, refresh icon returns to normal state

### Template Creation Flow
1. `GitHubCliCommand` component displays on homepage
2. User clicks copy button to copy CLI command
3. Browser clipboard API copies command text
4. Visual feedback shows "Copied!" confirmation
5. User can paste command in terminal to create new project

## Technical Considerations

### Performance Optimizations
- **Callback Memoization**: `useWalletManager` uses `useCallback` to prevent unnecessary re-renders
- **Conditional Rendering**: `WalletInfo` only renders when wallet is connected
- **Debounced Operations**: Balance fetching includes loading states to prevent rapid successive calls
- **Component Lazy Loading**: Components only import required dependencies

### Security Measures
- **Read-Only Operations**: Balance fetching uses read-only public client calls
- **Input Validation**: Wallet addresses validated before blockchain calls
- **Error Boundaries**: Comprehensive error handling prevents application crashes
- **Type Safety**: Full TypeScript integration with viem for type-safe blockchain interactions

### Scalability Considerations
- **Modular Architecture**: Components can be easily extended or replaced
- **Hook Abstraction**: Wallet logic centralized for easy maintenance and testing
- **Configuration Externalization**: Citrea chain configuration separated into dedicated file
- **Provider Fallbacks**: Multiple RPC endpoints can be configured for redundancy

### Error Handling Strategy
- **Graceful Degradation**: UI remains functional even when wallet operations fail
- **User-Friendly Messages**: Technical errors translated to understandable user feedback
- **Retry Mechanisms**: Automatic fallback from Privy provider to direct viem calls
- **Logging Integration**: Errors logged for debugging while maintaining user experience

### Blockchain Integration
- **Direct RPC Calls**: Bypasses provider abstractions for reliability
- **Chain Configuration**: Pre-configured for Citrea testnet with proper RPC endpoints
- **Type Safety**: viem provides full TypeScript support for Ethereum operations
- **Future Extensibility**: Architecture supports additional blockchain operations (transactions, contract calls)

### UI/UX Design Principles
- **Consistent Theming**: Amber color scheme throughout all wallet components
- **Progressive Disclosure**: Information revealed based on connection state
- **Immediate Feedback**: Loading states and success/error indicators for all operations
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Mobile Responsiveness**: Components adapt to different screen sizes
