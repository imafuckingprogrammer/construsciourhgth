import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Cpu, Zap, Target } from 'lucide-react'

const Innovation = () => {
  const innovations = [
    {
      id: 'INN_001',
      icon: Cpu,
      title: "Smart Manufacturing",
      description: "Advanced automation and IoT integration in our manufacturing processes, enabling real-time quality monitoring and predictive maintenance.",
      impact: "40% reduction in production time",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
    },
    {
      id: 'INN_002', 
      icon: Zap,
      title: "Sustainable Materials",
      description: "Development of eco-friendly alloys and recycling processes that maintain performance while reducing environmental impact.",
      impact: "30% reduction in carbon footprint",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
    },
    {
      id: 'INN_003',
      icon: Target,
      title: "Precision Engineering",
      description: "Next-generation CAD/CAM systems and precision machining technologies delivering unprecedented accuracy in component manufacturing.",
      impact: "99.9% dimensional accuracy",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
    }
  ]

  const researchAreas = [
    {
      title: "Advanced Materials",
      description: "Research into high-performance alloys and composite materials for extreme operating conditions"
    },
    {
      title: "Digital Manufacturing",
      description: "Integration of AI and machine learning for optimized production processes and quality control"
    },
    {
      title: "Sustainability",
      description: "Development of environmentally responsible manufacturing processes and recyclable components"
    },
    {
      title: "Performance Optimization",
      description: "Continuous improvement of component design for enhanced durability and efficiency"
    }
  ]

  const stats = [
    { number: '15', symbol: '%', label: 'Of revenue invested in R&D' },
    { number: '25', symbol: '+', label: 'Patents and innovations' },
    { number: '50', symbol: '+', label: 'Research partnerships' },
    { number: '5', symbol: '', label: 'Innovation awards received' }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="page-section">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="label-text mb-8">INNOVATION & RESEARCH</div>
              <h1 className="hero-title mb-12">
                Engineering tomorrow's
                <br />
                solutions today
              </h1>
              <p className="body-large max-w-3xl mb-8">
                Through continuous research and development, we're pioneering the next generation of heavy machinery components that set new standards for performance, efficiency, and sustainability.
              </p>
              <button className="btn-primary">
                Explore Research
                <ArrowRight className="ml-2" size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-small bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center space-y-3"
                >
                  <div className="text-4xl md:text-5xl font-light text-white">
                    {stat.number}
                    <span className="text-neutral-400">{stat.symbol}</span>
                  </div>
                  <p className="body-text text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">BREAKTHROUGH INNOVATIONS</div>
              <h2 className="section-title mb-6">Leading industry transformation</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our innovation initiatives are reshaping how heavy machinery components are designed, manufactured, and deployed across industries.
              </p>
            </motion.div>

            <div className="space-y-20">
              {innovations.map((innovation, index) => (
                <motion.div
                  key={innovation.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center">
                        <innovation.icon size={24} className="text-neutral-400" />
                      </div>
                      <div className="text-sm font-mono text-neutral-500">/ {innovation.id}</div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-6">{innovation.title}</h3>
                    <p className="body-text mb-6">{innovation.description}</p>
                    
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 mb-8">
                      <div className="text-sm font-mono text-neutral-500 mb-2">IMPACT</div>
                      <div className="text-lg font-medium text-white">{innovation.impact}</div>
                    </div>
                    
                    <button className="btn-secondary group">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="w-full h-80 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden">
                      <img 
                        src={innovation.image} 
                        alt={innovation.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">RESEARCH FOCUS</div>
              <h2 className="section-title mb-6">Areas of expertise</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our research and development efforts span multiple disciplines, driving innovation across all aspects of heavy machinery manufacturing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 card-hover"
                >
                  <div className="text-sm font-mono text-neutral-500 mb-4">/ {String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-medium text-white mb-4">{area.title}</h3>
                  <p className="body-text">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Partnership */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="label-text">COLLABORATIVE INNOVATION</div>
                <h2 className="section-title">
                  Partnering for
                  <br />
                  breakthrough solutions
                </h2>
                <p className="body-text">
                  We collaborate with leading universities, research institutions, and industry partners to accelerate innovation and bring cutting-edge technologies to market faster.
                </p>
                <div className="space-y-4">
                  {[
                    "University research partnerships",
                    "Industry collaboration programs", 
                    "Technology transfer initiatives",
                    "Joint development projects"
                  ].map((partnership, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="body-text">{partnership}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary">
                  Partner With Us
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-neutral-700 rounded-2xl flex items-center justify-center">
                    <Lightbulb size={64} className="text-neutral-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto space-y-8"
            >
              <h2 className="section-title">
                Ready to innovate
                <br />
                with industry leaders?
              </h2>
              <p className="body-large">
                Join us in shaping the future of heavy machinery technology through collaborative innovation and breakthrough research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Explore Opportunities
                  <ArrowRight className="ml-2" size={16} />
                </button>
                <button className="btn-secondary">
                  Research Partnerships
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Innovation 