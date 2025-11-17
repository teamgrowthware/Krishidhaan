import { Eye, Target, Star, Heart, Shield, Users, HandHelping } from 'lucide-react'
import { ANIMAL_STATUS, CLAIM_STATUS, PAYMENT_STATUS, BREEDS, ANIMAL_TYPES, DEATH_REASONS } from './constants'
import { color } from 'framer-motion'

// Mock Animals Data
export const mockAnimals = [
  {
    id: 'A001',
    name: 'Bella',
    breed: 'Holstein Friesian',
    type: 'Cow',
    age: '3 years',
    weight: '450 kg',
    status: ANIMAL_STATUS.VERIFIED,
    registrationDate: '2024-01-15',
    photo: '/api/placeholder/300/200',
    farmerId: 'F001',
    farmerName: 'Rajesh Kumar',
    location: 'Punjab, India',
    verificationDate: '2024-01-20',
    verifiedBy: 'Dr. Priya Sharma'
  },
  {
    id: 'A002',
    name: 'Ganga',
    breed: 'Sahiwal',
    type: 'Cow',
    age: '5 years',
    weight: '380 kg',
    status: ANIMAL_STATUS.PENDING,
    registrationDate: '2024-01-20',
    photo: '/api/placeholder/300/200',
    farmerId: 'F002',
    farmerName: 'Suresh Singh',
    location: 'Haryana, India',
    verificationDate: null,
    verifiedBy: null
  },
  {
    id: 'A003',
    name: 'Lakshmi',
    breed: 'Gir',
    type: 'Buffalo',
    age: '4 years',
    weight: '420 kg',
    status: ANIMAL_STATUS.VERIFIED,
    registrationDate: '2024-01-10',
    photo: '/api/placeholder/300/200',
    farmerId: 'F003',
    farmerName: 'Manoj Patel',
    location: 'Gujarat, India',
    verificationDate: '2024-01-18',
    verifiedBy: 'Dr. Amit Kumar'
  }
]

// Mock Claims Data
export const mockClaims = [
  {
    id: 'C001',
    animalId: 'A001',
    animalName: 'Bella',
    farmerId: 'F001',
    farmerName: 'Rajesh Kumar',
    claimAmount: 25000,
    status: CLAIM_STATUS.APPROVED,
    claimDate: '2024-01-25',
    approvalDate: '2024-01-28',
    paymentDate: '2024-02-01',
    reason: 'Natural Death',
    description: 'Animal died due to old age',
    documents: ['death_certificate.pdf', 'veterinary_report.pdf']
  },
  {
    id: 'C002',
    animalId: 'A002',
    animalName: 'Ganga',
    farmerId: 'F002',
    farmerName: 'Suresh Singh',
    claimAmount: 30000,
    status: CLAIM_STATUS.PENDING,
    claimDate: '2024-01-30',
    approvalDate: null,
    paymentDate: null,
    reason: 'Disease',
    description: 'Animal died due to bacterial infection',
    documents: ['death_certificate.pdf', 'lab_report.pdf']
  }
]

// Mock Payments Data
export const mockPayments = [
  {
    id: 'P001',
    claimId: 'C001',
    farmerId: 'F001',
    farmerName: 'Rajesh Kumar',
    amount: 25000,
    status: PAYMENT_STATUS.COMPLETED,
    paymentDate: '2024-02-01',
    paymentMethod: 'Bank Transfer',
    transactionId: 'TXN123456789',
    bankAccount: '****1234'
  },
  {
    id: 'P002',
    claimId: 'C002',
    farmerId: 'F002',
    farmerName: 'Suresh Singh',
    amount: 30000,
    status: PAYMENT_STATUS.PENDING,
    paymentDate: null,
    paymentMethod: 'Bank Transfer',
    transactionId: null,
    bankAccount: '****5678'
  }
]

// Mock Users Data
export const mockUsers = {
  farmers: [
    {
      id: 'F001',
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '+91 98765 43210',
      address: 'Village: Ramgarh, District: Amritsar, Punjab',
      aadhaar: '1234 5678 9012',
      registrationDate: '2024-01-01',
      status: 'active',
      totalAnimals: 12,
      verifiedAnimals: 8,
      totalClaims: 3,
      totalPayments: 75000
    },
    {
      id: 'F002',
      name: 'Suresh Singh',
      email: 'suresh@example.com',
      phone: '+91 98765 43211',
      address: 'Village: Sonipat, District: Sonipat, Haryana',
      aadhaar: '1234 5678 9013',
      registrationDate: '2024-01-05',
      status: 'active',
      totalAnimals: 8,
      verifiedAnimals: 5,
      totalClaims: 2,
      totalPayments: 45000
    }
  ],
  volunteers: [
    {
      id: 'V001',
      name: 'Dr. Priya Sharma',
      email: 'priya@example.com',
      phone: '+91 98765 43212',
      specialization: 'Veterinary Medicine',
      experience: '8 years',
      registrationDate: '2024-01-01',
      status: 'active',
      totalVerifications: 156,
      verifiedToday: 8,
      pendingVerifications: 12
    },
    {
      id: 'V002',
      name: 'Dr. Amit Kumar',
      email: 'amit@example.com',
      phone: '+91 98765 43213',
      specialization: 'Animal Health',
      experience: '5 years',
      registrationDate: '2024-01-10',
      status: 'active',
      totalVerifications: 89,
      verifiedToday: 5,
      pendingVerifications: 7
    }
  ]
}

