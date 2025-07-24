import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import RouteErrorBoundary from '@/components/common/RouteErrorBoundary'
import GlobalErrorBoundary from '@/components/common/GlobalErrorBoundary'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import { StagewiseToolbar } from '@stagewise/toolbar-react'
import ReactPlugin from '@stagewise-plugins/react'
import { PrivyProvider } from '@privy-io/react-auth'
import { supportedChains } from '@/config/citrea-chain'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const IdeasPage = lazy(() => import('@/pages/IdeasPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function App() {
  const privyAppId = import.meta.env['VITE_PRIVY_APP_ID']

  if (!privyAppId) {
    console.error('VITE_PRIVY_APP_ID environment variable is required')
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Configuration Error</h1>
          <p className="text-gray-600">Please set VITE_PRIVY_APP_ID in your environment variables.</p>
        </div>
      </div>
    )
  }

  return (
    <GlobalErrorBoundary>
      <PrivyProvider
        appId={privyAppId}
        config={{
          loginMethods: ['email', 'google', 'apple', 'wallet'],
          embeddedWallets: {
            ethereum: {
              createOnLogin: 'users-without-wallets',
            },
          },
          supportedChains,
          appearance: {
            theme: 'light',
            accentColor: '#676FFF',
          },
        }}
      >
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <RouteErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                      <HomePage />
                    </Suspense>
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="about"
                element={
                  <RouteErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                      <AboutPage />
                    </Suspense>
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="ideas"
                element={
                  <RouteErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                      <IdeasPage />
                    </Suspense>
                  </RouteErrorBoundary>
                }
              />
              <Route
                path="*"
                element={
                  <RouteErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                      <NotFoundPage />
                    </Suspense>
                  </RouteErrorBoundary>
                }
              />
            </Route>
          </Routes>
            <Toaster />
          </BrowserRouter>
          <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
        </ThemeProvider>
      </PrivyProvider>
    </GlobalErrorBoundary>
  )
}

export default App
