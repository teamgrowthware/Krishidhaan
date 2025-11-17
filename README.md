# CowCare - Animal Registration & Verification Platform

A comprehensive React.js frontend application for animal registration, verification, and insurance management. Built with modern web technologies and designed for farmers, volunteers, and administrators.

## 🚀 Features

### 🌐 Public Website
- **Home Page**: Hero section with animated statistics and testimonials
- **About Page**: Mission, vision, and how it works
- **Features Page**: Benefits for different user types
- **Contact Page**: Contact form with Google Maps integration
- **Login/Register**: Role-based authentication system

### 👨‍🌾 Farmer Dashboard
- **Dashboard**: Overview with statistics and recent activity
- **Animals**: Manage registered animals with photos and details
- **Add Animal**: Multi-step registration form with payment
- **Claims**: Track insurance claims and status
- **Report Death**: Submit death reports with documentation
- **Payments**: View payment history and receipts
- **Support**: FAQ and live chat support

### 👨‍⚕️ Volunteer/Vet Dashboard
- **Dashboard**: Pending verifications and activity summary
- **Pending Verifications**: Review and verify animal registrations
- **Death Reports**: Review and approve death reports
- **My Reports**: Track submitted verifications
- **Profile**: Manage volunteer profile and qualifications

### 👨‍💼 Admin Panel
- **Dashboard**: Analytics with charts and platform statistics
- **Users**: Manage farmers and volunteers
- **Animals**: Complete animal database management
- **Claims**: Process and manage insurance claims
- **Payments**: Monitor payment transactions
- **Reports**: Review death reports and approvals
- **Settings**: System configuration and preferences

## 🛠️ Tech Stack

- **Frontend**: React.js 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts for analytics
- **Animations**: Framer Motion
- **UI Components**: Custom components with Radix UI primitives
- **State Management**: React hooks and context

## 📁 Project Structure

```
src/
├── assets/                 # Static assets
├── components/            # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Sidebar.jsx
│   ├── DashboardCard.jsx
│   └── ChartCard.jsx
├── layouts/               # Layout components
│   ├── PublicLayout.jsx
│   └── DashboardLayout.jsx
├── pages/                 # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Features.jsx
│   ├── Contact.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Farmer/           # Farmer dashboard pages
│   ├── Volunteer/        # Volunteer dashboard pages
│   └── Admin/            # Admin panel pages
├── routes/               # Routing configuration
│   └── AppRoutes.jsx
├── utils/                # Utility functions and data
│   ├── constants.js
│   └── mockData.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Design System

### Colors
- **Primary**: #2E7D32 (Green)
- **Accent**: #F9A825 (Yellow)
- **Background**: #FFFFFF
- **Text**: #333333

### Typography
- **Font Family**: Poppins, Inter, sans-serif
- **Responsive**: Mobile-first design approach

### Components
- **Buttons**: Rounded with hover animations
- **Cards**: Shadow-based with hover effects
- **Forms**: Clean input fields with validation
- **Tables**: Responsive with sorting and filtering
- **Charts**: Interactive with tooltips

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cowcare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first approach**
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly interfaces**
- **Optimized navigation for mobile**

## 🎯 User Roles

### Farmer
- Register and manage animals
- Submit insurance claims
- Report animal deaths
- Track payments and status

### Volunteer/Vet
- Verify animal registrations
- Review death reports
- Submit verification reports
- Manage profile and qualifications

### Admin
- Platform analytics and monitoring
- User management
- System configuration
- Payment and claim oversight

## 📊 Analytics & Charts

- **User Registration Trends**
- **Animal Registration Statistics**
- **Payment Analytics**
- **Claim Status Distribution**
- **Interactive Charts** with Recharts

## 🔒 Security Features

- **Role-based Access Control**
- **Protected Routes**
- **Form Validation**
- **Secure Data Handling**

## 🎨 UI/UX Features

- **Smooth Animations** with Framer Motion
- **Loading States** and transitions
- **Interactive Elements**
- **Accessibility** considerations
- **Modern Design** patterns

## 📈 Performance

- **Code Splitting** with React.lazy
- **Optimized Images**
- **Efficient Re-renders**
- **Fast Loading** with Vite

## 🧪 Testing

The application includes:
- **Mock Data** for development
- **Component Testing** structure
- **Responsive Testing** tools

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Development Notes

- **Mock Authentication**: Currently uses mock authentication for demo purposes
- **Mock Data**: All data is simulated for development
- **Backend Integration**: Ready for backend API integration
- **Scalable Architecture**: Designed for easy feature additions

## 🔧 Configuration

### Environment Variables
Create a `.env` file for configuration:
```env
VITE_API_URL=your_api_url
VITE_APP_NAME=CowCare
```

### Customization
- **Colors**: Update in `tailwind.config.js`
- **Fonts**: Modify in `index.css`
- **Components**: Extend in `components/` directory

## 📞 Support

For support and questions:
- **Email**: support@cowcare.com
- **Phone**: +91 98765 43210
- **Documentation**: Available in code comments

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 🎉 Acknowledgments

- **React.js** community
- **Tailwind CSS** team
- **Lucide** for icons
- **Recharts** for charts
- **Framer Motion** for animations

---

**CowCare** - Every Life Deserves Dignity 🐄❤️
