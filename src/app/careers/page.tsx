'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Users, 
  Award, 
  Heart,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Building2,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior Project Manager",
      department: "Project Management",
      location: "New York, NY",
      type: "Full-time",
      experience: "8+ years",
      salary: "$120K - $150K",
      description: "Lead complex construction projects from inception to completion, ensuring quality, safety, and client satisfaction.",
      requirements: [
        "Bachelor's degree in Construction Management or related field",
        "PMP certification preferred",
        "Experience with large-scale commercial projects",
        "Strong leadership and communication skills"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health insurance",
        "401(k) with company match",
        "Professional development opportunities"
      ]
    },
    {
      title: "Structural Engineer",
      department: "Engineering",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$90K - $120K",
      description: "Design and analyze structural systems for various construction projects, ensuring safety and compliance.",
      requirements: [
        "Master's degree in Structural Engineering",
        "PE license required",
        "Experience with structural analysis software",
        "Knowledge of building codes and standards"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health insurance",
        "401(k) with company match",
        "Professional development opportunities"
      ]
    },
    {
      title: "Safety Coordinator",
      department: "Safety & Compliance",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "3+ years",
      salary: "$70K - $90K",
      description: "Develop and implement safety programs, conduct training, and ensure compliance with safety regulations.",
      requirements: [
        "Bachelor's degree in Safety Management or related field",
        "OSHA certification preferred",
        "Experience in construction safety",
        "Strong attention to detail"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health insurance",
        "401(k) with company match",
        "Professional development opportunities"
      ]
    },
    {
      title: "Construction Superintendent",
      department: "Field Operations",
      location: "Houston, TX",
      type: "Full-time",
      experience: "6+ years",
      salary: "$80K - $110K",
      description: "Oversee daily construction activities, manage crews, and ensure project milestones are met.",
      requirements: [
        "High school diploma or equivalent",
        "Experience in commercial construction",
        "Strong leadership and problem-solving skills",
        "OSHA safety training"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health insurance",
        "401(k) with company match",
        "Professional development opportunities"
      ]
    }
  ]

  const companyValues = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from project planning to final delivery."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honesty, transparency, and ethical behavior guide all our business decisions and relationships."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster an environment of mutual respect and support."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and methods to improve efficiency and deliver better results."
    }
  ]

  const benefits = [
    "Competitive salary with performance bonuses",
    "Comprehensive health, dental, and vision insurance",
    "401(k) retirement plan with company match",
    "Paid time off and holidays",
    "Professional development and training programs",
    "Career advancement opportunities",
    "Employee wellness programs",
    "Company events and team building activities"
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
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Build Your <span className="gradient-text">Career</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join our dynamic team of construction professionals and help us build the future. 
                We offer exciting opportunities for growth, learning, and career advancement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
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
              Our <span className="gradient-text">Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At DewInfra, we foster a culture of innovation, collaboration, and continuous learning. 
              Our team members are our greatest asset, and we invest in their growth and success.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and opportunities that support your professional growth 
              and personal well-being.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
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
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect opportunity to grow your career 
              with DewInfra.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Building2 className="w-4 h-4 mr-2" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          <span>{position.experience}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2" />
                          <span>{position.salary}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Link href="/contact">
                        <motion.button
                          className="btn-primary px-6 py-3"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Apply Now
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{position.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benIndex) => (
                          <li key={benIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to <span className="gradient-text">Join Us</span>?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let's discuss how you can contribute to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Resume
                </motion.button>
              </Link>
              <Link href="/team">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet Our Team
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

export default CareersPage
