import { motion } from 'framer-motion'
import { ArrowRight, Beaker, Cpu, Shield, Zap } from 'lucide-react'

const Lab = () => {
  const labCapabilities = [
    {
      id: 'LAB_001',
      icon: Beaker,
      title: "Materials Testing",
      description: "Advanced materials analysis including stress testing, fatigue analysis, and chemical composition verification for optimal performance.",
      equipment: ["Tensile testing machines", "Hardness testers", "Spectrometers", "Fatigue test rigs"]
    },
    {
      id: 'LAB_002',
      icon: Shield,
      title: "Quality Validation",
      description: "Comprehensive quality control processes ensuring every component meets strict international standards and specifications.",
      equipment: ["Coordinate measuring machines", "Surface roughness testers", "Dimensional analyzers", "Visual inspection systems"]
    },
    {
      id: 'LAB_003',
      icon: Cpu,
      title: "Performance Analysis",
      description: "Real-world performance simulation and testing to validate component behavior under extreme operating conditions.",
      equipment: ["Hydraulic test benches", "Load simulation systems", "Environmental chambers", "Vibration test equipment"]
    },
    {
      id: 'LAB_004',
      icon: Zap,
      title: "Innovation Research",
      description: "Cutting-edge research into new materials, manufacturing processes, and design optimization for next-generation components.",
      equipment: ["3D printing systems", "CAD/CAM workstations", "Prototyping tools", "Research partnerships"]
    }
  ]

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems" },
    { name: "ISO 14001:2015", description: "Environmental Management" },
    { name: "OHSAS 18001", description: "Occupational Health & Safety" },
    { name: "CE Marking", description: "European Conformity Standards" }
  ]

  const stats = [
    { number: '10000', symbol: '+', label: 'Components tested annually' },
    { number: '99.9', symbol: '%', label: 'Testing accuracy rate' },
    { number: '24', symbol: '/7', label: 'Lab operation hours' },
    { number: '15', symbol: '+', label: 'Testing protocols' }
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
              <div className="label-text mb-8">TESTING & VALIDATION</div>
              <h1 className="hero-title mb-12">
                Precision testing for
                <br />
                uncompromising quality
            </h1>
              <p className="body-large max-w-3xl mb-8">
                Our state-of-the-art testing laboratory ensures every component meets the highest standards of quality, performance, and reliability through rigorous validation processes.
            </p>
              <button className="btn-primary">
                Lab Capabilities
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

      {/* Lab Capabilities */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="text-center mb-16"
          >
              <div className="label-text mb-4">TESTING CAPABILITIES</div>
              <h2 className="section-title mb-6">Advanced laboratory services</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our comprehensive testing facility provides complete validation services from materials analysis to performance verification.
            </p>
          </motion.div>

            <div className="space-y-20">
              {labCapabilities.map((capability, index) => (
              <motion.div
                  key={capability.id}
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
                        <capability.icon size={24} className="text-neutral-400" />
                      </div>
                      <div className="text-sm font-mono text-neutral-500">/ {capability.id}</div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-6">{capability.title}</h3>
                    <p className="body-text mb-8">{capability.description}</p>
                    
                    <div className="mb-8">
                      <div className="text-sm font-mono text-neutral-500 mb-4">EQUIPMENT & TOOLS</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {capability.equipment.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                            <span className="body-text text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                </div>
                    
                    <button className="btn-secondary group">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="w-full h-80 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl flex items-center justify-center">
                      <div className="w-32 h-32 bg-neutral-700 rounded-2xl flex items-center justify-center">
                        <capability.icon size={64} className="text-neutral-400" />
                      </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <div className="label-text mb-4">CERTIFICATIONS</div>
              <h2 className="section-title mb-6">Quality standards</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our laboratory maintains the highest international standards through rigorous certification and continuous improvement processes.
            </p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
          <motion.div
                key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 text-center card-hover"
                >
                  <div className="text-sm font-mono text-neutral-500 mb-4">/ {String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-medium text-white mb-4">{cert.name}</h3>
                  <p className="body-text text-sm">{cert.description}</p>
                </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
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
                <div className="label-text">TESTING PROCESS</div>
                <h2 className="section-title">
                  Rigorous validation
                  <br />
                  at every stage
                </h2>
                <p className="body-text">
                  Our comprehensive testing process ensures that every component meets or exceeds specifications before reaching our customers, maintaining our reputation for uncompromising quality.
                </p>
                <div className="space-y-4">
                  {[
                    "Incoming material inspection",
                    "In-process quality monitoring",
                    "Final product validation",
                    "Performance verification testing"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="body-text">{step}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary">
                  Request Testing
                  <ArrowRight className="ml-2" size={16} />
                </button>
          </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=450&fit=crop" 
                    alt="Testing laboratory"
                    className="w-full h-full object-cover"
                  />
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
                Need comprehensive
                <br />
                testing services?
            </h2>
              <p className="body-large">
                Contact our testing specialists to discuss your quality validation requirements and ensure your components meet the highest standards.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Schedule Testing
                  <ArrowRight className="ml-2" size={16} />
                </button>
                <button className="btn-secondary">
                  Lab Tour
                </button>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Lab 