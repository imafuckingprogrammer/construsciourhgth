import { motion } from 'framer-motion'
import { ArrowRight, Check, Download, Wrench } from 'lucide-react'

const Products = () => {
  const productCategories = [
    {
      id: 'UC_000',
      title: "Engine & Powertrain Parts",
      description: "High-performance engine components, filters, and drive train parts engineered for maximum durability and precision in demanding applications.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
      features: ["Engine blocks and components", "Transmission parts", "High-grade filters", "Drive systems"]
    },
    {
      id: 'UC_001',
      title: "Hydraulic Components",
      description: "Precision hydraulic systems including hoses, pumps, cylinders, and seals designed for high-pressure applications and reliability.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
      features: ["Hydraulic pumps", "High-pressure hoses", "Cylinders and seals", "Control valves"]
    },
    {
      id: 'UC_002',
      title: "Undercarriage & Ground Engagement",
      description: "Robust undercarriage solutions including tracks, rollers, blades, and buckets for heavy-duty construction equipment performance.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      features: ["Track chains and pads", "Rollers and idlers", "Excavator buckets", "Bulldozer blades"]
    },
    {
      id: 'UC_003',
      title: "Electrical & Control Systems",
      description: "Modern electrical components including sensors, wiring systems, and control units for advanced machinery operation and monitoring.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      features: ["Electronic sensors", "Control modules", "Wiring harnesses", "Display systems"]
    }
  ]

  const qualityFeatures = [
    { title: "ISO 9001 Certified", desc: "International quality management standards compliance" },
    { title: "Rigorous Testing", desc: "Multi-stage quality control and performance validation" },
    { title: "Premium Materials", desc: "High-grade steel and advanced alloy components" },
    { title: "OEM Equivalent", desc: "Specifications that meet or exceed original standards" }
  ]

  const customServices = [
    "Custom part design and manufacturing",
    "Reverse engineering services", 
    "Prototype development and testing",
    "Volume production capabilities"
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
              <div className="label-text mb-8">PRODUCT CATALOG</div>
              <h1 className="hero-title mb-12">
                Precision parts for
                <br />
                demanding applications
              </h1>
              <p className="body-large max-w-3xl mb-8">
                Comprehensive range of heavy machinery parts engineered for reliability, performance, and longevity in the most demanding industrial applications worldwide.
              </p>
              <button className="btn-primary">
                <Download size={16} className="mr-2" />
                Download Catalog
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">PRODUCT CATEGORIES</div>
              <h2 className="section-title mb-6">Complete solutions portfolio</h2>
              <p className="body-large max-w-2xl mx-auto">
                From engine components to hydraulic systems, we provide comprehensive solutions for all your heavy machinery requirements.
              </p>
            </motion.div>

            <div className="space-y-20">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
                    <button className="btn-secondary group">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
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
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">QUALITY ASSURANCE</div>
              <h2 className="section-title mb-6">Uncompromising standards</h2>
              <p className="body-large max-w-3xl mx-auto">
                Every component undergoes rigorous testing and quality control to ensure peak performance and reliability in the field.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="label-text">CUSTOM ENGINEERING</div>
                <h2 className="section-title">
                  Tailored solutions for
                  <br />
                  unique challenges
                </h2>
                <p className="body-text">
                  Need specialized parts for unique applications? Our engineering team works with you to develop custom solutions that meet your exact specifications and performance requirements.
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
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-neutral-700 rounded-2xl flex items-center justify-center">
                    <Wrench size={64} className="text-neutral-400" />
                  </div>
                </div>
              </motion.div>
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
                Ready to upgrade your
                <br />
                machinery performance?
              </h2>
              <p className="body-large">
                Contact our product specialists today to discuss your requirements and find the perfect solutions for your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Get Quote
                  <ArrowRight className="ml-2" size={16} />
                </button>
                <button className="btn-secondary">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products 