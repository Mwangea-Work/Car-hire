# Twende Rides - Premium Car Hire Website

A modern, responsive car hire website built with Next.js, featuring a beautiful UI and comprehensive booking system.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/mwangea-works-projects/v0-car-hire-website)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚗 Overview

Twende Rides is a premium car hire service website that offers a seamless booking experience for customers looking to rent vehicles in Kenya. The website features a modern, responsive design with an intuitive booking system, comprehensive fleet management, and excellent user experience.

## ✨ Features

### 🎯 Core Features
- **Interactive Booking System** - Easy-to-use booking form with date/time selection
- **Comprehensive Fleet Display** - Browse vehicles by category (Economy, SUV, Luxury, Vans)
- **Location-based Pickup/Drop-off** - Support for airports, cities, hotels, and landmarks
- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Real-time Availability** - Check vehicle availability instantly
- **Customer Testimonials** - Social proof with customer reviews
- **Trusted Partners** - Showcase partnerships with major brands

### 🎨 UI/UX Features
- **Modern Design** - Clean, professional interface with premium aesthetics
- **Parallax Hero Section** - Engaging visual experience
- **Dark/Light Theme Support** - Built-in theme switching
- **Smooth Animations** - Enhanced user experience with micro-interactions
- **Accessibility** - WCAG compliant design
- **Loading States** - Professional loading indicators

### 📱 Pages & Sections
- **Home Page** - Hero section, quick booking, services, testimonials
- **Fleet Page** - Vehicle catalog with filtering and search
- **Booking Page** - Detailed booking process
- **About Page** - Company information and story
- **Contact Page** - Contact information and form
- **FAQs Page** - Frequently asked questions
- **Terms Page** - Terms and conditions

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### UI Components
- **shadcn/ui** - Modern component library
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **date-fns** - Date manipulation utilities
- **Embla Carousel** - Touch-friendly carousel
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Car-hire
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Car-hire/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── booking/           # Booking page
│   ├── contact/           # Contact page
│   ├── faqs/              # FAQs page
│   ├── fleet/             # Fleet page
│   ├── terms/             # Terms page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── booking-form.tsx  # Booking form component
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header component
│   ├── testimonial-carousel.tsx
│   ├── trusted-partners.tsx
│   └── whatsapp-button.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Navy Blue (`#1e3a8a`)
- **Secondary**: Gold (`#f59e0b`)
- **Neutral**: Gray scale
- **Success**: Green
- **Error**: Red

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable font
- **Accent**: Premium styling for highlights

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing
- Custom animations
- Responsive breakpoints

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: support@twenderides.com
- Phone: +254 XXX XXX XXX
- Website: [https://twenderides.com](https://twenderides.com)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Design inspiration from modern car hire platforms

---

**Twende Rides** - Drive Your Dreams with Premium Experience
