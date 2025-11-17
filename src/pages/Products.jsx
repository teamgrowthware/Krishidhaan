import React, { useState } from 'react';
import { Search, ShoppingCart, Leaf, Award, TrendingUp, Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'fertilizers', label: 'Organic Fertilizers' },
    { id: 'seeds', label: 'Seeds' },
    { id: 'pesticides', label: 'Bio-Pesticides' },
    { id: 'nutrients', label: 'Plant Nutrients' }
  ];

  const products = [
    {
      id: 1,
      name: 'KBC Bhoomi Life',
      category: 'fertilizers',
      description: 'Bhoomi Life is enriched NPK with Phosphorus, Potassium and other useful elements. Bhoomi Life increases the power of roots and fertilizers.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Danggal KBC',
      category: 'fertilizers',
      description: 'Danggal KBC is a fertilizers organic compost. It is a mixture of macro nutrients that contain nitrogen, phosphorus, potash, calcium and magnesium, humic acid.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
      badge: null
    },
    {
      id: 3,
      name: 'Vijeta Plus',
      category: 'fertilizers',
      description: 'Vijeta Plus is a complete organic fertilizer. It is a mixture of Phosphate System fertilizers (natural substances) that contains macro, micro, plant disease, fungi, and soil diseases.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Bhoomi Gold',
      category: 'fertilizers',
      description: 'Premium organic fertilizer enriched with essential nutrients for optimal plant growth and soil health improvement.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=400&fit=crop',
      badge: null
    },
    {
      id: 5,
      name: 'KBC Gold',
      category: 'fertilizers',
      description: 'Advanced formulation combining organic matter with micronutrients to boost crop yield and quality.',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=400&fit=crop',
      badge: 'Popular'
    },
    {
      id: 6,
      name: 'KBC Premium Gold',
      category: 'fertilizers',
      description: 'Our flagship product delivering exceptional results with balanced nutrition for all crop types.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop',
      badge: null
    },
    {
      id: 7,
      name: 'Organic Seed Mix',
      category: 'seeds',
      description: 'High-quality organic seeds selected for superior germination and healthy plant development.',
      image: 'https://images.unsplash.com/photo-1522057306606-dc6a9ff441f4?w=400&h=400&fit=crop',
      badge: null
    },
    {
      id: 8,
      name: 'Bio-Guard Spray',
      category: 'pesticides',
      description: 'Natural pest control solution that protects crops without harmful chemicals.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop',
      badge: 'Eco-Friendly'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Green Header Bar */}
      

      {/* Page Title Section */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-3">
            <span className="text-gray-900">ORGANIC </span>
            <span className="text-green-600">FERTILIZERS</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Best Organic Fertilizers at a reasonable discount Package
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter Section */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-green-500 transition">
              <Filter size={20} />
              <span className="font-medium">Filters</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-green-50 p-8 flex items-center justify-center h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-green-600 text-white text-xs font-bold rounded-full shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 border-t-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                  <button className="px-4 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or search term
            </p>
          </div>
        )}

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Organic</h3>
            <p className="text-gray-600">
              All our products are certified organic and eco-friendly
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Tested and proven formulations for best results
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Boost Yield</h3>
            <p className="text-gray-600">
              Increase crop productivity naturally and sustainably
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Our experts are here to guide you to the perfect solution for your crops
          </p>
          <button className="px-10 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors text-lg">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;