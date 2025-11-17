import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-md w-full text-center"
          >
            {/* Error Icon */}
            <div className="relative mb-8">
              <div className="text-9xl font-bold text-red-500 opacity-20">!</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <AlertTriangle className="h-16 w-16 text-red-500" />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl font-bold text-gray-900">
                Oops! Something went wrong
              </h1>
              <p className="text-xl text-gray-600">
                We encountered an unexpected error. Don't worry, our team has been notified.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-gray-100 p-4 rounded-lg">
                  <summary className="cursor-pointer font-medium text-gray-800">
                    Error Details (Development)
                  </summary>
                  <pre className="mt-2 text-sm text-red-600 overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <RefreshCw className="h-5 w-5" />
                <span>Reload Page</span>
              </button>
              <button
                onClick={this.handleGoHome}
                className="btn-outline flex items-center justify-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Go Home</span>
              </button>
            </div>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