// Mock Death Reports Data
export const mockDeathReports = [
  {
    id: 'DR001',
    animalId: 'A001',
    animalName: 'Bella',
    farmerId: 'F001',
    farmerName: 'Rajesh Kumar',
    deathDate: '2024-01-25',
    reason: 'Natural Death',
    description: 'Animal died peacefully in sleep due to old age',
    location: 'Farm, Punjab',
    coordinates: { lat: 31.6340, lng: 74.8723 },
    photos: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    reportedBy: 'F001',
    reportedDate: '2024-01-25',
    status: 'verified',
    verifiedBy: 'V001',
    verificationDate: '2024-01-26'
  },
  {
    id: 'DR002',
    animalId: 'A002',
    animalName: 'Ganga',
    farmerId: 'F002',
    farmerName: 'Suresh Singh',
    deathDate: '2024-01-30',
    reason: 'Disease',
    description: 'Animal died due to severe bacterial infection',
    location: 'Farm, Haryana',
    coordinates: { lat: 28.9931, lng: 76.8411 },
    photos: ['/api/placeholder/400/300'],
    reportedBy: 'F002',
    reportedDate: '2024-01-30',
    status: 'pending',
    verifiedBy: null,
    verificationDate: null
  }
]

// Mock Analytics Data
export const mockAnalytics = {
  monthlyRegistrations: [
    { month: 'Jan', farmers: 45, volunteers: 8, animals: 234 },
    { month: 'Feb', farmers: 52, volunteers: 12, animals: 289 },
    { month: 'Mar', farmers: 38, volunteers: 6, animals: 198 },
    { month: 'Apr', farmers: 67, volunteers: 15, animals: 345 },
    { month: 'May', farmers: 43, volunteers: 9, animals: 267 },
    { month: 'Jun', farmers: 58, volunteers: 11, animals: 312 }
  ],
  claimStatusDistribution: [
    { status: 'Approved', count: 145, percentage: 65 },
    { status: 'Pending', count: 52, percentage: 23 },
    { status: 'Rejected', count: 26, percentage: 12 }
  ],
  paymentTrends: [
    { month: 'Jan', amount: 125000 },
    { month: 'Feb', amount: 145000 },
    { month: 'Mar', amount: 98000 },
    { month: 'Apr', amount: 167000 },
    { month: 'May', amount: 134000 },
    { month: 'Jun', amount: 156000 }
  ]
}

// Mock Testimonials
export const mockTestimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Farmer',
    location: 'Punjab',
    content: 'DhenuSeva Foundation has been a blessing for our family. The insurance claims process is so smooth and transparent.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    role: 'Veterinarian',
    location: 'Haryana',
    content: 'As a volunteer, I can help farmers get their animals verified quickly. The platform is very user-friendly.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  },
  {
    id: 3,
    name: 'Suresh Singh',
    role: 'Farmer',
    location: 'Haryana',
    content: 'The digital registration process is so easy. My animals are now properly documented and insured.',
    rating: 5,
    avatar: '/api/placeholder/80/80'
  }
]

// Mock FAQ Data
export const mockFAQs = [
  {
    id: 1,
    question: 'How do I register my animals?',
    answer: 'You can register your animals by creating an account as a farmer, then clicking on "Add Animal" in your dashboard. Fill in the required details and upload photos of your animal.'
  },
  {
    id: 2,
    question: 'What documents do I need for verification?',
    answer: 'You need to provide Aadhaar card, land documents, and clear photos of your animal from different angles. A volunteer will visit your farm for physical verification.'
  },
  {
    id: 3,
    question: 'How long does the verification process take?',
    answer: 'The verification process typically takes 3-5 business days after a volunteer is assigned to your case. You will receive SMS updates throughout the process.'
  },
  {
    id: 4,
    question: 'What is the claim amount for each animal?',
    answer: 'The claim amount varies based on the breed and age of the animal. Generally, it ranges from ₹15,000 to ₹50,000 per animal depending on the insurance policy.'
  },
  {
    id: 5,
    question: 'How do I report an animal death?',
    answer: 'You can report an animal death through your farmer dashboard by clicking on "Report Death". Fill in the required details and upload supporting documents.'
  }
]

export const mockImages = [
  '/images/FarmerCow.png',
  '/images/DocCow.png',
  '/images/PeopleCow.png',
]

export const aboutCards = [
  {
  id: 1,
  title: 'Our Mission',
  description: 'To create a comprehensive digital ecosystem that ensures every animal is properly registered, verified, and protected through transparent insurance processes, ultimately improving the lives of farmers and their livestock across India.',
  icon: Target,
  color: 'text-primary',
  bg: 'bg-primary bg-opacity-10',
  },
  {
    id: 2,
    title: 'Our Vision',
    description: 'To become India\'s leading platform for animal welfare and insurance, where every farmer has access to reliable verification services and fair compensation for their livestock, creating a sustainable and prosperous agricultural community.',
    icon: Eye,
    color: 'text-accent',
    bg: 'bg-accent bg-opacity-10', 
  },
  {
    id: 3,
    title: 'Our Values',
    description: 'Guided by the spirit of seva and Krishna’s compassion, we uphold honesty, empathy, and responsibility in every step. Our commitment is to serve with love, protect with dignity, and build trust within every community we reach.',
    icon: HandHelping,
    color: 'text-[#FFC50F]',
    bg: 'bg-[#FFC50F]/10',

  },
];

 export const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Every animal life matters and deserves proper care and protection'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Transparent processes and secure data handling for all stakeholders'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong network of farmers, volunteers, and administrators'
    }
  ]

  export const dhenuDhams = [
    '/images/dhenudhamvol.png',
    '/images/doctordhenu.png',
    '/images/shelter.png',
    
  ]
 

 