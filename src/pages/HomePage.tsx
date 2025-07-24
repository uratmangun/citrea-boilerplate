import { GitHubCliCommand } from '@/components/common/GitHubCliCommand'
import { CitreaChainSwitch } from '@/components/auth/CitreaChainSwitch'
import { WalletInfo } from '@/components/wallet/WalletInfo'

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
            Citrea Boilerplate
          </h1>
          <p className="text-lg md:text-xl text-amber-800/80 mt-4">
            Use this boilerplate to easily create your citrea project
          </p>
        </div>
        <div className="flex justify-center">
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm">
            <CitreaChainSwitch />
            <WalletInfo />
          </div>
        </div>
      </div>
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-amber-800">
              Welcome to Citrea Boilerplate
            </h2>
            <p className="text-amber-700">
              A production-ready React template for building Citrea blockchain applications with wallet integration.
            </p>
          </div>
          
          <GitHubCliCommand />
        </div>
      </div>
    </>
  )
}