import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function IdeasPage() {
  return (
    <div className="space-y-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ideas</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore innovative ideas and concepts for building on Citrea.
            </p>
            <div className="pt-2">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Idea
              </Button>
            </div>
          </div>

          {/* Ideas Content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold">DeFi Protocol</h3>
              <p className="text-muted-foreground">
                Build a decentralized finance protocol leveraging Citrea's Bitcoin-secured infrastructure.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold">NFT Marketplace</h3>
              <p className="text-muted-foreground">
                Create a marketplace for Bitcoin-native NFTs using Citrea's rollup technology.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold">Gaming Platform</h3>
              <p className="text-muted-foreground">
                Develop blockchain games with fast transactions and low fees on Citrea.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold">DAO Governance</h3>
              <p className="text-muted-foreground">
                Build decentralized autonomous organizations with Bitcoin-level security.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Create comprehensive analytics tools for Citrea network activity.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold">Cross-chain Bridge</h3>
              <p className="text-muted-foreground">
                Facilitate asset transfers between Bitcoin and Citrea ecosystem.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4 py-8">
            <h2 className="text-2xl font-semibold">Ready to Build?</h2>
            <p className="text-muted-foreground">
              Start developing your ideas using this Citrea boilerplate.
            </p>
          </div>
        </div>
    </div>
  )
}
