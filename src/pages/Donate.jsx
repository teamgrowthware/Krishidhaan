import React, { useState } from 'react';
import { Search, Calendar, Tag, ChevronRight, TrendingUp } from 'lucide-react';

const AgroNewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'technology', label: 'Technology' },
    { id: 'market', label: 'Market' },
    { id: 'innovation', label: 'Innovation' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'New irrigation technology reduces water consumption by 40%',
      excerpt: 'Smart system monitors soil moisture in real-time and optimizes water resource distribution in crops.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop',
      category: 'technology',
      date: '2025-11-10',
      featured: true
    },
    {
      id: 2,
      title: 'Regenerative agriculture: The future of sustainable production',
      excerpt: 'Practices that restore soil and increase biodiversity gain ground among Brazilian producers.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop',
      category: 'sustainability',
      date: '2025-11-08',
      featured: true
    },
    {
      id: 3,
      title: 'Organic market grows 25% in the last year',
      excerpt: 'Demand for pesticide-free products drives investments in certification and new distribution channels.',
      image: 'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=800&h=500&fit=crop',
      category: 'market',
      date: '2025-11-06',
      featured: false
    },
    {
      id: 4,
      title: 'Drones and AI transform crop monitoring',
      excerpt: 'Technologies enable early identification of pests and diseases, reducing pesticide use by up to 30%.',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=500&fit=crop',
      category: 'innovation',
      date: '2025-11-04',
      featured: false
    },
    {
      id: 5,
      title: 'Natural biodefensives gain market in agribusiness',
      excerpt: 'Alternative to traditional chemicals, biological products grow 40% per year in Brazil.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=500&fit=crop',
      category: 'sustainability',
      date: '2025-11-02',
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain ensures traceability in agricultural chain',
      excerpt: 'Technology offers transparency from planting to final consumer, adding value to products.',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&h=500&fit=crop',
      category: 'technology',
      date: '2025-10-30',
      featured: false
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  const getCategoryLabel = (categoryId) => {
    return categories.find(cat => cat.id === categoryId)?.label || categoryId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="text-green-600" size={32} />
            <h1 className="text-4xl font-bold text-gray-900">News</h1>
          </div>
          <p className="text-gray-600 text-lg">Stay up to date with the latest in agribusiness</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-lg transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-green-50 border-2 border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-green-600 rounded-full"></span>
              Featured
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map(article => (
                <article
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag size={16} />
                        {getCategoryLabel(article.category)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-green-600 font-medium group-hover:gap-3 transition-all">
                      Read more
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        {regularNews.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-green-600 rounded-full"></span>
              All News
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {regularNews.map(article => (
                <article
                  key={article.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <button className="flex items-center gap-1 text-green-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Read more
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No news found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get the latest news</h2>
          <p className="text-green-100 mb-6 text-lg">
            Sign up to receive weekly updates on agribusiness
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroNewsPage;