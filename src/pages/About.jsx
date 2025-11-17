import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Target, 
  Eye, 
  Users, 
  Shield, 
  CheckCircle, 
  Leaf,
  Award, 
  Star,
  Sprout,
  TrendingUp,
  Globe
} from 'lucide-react';

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const aboutCards = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-quality organic fertilizers and bio-products that enhance crop productivity while preserving environmental sustainability and supporting farmer prosperity.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become India\'s leading organic agriculture solutions provider, revolutionizing farming practices through innovation, quality, and sustainable growth.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, quality excellence, farmer-first approach, environmental stewardship, and continuous innovation in agricultural solutions.'
    }
  ];

  const productions = [
    {
      icon: Leaf,
      title: 'Organic Farming',
      description: 'Organic Fertilizer provides organic matter, nitrogen and potassium to the plant, improves soil fertility, promotes root growth, hence increases the yield, as well as quality. Organic Fertilizers improves bio efficacy of plants and provides them with essential nutrients. They are highly effective for improving soil texture and structure.'
    },
    {
      icon: Users,
      title: 'Animal Healthcare',
      description: 'We have a range of Veterinary Products which play very important role in protecting and maintaining animal health. These products are categorized as Poultry Products, Cattle Feed Supplements and other Nutritional Supplements. You should concentrate on the nutritional need of the animals in order to protect them from any disease.'
    },
    {
      icon: Shield,
      title: 'Pesticides',
      description: 'A pesticide is any substance or mixture of substances intended for preventing, destroying, repelling or mitigating any pest. Though often misunderstood to refer only to insecticides, the term pesticide also applies to herbicides, fungicides, and various other substances used to control pests. Pesticides also include plant regulators and defoliants.'
    }
  ];

  const milestones = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'Established by Mr. T. S. Dhakad as one of India\'s best bio fertilizers company'
    },
    {
      year: '2018',
      title: 'Product Expansion',
      description: 'Diversified into multiple categories of agriculture inputs'
    },
    {
      year: '2020',
      title: 'Quality Certification',
      description: 'Achieved government-level quality certifications for all products'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Serving 15,000+ farmers across India with premium organic solutions'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentCard = aboutCards[currentIndex];
  const Icon = currentCard.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">KrishiDhaan</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl">
                Welcome to <span className="font-semibold text-green-600">KrishiDhaan Biocare Pvt. Ltd.</span>
              </p>
              <p className="text-base md:text-lg">
                KrishiDhaan Biocare Pvt Ltd is a Modern Fertilizer Company. We develop products and systems to help farmers around the world grow crops while using the best of the inputs efficiently. We believe Organic Inputs has the potential to bring humanity's needs in balance with the resources of our planet.
              </p>
          
             
            </div>
          </div>
        </div>
      </section>

      {/* Rotating Mission/Vision/Values Card */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl min-h-[320px] flex flex-col justify-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                {currentCard.title}
              </h2>
              <p className="text-lg md:text-xl text-green-50 text-center leading-relaxed">
                {currentCard.description}
              </p>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {aboutCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    currentIndex === index 
                      ? 'w-8 h-3 bg-green-600 rounded-full' 
                      : 'w-3 h-3 bg-gray-300 rounded-full'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Production Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Our Production
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Backed by expertise, we are considered as leading direct marketing, dealers and service provider of organic fertilizers & bio fertilizers. Our range of products is widely appreciated for its purity, effectiveness and long shelf life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productions.map((production, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <production.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  {production.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {production.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Milestones that shaped KrishiDhaan
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-emerald-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl md:text-4xl font-bold text-green-600">
                          {milestone.year}
                        </span>
                        <Award className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose KrishiDhaan?
            </h2>
            <p className="text-xl text-green-100">
              Leading the organic agriculture revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Quality Assured</h3>
              <p className="text-green-100">
                Government certified products tested regularly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Wide Reach</h3>
              <p className="text-green-100">
                Serving 15,000+ farmers across India
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Sprout className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">100% Organic</h3>
              <p className="text-green-100">
                Pure organic ingredients for sustainable farming
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Expert Team</h3>
              <p className="text-green-100">
                Agriculturalists & pest control specialists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of farmers who trust KrishiDhaan for sustainable agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Products
            </button>
            <button className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl font-bold hover:bg-green-50 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;