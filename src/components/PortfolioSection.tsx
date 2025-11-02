'use client'

import { motion } from 'framer-motion'
import { 
  Layers, 
  Smartphone, 
  Globe, 
  Bot, 
  Zap, 
  ArrowUpRight,
  Clock,
  Star,
  Sparkles
} from 'lucide-react'

const PortfolioSection = () => {
  const upcomingProjects = [
    {
      icon: Globe,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Next-generation shopping experience with AI recommendations',
      technologies: ['Next.js', 'AI/ML', 'Stripe', 'PostgreSQL'],
      status: 'In Development',
      progress: 75,
    },
    {
      icon: Smartphone,
      title: 'FinTech Mobile App',
      category: 'Mobile Development',
      description: 'Revolutionary financial management with smart insights',
      technologies: ['React Native', 'Blockchain', 'AI Analytics'],
      status: 'Design Phase',
      progress: 45,
    },
    {
      icon: Bot,
      title: 'AI Assistant Platform',
      category: 'AI Solutions',
      description: 'Intelligent automation suite for enterprise workflows',
      technologies: ['OpenAI', 'Python', 'Cloud Functions'],
      status: 'Planning',
      progress: 25,
    },
    {
      icon: Layers,
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Comprehensive analytics and management platform',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      status: 'Concept',
      progress: 15,
    },
    {
      icon: Zap,
      title: 'IoT Management System',
      category: 'Enterprise Solution',
      description: 'Smart device monitoring and control platform',
      technologies: ['IoT', 'Real-time Data', 'Cloud Infrastructure'],
      status: 'Research',
      progress: 10,
    },
    {
      icon: Sparkles,
      title: 'Creative Studio Platform',
      category: 'Digital Experience',
      description: 'Immersive 3D portfolio and showcase platform',
      technologies: ['Three.js', 'WebGL', 'Creative Coding'],
      status: 'Ideation',
      progress: 5,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development': return 'text-green-400 bg-green-400/10 border-green-400/20'
      case 'Design Phase': return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      case 'Planning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
      case 'Concept': return 'text-purple-400 bg-purple-400/10 border-purple-400/20'
      case 'Research': return 'text-orange-400 bg-orange-400/10 border-orange-400/20'
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-navy" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Clock className="text-gold" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Portfolio</span> <span className="text-white">Preview</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Get an exclusive look at our upcoming projects and innovations. 
            These cutting-edge solutions represent the future of digital excellence.
          </p>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold/20 to-gold-light/20 border border-gold/30 rounded-full"
          >
            <Sparkles className="text-gold" size={20} />
            <span className="text-gold font-medium">Future Projects in Progress</span>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group glass p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-500 relative overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  duration: 3 + index * 0.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                {/* Project Icon */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold/25"
                  >
                    <project.icon className="text-gold" size={32} />
                  </motion.div>
                  
                  {/* Status Badge */}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">{project.category}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-400">Progress</span>
                    <span className="text-xs text-gold font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-gold to-gold-light h-2 rounded-full"
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                        className="px-2 py-1 bg-gold/10 border border-gold/20 rounded-md text-xs text-gold"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Coming Soon Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-400 hover:text-gold transition-colors duration-300 text-sm font-medium group cursor-not-allowed"
                >
                  Coming Soon
                  <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: '6+', label: 'Projects in Pipeline', icon: Layers },
            { number: '100%', label: 'Innovation Focus', icon: Sparkles },
            { number: '24/7', label: 'Development Cycle', icon: Clock },
            { number: '∞', label: 'Creative Possibilities', icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 glass rounded-xl border border-gold/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-gold" size={24} />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 glass rounded-2xl border border-gold/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Want to Be Part of Our Journey?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join us as we build the future of digital innovation. Get early access to our projects 
            and be the first to experience cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-gold to-gold-light text-navy px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Subscribe for Updates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection