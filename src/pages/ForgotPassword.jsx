import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  Shield,
  Smartphone
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import LoadingSpinner from '../components/LoadingSpinner'
import { validateForm, loginSchema } from '../utils/validation'

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    role: 'farmer',
    phone: '',
    password: '',
    otp: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showOTP, setShowOTP] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { login, loading } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    // Validate form
    const validation = validateForm(formData, loginSchema)
    if (!validation.isValid) {
      setErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    try {
      const result = await login(formData)
      if (result.success) {
        // Redirect based on role
        if (formData.role === 'farmer') {
          navigate('/farmer/dashboard')
        } else if (formData.role === 'volunteer') {
          navigate('/volunteer/dashboard')
        } else if (formData.role === 'admin') {
          navigate('/admin/dashboard')
        }
      } else {
        setErrors({ general: result.error || 'Login failed. Please try again.' })
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSendOTP = () => {
    // In real app, this would send OTP via SMS
    setShowOTP(true)
  }

  const roleOptions = [
    {
      value: 'farmer',
      label: 'Farmer',
      icon: User,
      description: 'Register and manage your animals'
    },
    {
      value: 'volunteer',
      label: 'Volunteer/Vet',
      icon: Shield,
      description: 'Verify animals and help farmers'
    },
    {
      value: 'admin',
      label: 'Administrator',
      icon: Smartphone,
      description: 'Manage platform and users'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold text-gray-900">DhenuSeva</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">
            Sign in to your account to continue
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Sign in as
              </label>
              <div className="grid grid-cols-1 gap-3">
                {roleOptions.map((role) => (
                  <label
                    key={role.value}
                    className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.role === role.value
                        ? 'border-primary bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role.value}
                      checked={formData.role === role.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        formData.role === role.value ? 'bg-primary' : 'bg-gray-100'
                      }`}>
                        <role.icon className={`h-5 w-5 ${
                          formData.role === role.value ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <p className={`font-medium ${
                          formData.role === role.value ? 'text-primary' : 'text-gray-900'
                        }`}>
                          {role.label}
                        </p>
                        <p className="text-sm text-gray-500">{role.description}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`input-field ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            {!showOTP && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className={`input-field pr-10 ${errors.password ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            )}

            {/* OTP */}
            {showOTP && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  OTP Code *
                </label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                />
                <p className="text-sm text-gray-500 mt-1">
                  OTP sent to {formData.phone}
                </p>
              </div>
            )}

            {/* General Error */}
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{errors.general}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              {!showOTP ? (
                <>
                  {/* <button
                    type="button"
                    onClick={handleSendOTP}
                    className="btn-secondary w-full"
                    disabled={isSubmitting}
                  >
                    Send OTP
                  </button> */}
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <LoadingSpinner size="sm" text="" />
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingSpinner size="sm" text="" />
                  ) : (
                    <>
                      Verify & Sign In
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Forgot Password */}
            {!showOTP && (
              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-primary hover:text-green-700"
                >
                  Forgot your password?
                  <Link to="/forgot-password" className="ml-1 underline">
                    Reset here
                  </Link>
                </button>
              </div>
            )}
          </form>
        </motion.div>

        {/* Register Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-primary hover:text-green-700 font-medium"
            >
              Register here
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ForgotPassword
