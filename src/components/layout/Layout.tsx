import { Outlet } from 'react-router-dom'
import Header from './Header'
import { CitreaChainSwitch } from '@/components/auth/CitreaChainSwitch'

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-2 md:px-6 lg:px-8">
        <CitreaChainSwitch />
      </div>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}