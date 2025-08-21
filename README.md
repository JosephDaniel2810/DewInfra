# DewInfra - Construction Company Website

A stunning, modern website for DewInfra construction company built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Beautiful Animations**: Smooth, engaging animations powered by Framer Motion
- **Modern Design**: Clean, professional design with gradient accents and glass effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Hover effects, smooth transitions, and engaging user interactions
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with animations
│   ├── Services.tsx        # Services showcase
│   ├── About.tsx           # Company information
│   ├── Projects.tsx        # Project portfolio
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer with links
└── lib/                    # Utility functions
```

## 🎨 Design Features

### Hero Section
- Animated background elements with floating orbs
- Staggered text animations
- Interactive CTA buttons
- Company statistics with hover effects

### Services Section
- Animated service cards with hover effects
- Icon-based service representation
- Feature lists for each service
- Smooth card animations

### About Section
- Company values with animated icons
- Interactive visual elements
- Statistics overlay
- Responsive grid layout

### Projects Section
- Filterable project categories
- Project cards with status badges
- Detailed project information
- Smooth filtering animations

### Contact Section
- Interactive contact form
- Contact information cards
- Emergency contact highlight
- Form submission feedback

### Footer
- Comprehensive link organization
- Social media integration
- Newsletter signup
- Scroll-to-top functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dewinfra
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue tones (#0ea5e9)
- Accent: Yellow tones (#eab308)
- Custom gradients and glass effects

### Animations
All animations are powered by Framer Motion with:
- Staggered entrance animations
- Hover effects and micro-interactions
- Smooth page transitions
- Performance-optimized animations

### Content
Update the content in each component to match your company:
- Company information
- Services offered
- Project portfolio
- Contact details

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Adaptive layouts for all screen sizes

## 🔧 Development

### Adding New Components
1. Create a new component in `src/components/`
2. Import and use Framer Motion for animations
3. Follow the existing design patterns
4. Add to the main page layout

### Styling
- Use Tailwind CSS utility classes
- Custom CSS in `globals.css` for complex styles
- Component-specific styles when needed

### Animations
- Use Framer Motion variants for consistent animations
- Implement `whileInView` for scroll-triggered animations
- Add hover and tap interactions for better UX

## 📄 License

This project is created for DewInfra construction company. All rights reserved.

## 🤝 Support

For support or questions about the website, please contact the development team.

---

Built with ❤️ for construction excellence
