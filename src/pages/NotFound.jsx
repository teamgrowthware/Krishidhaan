import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 404 Illustration */}
          <div className="relative">
            <div className="text-9xl font-bold text-primary opacity-20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-16 w-16 text-primary" />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <p className="text-gray-500">
              The page might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline inline-flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Help Text */}
          <div className="text-sm text-gray-500">
            <p>
              If you think this is an error, please{' '}
              <Link to="/contact" className="text-primary hover:text-green-700">
                contact our support team
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
