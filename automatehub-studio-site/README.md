# AutomateHub Studio Website

A modern, professional website for AutomateHub Studio - showcasing automation solutions for SharePoint, Teams, and Microsoft 365.

## 🚀 Features

### Design & User Experience

- **Modern, Professional Design**: Clean, contemporary layout with brand-consistent styling
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Custom CSS animations and micro-interactions
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels
- **Typography**: Montserrat font family for modern, professional appearance

### Navigation & Structure

- **Sticky Navigation**: Professional navigation bar with active page indicators
- **Mobile Menu**: Hamburger menu for mobile devices with smooth transitions
- **Breadcrumb Navigation**: Clear page hierarchy and navigation
- **Scroll-to-Top Button**: Convenient navigation for long pages

### Content Sections

- **Hero Section**: Eye-catching landing area with call-to-action buttons
- **Solutions**: Showcase of automation solutions and services
- **About**: Company information and mission statement
- **Contact Form**: Interactive contact form with loading states
- **Legal Pages**: Privacy Policy and Terms of Service placeholders

### Footer Features

- **Social Media Integration**: LinkedIn, Twitter, GitHub, and email links
- **Newsletter Signup**: Email subscription form for updates
- **Quick Links**: Organized navigation links
- **Company Information**: Branded footer with company details
- **Legal Links**: Privacy, Terms, Cookie Policy, and Accessibility links

### Technical Features

- **React Router**: Client-side routing for smooth navigation
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Custom Animations**: CSS keyframes and transitions
- **Form Handling**: Interactive forms with validation and loading states

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v6
- **Font**: Google Fonts (Montserrat)
- **Icons**: SVG icons and Heroicons
- **Development**: Node.js v20+

## 📦 Installation & Setup

### Prerequisites

- Node.js v20 or higher
- npm or yarn package manager

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd automatehub-studio-site
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
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Brand Colors

The site uses CSS custom properties for easy brand color customization:

```css
:root {
  --brand-blue: #1e40af;
  --brand-gold: #f59e0b;
  --brand-dark: #1f2937;
  --brand-white: #ffffff;
}
```

### Content Updates

- **Logo**: Replace `src/assets/logo.svg` with your logo
- **Hero Section**: Update text content in `src/App.tsx` Home component
- **Solutions**: Modify service descriptions in Solutions component
- **Contact Information**: Update email addresses and social media links
- **Legal Pages**: Replace placeholder content in Privacy and TOS components

### Styling

- **Tailwind Config**: Modify `tailwind.config.js` for custom design tokens
- **CSS Variables**: Update `src/index.css` for global styling changes
- **Animations**: Customize animations in the CSS file

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility
- Color contrast compliance

## 🚀 Performance

- Optimized images and assets
- Lazy loading for components
- Efficient CSS with Tailwind
- Fast build times with Vite
- Minimal bundle size

## 📄 Pages Structure

```
/                   # Home page with hero section
/solutions          # Services and solutions showcase
/about              # Company information
/contact            # Contact form
/privacy            # Privacy policy
/tos                # Terms of service
```

## 🔧 Development

### Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and animations
├── assets/          # Images and static assets
└── vite-env.d.ts    # Vite type definitions
```

### Key Components

- **Navigation**: Responsive navigation with mobile menu
- **Home**: Hero section with call-to-action
- **Solutions**: Service showcase with cards
- **About**: Company information
- **Contact**: Interactive contact form
- **Footer**: Comprehensive footer with social links
- **ScrollToTop**: Scroll-to-top button component

## 📈 SEO & Analytics

### Meta Tags

Update the following in `index.html`:

- Title
- Description
- Keywords
- Open Graph tags
- Twitter Card tags

### Analytics

Add your analytics tracking code to `index.html`:

- Google Analytics
- Google Tag Manager
- Other tracking services

## 🔒 Security

- HTTPS ready
- Secure form handling
- XSS protection
- Content Security Policy ready

## 📞 Support

For technical support or customization requests:

- Email: contact@automatehubstudio.com
- LinkedIn: [AutomateHub Studio](https://www.linkedin.com/company/automatehub-studio)

## 📄 License

This project is proprietary to AutomateHub Studio. All rights reserved.

---

**Built with ❤️ by AutomateHub Studio**
