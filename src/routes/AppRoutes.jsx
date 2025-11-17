import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'


// Public Pages
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Unauthorized from '../pages/Unauthorized'
import Help from '../pages/Help'

import ForgotPassword from '../pages/ForgotPassword'
import Categories from '../pages/Categories'
import Donate from '../pages/Donate'
import Products from '../pages/Products'

import TeamPage from '../pages/Team'











const AppRoutes = () => {
  return (
    
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="help" element={<Help />} />
        
        <Route path='categories' element={<Categories/>} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='donate' element={<Donate />} />
        <Route path='products' element={<Products />} />
       

        
      </Route>

   

      {/* Unauthorized Route */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
