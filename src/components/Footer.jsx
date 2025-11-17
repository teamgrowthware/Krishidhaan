import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">KrishiDhaan</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every Harvest Deserves Purity. Connecting farmers, distributors, and consumers 
              to deliver trusted agro products for a better, healthier future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-green-600 inline-block pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-green-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-green-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  Our Products
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-300 hover:text-green-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  News & Updates
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-green-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-green-600 inline-block pb-2">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-green-500 transition-colors cursor-pointer">Organic Fertilizers</li>
              <li className="text-gray-300 hover:text-green-500 transition-colors cursor-pointer">Bio-Pesticides</li>
              <li className="text-gray-300 hover:text-green-500 transition-colors cursor-pointer">Plant Nutrients</li>
              <li className="text-gray-300 hover:text-green-500 transition-colors cursor-pointer">Animal Healthcare</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-green-600 inline-block pb-2">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-green-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 text-xs">Email Us</p>
                  <a href="mailto:info@krishidhaan.com" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                    info@krishidhaan.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="h-5 w-5 text-green-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 text-xs">Call Us</p>
                  <a href="tel:+919876543210" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-green-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 text-xs">Visit Us</p>
                  <span className="text-gray-300 text-sm">
                    Indore, Madhya Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-xl font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Get the latest updates on products and agricultural tips</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 KrishiDhaan Biocare Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/shipping" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                Shipping Policy
              </a>
              <a href="/refund" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;