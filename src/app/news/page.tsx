'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Newspaper, 
  Calendar,
  User,
  Tag,
  ArrowRight,
  Building2,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const NewsPage = () => {
  const featuredArticle = {
    title: "The Future of Sustainable Construction: Green Building Trends 2024",
    excerpt: "Discover how innovative materials, renewable energy integration, and smart building technologies are revolutionizing the construction industry and creating more sustainable urban environments.",
    author: "Suresh Deopura",
    date: "March 15, 2024",
    category: "Sustainability",
    readTime: "8 min read",
    image: "/images/news/sustainable-construction.jpg"
  }

  const articles = [
    {
      title: "Innovations in Prefabricated Construction: Speed and Quality Combined",
      excerpt: "How modular construction methods are reducing project timelines while maintaining exceptional quality standards.",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      category: "Innovation",
      readTime: "6 min read",
      image: "/images/news/prefabricated-construction.jpg"
    },
    {
      title: "Safety First: Advanced Technologies in Construction Site Security",
      excerpt: "Exploring the latest safety innovations including AI-powered monitoring, wearable technology, and predictive analytics.",
      author: "David Thompson",
      date: "March 5, 2024",
      category: "Safety",
      readTime: "7 min read",
      image: "/images/news/safety-technology.jpg"
    },
    {
      title: "The Rise of Smart Cities: Infrastructure for the Digital Age",
      excerpt: "How intelligent infrastructure systems are transforming urban development and improving quality of life.",
      author: "Emily Chen",
      date: "February 28, 2024",
      category: "Infrastructure",
      readTime: "9 min read",
      image: "/images/news/smart-cities.jpg"
    },
    {
      title: "Residential Construction Boom: Meeting the Growing Demand",
      excerpt: "Analysis of current housing market trends and how construction companies are adapting to increased demand.",
      author: "Sarah Mitchell",
      date: "February 20, 2024",
      category: "Residential",
      readTime: "5 min read",
      image: "/images/news/residential-boom.jpg"
    },
    {
      title: "Digital Transformation in Construction: From Blueprint to Building",
      excerpt: "How BIM, 3D modeling, and digital twins are streamlining the construction process and improving collaboration.",
      author: "Lisa Anderson",
      date: "February 15, 2024",
      category: "Technology",
      readTime: "8 min read",
      image: "/images/news/digital-transformation.jpg"
    },
    {
      title: "Commercial Real Estate: Adapting to Post-Pandemic Work Patterns",
      excerpt: "How office spaces are evolving to meet changing workplace needs and employee preferences.",
      author: "Suresh Deopura",
      date: "February 10, 2024",
      category: "Commercial",
      readTime: "6 min read",
      image: "/images/news/commercial-real-estate.jpg"
    }
  ]

  const categories = [
    "All",
    "Sustainability",
    "Innovation",
    "Safety",
    "Infrastructure",
    "Residential",
    "Technology",
    "Commercial"
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
                  <Newspaper className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Latest <span className="gradient-text">News</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest trends, innovations, and insights in the construction industry. 
                From sustainability to technology, discover what's shaping the future of building.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
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
              Featured <span className="gradient-text">Article</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our latest insights and analysis on the most important topics in construction today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full bg-gradient-to-br from-primary-500 to-accent-500">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-white/80" />
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>{featuredArticle.author}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <Link href="/contact">
                    <motion.button
                      className="btn-primary px-6 py-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
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
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid Section */}
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
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of industry insights, company updates, and expert analysis.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-500">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-white/80" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{article.date}</span>
                    </div>
                    <Link href="/contact">
                      <motion.button
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Subscribe to our newsletter for the latest industry insights, company updates, 
              and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <motion.button
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NewsPage
