'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Bot, 
  Palette, 
  Cloud, 
  Lightbulb, 
  ArrowRight,
  Smartphone,
  Database,
  Zap,
  Globe
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      tagline: 'Scalable solutions built for growth',
      description: 'We create powerful web and mobile applications using cutting-edge technologies like React, Next.js, Node.js, and React Native. Our solutions are designed to scale with your business and deliver exceptional user experiences.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'React Native'],
      features: ['Scalable Architecture', 'Cross-Platform', 'Performance Optimized', 'Modern UI/UX'],
    },
    {
      icon: Bot,
      title: 'AI & Automation Solutions',
      tagline: 'Intelligent systems that work smarter',
      description: 'Transform your workflows with AI-powered automation, ChatGPT integrations, and intelligent bots. We help businesses optimize operations, reduce costs, and unlock new possibilities through artificial intelligence.',
      technologies: ['OpenAI API', 'Machine Learning', 'Python', 'TensorFlow', 'Automation'],
      features: ['Process Automation', 'AI Chatbots', 'Data Analysis', 'Workflow Optimization'],
    },
    {
      icon: Palette,
      title: 'Web Design & Development',
      tagline: 'Premium digital experiences',
      description: 'Create stunning, fast, and responsive websites that captivate your audience. Our designs combine aesthetic excellence with technical performance, including SEO optimization and brand integration.',
      technologies: ['Figma', 'TailwindCSS', 'Framer Motion', 'Three.js', 'WebGL'],
      features: ['Responsive Design', 'SEO Optimized', '3D Animations', 'Brand Integration'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Services',
      tagline: 'Scalable infrastructure solutions',
      description: 'Streamline your deployment and scaling with professional cloud setup, CI/CD pipelines, and performance optimization on AWS, Azure, and Google Cloud platforms.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      features: ['Auto Scaling', 'Load Balancing', 'Monitoring', 'Security'],
    },
    {
      icon: Lightbulb,
      title: 'Digital Product Consulting',
      tagline: 'From idea to market success',
      description: 'We help startups and businesses transform innovative ideas into market-ready products. Our consulting covers strategy, MVP development, user research, and go-to-market planning.',
      technologies: ['Product Strategy', 'MVP Development', 'User Research', 'Market Analysis'],
      features: ['Strategic Planning', 'MVP Creation', 'User Testing', 'Launch Support'],
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

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
            <span className="text-white">Our</span> <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions designed to accelerate your business growth 
            and establish your competitive advantage in the modern marketplace.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Service Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-gold/25"
                >
                  <service.icon className="text-gold" size={32} />
                </motion.div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gold text-sm font-medium mb-4">{service.tagline}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white text-sm font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-xs text-gold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white text-sm font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium group"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Powered by Modern Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: Code2 },
              { name: 'AI/ML', icon: Bot },
              { name: 'Cloud', icon: Cloud },
              { name: 'Mobile', icon: Smartphone },
              { name: 'Database', icon: Database },
              { name: 'Performance', icon: Zap },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center space-y-3 p-4 glass rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-lg flex items-center justify-center">
                  <tech.icon className="text-gold" size={24} />
                </div>
                <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 p-8 glass rounded-2xl border border-gold/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your goals and drive innovation in your industry.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gold to-gold-light text-navy px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection