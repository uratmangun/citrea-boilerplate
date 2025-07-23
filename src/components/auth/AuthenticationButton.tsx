import { usePrivy } from '@privy-io/react-auth'
import { Button } from '@/components/ui/button'
import { Wallet } from 'lucide-react'

export function AuthenticationButton() {
  const { login, authenticated, user } = usePrivy()

  if (authenticated && user) {
    return null // UserProfile component will handle authenticated state
  }

  return (
    <Button 
      onClick={login} 
      className="inline-flex items-center gap-2"
      variant="default"
    >
      <Wallet className="h-4 w-4" />
      Connect Wallet
    </Button>
  )
}
