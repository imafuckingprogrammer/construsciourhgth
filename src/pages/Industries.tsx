import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { slideUp, scaleIn, viewportOptions } from '../utils/animations'

const Industries = () => {
  const industries = [
    {
      id: 'IND_001',
      title: "Construction",
      description: "Durable components for excavators, bulldozers, cranes, and other construction equipment operating in rugged environments.",
      applications: ["Excavator & bulldozer parts", "Foundation equipment", "Crane systems", "Site machinery"],
      image: "/indu-Construction.jpg"
    },
    {
      id: 'IND_002', 
      title: "Mining",
      description: "Robust and reliable parts designed for the extreme demands of mining and quarry operations.",
      applications: ["Dump truck parts", "Conveyor systems", "Drilling & processing equipment", "Heavy haulers"],
      image: "/Indu-Mining.jpg"
    },
    {
      id: 'IND_003',
      title: "Energy",
      description: "Precision components for power generation, oil & gas, and renewable energy sectors—ensuring uninterrupted operation and high efficiency.",
      applications: ["Generator & turbine components", "Pipeline equipment", "Solar system mounting hardware", "Power transmission"],
      image: "/indu-Energy.jpg"
    },
    {
      id: 'IND_004',
      title: "Transportation",
      description: "High-performance parts for logistics fleets, commercial vehicles, and infrastructure related systems.",
      applications: ["Truck & trailer components", "Loading systems", "Fleet maintenance solutions", "Transport infrastructure"],
      image: "/indu-Transportation.jpg"
    }
  ]

  const capabilities = [
    {
      title: "Industry Expertise",
      description: "We understand your sector's challenges and source only from trusted global manufacturers to meet your operational needs."
    },
    {
      title: "Custom Solutions",
      description: "Special requests? We'll locate, source, or match parts tailored to your unique industrial use cases."
    },
    {
      title: "Global Support",
      description: "Our distribution and logistics network ensures consistent availability and support—no matter where you operate."
    },
    {
      title: "Quality Assurance",
      description: "Every component undergoes quality review and certification verification, aligned with industry-specific standards."
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
              initial={slideUp.initial}
              animate={slideUp.animate}
              transition={slideUp.transition}
              className="max-w-4xl"
            >
              <div className="label-text mb-8">INDUSTRIES WE SERVE</div>
              <h1 className="hero-title mb-12">
                Powering Critical Infrastructure
                <br />
                with Trusted Parts
              </h1>
              <p className="body-large max-w-3xl mb-8">
                From construction sites to mining operations, Eblon Dynamics provides high-quality, precision parts sourced from world-leading brands—supporting the most demanding industrial applications across multiple sectors.
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
                  initial={slideUp.initial}
                  whileInView={slideUp.animate}
                  viewport={viewportOptions}
                  transition={{ ...slideUp.transition, delay: index * 0.1 }}
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
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">SECTOR EXPERTISE</div>
              <h2 className="section-title mb-6">Specialized solutions tailored to the specific demands of each sector.</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our vast inventory and expert sourcing help you minimize downtime and maximize performance.
              </p>
            </motion.div>

            <div className="space-y-20">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={scaleIn.initial}
                  whileInView={scaleIn.animate}
                  viewport={viewportOptions}
                  transition={{ ...scaleIn.transition, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
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
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">OUR CAPABILITIES</div>
              <h2 className="section-title mb-6">An Industry-Focused Distribution Approach</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our specialized expertise ensures that every component meets the specific requirements and challenges of your industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={scaleIn.initial}
                  whileInView={scaleIn.animate}
                  viewport={viewportOptions}
                  transition={{ ...scaleIn.transition, delay: index * 0.1 }}
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
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
              className="text-center max-w-3xl mx-auto space-y-8"
            >
              <h2 className="section-title">
                Let's Power Your
                <br />
                Industry Forward
              </h2>
              <p className="body-large">
                Our specialists are ready to help you select the right parts, optimize your supply chain, and ensure business continuity.
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