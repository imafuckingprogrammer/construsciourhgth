import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { slideUp, slideLeft, slideRight, scaleIn, viewportOptions } from '../utils/animations'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import { useState } from 'react'

const Products = () => {
  const productCategories = [
    {
      id: 'UC_000',
      title: "Engine & Powertrain Parts",
      description: "Premium engine components, filters, and drivetrain parts designed for maximum durability.",
      image: "/Products-Engine & Powertrain Parts.jpg",
      features: ["Engine blocks & components", "High-grade filters", "Transmission parts", "Drive systems"]
    },
    {
      id: 'UC_001',
      title: "Hydraulic Components",
      description: "Reliable hydraulic systems and components for high-pressure applications.",
      image: "/Products-Hydraulic Components.jpg",
      features: ["Hydraulic pumps", "Control valves", "Cylinders and seals", "High-pressure hoses"]
    },
    {
      id: 'UC_002',
      title: "Undercarriage & Ground Engagement",
      description: "Durable undercarriage parts and wear components for heavy-duty operations.",
      image: "/Products-Tailored Solutions.jpg",
      features: ["Track chains & pads", "Rollers & idlers", "Bulldozer blades", "Excavator buckets"]
    },
    {
      id: 'UC_003',
      title: "Electrical & Control Systems",
      description: "Modern electrical solutions to support monitoring, automation, and control.",
      image: "/Products-Electrical & Control Systems.jpg",
      features: ["Sensors & modules", "Wiring harnesses", "Display systems", "Control units"]
    }
  ]

  const qualityFeatures = [
    { title: "ISO 9001 Certified manufacturers", desc: "International quality management standards compliance" },
    { title: "Multi-stage testing & validation", desc: "Rigorous quality control and performance verification" },
    { title: "Premium steel and alloy materials", desc: "High-grade components for demanding applications" },
    { title: "OEM-equivalent specifications (or better)", desc: "Meeting or exceeding original manufacturer standards" }
  ]

  const customServices = [
    "Custom sourcing",
    "Reverse engineering", 
    "Volume order management",
    "OEM matching and testing"
  ]

  const [showComingSoon, setShowComingSoon] = useState(false)

  const brands = [
    {
      name: 'Komatsu',
      description: 'Leading Lebanese/Syrian supplier of Komatsu in the regions',
      image: '/Komatsu_company_logos.svg.png',
      isWhite: false
    },
    {
      name: 'Caterpillar',
      description: 'Leading Lebanese/Syrian supplier of Caterpillar in the regions',
      image: '/cater.png',
      isWhite: true
    },
    {
      name: 'Maxiforce',
      description: 'Official distributor for MaxiForce in Syria and Lebanon',
      image: '/maxi.png',
      isWhite: false
    },
    {
      name: 'Blumaq',
      description: 'Official distributor for Blumaq in Syria and Lebanon',
      image: '/logo-blumaq-min.png',
      isWhite: true
    },
    {
      name: 'Perkins',
      description: 'Supplier of Perkins OEM in the regions',
      image: '/perkins[new]perkin.png',
      isWhite: false
    },
    {
      name: 'Cummins',
      description: 'Best supplier of Cummins OEM in the regions',
      image: '/cummins{new}.png',
      isWhite: true
    },
    {
      name: 'John Deere',
      description: 'Supplier of John Deere OEM in the region',
      image: '/JOHN DEERE MAIN.png',
      isWhite: false
    }
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
              <div className="label-text mb-8">PRODUCT CATALOG</div>
              <h1 className="hero-title mb-12">
                Precision Parts for
                <br />
                Demanding Applications
              </h1>
              <p className="body-large max-w-3xl mb-8">
                Eblon Dynamics supplies a comprehensive range of heavy machinery components designed for reliability, performance, and longevity—sourced from the world's leading manufacturers and engineered for the toughest industrial environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section-small bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
              className="text-center mb-12"
            >
              <div className="label-text mb-4">OUR BRANDS & PARTNERSHIPS</div>
              <h2 className="section-title mb-6">We are proud to be:</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {brands.map((brand, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={scaleIn.initial}
                    whileInView={scaleIn.animate}
                    viewport={viewportOptions}
                    transition={{ ...scaleIn.transition, delay: index * 0.1 }}
                    className={`glass-card p-8 flex flex-col items-center text-center card-hover ${brand.isWhite ? 'bg-white/60 backdrop-blur-md' : ''}`}
                  >
                    <img src={brand.image} alt={brand.name} className="h-16 mb-4 object-contain" />
                    <div className={`text-xl font-semibold mb-2 ${brand.isWhite ? 'text-black' : 'text-white'}`}>{brand.name}</div>
                    <div className={`body-text mb-2 ${brand.isWhite ? 'text-black' : 'text-neutral-300'}`}>{brand.description}</div>
                  </motion.div>
                );
              })}
            </div>
            <div className="flex justify-center mt-8">
              <Link to="/contact">
                <button className="btn-primary">
                  Request Custom Quote
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
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
              <div className="label-text mb-4">PRODUCT CATEGORIES</div>
              <h2 className="section-title mb-6">Complete Solutions Portfolio</h2>
              <p className="body-large max-w-2xl mx-auto">
                From engine systems to hydraulics, we offer trusted solutions tailored for your equipment and performance needs.
              </p>
            </motion.div>

            <div className="space-y-20">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={scaleIn.initial}
                  whileInView={scaleIn.animate}
                  viewport={viewportOptions}
                  transition={{ ...scaleIn.transition, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="text-sm font-mono text-neutral-500 mb-4">/ {category.id}</div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-6">{category.title}</h3>
                    <p className="body-text mb-8">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Check size={16} className="text-neutral-400 flex-shrink-0" />
                          <span className="body-text text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="btn-secondary group" onClick={() => setShowComingSoon(true)}>
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Modal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} title="Coming Soon">
                      <div className="space-y-6">
                        <div className="text-neutral-300 leading-relaxed">
                          This feature is coming soon. Stay tuned!
                        </div>
                      </div>
                    </Modal>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="w-full h-80 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
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

      {/* Quality Standards */}
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
              <div className="label-text mb-4">QUALITY ASSURANCE</div>
              <h2 className="section-title mb-6">Uncompromising Standards</h2>
              <p className="body-large max-w-3xl mx-auto">
                Every product we deliver is backed by strict quality control protocols, supplier audits, and certifications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={scaleIn.initial}
                  whileInView={scaleIn.animate}
                  viewport={viewportOptions}
                  transition={{ ...scaleIn.transition, delay: index * 0.1 }}
                  className="glass-card p-8 text-center card-hover"
                >
                  <div className="text-sm font-mono text-neutral-500 mb-4">/ {String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-medium text-white mb-4">{feature.title}</h3>
                  <p className="body-text text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={slideLeft.initial}
                whileInView={slideLeft.animate}
                viewport={viewportOptions}
                transition={slideLeft.transition}
                className="space-y-8"
              >
                <div className="label-text">CUSTOM PARTS & ENGINEERING SUPPORT</div>
                <h2 className="section-title">
                  Tailored Solutions for
                  <br />
                  Unique Applications
                </h2>
                <p className="body-text">
                  Need specialized components or hard-to-source items? We'll locate, configure, or reverse-engineer what you need.
                </p>
                <div className="space-y-4">
                  {customServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check size={16} className="text-neutral-400 flex-shrink-0" />
                      <span className="body-text">{service}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary">
                  Request Custom Quote
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </motion.div>

              <motion.div
                initial={slideRight.initial}
                whileInView={slideRight.animate}
                viewport={viewportOptions}
                transition={slideRight.transition}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden">
                  <img 
                    src="/Products-Tailored Solutions.jpg" 
                    alt="Custom engineering solutions"
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
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
              className="text-center max-w-3xl mx-auto space-y-8"
            >
              <h2 className="section-title">
                Let's Upgrade Your
                <br />
                Machinery Together
              </h2>
              <p className="body-large">
                Our team is ready to help you find the perfect parts for your specific applications. Contact us today and take the first step toward performance, reliability, and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="btn-primary group">
                    Get Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn-secondary">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products 