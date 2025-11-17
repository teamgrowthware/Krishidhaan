import React, { useState } from 'react';
import { 
  Search,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  BookOpen,
  HelpCircle,
  ShoppingBag,
  Truck,
  CreditCard,
  FileText,
  Users,
  Clock,
  CheckCircle,
  Send
} from 'lucide-react';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Topics', icon: BookOpen },
    { id: 'products', label: 'Products', icon: ShoppingBag },
    { id: 'orders', label: 'Orders & Delivery', icon: Truck },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'account', label: 'Account', icon: Users }
  ];

  const faqs = [
    {
      id: 1,
      category: 'products',
      question: 'What types of organic fertilizers do you offer?',
      answer: 'We offer a comprehensive range of organic fertilizers including KBC Bhoomi Life, Danggal KBC, Vijeta Plus, and KBC Gold. Each product is specifically formulated to meet different crop requirements and soil conditions. Our fertilizers are 100% organic, government certified, and designed to improve soil fertility, promote root growth, and increase crop yields naturally.'
    },
    {
      id: 2,
      category: 'products',
      question: 'Are your products certified organic?',
      answer: 'Yes, all KrishiDhaan products are certified organic and undergo regular testing at government-approved facilities. We maintain strict quality control standards and our products are tested for purity, effectiveness, and safety. Each product comes with proper certification documentation.'
    },
    {
      id: 3,
      category: 'products',
      question: 'How do I choose the right fertilizer for my crops?',
      answer: 'The right fertilizer depends on your crop type, soil condition, and growth stage. We recommend contacting our agricultural experts who can analyze your requirements and suggest the best products. You can also refer to our product guides or speak with our customer support team for personalized recommendations.'
    },
    {
      id: 4,
      category: 'orders',
      question: 'How do I place an order?',
      answer: 'You can place an order through our website, mobile app, or by calling our customer service. Simply browse our products, add items to cart, provide delivery details, and complete payment. You will receive an order confirmation via email and SMS with tracking information.'
    },
    {
      id: 5,
      category: 'orders',
      question: 'What is the delivery time?',
      answer: 'Standard delivery takes 3-7 business days depending on your location. For bulk orders, delivery may take 7-10 days. We provide express delivery options for urgent requirements in select cities. You can track your order status in real-time through our website or app.'
    },
    {
      id: 6,
      category: 'orders',
      question: 'Do you deliver to rural areas?',
      answer: 'Yes, we deliver to rural areas across India. We have an extensive logistics network that ensures timely delivery even to remote farming locations. Additional delivery charges may apply for certain remote areas.'
    },
    {
      id: 7,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including credit/debit cards, net banking, UPI, digital wallets, and cash on delivery (COD). For bulk orders, we also offer flexible payment terms and credit facilities to registered farmers.'
    },
    {
      id: 8,
      category: 'payment',
      question: 'Is it safe to pay online?',
      answer: 'Yes, our payment gateway is completely secure and encrypted. We use industry-standard SSL encryption to protect your financial information. We never store your card details on our servers.'
    },
    {
      id: 9,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click on the "Sign Up" button on our website or app, provide your basic details including name, mobile number, and email. You will receive an OTP for verification. Once verified, your account will be created and you can start shopping.'
    },
    {
      id: 10,
      category: 'account',
      question: 'Do I get discounts as a registered member?',
      answer: 'Yes! Registered members get exclusive benefits including special discounts, early access to new products, loyalty points, and personalized recommendations. Bulk buyers can also avail special pricing and credit facilities.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Mon-Sat, 9 AM - 6 PM',
      contact: '+91 98765 43210',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Response within 24 hours',
      contact: 'support@krishidhaan.com',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Available during business hours',
      contact: 'Chat with our team',
      action: 'Start Chat'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'KrishiDhaan Biocare Pvt. Ltd.',
      contact: 'Indore, Madhya Pradesh',
      action: 'Get Directions'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <HelpCircle className="text-green-600" size={20} />
            <span className="text-green-700 font-medium">We're Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How Can We
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Find answers to your questions, get support, or contact our team
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search for help articles, FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-5 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">&lt;2 hrs</h3>
              <p className="text-gray-600">Average Response Time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">15,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">98%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-14 h-14 flex items-center justify-center mb-4">
                  <method.icon className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-green-600 font-medium mb-4">
                  {method.contact}
                </p>
                <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Find quick answers to common questions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50'
                }`}
              >
                <category.icon size={18} />
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-300 transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="text-green-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No results found
              </h3>
              <p className="text-gray-500">
                Try different keywords or browse all topics
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-600">
                Send us a message and our team will get back to you within 24 hours
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Describe your query in detail..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! We will get back to you soon.');
                }}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p className="text-lg text-gray-600">
              Guides and documentation to help you get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Product Guides
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed information about our products and how to use them
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                View Guides →
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Farming Tips
              </h3>
              <p className="text-gray-600 mb-4">
                Expert advice and best practices for organic farming
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community Forum
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with other farmers and share experiences
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Join Forum →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;