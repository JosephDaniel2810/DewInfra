'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Award, Users, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Hero images - you can replace these with your actual project/service images
  const heroImages = [
    {
      src: "/images/projects/commercial-building.jpg",
      alt: "Commercial Building Project",
      title: "Commercial Excellence",
      subtitle: "State-of-the-art office complexes"
    },
    {
      src: "/images/projects/infrastructure-bridge.jpg", 
      alt: "Infrastructure Bridge Project",
      title: "Infrastructure Innovation",
      subtitle: "Connecting communities"
    },
    {
      src: "/images/projects/industrial-facility.jpg",
      alt: "Industrial Facility Project", 
      title: "Industrial Mastery",
      subtitle: "Powering progress"
    },
    {
      src: "/images/services/construction-site.jpg",
      alt: "Construction Services",
      title: "Professional Services",
      subtitle: "Quality craftsmanship"
    },
    {
      src: "/images/services/safety-equipment.jpg",
      alt: "Safety & Compliance",
      title: "Safety First",
      subtitle: "OSHA standards & training"
    }
  ]

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20 md:pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0 
            }}
            transition={{ duration: 1 }}
          >
            {/* Display actual images */}
            <div className="w-full h-full relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay to ensure text readability */}
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 md:bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-8 md:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Company logo/brand */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-bold text-white mb-4 drop-shadow-2xl"
              animate={{
                textShadow: [
                  "0 0 20px rgba(14, 165, 233, 0.5)",
                  "0 0 40px rgba(14, 165, 233, 0.8)",
                  "0 0 20px rgba(14, 165, 233, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="gradient-text drop-shadow-lg">Dew</span>
              <span className="text-white drop-shadow-lg">Infra</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-lg"
              variants={itemVariants}
            >
              Building Tomorrow's Infrastructure Today
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-6 leading-tight drop-shadow-lg">
              Excellence in Every
              <span className="block gradient-text drop-shadow-lg">Construction Project</span>
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              From concept to completion, we deliver innovative construction solutions 
              that stand the test of time and exceed expectations.
            </p>
          </motion.div>

          {/* CTA Button - Only Start Your Project button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center mb-16"
          >
            <Link href="/contact">
              <motion.button
                className="btn-primary text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Award, value: "500+", label: "Projects Completed" },
              { icon: Users, value: "150+", label: "Team Members" },
              { icon: Clock, value: "25+", label: "Years Experience" },
              { icon: MapPin, value: "50+", label: "Cities Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={floatingVariants}
        animate="animate"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  )
}

export default Hero
