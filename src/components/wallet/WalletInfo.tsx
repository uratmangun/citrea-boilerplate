import { useEffect, useState } from 'react'
import { usePrivy } from '@privy-io/react-auth'
import { useWalletManager } from '@/hooks/useWalletManager'
import { Wallet, Globe, Loader2, RefreshCw, Copy, Check } from 'lucide-react'

export function WalletInfo() {
  const { authenticated, user } = usePrivy()
  const { 
    isConnected, 
    walletAddress, 
    getWalletBalance, 
    citreaChain
  } = useWalletManager()
  
  const [balance, setBalance] = useState<string | null>(null)
  const [isLoadingBalance, setIsLoadingBalance] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  // Fetch wallet balance when wallet is connected
  useEffect(() => {
    if (isConnected && walletAddress) {
      fetchBalance()
    }
  }, [isConnected, walletAddress])

  const fetchBalance = async () => {
    setIsLoadingBalance(true)
    try {
      const walletBalance = await getWalletBalance()
      setBalance(walletBalance)
    } catch (error) {
      console.error('Failed to fetch balance:', error)
      setBalance(null)
    } finally {
      setIsLoadingBalance(false)
    }
  }

  const copyToClipboard = async () => {
    if (!walletAddress) return
    
    try {
      await navigator.clipboard.writeText(walletAddress)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy address:', error)
    }
  }

  // Don't render if wallet is not connected
  if (!authenticated || !user || !isConnected || !walletAddress) {
    return null
  }

  const truncatedAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`

  return (
    <div className="space-y-3">
      {/* Wallet Address */}
      <div className="flex items-center gap-2 text-sm">
        <Wallet className="h-4 w-4 text-amber-600" />
        <span className="text-amber-800 font-medium">Wallet:</span>
        <span className="text-amber-700 font-mono">{truncatedAddress}</span>
        <button
          onClick={copyToClipboard}
          className="ml-1 p-1 rounded hover:bg-amber-100 transition-colors"
          title="Copy full address"
        >
          {isCopied ? (
            <Check className="h-3 w-3 text-green-600" />
          ) : (
            <Copy className="h-3 w-3 text-amber-600 hover:text-amber-700" />
          )}
        </button>
      </div>

      {/* Network */}
      <div className="flex items-center gap-2 text-sm">
        <Globe className="h-4 w-4 text-amber-600" />
        <span className="text-amber-800 font-medium">Network:</span>
        <span className="text-amber-700">{citreaChain.name}</span>
      </div>

      {/* Balance */}
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-1">
          {isLoadingBalance ? (
            <Loader2 className="h-4 w-4 text-amber-600 animate-spin" />
          ) : (
            <span className="text-amber-600">💰</span>
          )}
        </div>
        <span className="text-amber-800 font-medium">Balance:</span>
        {isLoadingBalance ? (
          <span className="text-amber-700">Loading...</span>
        ) : (
          <span className="text-amber-700 font-mono">
            {balance !== null ? `${balance} cBTC` : 'Unable to fetch'}
          </span>
        )}
        <button
          onClick={fetchBalance}
          disabled={isLoadingBalance}
          className="ml-1 p-1 rounded hover:bg-amber-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Refresh balance"
        >
          <RefreshCw className={`h-3 w-3 text-amber-600 ${isLoadingBalance ? 'animate-spin' : 'hover:text-amber-700'}`} />
        </button>
      </div>
    </div>
  )
}
