// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

export const validateAadhaar = (aadhaar) => {
  const aadhaarRegex = /^\d{4}\s?\d{4}\s?\d{4}$/
  return aadhaarRegex.test(aadhaar)
}

export const validatePassword = (password) => {
  return password.length >= 6
}

export const validateRequired = (value) => {
  return value && value.trim().length > 0
}

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength
}

export const validateMaxLength = (value, maxLength) => {
  return value && value.length <= maxLength
}

export const validateNumber = (value) => {
  return !isNaN(value) && value > 0
}

export const validateAge = (age) => {
  const numAge = parseInt(age)
  return numAge >= 0 && numAge <= 30
}

export const validateWeight = (weight) => {
  const numWeight = parseFloat(weight)
  return numWeight > 0 && numWeight <= 1000
}

// Form validation schemas
export const loginSchema = {
  phone: {
    required: true,
    validator: validatePhone,
    message: 'Please enter a valid 10-digit phone number'
  },
  password: {
    required: true,
    validator: validatePassword,
    message: 'Password must be at least 6 characters'
  }
}

export const registerSchema = {
  name: {
    required: true,
    validator: (value) => validateMinLength(value, 2),
    message: 'Name must be at least 2 characters'
  },
  email: {
    required: true,
    validator: validateEmail,
    message: 'Please enter a valid email address'
  },
  phone: {
    required: true,
    validator: validatePhone,
    message: 'Please enter a valid 10-digit phone number'
  },
  aadhaar: {
    required: true,
    validator: validateAadhaar,
    message: 'Please enter a valid 12-digit Aadhaar number'
  },
  password: {
    required: true,
    validator: validatePassword,
    message: 'Password must be at least 6 characters'
  },
  confirmPassword: {
    required: true,
    validator: (value, formData) => value === formData.password,
    message: 'Passwords do not match'
  }
}

export const animalSchema = {
  name: {
    required: true,
    validator: (value) => validateMinLength(value, 2),
    message: 'Animal name must be at least 2 characters'
  },
  type: {
    required: true,
    validator: validateRequired,
    message: 'Please select an animal type'
  },
  breed: {
    required: true,
    validator: validateRequired,
    message: 'Please select a breed'
  },
  age: {
    required: true,
    validator: validateAge,
    message: 'Age must be between 0 and 30 years'
  },
  weight: {
    required: true,
    validator: validateWeight,
    message: 'Weight must be between 1 and 1000 kg'
  },
  location: {
    required: true,
    validator: (value) => validateMinLength(value, 10),
    message: 'Location must be at least 10 characters'
  }
}

// Validation helper function
export const validateForm = (data, schema, fieldsToValidate = []) => {
  const errors = {}

  // if specific fields are given, only validate those
  const fields = fieldsToValidate.length ? fieldsToValidate : Object.keys(schema)

  fields.forEach(field => {
    const fieldSchema = schema[field]
    if (!fieldSchema) return
    const value = data[field]

    

    if (fieldSchema.required && !validateRequired(value)) {
      errors[field] = 'This field is required'
      return
    }
   

    if (value && fieldSchema.validator) {
      const isValid = fieldSchema.validator(value, data)
      if (!isValid) {
        errors[field] = fieldSchema.message
      }
    }
  })

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
  
 
