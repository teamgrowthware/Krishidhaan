import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check for stored auth data on app load
    const storedUser = localStorage.getItem('cowcare_user')
    const storedAuth = localStorage.getItem('cowcare_auth')
    
    if (storedUser && storedAuth === 'true') {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data based on role
      const mockUsers = {
        farmer: {
          id: '1',
          name: 'Rajesh Kumar',
          email: 'rajesh@example.com',
          phone: '+91 98765 43210',
          role: 'farmer',
          avatar: null,
          address: 'Village: Ramgarh, District: Alwar, Rajasthan',
          aadhaar: '1234 5678 9012'
        },
        volunteer: {
          id: '2',
          name: 'Dr. Priya Sharma',
          email: 'priya@example.com',
          phone: '+91 98765 43211',
          role: 'volunteer',
          avatar: null,
          specialization: 'Veterinary Medicine',
          experience: '5 years',
          license: 'VET-2024-001'
        },
        admin: {
          id: '3',
          name: 'Admin User',
          email: 'admin@cowcare.com',
          phone: '+91 98765 43212',
          role: 'admin',
          avatar: null,
          permissions: ['all']
        }
      }
      
      const userData = mockUsers[credentials.role] || mockUsers.farmer
      setUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem('cowcare_user', JSON.stringify(userData))
      localStorage.setItem('cowcare_auth', 'true')
      
      return { success: true, user: userData }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        avatar: null,
        createdAt: new Date().toISOString()
      }
      
      setUser(newUser)
      setIsAuthenticated(true)
      localStorage.setItem('cowcare_user', JSON.stringify(newUser))
      localStorage.setItem('cowcare_auth', 'true')
      
      return { success: true, user: newUser }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('cowcare_user')
    localStorage.removeItem('cowcare_auth')
  }

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('cowcare_user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
