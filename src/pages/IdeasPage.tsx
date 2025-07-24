import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function IdeasPage() {
  return (
    <div className="space-y-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800">Ideas</h1>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto">
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
              <h3 className="text-xl font-semibold text-amber-800">DeFi Protocol</h3>
              <p className="text-amber-800">
                Build a decentralized finance protocol leveraging Citrea's Bitcoin-secured infrastructure.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold text-amber-800">NFT Marketplace</h3>
              <p className="text-amber-800">
                Create a marketplace for Bitcoin-native NFTs using Citrea's rollup technology.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold text-amber-800">Gaming Platform</h3>
              <p className="text-amber-800">
                Develop blockchain games with fast transactions and low fees on Citrea.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold text-amber-800">DAO Governance</h3>
              <p className="text-amber-800">
                Build decentralized autonomous organizations with Bitcoin-level security.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold text-amber-800">Analytics Dashboard</h3>
              <p className="text-amber-800">
                Create comprehensive analytics tools for Citrea network activity.
              </p>
            </div>

            <div className="p-6 border rounded-lg space-y-3">
              <h3 className="text-xl font-semibold text-amber-800">Cross-chain Bridge</h3>
              <p className="text-amber-800">
                Facilitate asset transfers between Bitcoin and Citrea ecosystem.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4 py-8">
            <h2 className="text-2xl font-semibold text-amber-800">Ready to Build?</h2>
            <p className="text-amber-800">
              Start developing your ideas using this Citrea boilerplate.
            </p>
          </div>
        </div>
    </div>
  )
}
