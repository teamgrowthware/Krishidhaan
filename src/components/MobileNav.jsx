import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Home, 
  Dog, 
  Plus, 
  FileText, 
  AlertTriangle, 
  CreditCard, 
  HelpCircle,
  Users,
  UserCheck,
  BarChart3,
  Settings,
  Clock,
  User
} from 'lucide-react'
import { NAVIGATION_ITEMS } from '../utils/constants'

const MobileNav = ({ role, isOpen, onClose }) => {
  const location = useLocation()
  
  const getIcon = (iconName) => {
    const icons = {
      Home,
      Dog,
      Plus,
      FileText,
      AlertTriangle,
      CreditCard,
      HelpCircle,
      Users,
      UserCheck,
      BarChart3,
      Settings,
      Clock,
      User
    }
    return icons[iconName] || Home
  }

  const navigationItems = NAVIGATION_ITEMS[role] || []

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Mobile navigation */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 capitalize">
              {role} Dashboard
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item) => {
                const Icon = getIcon(item.icon)
                const isActive = location.pathname === item.path
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200 ${
                      isActive ? 'bg-primary text-white' : ''
                    }`}
                    onClick={onClose}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* User info at bottom */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {role === 'farmer' ? 'Rajesh Kumar' : 
                   role === 'volunteer' ? 'Dr. Priya Sharma' : 
                   'Admin User'}
                </p>
                <p className="text-xs text-gray-500 capitalize">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default MobileNav
