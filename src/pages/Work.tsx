import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, Users } from 'lucide-react'

const Work = () => {
  const openPositions = [
    {
      id: 'JOB_001',
      title: "Senior Mechanical Engineer",
      department: "Engineering",
      location: "Damascus, Syria",
      type: "Full-time",
      description: "Lead mechanical design and development of heavy machinery components with focus on innovation and quality.",
      requirements: ["10+ years experience", "CAD/CAM expertise", "Materials knowledge", "Project leadership"]
    },
    {
      id: 'JOB_002',
      title: "Quality Control Specialist",
      department: "Quality Assurance",
      location: "Damascus, Syria", 
      type: "Full-time",
      description: "Ensure product quality through rigorous testing protocols and continuous improvement initiatives.",
      requirements: ["5+ years QC experience", "ISO certification knowledge", "Testing equipment expertise", "Analytical skills"]
    },
    {
      id: 'JOB_003',
      title: "International Sales Manager",
      department: "Sales & Marketing",
      location: "Remote/Travel",
      type: "Full-time",
      description: "Drive international expansion through strategic partnerships and client relationship management.",
      requirements: ["Sales experience", "International business", "Multiple languages", "Travel availability"]
    }
  ]

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Market-leading salaries with performance-based bonuses and comprehensive benefits package"
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities, training programs, and career advancement pathways"
    },
    {
      title: "Innovation Culture",
      description: "Work on cutting-edge projects with access to latest technologies and research initiatives"
    },
    {
      title: "Global Impact",
      description: "Contribute to projects that power critical infrastructure and industries worldwide"
    }
  ]

  const stats = [
    { number: '150', symbol: '+', label: 'Team members worldwide' },
    { number: '25', symbol: '+', label: 'Nationalities represented' },
    { number: '95', symbol: '%', label: 'Employee satisfaction' },
    { number: '5', symbol: '', label: 'Average years tenure' }
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
              <div className="label-text mb-8">CAREERS AT EBLON</div>
              <h1 className="hero-title mb-12">
                Build your career with
                <br />
                industry leaders
              </h1>
              <p className="body-large max-w-3xl mb-8">
                Join our team of passionate engineers, innovators, and industry experts who are shaping the future of heavy machinery manufacturing and driving global infrastructure forward.
              </p>
              <button className="btn-primary">
                View Open Positions
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

      {/* Open Positions */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">OPEN POSITIONS</div>
              <h2 className="section-title mb-6">Join our team</h2>
              <p className="body-large max-w-3xl mx-auto">
                Discover exciting career opportunities across engineering, manufacturing, quality assurance, and business development.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 card-hover"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-mono text-neutral-500 mb-2">/ {position.id}</div>
                          <h3 className="text-2xl font-medium text-white mb-2">{position.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-neutral-400">
                            <span>{position.department}</span>
                            <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>{position.location}</span>
                            </div>
                            <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{position.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="body-text">{position.description}</p>
                      
                      <div>
                        <div className="text-sm font-mono text-neutral-500 mb-3">REQUIREMENTS</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {position.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                              <span className="body-text text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-end">
                      <button className="btn-primary">
                        Apply Now
                        <ArrowRight className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">EMPLOYEE BENEFITS</div>
              <h2 className="section-title mb-6">Why work with us</h2>
              <p className="body-large max-w-3xl mx-auto">
                We invest in our people with comprehensive benefits, growth opportunities, and a culture that values innovation and excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 card-hover"
                >
                  <div className="text-sm font-mono text-neutral-500 mb-4">/ {String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-medium text-white mb-4">{benefit.title}</h3>
                  <p className="body-text">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
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
                <div className="label-text">COMPANY CULTURE</div>
                <h2 className="section-title">
                  Innovation driven by
                  <br />
                  passionate people
                </h2>
                <p className="body-text">
                  Our culture is built on collaboration, continuous learning, and the pursuit of excellence. We believe that great products come from great teams working together toward shared goals.
                </p>
                <div className="space-y-4">
                  {[
                    "Collaborative work environment",
                    "Continuous learning and development",
                    "Innovation and creative problem-solving",
                    "Work-life balance and flexibility"
                  ].map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="body-text">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-neutral-700 rounded-2xl flex items-center justify-center">
                    <Users size={64} className="text-neutral-400" />
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
                Ready to shape the future
                <br />
                of heavy machinery?
              </h2>
              <p className="body-large">
                Join our team of innovators and help us build the components that power the world's most critical infrastructure projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Apply Today
                  <ArrowRight className="ml-2" size={16} />
                </button>
                <button className="btn-secondary">
                  Learn About Culture
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work 