'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, HardHat, Truck, Wrench, Ruler, Shield, Home } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ServicesPage = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "State-of-the-art commercial buildings, offices, and retail spaces designed for modern business needs.",
      features: ["Project Management", "Quality Control", "Timeline Adherence", "Sustainable Design"],
      image: "/images/services/commercial-construction.jpg",
      href: "/services/commercial"
    },
    {
      icon: HardHat,
      title: "Infrastructure Development",
      description: "Roads, bridges, and public works projects that connect communities and drive economic growth.",
      features: ["Civil Engineering", "Structural Design", "Safety Standards", "Community Impact"],
      image: "/images/services/infrastructure.jpg",
      href: "/services/infrastructure"
    },
    {
      icon: Truck,
      title: "Industrial Projects",
      description: "Manufacturing facilities, warehouses, and industrial complexes built for efficiency and productivity.",
      features: ["Heavy Equipment", "Specialized Materials", "Expert Teams", "Efficiency Focus"],
      image: "/images/services/industrial.jpg",
      href: "/services/industrial"
    },
    {
      icon: Wrench,
      title: "Renovation & Maintenance",
      description: "Comprehensive renovation services and ongoing maintenance to preserve and enhance existing structures.",
      features: ["Modernization", "Energy Efficiency", "Code Compliance", "Preservation"],
      image: "/images/services/renovation.jpg",
      href: "/services/renovation"
    },
    {
      icon: Ruler,
      title: "Design & Planning",
      description: "Architectural design, engineering, and project planning services from concept to construction.",
      features: ["3D Modeling", "Sustainable Design", "Cost Optimization", "Innovation"],
      image: "/images/services/design.jpg",
      href: "/services/design"
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Rigorous safety protocols and regulatory compliance ensuring project success and worker protection.",
      features: ["OSHA Standards", "Training Programs", "Regular Audits", "Risk Management"],
      image: "/images/services/safety.jpg",
      href: "/services/safety"
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes and family residences built with quality craftsmanship and personalized design for your dream home.",
      features: ["Custom Design", "Quality Materials", "Family-Focused", "Personalized Service"],
      image: "/images/services/residential.jpg",
      href: "/services/residential"
    }
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive construction solutions delivered with excellence, innovation, and unwavering commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                {/* Service Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href={service.href}>
                    <motion.button
                      className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center group-hover:bg-accent-500"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our comprehensive construction services.
            </p>
            <Link href="/contact">
              <motion.button
                className="btn-primary text-lg px-12 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ServicesPage
