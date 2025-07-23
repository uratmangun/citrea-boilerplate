import { GitHubCliCommand } from '@/components/common/GitHubCliCommand'

export default function HomePage() {
  return (
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
  )
}