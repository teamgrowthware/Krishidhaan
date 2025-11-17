import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import { NotificationProvider } from './contexts/NotificationContext'
import ErrorBoundary from './components/ErrorBoundary'
import AppRoutes from './routes/AppRoutes'
import ScrolltoTop from './components/ScrolltoTop'

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
          <div className="App">
            <ScrolltoTop/>
            <AppRoutes />
          </div>
        </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
