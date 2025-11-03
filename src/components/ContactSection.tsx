'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare,
  Calendar,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const particlesRef = useRef<HTMLDivElement>(null)

  // Particle animation effect
  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return

      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-gold rounded-full opacity-70'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animation = `particle ${Math.random() * 3 + 2}s linear infinite`
      
      particlesRef.current.appendChild(particle)

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 5000)
    }

    const interval = setInterval(createParticle, 200)
    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      })
    }, 3000)
  }

  const services = [
    'Custom Software Development',
    'AI & Automation Solutions',
    'Web Design & Development',
    'Cloud & DevOps Services',
    'Digital Product Consulting',
    'Other / Not Sure',
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@sajidsoftware.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      description: 'Come say hello at our office',
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      content: 'Book a consultation',
      description: 'Let\'s discuss your project',
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-light to-navy" />
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

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
            <span className="gradient-text">Let&apos;s Build</span> <span className="text-white">the Future</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let&apos;s create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl border border-gold/20 relative overflow-hidden">
              {/* Form Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-xl flex items-center justify-center">
                    <MessageSquare className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Start Your Project</h3>
                    <p className="text-gray-300 text-sm">Tell us about your vision</p>
                  </div>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold" size={18} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-navy-light border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold" size={18} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-navy-light border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name (Optional)"
                      className="w-full px-4 py-4 bg-navy-light border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-all duration-300"
                    />

                    {/* Service Selection */}
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-navy-light border border-gold/20 rounded-lg text-white focus:border-gold focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select a Service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-navy-light">
                          {service}
                        </option>
                      ))}
                    </select>

                    {/* Message */}
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="w-full px-4 py-4 bg-navy-light border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-all duration-300 resize-none"
                    />

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-gold to-gold-light text-navy py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="text-white" size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-6 rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-gold transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gold font-medium">{info.content}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-6 rounded-xl border border-gold/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Sajid?</h3>
              <div className="space-y-4">
                {[
                  { label: 'Response Time', value: '< 24 hours' },
                  { label: 'Project Success Rate', value: '99%' },
                  { label: 'Client Satisfaction', value: '100%' },
                  { label: 'Support Availability', value: '24/7' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-300">{stat.label}</span>
                    <span className="text-gold font-semibold">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass p-6 rounded-xl border border-gold/20 text-center"
            >
              <Sparkles className="text-gold mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Ready to Start?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Schedule a free consultation to discuss your project and get a custom quote.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full border-2 border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar size={18} />
                <span>Schedule Meeting</span>
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection