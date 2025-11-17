import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Award,
  Sprout,
  ChevronRight,
  TrendingUp,
  Heart,
  Package,
  Truck,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const KrishiDhaanHome = () => {
  const [stats, setStats] = useState({
    customers: 0,
    products: 0,
    awards: 0
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Counter animation
  useEffect(() => {
    const animateCount = (key, target) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    animateCount('customers', 15678);
    animateCount('products', 150);
    animateCount('awards', 25);
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Leaf,
      title: '100% Organic Products',
      description: 'Certified organic fertilizers and bio-products for sustainable farming practices'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every product is tested and verified by agricultural experts for maximum effectiveness'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Direct delivery to your farm with efficient logistics and tracking support'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Get guidance from our team of agronomists and farming specialists'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Products',
      description: 'Browse our extensive catalog of organic fertilizers and agro products',
      icon: Package
    },
    {
      number: '02',
      title: 'Place Order',
      description: 'Easy online ordering with secure payment and flexible delivery options',
      icon: CheckCircle
    },
    {
      number: '03',
      title: 'Grow Better',
      description: 'Apply our products and watch your crops thrive with better yields',
      icon: Sprout
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Wheat Farmer',
      location: 'Punjab',
      rating: 5,
      content: 'KrishiDhaan organic fertilizers increased my wheat yield by 30%. The quality is exceptional and the support team is very helpful.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Vegetable Farmer',
      location: 'Maharashtra',
      rating: 5,
      content: 'Switched to KrishiDhaan bio-products last season. My vegetables are healthier and I get better prices in the market now.'
    },
    {
      id: 3,
      name: 'Mohammed Ali',
      role: 'Rice Farmer',
      location: 'Tamil Nadu',
      rating: 5,
      content: 'The best organic products I have used. Fast delivery and excellent customer service. Highly recommend to all farmers.'
    },
    {
      id: 4,
      name: 'Sunita Patel',
      role: 'Cotton Farmer',
      location: 'Gujarat',
      rating: 5,
      content: 'KrishiDhaan helped me transition to organic farming. Their products are effective and eco-friendly. Very satisfied!'
    }
  ];

  const products = [
    {
      name: 'KBC Bhoomi Life',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop',
      category: 'Bestseller'
    },
    {
      name: 'Danggal KBC',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
      category: 'Popular'
    },
    {
      name: 'Vijeta Plus',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop',
      category: 'New'
    },
    {
      name: 'KBC Gold',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=400&fit=crop',
      category: 'Premium'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                <Leaf className="text-green-600" size={20} />
                <span className="text-green-700 font-medium">Trusted by 15,000+ Farmers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Every Harvest
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Deserves Purity
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Connecting farmers, distributors, and consumers to deliver trusted agro products for a better, healthier future.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                  <Link to='/products'>
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                  Explore Products
                  <ArrowRight size={20} />
                </button>
                </Link>
                <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop" 
                  alt="Farming"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute bottom-8 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">25+</p>
                      <p className="text-gray-600 text-sm">Industry Awards</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 -right-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {stats.customers.toLocaleString()}+
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-medium">Happy Customers</p>
            </div>

            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {stats.products}+
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-medium">Quality Products</p>
            </div>

            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {stats.awards}+
              </h3>
              <p className="text-gray-600 text-base md:text-lg font-medium">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-10 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="text-gray-900 font-bold text-base lg:text-4xl md:text-5xl">Why Choose Us</span>
            <p className="text-lg md:text-lg text-gray-600 max-w-2xl mx-auto m-4">
              We provide comprehensive solutions for sustainable farming with complete transparency and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-8">
                  <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-green-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Featured Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of certified organic products designed for optimal crop growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    View Details
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
           
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900  mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple three-step process makes getting quality agro products easy and accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6 text-xl md:text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <step.icon className="h-7 w-7 md:h-8 md:w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold md:text-3xl">Testimonials</span>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mt-2 mb-4">
              What Our Farmers Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Trusted by thousands of farmers across India
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex justify-center mb-4 md:mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 md:mb-8 italic text-center leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex items-center justify-center">
                <div className="h-14 w-14 md:h-16 md:w-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <span className="text-white font-bold text-lg md:text-xl">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Join thousands of farmers who trust KrishiDhaan for their agricultural needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button className="px-8 md:px-10 py-4 md:py-5 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center text-base md:text-lg shadow-xl transform hover:scale-105">
              Shop Now
              <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button className="px-8 md:px-10 py-4 md:py-5 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all duration-300 inline-flex items-center justify-center text-base md:text-lg transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KrishiDhaanHome;