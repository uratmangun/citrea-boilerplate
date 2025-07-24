import { Button } from '@/components/ui/button'
import { PageSkeleton } from '@/components/common/PageSkeleton'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(false)

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  if (isLoading) {
    return <PageSkeleton />
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">About</h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
          Configuration details for connecting to the Citrea Testnet.
        </p>
      </div>

      <div className="p-4 sm:p-6 border rounded-lg bg-card text-card-foreground">
        <h3 className="text-lg font-semibold mb-3 text-amber-700 dark:text-amber-400">Chain Information</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Here are the configs that you can use to connect to the Citrea Testnet:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-3 font-medium">Config</th>
                <th className="text-left py-2 px-3 font-medium">Value</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b">
                <td className="py-2 px-3">Chain ID</td>
                <td className="py-2 px-3 font-mono">5115</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">Endpoint</td>
                <td className="py-2 px-3">
                  <a 
                    href="https://rpc.testnet.citrea.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://rpc.testnet.citrea.xyz
                  </a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">Explorer</td>
                <td className="py-2 px-3">
                  <a 
                    href="https://explorer.testnet.citrea.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://explorer.testnet.citrea.xyz
                  </a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">Chain Name</td>
                <td className="py-2 px-3">Citrea Testnet</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Currency Symbol</td>
                <td className="py-2 px-3">cBTC</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">Need testnet tokens?</p>
          <Button asChild variant="outline">
            <a 
              href="https://citrea.xyz/faucet" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit Faucet
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}