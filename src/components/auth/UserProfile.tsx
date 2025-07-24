import { usePrivy } from '@privy-io/react-auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { User, LogOut, Wallet, Copy } from 'lucide-react'
import { useState } from 'react'

export function UserProfile() {
  const { user, logout, authenticated } = usePrivy()
  const [copied, setCopied] = useState(false)

  if (!authenticated || !user) {
    return null
  }

  const walletAddress = user.wallet?.address
  const displayAddress = walletAddress 
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : 'No Wallet'

  const handleCopyAddress = async () => {
    if (walletAddress) {
      await navigator.clipboard.writeText(walletAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getUserDisplayName = () => {
    if (user.email?.address) {
      return user.email.address
    }
    if (user.google?.email) {
      return user.google.email
    }
    if (user.apple?.email) {
      return user.apple.email
    }
    return displayAddress
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="inline-flex items-center gap-2 text-amber-800 border-amber-800 hover:bg-amber-50 dark:text-amber-400 dark:border-amber-400 dark:hover:bg-amber-950/20">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">{getUserDisplayName()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {walletAddress && (
          <DropdownMenuItem onClick={handleCopyAddress} className="cursor-pointer">
            <Wallet className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span className="text-sm">Wallet Address</span>
              <span className="text-xs text-muted-foreground">{displayAddress}</span>
            </div>
            <Copy className="ml-auto h-4 w-4" />
            {copied && (
              <span className="ml-2 text-xs text-green-600">Copied!</span>
            )}
          </DropdownMenuItem>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
