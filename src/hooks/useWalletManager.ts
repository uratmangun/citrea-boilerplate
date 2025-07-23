import { usePrivy, useWallets } from '@privy-io/react-auth'
import { useState, useCallback } from 'react'
import { citreaTestnet } from '@/config/citrea-chain'
import { formatEther } from 'viem'

export function useWalletManager() {
  const { user, authenticated } = usePrivy()
  const { wallets } = useWallets()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Get the primary wallet (embedded or connected)
  const primaryWallet = wallets.find(wallet => wallet.address === user?.wallet?.address) || wallets[0]

  /**
   * Switch the user's wallet to Citrea Testnet
   */
  const switchToCitrea = useCallback(async () => {
    if (!primaryWallet || !authenticated) {
      setError('No wallet connected or user not authenticated')
      return false
    }

    setIsLoading(true)
    setError(null)

    try {
      // For embedded wallets, the chain switching is handled by Privy automatically
      // For external wallets, we need to request the chain switch
      if (primaryWallet.walletClientType === 'privy') {
        // Embedded wallet - Privy handles chain configuration
        console.log('Using Privy embedded wallet - Citrea chain should be available')
        setIsLoading(false)
        return true
      } else {
        // External wallet - request chain switch
        await primaryWallet.switchChain(citreaTestnet.id)
        setIsLoading(false)
        return true
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to switch to Citrea network'
      setError(errorMessage)
      setIsLoading(false)
      return false
    }
  }, [primaryWallet, authenticated])

  /**
   * Get the wallet balance for cBTC on Citrea
   */
  const getWalletBalance = useCallback(async (): Promise<string | null> => {
    if (!primaryWallet || !authenticated) {
      setError('No wallet connected or user not authenticated')
      return null
    }

    setIsLoading(true)
    setError(null)

    try {
      // For now, return a placeholder - balance fetching will be implemented when we test
      // TODO: Implement proper balance fetching using Privy's wallet methods
      setIsLoading(false)
      return '0.0'
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch wallet balance'
      setError(errorMessage)
      setIsLoading(false)
      return null
    }
  }, [primaryWallet, authenticated])

  /**
   * Sign a message with the wallet
   */
  const signMessage = useCallback(async (message: string): Promise<string | null> => {
    if (!primaryWallet || !authenticated) {
      setError('No wallet connected or user not authenticated')
      return null
    }

    setIsLoading(true)
    setError(null)

    try {
      const signature = await primaryWallet.sign(message)
      setIsLoading(false)
      return signature
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign message'
      setError(errorMessage)
      setIsLoading(false)
      return null
    }
  }, [primaryWallet, authenticated])

  /**
   * Send a transaction on the Citrea network
   */
  const sendTransaction = useCallback(async (to: string, value: string): Promise<string | null> => {
    if (!primaryWallet || !authenticated) {
      setError('No wallet connected or user not authenticated')
      return null
    }

    setIsLoading(true)
    setError(null)

    try {
      // TODO: Implement proper transaction sending using Privy's wallet methods
      // For now, return a placeholder transaction hash
      setIsLoading(false)
      return '0x' + Math.random().toString(16).substring(2, 66) // Placeholder tx hash
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send transaction'
      setError(errorMessage)
      setIsLoading(false)
      return null
    }
  }, [primaryWallet, authenticated])

  /**
   * Clear any errors
   */
  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    // Wallet state
    primaryWallet,
    walletAddress: primaryWallet?.address || null,
    isConnected: !!primaryWallet && authenticated,
    
    // Actions
    switchToCitrea,
    getWalletBalance,
    signMessage,
    sendTransaction,
    clearError,
    
    // Status
    isLoading,
    error,
    
    // Chain info
    citreaChain: citreaTestnet,
  }
}
