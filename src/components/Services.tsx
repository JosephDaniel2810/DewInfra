'use client'

import { motion } from 'framer-motion'
import { Building2, HardHat, Truck, Wrench, Ruler, Shield } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "State-of-the-art commercial buildings, offices, and retail spaces designed for modern business needs.",
      features: ["Project Management", "Quality Control", "Timeline Adherence"]
    },
    {
      icon: HardHat,
      title: "Infrastructure Development",
      description: "Roads, bridges, and public works projects that connect communities and drive economic growth.",
      features: ["Civil Engineering", "Structural Design", "Safety Standards"]
    },
    {
      icon: Truck,
      title: "Industrial Projects",
      description: "Manufacturing facilities, warehouses, and industrial complexes built for efficiency and productivity.",
      features: ["Heavy Equipment", "Specialized Materials", "Expert Teams"]
    },
    {
      icon: Wrench,
      title: "Renovation & Maintenance",
      description: "Comprehensive renovation services and ongoing maintenance to preserve and enhance existing structures.",
      features: ["Modernization", "Energy Efficiency", "Code Compliance"]
    },
    {
      icon: Ruler,
      title: "Design & Planning",
      description: "Architectural design, engineering, and project planning services from concept to construction.",
      features: ["3D Modeling", "Sustainable Design", "Cost Optimization"]
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Rigorous safety protocols and regulatory compliance ensuring project success and worker protection.",
      features: ["OSHA Standards", "Training Programs", "Regular Audits"]
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

  const cardVariants = {
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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From groundbreaking to ribbon-cutting, we provide comprehensive construction 
            services that transform visions into reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              whileHover={{ 
                y: -10,
                scale: 1.02,
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <motion.button
              className="btn-primary text-lg px-12 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
