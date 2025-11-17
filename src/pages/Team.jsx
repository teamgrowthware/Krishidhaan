import React, { useState } from 'react';
import { 
  Linkedin, 
  Mail, 
  Phone,
  Award,
  Users,
  Target,
  Briefcase
} from 'lucide-react';

const TeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const managementTeam = [
    {
      id: 1,
      name: 'T. S. Dhakad',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Visionary leader with 15+ years in organic agriculture. Founded KrishiDhaan to revolutionize farming practices.',
      email: 'ts.dhakad@krishidhaan.com',
      phone: '+91 98765 43210',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Operations expert ensuring quality and efficiency across all production facilities.',
      email: 'priya.sharma@krishidhaan.com',
      phone: '+91 98765 43211',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      role: 'Head of Research & Development',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Agricultural scientist developing innovative organic solutions for modern farming challenges.',
      email: 'rajesh.kumar@krishidhaan.com',
      phone: '+91 98765 43212',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Anjali Patel',
      role: 'Chief Marketing Officer',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      bio: 'Marketing strategist building KrishiDhaan\'s brand and farmer community nationwide.',
      email: 'anjali.patel@krishidhaan.com',
      phone: '+91 98765 43213',
      linkedin: '#'
    }
  ];

  const team = [
    {
      id: 5,
      name: 'Amit Singh',
      role: 'Senior Agronomist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      department: 'Research & Development',
      email: 'amit.singh@krishidhaan.com'
    },
    {
      id: 6,
      name: 'Sneha Reddy',
      role: 'Quality Control Manager',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      department: 'Quality Assurance',
      email: 'sneha.reddy@krishidhaan.com'
    },
    {
      id: 7,
      name: 'Vikram Desai',
      role: 'Production Manager',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      department: 'Manufacturing',
      email: 'vikram.desai@krishidhaan.com'
    },
    {
      id: 8,
      name: 'Meera Joshi',
      role: 'Customer Relations Lead',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      department: 'Customer Service',
      email: 'meera.joshi@krishidhaan.com'
    },
    {
      id: 9,
      name: 'Arjun Mehta',
      role: 'Supply Chain Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      department: 'Logistics',
      email: 'arjun.mehta@krishidhaan.com'
    },
    {
      id: 10,
      name: 'Kavita Nair',
      role: 'Field Operations Coordinator',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      department: 'Field Operations',
      email: 'kavita.nair@krishidhaan.com'
    },
    {
      id: 11,
      name: 'Rohan Kapoor',
      role: 'Digital Marketing Specialist',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop',
      department: 'Marketing',
      email: 'rohan.kapoor@krishidhaan.com'
    },
    {
      id: 12,
      name: 'Divya Iyer',
      role: 'Product Development Specialist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      department: 'Research & Development',
      email: 'divya.iyer@krishidhaan.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <Users className="text-green-600" size={20} />
            <span className="text-green-700 font-medium">Meet Our Team</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
            The People Behind
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              KrishiDhaan
            </span>
          </h1>
          <p className="text-lg md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of experts working together to transform agriculture 
            with sustainable, organic solutions for a better tomorrow.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-600" size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">100%</h3>
              <p className="text-gray-600">Dedicated</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-green-600" size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">8</h3>
              <p className="text-gray-600">Departments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-16 md:py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold text-base md:text-4xl">Leadership</span>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mt-2 mb-4">
              Our Management Team
            </h2>
            <p className="text-lg md:text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and growth in organic agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-green-300 text-sm font-medium mb-3">{member.role}</p>
                  </div>
                </div>

                {/* Hover Details */}
                <div className={`absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 p-6 flex flex-col justify-center transition-all duration-500 ${
                  hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-green-100 text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-white text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-white hover:text-green-200 transition-colors text-sm">
                      <Mail size={16} />
                      <span className="text-xs">{member.email}</span>
                    </a>
                    <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-white hover:text-green-200 transition-colors text-sm">
                      <Phone size={16} />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <a href={member.linkedin} className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition-all">
                      <Linkedin size={18} />
                    </a>
                    <a href={`mailto:${member.email}`} className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:text-green-600 transition-all">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold md:text-4xl">Our Experts</span>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mt-2 mb-4">
              Team Members
            </h2>
            <p className="text-lg md:text-lg text-gray-600 max-w-3xl mx-auto">
              Skilled professionals dedicated to delivering excellence in every aspect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-green-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.department}</p>
                  
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    <Mail size={16} />
                    <span className="text-xs">{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            We're always looking for passionate individuals who share our vision 
            for sustainable agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all duration-300">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;