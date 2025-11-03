'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Shield, Users, Rocket, Award } from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality',
      description: 'We deliver exceptional software solutions with meticulous attention to detail and rigorous testing standards.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex business challenges.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We build trust through transparent communication, ethical practices, and reliable partnerships.',
    },
  ]

  const stats = [
    { icon: Users, number: '50+', label: 'Team Members' },
    { icon: Rocket, number: '100+', label: 'Projects Launched' },
    { icon: Award, number: '99%', label: 'Success Rate' },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-navy opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About</span> <span className="text-white">Sajid</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a new, ambitious software company driven by innovation and powered by a vision 
            to transform how businesses leverage technology in the modern digital landscape.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Pioneering the Next Generation of Software Solutions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                At Sajid Software, we believe that great software is more than just code—it&apos;s about 
                creating intelligent systems that adapt, evolve, and empower businesses to reach 
                their full potential. Our team combines deep technical expertise with creative 
                problem-solving to deliver solutions that don&apos;t just meet today&apos;s needs, but 
                anticipate tomorrow&apos;s challenges.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Founded on the principles of innovation, quality, and integrity, we specialize in 
                custom software development, AI integration, and digital transformation strategies 
                that help startups and enterprises thrive in an increasingly connected world.
              </p>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-6 rounded-2xl border border-gold/20"
            >
              <h4 className="text-xl font-semibold text-gold mb-3">Our Mission</h4>
              <p className="text-gray-300">
                To democratize access to cutting-edge technology by creating intelligent, 
                scalable software solutions that empower businesses to innovate, grow, 
                and make a meaningful impact in their industries.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Floating Cards */}
            <div className="relative h-96">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-40 glass rounded-2xl border border-gold/30 p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
                    <Rocket size={16} className="text-navy" />
                  </div>
                  <span className="text-white font-semibold">Innovation Hub</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Where cutting-edge ideas transform into powerful software solutions.
                </p>
              </motion.div>

              {/* Secondary Cards */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 left-0 w-48 h-32 glass rounded-xl border border-gold/20 p-4"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Target size={16} className="text-gold" />
                  <span className="text-white text-sm font-medium">Precision</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Every line of code crafted with purpose and excellence.
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-20 right-0 w-48 h-32 glass rounded-xl border border-gold/20 p-4"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Lightbulb size={16} className="text-gold" />
                  <span className="text-white text-sm font-medium">Creativity</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Innovative solutions that push the boundaries of possibility.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl border border-gold/20 text-center group hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-gold" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-12">Building Excellence Together</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="space-y-4"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center mx-auto border border-gold/30">
                  <stat.icon className="text-gold" size={32} />
                </div>
                <div className="text-4xl font-bold gradient-text">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection