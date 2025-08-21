'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  HardHat, 
  Truck, 
  Home,
  Filter,
  ArrowRight,
  MapPin,
  Calendar,
  DollarSign
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All Projects', icon: Filter },
    { id: 'commercial', name: 'Commercial', icon: Building2 },
    { id: 'infrastructure', name: 'Infrastructure', icon: HardHat },
    { id: 'industrial', name: 'Industrial', icon: Truck },
    { id: 'residential', name: 'Residential', icon: Home }
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "commercial",
      image: "/images/projects/commercial-building.jpg",
      location: "New York, NY",
      completion: "2024",
      budget: "$15M",
      description: "State-of-the-art corporate headquarters with sustainable design and modern amenities.",
      features: ["LEED Certified", "Smart Building Technology", "Green Roof", "Underground Parking"]
    },
    {
      id: 2,
      title: "Highway Bridge Renovation",
      category: "infrastructure",
      image: "/images/projects/infrastructure-bridge.jpg",
      location: "Chicago, IL",
      completion: "2023",
      budget: "$8.5M",
      description: "Complete renovation of major highway bridge with enhanced safety features.",
      features: ["Structural Reinforcement", "Safety Upgrades", "Traffic Management", "Night Work"]
    },
    {
      id: 3,
      title: "Manufacturing Facility",
      category: "industrial",
      image: "/images/projects/industrial-facility.jpg",
      location: "Detroit, MI",
      completion: "2024",
      budget: "$25M",
      description: "Advanced manufacturing plant with automated production lines and safety systems.",
      features: ["Automation Systems", "Safety Protocols", "Energy Efficient", "Quality Control"]
    },
    {
      id: 4,
      title: "Luxury Residential Complex",
      category: "residential",
      image: "/images/projects/residential-complex.jpg",
      location: "Miami, FL",
      completion: "2023",
      budget: "$12M",
      description: "High-end residential development with premium amenities and ocean views.",
      features: ["Ocean Views", "Premium Amenities", "Smart Home Tech", "Security Systems"]
    },

    {
      id: 5,
      title: "Corporate Headquarters",
      category: "commercial",
      image: "/images/projects/corporate-hq.jpg",
      location: "San Francisco, CA",
      completion: "2023",
      budget: "$22M",
      description: "Modern corporate campus designed for collaboration and innovation.",
      features: ["Collaborative Spaces", "Innovation Labs", "Sustainability", "Employee Wellness"]
    },
    {
      id: 6,
      title: "Chemical Processing Plant",
      category: "industrial",
      image: "/images/projects/chemical-plant.jpg",
      location: "Houston, TX",
      completion: "2024",
      budget: "$35M",
      description: "Specialized chemical processing facility with advanced safety and environmental controls.",
      features: ["Safety Systems", "Environmental Controls", "Process Automation", "Quality Assurance"]
    },
    {
      id: 7,
      title: "Mixed-Use Development",
      category: "residential",
      image: "/images/projects/mixed-use-development.jpg",
      location: "Seattle, WA",
      completion: "2023",
      budget: "$28M",
      description: "Urban mixed-use development combining residential, retail, and office spaces.",
      features: ["Mixed Use", "Urban Design", "Community Spaces", "Transit Access"]
    },
    {
      id: 8,
      title: "Custom Family Home",
      category: "residential",
      image: "/images/projects/custom-home.jpg",
      location: "Denver, CO",
      completion: "2024",
      budget: "$850K",
      description: "Beautiful custom-built family home with modern amenities and sustainable features.",
      features: ["Custom Design", "Energy Efficient", "Smart Home Tech", "Family Focused"]
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Discover our portfolio of successful construction projects across commercial, 
              infrastructure, industrial, and residential sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Filter by Category
            </h2>
            <p className="text-lg text-gray-600">
              Browse projects by sector or view all our completed work
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                variants={itemVariants}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filter.icon className="w-5 h-5" />
                <span>{filter.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  whileHover={{ y: -10 }}
                >
                  {/* Project Image */}
                  <div className="relative h-80 bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 capitalize">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Project Details */}
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                        <span>{project.completion}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2 text-primary-500" />
                        <span>{project.budget}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href="/contact">
                      <motion.button
                        className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center group-hover:bg-accent-500"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Start Similar Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                No projects found in this category
              </h3>
              <p className="text-gray-600 mb-6">
                Try selecting a different category or view all projects
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className="btn-primary"
              >
                View All Projects
              </button>
            </motion.div>
          )}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Inspired by our portfolio? Let's discuss how we can bring your vision to life 
              with the same quality and expertise.
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

export default ProjectsPage
