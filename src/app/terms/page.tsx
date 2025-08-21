'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  CheckCircle,
  AlertTriangle,
  Users,
  Building2,
  Shield,
  Calendar,
  Mail,
  Phone
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const TermsPage = () => {
  const lastUpdated = "March 15, 2024"

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
                  <FileText className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Terms of <span className="gradient-text">Service</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                These terms and conditions govern your use of our website and services. 
                Please read them carefully before using our construction services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center text-gray-600"
          >
            <Calendar className="w-5 h-5 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Agreement */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using the DewInfra website and services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These terms apply to all visitors, users, and others who access or use the service.
              </p>
            </motion.div>

            {/* Services Description */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Description of Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                DewInfra provides comprehensive construction services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Commercial construction and development</li>
                <li>Infrastructure and civil engineering projects</li>
                <li>Industrial construction and manufacturing facilities</li>
                <li>Renovation and remodeling services</li>
                <li>Architectural design and planning</li>
                <li>Safety and compliance consulting</li>
                <li>Residential construction and custom homes</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Provide accurate and complete information when requesting services</li>
                <li>Cooperate with our team during project planning and execution</li>
                <li>Maintain a safe environment for our workers on your property</li>
                <li>Make timely payments as agreed upon in project contracts</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the intellectual property rights of DewInfra</li>
                <li>Use our services only for lawful purposes</li>
              </ul>
            </motion.div>

            {/* Project Terms */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Terms and Conditions</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Initiation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All projects begin after:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Written agreement and contract signing</li>
                <li>Initial payment or deposit as specified</li>
                <li>Obtaining necessary permits and approvals</li>
                <li>Finalizing project timeline and milestones</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Changes</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Changes to project scope, timeline, or specifications may result in:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Revised project timeline</li>
                <li>Additional costs and charges</li>
                <li>Updated contract terms</li>
                <li>Potential project delays</li>
              </ul>
            </motion.div>

            {/* Payment Terms */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li><strong>Initial Deposit:</strong> Required before project commencement</li>
                <li><strong>Progress Payments:</strong> Due upon completion of project milestones</li>
                <li><strong>Final Payment:</strong> Due upon project completion and client approval</li>
                <li><strong>Late Fees:</strong> 1.5% monthly on overdue amounts</li>
                <li><strong>Payment Methods:</strong> Bank transfer, certified check, or approved credit terms</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                All payments are non-refundable unless otherwise specified in writing.
              </p>
            </motion.div>

            {/* Warranty and Liability */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Warranty and Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Workmanship Warranty</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide a standard warranty on workmanship for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Structural elements: 10 years</li>
                <li>Mechanical systems: 2 years</li>
                <li>General workmanship: 1 year</li>
                <li>Materials: As per manufacturer warranty</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Liability Limitations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our liability is limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>The amount paid for the specific service</li>
                <li>Direct damages caused by our negligence</li>
                <li>Exclusions: consequential, incidental, or punitive damages</li>
                <li>Force majeure events beyond our control</li>
              </ul>
            </motion.div>

            {/* Safety and Compliance */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety and Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to maintaining the highest safety standards:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>OSHA compliance and safety training for all workers</li>
                <li>Regular safety inspections and audits</li>
                <li>Proper use of personal protective equipment</li>
                <li>Emergency response procedures and protocols</li>
                <li>Compliance with all local, state, and federal regulations</li>
                <li>Environmental protection and waste management</li>
              </ul>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content, designs, and intellectual property remain our property:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Website content and design</li>
                <li>Project plans and architectural drawings</li>
                <li>Company logos, trademarks, and branding</li>
                <li>Proprietary construction methods and processes</li>
                <li>Client retains rights to their specific project deliverables</li>
              </ul>
            </motion.div>

            {/* Termination */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Either party may terminate services under these conditions:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li><strong>Breach of Contract:</strong> Material violation of terms</li>
                <li><strong>Non-Payment:</strong> Failure to meet payment obligations</li>
                <li><strong>Safety Violations:</strong> Unsafe working conditions</li>
                <li><strong>Mutual Agreement:</strong> Written consent of both parties</li>
                <li><strong>Force Majeure:</strong> Events beyond reasonable control</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Termination requires written notice and may incur additional costs for work completed.
              </p>
            </motion.div>

            {/* Dispute Resolution */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We prefer to resolve disputes amicably through:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Direct communication and negotiation</li>
                <li>Mediation with a neutral third party</li>
                <li>Arbitration if mediation fails</li>
                <li>Legal action as a last resort</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                All disputes are subject to the laws of the state where services are performed.
              </p>
            </motion.div>

            {/* Privacy and Data */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to protecting your privacy and data:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Collection and use of personal information as outlined in our Privacy Policy</li>
                <li>Secure storage and transmission of sensitive data</li>
                <li>Compliance with applicable data protection laws</li>
                <li>No sharing of client information without consent</li>
                <li>Regular security audits and updates</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                For detailed information, please refer to our <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</Link>.
              </p>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting on our website. Continued use of our services constitutes acceptance of modified terms. 
                We will notify users of significant changes via email or website notice.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-gray-700">legal@dewinfra.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start">
                  <Building2 className="w-5 h-5 text-primary-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium">DewInfra</p>
                    <p className="text-gray-600">123 Construction Way</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsPage
