import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, 
  ArrowRight,
  User,
  Shield,
  Smartphone
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import LoadingSpinner from '../components/LoadingSpinner'


const Categories = () => {

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


  
  const [role, setRole] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { login, loading } = useAuth()



  const handleChange = (e) => {
    const { value } = e.target  //CHECK THIS
    setRole(value)
    // Clear error when user starts typing
    if (errors.general) {
      setErrors({})
    }
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({});

    if(!role){
      setErrors({ general: 'Please select a role to continue.' })
      setIsSubmitting(false)
      return
    }


    

    try {
      navigate('/login', { state: { role } } )
      
    }
      catch (error) {
      setErrors({ general: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-7">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome Back
          </h2>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Sign in as
              </label>
              <div className="grid grid-cols-1 gap-3">
                {roleOptions.map((roleOption) => (
                  <label
                  key={roleOption.value}
                  className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    role === roleOption.value
                    ? 'border-primary bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={roleOption.value}
                      checked={role === roleOption.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        role === roleOption.value ? 'bg-primary' : 'bg-gray-100'
                      }`}>
                        <roleOption.icon className={`h-5 w-5 ${
                          role === roleOption.value ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <p className={`font-medium ${
                          role === roleOption.value ? 'text-primary' : 'text-gray-900'
                        }`}>
                          {roleOption.label}
                        </p>
                        <p className="text-sm text-gray-500">{role.description}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>


            
            {/* General Error */}
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{errors.general}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                    >
                    {isSubmitting ? (
                      <LoadingSpinner size="sm" text="" />
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
              
            </div>
          </form>
        </div>


        {/* Register Link */}
        <div className="text-center pt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-primary hover:text-green-700 font-medium"
            >
              Register here
            </Link>
          </p>
        </div>
              </motion.div>
      </div>
    </div>
  )
}

export default Categories
