'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Clock, Building2 } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "We never compromise on quality, ensuring every project meets the highest standards."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our work and client relationships."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative approach with clients, partners, and our skilled workforce."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Delivering projects on time and within budget, every single time."
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                About <span className="gradient-text">DewInfra</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                For over two decades, DewInfra has been at the forefront of construction 
                innovation, delivering exceptional projects that shape communities and drive progress.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, safety, and sustainability has made us a trusted 
                partner for clients across the nation, from small renovations to large-scale 
                infrastructure projects.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-12">
              <Link href="/about">
                <motion.button
                  className="btn-primary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image placeholder */}
            <div className="relative">
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-2xl"
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building2 className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <p className="text-xl font-semibold">Construction Excellence</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-accent-400 rounded-full shadow-lg"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary-400 rounded-full shadow-lg"
                animate={{
                  y: [10, -10, 10],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Stats overlay */}
            <motion.div
              className="absolute -bottom-8 left-8 right-8 bg-white rounded-xl p-6 shadow-xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-600">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
