'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  Ruler, 
  Users, 
  Clock, 
  Award, 
  Shield,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Calendar
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ResidentialConstructionPage = () => {
  const features = [
    {
      icon: Ruler,
      title: "Custom Design",
      description: "Personalized architectural design tailored to your lifestyle and preferences."
    },
    {
      icon: Users,
      title: "Family-Focused",
      description: "Designs that prioritize family needs, comfort, and future growth."
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Premium materials and expert construction techniques for lasting quality."
    },
    {
      icon: Shield,
      title: "Building Codes",
      description: "Full compliance with local building codes and safety regulations."
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet to understand your vision, budget, and timeline requirements."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our architects create detailed plans and 3D models of your dream home."
    },
    {
      step: "03",
      title: "Permits & Approvals",
      description: "We handle all necessary permits and regulatory approvals."
    },
    {
      step: "04",
      title: "Construction",
      description: "Expert construction with regular updates and quality inspections."
    },
    {
      step: "05",
      title: "Final Inspection",
      description: "Comprehensive quality checks and final walkthrough."
    },
    {
      step: "06",
      title: "Handover",
      description: "Your new home is ready with warranty and maintenance guidance."
    }
  ]

  const stats = [
    { number: "500+", label: "Homes Built", icon: Home },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "24/7", label: "Support Available", icon: Shield }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                  Residential <span className="gradient-text">Construction</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Building your dream home with personalized design, quality craftsmanship, and unwavering attention to detail. 
                  From concept to completion, we make your vision a reality.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    className="btn-primary text-lg px-8 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Quote
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    className="btn-secondary text-lg px-8 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/images/services/residential.jpg"
                  alt="Residential Construction"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Why Choose Our <span className="gradient-text">Residential Construction</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine decades of experience with modern construction techniques to deliver homes that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Construction Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures quality, transparency, and your complete satisfaction throughout the journey.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              What's <span className="gradient-text">Included</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive residential construction services that cover every aspect of building your dream home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Construction Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Foundation and structural work",
                  "Framing and roofing",
                  "Electrical and plumbing systems",
                  "HVAC installation",
                  "Interior and exterior finishing",
                  "Landscaping and hardscaping",
                  "Final inspections and testing"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Additional Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Architectural design and planning",
                  "Interior design consultation",
                  "Energy efficiency optimization",
                  "Smart home technology integration",
                  "Custom cabinetry and millwork",
                  "Warranty and maintenance support",
                  "Post-construction assistance"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a custom home that perfectly reflects your lifestyle and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ResidentialConstructionPage

