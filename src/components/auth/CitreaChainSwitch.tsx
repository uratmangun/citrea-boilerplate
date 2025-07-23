import { useEffect, useState } from 'react'
import { usePrivy } from '@privy-io/react-auth'
import { useWalletManager } from '@/hooks/useWalletManager'
import { Button } from '@/components/ui/button'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export function CitreaChainSwitch() {
  const { authenticated, user } = usePrivy()
  const { switchToCitrea, isLoading, error, clearError, citreaChain } = useWalletManager()
  const [autoSwitchAttempted, setAutoSwitchAttempted] = useState(false)
  const [switchSuccess, setSwitchSuccess] = useState(false)

  // Automatically switch to Citrea when user authenticates
  useEffect(() => {
    if (authenticated && user && !autoSwitchAttempted) {
      setAutoSwitchAttempted(true)
      handleAutoSwitch()
    }
  }, [authenticated, user, autoSwitchAttempted])

  const handleAutoSwitch = async () => {
    try {
      const success = await switchToCitrea()
      if (success) {
        setSwitchSuccess(true)
        setTimeout(() => setSwitchSuccess(false), 3000) // Hide success message after 3 seconds
      }
    } catch (err) {
      console.error('Auto chain switch failed:', err)
    }
  }

  const handleManualSwitch = async () => {
    clearError()
    const success = await switchToCitrea()
    if (success) {
      setSwitchSuccess(true)
      setTimeout(() => setSwitchSuccess(false), 3000)
    }
  }

  // Don't render if user is not authenticated
  if (!authenticated || !user) {
    return null
  }

  return (
    <div className="space-y-2">
      {/* Success Message */}
      {switchSuccess && (
        <div className="flex items-center gap-2 p-3 border border-green-200 bg-green-50 rounded-md">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-green-800">
            Successfully connected to {citreaChain.name}
          </span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded-md">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <span className="text-red-800">{error}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleManualSwitch}
            disabled={isLoading}
            className="ml-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Switching...
              </>
            ) : (
              'Retry'
            )}
          </Button>
        </div>
      )}

      {/* Loading State for Manual Switch */}
      {isLoading && !error && (
        <div className="flex items-center gap-2 p-3 border border-blue-200 bg-blue-50 rounded-md">
          <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
          <span className="text-blue-800">
            Switching to {citreaChain.name}...
          </span>
        </div>
      )}
    </div>
  )
}
