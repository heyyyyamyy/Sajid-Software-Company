'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  TrendingUp, 
  Brain, 
  Rocket, 
  Code, 
  Lightbulb,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const BlogSection = () => {
  const upcomingPosts = [
    {
      icon: Brain,
      title: 'The Future of AI in Software Development',
      category: 'Artificial Intelligence',
      excerpt: 'Exploring how AI is revolutionizing the way we build and deploy software solutions.',
      readTime: '8 min read',
      date: 'Coming Soon',
      tags: ['AI', 'Development', 'Future Tech'],
    },
    {
      icon: Rocket,
      title: 'Building Scalable SaaS Architectures',
      category: 'Software Architecture',
      excerpt: 'Best practices for creating robust, scalable software-as-a-service platforms.',
      readTime: '12 min read',
      date: 'Coming Soon',
      tags: ['SaaS', 'Architecture', 'Scalability'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation Strategies for 2025',
      category: 'Business Strategy',
      excerpt: 'Key trends and strategies that will define digital transformation in the coming year.',
      readTime: '10 min read',
      date: 'Coming Soon',
      tags: ['Strategy', 'Digital', 'Trends'],
    },
    {
      icon: Code,
      title: 'Modern Web Development Best Practices',
      category: 'Web Development',
      excerpt: 'Essential techniques and tools for building high-performance web applications.',
      readTime: '15 min read',
      date: 'Coming Soon',
      tags: ['Web Dev', 'Performance', 'Best Practices'],
    },
  ]

  const categories = [
    { name: 'AI & Machine Learning', icon: Brain, count: 5 },
    { name: 'Web Development', icon: Code, count: 8 },
    { name: 'Business Strategy', icon: TrendingUp, count: 6 },
    { name: 'Innovation', icon: Lightbulb, count: 4 },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

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
            <BookOpen className="text-gold" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">Insights &</span> <span className="gradient-text">Knowledge</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay ahead of the curve with our upcoming insights on technology trends, 
            development best practices, and industry innovations.
          </p>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold/20 to-gold-light/20 border border-gold/30 rounded-full"
          >
            <Sparkles className="text-gold" size={20} />
            <span className="text-gold font-medium">Our Insights Are Coming Soon</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Featured Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-2xl border border-gold/20 mb-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-xl flex items-center justify-center">
                    <Rocket className="text-gold" size={24} />
                  </div>
                  <div>
                    <span className="text-gold text-sm font-medium">Featured Article</span>
                    <h3 className="text-2xl font-bold text-white">The Evolution of Software Intelligence</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Discover how artificial intelligence is reshaping the software development landscape 
                  and what it means for businesses looking to stay competitive in the digital age.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>Coming Soon</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>20 min read</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-6 rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <post.icon className="text-gold" size={20} />
                    </div>
                    <span className="text-gold text-xs font-medium uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gold/10 border border-gold/20 rounded-md text-xs text-gold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <motion.button
                      whileHover={{ x: 3 }}
                      className="text-gold hover:text-gold-light transition-colors duration-300"
                    >
                      <ArrowRight size={14} />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-6 rounded-xl border border-gold/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gold/5 transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="text-gold group-hover:scale-110 transition-transform duration-300" size={18} />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-gold text-sm font-medium">
                      {category.count}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-6 rounded-xl border border-gold/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-6">
                Be the first to know when we publish new insights and articles.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-navy-light border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-navy py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>

            {/* Popular Topics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-6 rounded-xl border border-gold/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI Development',
                  'React',
                  'Next.js',
                  'Cloud Computing',
                  'DevOps',
                  'Mobile Apps',
                  'UI/UX Design',
                  'Automation',
                ].map((topic, index) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-xs text-gold hover:bg-gold/20 transition-colors duration-300 cursor-pointer"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection