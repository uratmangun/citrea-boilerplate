import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-50 text-amber-900">
      <Header />
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