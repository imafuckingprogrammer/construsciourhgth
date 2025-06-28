import { motion } from 'framer-motion'
import { ArrowRight, Building, Factory, Truck, Zap } from 'lucide-react'

const Industries = () => {
  const industries = [
    {
      id: 'IND_001',
      icon: Building,
      title: "Construction",
      description: "Heavy-duty components for excavators, bulldozers, and construction equipment operating in demanding environments worldwide.",
      applications: ["Excavator parts", "Bulldozer components", "Crane systems", "Foundation equipment"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
    },
    {
      id: 'IND_002', 
      icon: Factory,
      title: "Mining",
      description: "Robust machinery parts designed to withstand extreme conditions in mining operations, ensuring maximum uptime and safety.",
      applications: ["Dump truck parts", "Conveyor systems", "Drilling equipment", "Processing machinery"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
    },
    {
      id: 'IND_003',
      icon: Zap,
      title: "Energy",
      description: "Precision components for power generation, oil & gas, and renewable energy infrastructure supporting global energy needs.",
      applications: ["Generator parts", "Turbine components", "Pipeline equipment", "Solar mounting systems"],
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop"
    },
    {
      id: 'IND_004',
      icon: Truck,
      title: "Transportation",
      description: "High-performance parts for commercial vehicles, logistics equipment, and transportation infrastructure systems.",
      applications: ["Truck components", "Trailer parts", "Loading systems", "Fleet maintenance"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
    }
  ]

  const capabilities = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of sector-specific requirements and operating conditions"
    },
    {
      title: "Custom Solutions",
      description: "Tailored components designed for unique industry applications and challenges"
    },
    {
      title: "Global Support",
      description: "Worldwide service network ensuring consistent support across all markets"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing protocols specific to each industry's demanding standards"
    }
  ]

  const stats = [
    { number: '4', symbol: '', label: 'Key industries served' },
    { number: '50', symbol: '+', label: 'Countries reached' },
    { number: '1000', symbol: '+', label: 'Active projects' },
    { number: '99.5', symbol: '%', label: 'Client satisfaction' }
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
              <div className="label-text mb-8">INDUSTRIES WE SERVE</div>
              <h1 className="hero-title mb-12">
                Powering critical
                <br />
                infrastructure worldwide
              </h1>
              <p className="body-large max-w-3xl mb-8">
                From construction sites to mining operations, our precision-engineered components support the world's most demanding industrial applications across multiple sectors.
              </p>
              <button className="btn-primary">
                Explore Solutions
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

      {/* Industries Grid */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">SECTOR EXPERTISE</div>
              <h2 className="section-title mb-6">Industries we serve</h2>
              <p className="body-large max-w-3xl mx-auto">
                Specialized solutions tailored to the unique demands and operating conditions of each industry sector.
              </p>
            </motion.div>

            <div className="space-y-20">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
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
                        <industry.icon size={24} className="text-neutral-400" />
                      </div>
                      <div className="text-sm font-mono text-neutral-500">/ {industry.id}</div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-6">{industry.title}</h3>
                    <p className="body-text mb-8">{industry.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span className="body-text text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="btn-secondary group">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="w-full h-80 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
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

      {/* Capabilities Section */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">OUR CAPABILITIES</div>
              <h2 className="section-title mb-6">Industry-focused approach</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our specialized expertise ensures that every component meets the specific requirements and challenges of your industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 card-hover"
                >
                  <div className="text-sm font-mono text-neutral-500 mb-4">/ {String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-medium text-white mb-4">{capability.title}</h3>
                  <p className="body-text">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto space-y-8"
            >
              <h2 className="section-title">
                Ready to power your
                <br />
                industry forward?
              </h2>
              <p className="body-large">
                Contact our industry specialists to discuss your specific requirements and discover tailored solutions for your sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Get Industry Quote
                  <ArrowRight className="ml-2" size={16} />
                </button>
                <button className="btn-secondary">
                  Contact Specialists
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Industries 