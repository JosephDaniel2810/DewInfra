'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Users, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SafetyCompliancePage = () => {
  const features = [
    "OSHA compliance and safety training",
    "Safety equipment and PPE programs",
    "Risk assessment and management",
    "Emergency response planning",
    "Regular safety audits and inspections",
    "Incident investigation and prevention"
  ]

  const process = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive safety audit, risk identification, and compliance review",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Planning",
      description: "Safety strategy development, training programs, and protocol creation",
      icon: "📋"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Safety program execution, training delivery, and equipment deployment",
      icon: "🛡️"
    },
    {
      step: "04",
      title: "Monitoring",
      description: "Ongoing safety oversight, regular audits, and continuous improvement",
      icon: "✅"
    }
  ]

  const stats = [
    { icon: Shield, value: "0", label: "Safety Incidents" },
    { icon: Users, value: "500+", label: "Workers Trained" },
    { icon: Clock, value: "100%", label: "Compliance Rate" },
    { icon: Award, value: "25+", label: "Years Experience" }
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                  Safety & <span className="gradient-text">Compliance</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Protecting your workforce with comprehensive safety programs, 
                  OSHA compliance, and unwavering commitment to zero incidents.
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
                <Link href="/services">
                  <motion.button
                    className="btn-secondary text-lg px-8 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Services
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
                  src="/images/services/safety.jpg"
                  alt="Safety & Compliance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </motion.div>
          </div>
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
              What We <span className="gradient-text">Protect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety solutions that protect your workforce, ensure compliance, 
              and create a culture of safety excellence across your organization.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to safety that ensures every worker goes home 
              safely and every project meets the highest safety standards.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-primary-600 rounded-full flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <div className="text-sm text-primary-600 font-semibold mb-2">{step.step}</div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
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
              Ready to Protect Your Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your safety needs and create comprehensive programs 
              that ensure every worker goes home safely every day.
            </p>
                            <Link href="/contact">
              <motion.button
                className="bg-white text-primary-600 px-12 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default SafetyCompliancePage
