'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  Building2, 
  HardHat,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Suresh Deopura",
      position: "Founder & CEO",
      image: "/images/team/suresh-deopura.jpg",
      bio: "Visionary leader with 20+ years in construction, transforming the industry through innovation and excellence.",
      experience: "20+ Years",
      expertise: "Strategic Leadership, Project Management",
      email: "suresh@dewinfra.com",
      phone: "+1 (555) 123-4567",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Mitchell",
      position: "Chief Operations Officer",
      image: "/images/team/sarah-mitchell.jpg",
      bio: "Operations expert ensuring seamless project execution and maintaining our high standards of quality.",
      experience: "15+ Years",
      expertise: "Operations Management, Quality Control",
      email: "sarah@dewinfra.com",
      phone: "+1 (555) 123-4568",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Engineering",
      image: "/images/team/michael-rodriguez.jpg",
      bio: "Innovative engineer leading our technical team in creating cutting-edge construction solutions.",
      experience: "18+ Years",
      expertise: "Structural Engineering, Innovation",
      email: "michael@dewinfra.com",
      phone: "+1 (555) 123-4569",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Chen",
      position: "Director of Design",
      image: "/images/team/emily-chen.jpg",
      bio: "Creative design leader bringing architectural excellence and aesthetic innovation to every project.",
      experience: "12+ Years",
      expertise: "Architectural Design, Creative Vision",
      email: "emily@dewinfra.com",
      phone: "+1 (555) 123-4570",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Thompson",
      position: "Safety & Compliance Director",
      image: "/images/team/david-thompson.jpg",
      bio: "Safety expert ensuring every project meets the highest safety standards and regulatory compliance.",
      experience: "16+ Years",
      expertise: "Safety Management, Compliance",
      email: "david@dewinfra.com",
      phone: "+1 (555) 123-4571",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Lisa Anderson",
      position: "Client Relations Manager",
      image: "/images/team/lisa-anderson.jpg",
      bio: "Client-focused professional building lasting relationships and ensuring exceptional customer satisfaction.",
      experience: "10+ Years",
      expertise: "Client Relations, Communication",
      email: "lisa@dewinfra.com",
      phone: "+1 (555) 123-4572",
      linkedin: "#",
      twitter: "#"
    }
  ]

  const stats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "500+", label: "Projects Completed", icon: Building2 },
    { number: "25+", label: "Years Combined Experience", icon: Award },
    { number: "100%", label: "Safety Record", icon: HardHat }
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
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Meet Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The passionate professionals behind DewInfra's success. Our team combines expertise, 
                innovation, and dedication to deliver exceptional construction solutions.
              </p>
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

      {/* Team Section */}
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
              Our <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead DewInfra's mission to build the future 
              with innovation, quality, and excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary-500 to-accent-500">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-20 h-20 text-white/80" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-white/90 font-medium">{member.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span>{member.expertise}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{member.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Link href={member.linkedin} className="text-primary-600 hover:text-primary-700 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                      <Link href={member.twitter} className="text-primary-600 hover:text-primary-700 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </Link>
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
              Join Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Ready to build the future with us? We're always looking for talented professionals 
              who share our passion for excellence and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <motion.button
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Open Positions
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
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

export default TeamPage
