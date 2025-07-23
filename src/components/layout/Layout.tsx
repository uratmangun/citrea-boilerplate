import { Outlet } from 'react-router-dom'
import Header from './Header'
import { CitreaChainSwitch } from '@/components/auth/CitreaChainSwitch'
import { WalletInfo } from '@/components/wallet/WalletInfo'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-50 text-amber-900">
      <Header />
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
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}