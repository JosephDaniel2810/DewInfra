'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HelpCircle, 
  ChevronDown,
  ChevronUp,
  Building2,
  Clock,
  DollarSign,
  Shield,
  Users,
  FileText,
  Phone
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "What types of construction projects does DewInfra handle?",
      answer: "DewInfra specializes in a wide range of construction projects including commercial buildings, infrastructure development, industrial facilities, residential construction, renovation projects, architectural design, and safety compliance consulting. We handle projects of all sizes, from small renovations to large-scale commercial developments.",
      category: "Services"
    },
    {
      question: "How long does a typical construction project take?",
      answer: "Project timelines vary significantly based on scope and complexity. Small renovations might take 2-4 weeks, while large commercial projects can take 6-18 months. We provide detailed timelines during the planning phase and keep you updated throughout the project with regular progress reports.",
      category: "Timeline"
    },
    {
      question: "What is your payment structure?",
      answer: "We typically require an initial deposit (20-30%) to begin work, followed by progress payments at key milestones. Final payment is due upon project completion and your approval. We accept bank transfers, certified checks, and can arrange payment plans for larger projects. All payment terms are clearly outlined in our contracts.",
      category: "Payment"
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on all our work. Structural elements carry a 10-year warranty, mechanical systems have a 2-year warranty, and general workmanship is covered for 1 year. Materials come with manufacturer warranties. We stand behind our work and address any issues promptly.",
      category: "Warranty"
    },
    {
      question: "How do you ensure safety on construction sites?",
      answer: "Safety is our top priority. All workers receive OSHA training and wear proper protective equipment. We conduct regular safety inspections, maintain emergency response protocols, and ensure compliance with all local, state, and federal safety regulations. We also provide safety training for clients when needed.",
      category: "Safety"
    },
    {
      question: "Can you work with my existing architect or designer?",
      answer: "Absolutely! We're happy to collaborate with your existing design team. We can work with architects, interior designers, and other consultants you've already engaged. We also have our own in-house design team if you need additional design services. Our goal is to ensure seamless collaboration for the best project outcome.",
      category: "Collaboration"
    },
    {
      question: "What permits and approvals do you handle?",
      answer: "We handle all necessary permits and regulatory approvals for your project. This includes building permits, zoning approvals, environmental permits, and any other required documentation. Our team is experienced with local regulations and will ensure your project meets all compliance requirements.",
      category: "Permits"
    },
    {
      question: "How do you handle project changes and modifications?",
      answer: "We understand that project requirements can evolve. We have a formal change order process that documents any modifications to scope, timeline, or budget. Changes are discussed with you, documented in writing, and any impact on schedule or cost is clearly communicated before proceeding.",
      category: "Project Management"
    },
    {
      question: "Do you provide project updates and communication?",
      answer: "Yes, we maintain regular communication throughout your project. You'll receive weekly progress reports, have access to our project management portal, and can reach your project manager directly. We also schedule regular meetings to discuss progress and address any questions or concerns.",
      category: "Communication"
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the greater New York metropolitan area, including New York City, Long Island, Westchester County, and parts of New Jersey and Connecticut. For larger projects, we can work in other regions. Contact us to discuss your specific location and project requirements.",
      category: "Service Area"
    },
    {
      question: "How do I get started with a project?",
      answer: "Getting started is easy! Simply contact us through our website, call us, or email us. We'll schedule a consultation to discuss your project, provide an initial assessment, and give you a rough estimate. From there, we'll develop detailed plans and a formal proposal for your review.",
      category: "Getting Started"
    },
    {
      question: "Do you offer emergency repair services?",
      answer: "Yes, we provide emergency repair services for urgent construction issues. We have a 24/7 emergency contact line for critical situations. Response times vary based on the nature of the emergency, but we prioritize safety-related issues and will respond as quickly as possible.",
      category: "Emergency Services"
    }
  ]

  const categories = [
    "All",
    "Services",
    "Timeline",
    "Payment",
    "Warranty",
    "Safety",
    "Collaboration",
    "Permits",
    "Project Management",
    "Communication",
    "Service Area",
    "Getting Started",
    "Emergency Services"
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
                  <HelpCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about our construction services, 
                project processes, and what you can expect when working with DewInfra.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-100 hover:text-primary-600'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              Still Have <span className="gradient-text">Questions</span>?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Can't find the answer you're looking for? Our team is here to help. 
              Contact us directly and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Quote
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

export default FAQPage
