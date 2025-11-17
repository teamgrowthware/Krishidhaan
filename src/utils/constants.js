export const ROLES = {
  FARMER: 'farmer',
  VOLUNTEER: 'volunteer',
  ADMIN: 'admin'
}

export const ANIMAL_STATUS = {
  PENDING: 'pending',
  VERIFIED: 'verified',
  REJECTED: 'rejected'
}

export const CLAIM_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  PAID: 'paid'
}

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed'
}

export const BREEDS = [
  'Holstein Friesian',
  'Jersey',
  'Guernsey',
  'Ayrshire',
  'Brown Swiss',
  'Sahiwal',
  'Gir',
  'Red Sindhi',
  'Tharparkar',
  'Kankrej',
  'Ongole',
  'Other'
]

export const ANIMAL_TYPES = [
  'Cow',
  'Buffalo',
  'Bull',
  'Calf'
]

export const DEATH_REASONS = [
  'Natural Death',
  'Disease',
  'Accident',
  'Old Age',
  'Unknown'
]

export const NAVIGATION_ITEMS = {
  public: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' }
  ],
  farmer: [
    { name: 'Dashboard', path: '/farmer/dashboard', icon: 'Home' },
    { name: 'My Animals', path: '/farmer/animals', icon: 'Dog' },
    { name: 'Add Animal', path: '/farmer/add-animal', icon: 'Plus' },
    { name: 'Claims', path: '/farmer/claims', icon: 'FileText' },
    { name: 'Report Death', path: '/farmer/report-death', icon: 'AlertTriangle' },
    { name: 'Payments', path: '/farmer/payments', icon: 'CreditCard' },
    { name: 'Support', path: '/farmer/support', icon: 'HelpCircle' },
    { name: 'My Profile', path: '/farmer/profile', icon: 'User' }
  ],
  volunteer: [
    { name: 'Dashboard', path: '/volunteer/dashboard', icon: 'Home' },
    { name: 'Pending Verifications', path: '/volunteer/pending-verifications', icon: 'Clock' },
    { name: 'Death Reports', path: '/volunteer/death-reports', icon: 'AlertTriangle' },
    { name: 'My Reports', path: '/volunteer/my-reports', icon: 'FileText' },
    { name: 'Profile', path: '/volunteer/profile', icon: 'User' }
  ],
  admin: [
    { name: 'Dashboard', path: '/admin/dashboard', icon: 'Home' },
    { name: 'Users', path: '/admin/users', icon: 'Users' },
    { name: 'Animals', path: '/admin/animals', icon: 'Dog' },
    { name: 'Claims', path: '/admin/claims', icon: 'FileText' },
    { name: 'Payments', path: '/admin/payments', icon: 'CreditCard' },
    { name: 'Reports', path: '/admin/reports', icon: 'AlertTriangle' },
    { name: 'Analytics', path: '/admin/analytics', icon: 'BarChart3' },
    { name: 'Settings', path: '/admin/settings', icon: 'Settings' }
  ]
}

export const STATS_CARDS = {
  farmer: [
    { title: 'Total Animals', value: '24', icon: 'Dog', color: 'text-blue-600' },
    { title: 'Verified Animals', value: '18', icon: 'CheckCircle', color: 'text-green-600' },
    { title: 'Pending Claims', value: '3', icon: 'Clock', color: 'text-yellow-600' },
    { title: 'Total Payments', value: '₹45,000', icon: 'CreditCard', color: 'text-purple-600' },
    { title: 'Total Deaths', value: '3', icon: 'Dog', color: 'text-purple-600'}
  ],
  volunteer: [
    { title: 'Pending Verifications', value: '12', icon: 'Clock', color: 'text-yellow-600' },
    { title: 'Verified Today', value: '8', icon: 'CheckCircle', color: 'text-green-600' },
    { title: 'Death Reports', value: '5', icon: 'AlertTriangle', color: 'text-red-600' },
    { title: 'Total Verified', value: '156', icon: 'FileText', color: 'text-blue-600' }
  ],
  admin: [
    { title: 'Total Farmers', value: '1,234', icon: 'Users', color: 'text-blue-600' },
    { title: 'Total Volunteers', value: '89', icon: 'UserCheck', color: 'text-green-600' },
    { title: 'Total Animals', value: '15,678', icon: 'Dog', color: 'text-purple-600' },
    { title: 'Total Claims', value: '2,456', icon: 'FileText', color: 'text-orange-600' }
  ]
}
