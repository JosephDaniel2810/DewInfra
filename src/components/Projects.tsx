'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Calendar, DollarSign, Building2 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Downtown Business Complex",
      category: "commercial",
      location: "New York, NY",
      duration: "18 months",
      budget: "$25M",
      description: "A state-of-the-art 15-story office complex featuring sustainable design and modern amenities.",
      image: "/images/projects/commercial-building.jpg",
      status: "Completed"
    },
    {
      id: 2,
      title: "Harbor Bridge Renovation",
      category: "infrastructure",
      location: "San Francisco, CA",
      duration: "24 months",
      budget: "$45M",
      description: "Complete renovation of a historic bridge with seismic upgrades and modern safety features.",
      image: "/images/projects/infrastructure-bridge.jpg",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Green Energy Factory",
      category: "industrial",
      location: "Austin, TX",
      duration: "12 months",
      budget: "$18M",
      description: "Sustainable manufacturing facility with solar panels and energy-efficient systems.",
      image: "/images/projects/industrial-facility.jpg",
      status: "Completed"
    },
    {
      id: 4,
      title: "Luxury Residential Tower",
      category: "residential",
      location: "Miami, FL",
      duration: "30 months",
      budget: "$65M",
      description: "Premium residential development with world-class amenities and ocean views.",
      image: "/images/projects/residential-complex.jpg",
      status: "Planning"
    },
    {
      id: 5,
      title: "Smart City Infrastructure",
      category: "infrastructure",
      location: "Seattle, WA",
      duration: "36 months",
      budget: "$120M",
      description: "Comprehensive smart city development including roads, utilities, and digital infrastructure.",
      image: "/images/projects/smart-city.jpg",
      status: "In Progress"
    },
    {
      id: 6,
      title: "Corporate Headquarters",
      category: "commercial",
      location: "Chicago, IL",
      duration: "22 months",
      budget: "$38M",
      description: "Modern corporate campus with sustainable design and collaborative workspaces.",
      image: "/images/projects/corporate-hq.jpg",
      status: "Completed"
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
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
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
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of innovative construction projects that showcase 
            our expertise and commitment to excellence.
          </p>
        </motion.div>

        {/* Projects Grid - All projects visible */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden">
                {/* Try to load actual image, fallback to placeholder */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // If image fails to load, show placeholder
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                
                {/* Fallback placeholder - shows when image fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building2 className="w-16 h-16 mx-auto mb-2 opacity-80" />
                    <p className="text-lg font-semibold">{project.title}</p>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' ? 'bg-green-500 text-white' :
                  project.status === 'In Progress' ? 'bg-blue-500 text-white' :
                  'bg-yellow-500 text-white'
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                    {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2 text-primary-500" />
                    {project.budget}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center group-hover:bg-accent-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-secondary text-lg px-12 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
