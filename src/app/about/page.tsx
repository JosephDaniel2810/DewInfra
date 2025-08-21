'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Target, 
  Heart, 
  Shield, 
  Zap, 
  Star,
  Building2,
  HardHat,
  Truck,
  Wrench,
  Ruler,
  Shield as SafetyIcon
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue excellence in every project, maintaining the highest standards of quality and craftsmanship."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent communication and ethical business practices guide everything we do."
    },
    {
      icon: Shield,
      title: "Safety",
      description: "The safety of our team and communities is our top priority on every construction site."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative solutions to deliver exceptional results."
    }
  ]

  const milestones = [
    {
      year: "2000",
      title: "Company Founded",
      description: "DewInfra was established with a vision to transform construction excellence."
    },
    {
      year: "2005",
      title: "First Major Project",
      description: "Successfully completed our first large-scale commercial construction project."
    },
    {
      year: "2010",
      title: "Regional Expansion",
      description: "Expanded operations across multiple states and cities."
    },
    {
      year: "2015",
      title: "Industry Recognition",
      description: "Received multiple industry awards for safety and quality excellence."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced technology and BIM solutions across all projects."
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Leading the industry with sustainable construction practices and innovation."
    }
  ]

  const stats = [
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "150+", label: "Team Members" },
    { icon: Clock, value: "25+", label: "Years Experience" },
    { icon: MapPin, value: "50+", label: "Cities Served" }
  ]

  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and corporate facilities"
    },
    {
      icon: HardHat,
      title: "Infrastructure Development",
      description: "Roads, bridges, and public works projects"
    },
    {
      icon: Truck,
      title: "Industrial Projects",
      description: "Manufacturing facilities and processing plants"
    },
    {
      icon: Wrench,
      title: "Renovation & Maintenance",
      description: "Building upgrades and facility maintenance"
    },
    {
      icon: Ruler,
      title: "Design & Planning",
      description: "Architectural design and project planning"
    },
    {
      icon: SafetyIcon,
      title: "Safety & Compliance",
      description: "OSHA compliance and safety training programs"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                About <span className="gradient-text">DewInfra</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Building tomorrow's infrastructure today with innovation, quality, and 
                unwavering commitment to excellence in every project we undertake.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-50">
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
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-600 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
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
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              For over two decades, DewInfra has been at the forefront of construction 
              innovation, building not just structures, but lasting relationships and 
              communities that thrive.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-500"
              >
                <div className="text-3xl font-bold text-primary-600 mb-3">{milestone.year}</div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and every project we undertake, 
              ensuring we deliver excellence while building trust and lasting relationships.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
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
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive construction services 
              that meet the diverse needs of our clients and communities.
            </p>
          </motion.div>

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
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Build Together?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how our experience, values, and 
              commitment to excellence can bring your vision to life.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-white text-primary-600 px-12 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
