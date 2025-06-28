import { motion } from 'framer-motion'
import { ArrowRight, Award, Globe, Shield, Users } from 'lucide-react'

const About = () => {
  const leadership = [
    {
      name: "Ahmad Saeed",
      position: "Chief Executive Officer",
      bio: "With over 25 years in heavy machinery manufacturing, Ahmad leads Eblon's vision for international expansion and innovation.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Layla Khalil",
      position: "Chief Technology Officer",
      bio: "Engineering expert driving R&D initiatives and quality innovations across all product lines.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "Omar Hassan",
      position: "Head of Operations",
      bio: "Oversees manufacturing excellence and global supply chain operations ensuring timely delivery worldwide.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "We adhere to strict international standards in every part we craft, ensuring performance and safety in the most demanding applications."
    },
    {
      icon: Award,
      title: "Innovation Leadership",
      description: "Continuous investment in R&D and new technologies to advance industry standards and deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Trusted Partnerships",
      description: "Building long-term relationships based on trust, reliability, and mutual success with clients worldwide."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Transparent business practices and honest communication with all stakeholders across international markets."
    }
  ]

  const stats = [
    { number: '20', symbol: '+', label: 'Years of excellence' },
    { number: '500', symbol: '+', label: 'Global partnerships' },
    { number: '99.7', symbol: '%', label: 'Quality pass rate' },
    { number: '24', symbol: '/7', label: 'Technical support' }
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
              <div className="label-text mb-8">ABOUT EBLON DYNAMICS</div>
              <h1 className="hero-title mb-12">
                Engineering excellence
                <br />
                for two decades
              </h1>
              <p className="body-large max-w-3xl mb-8">
                Founded in 2005, Eblon Dynamics has grown from a local parts supplier into a regional leader known for uncompromising quality. Our mission is to bridge Middle Eastern industrial needs with world-class engineering.
              </p>
              <button className="btn-primary">
                Our Story
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

      {/* Mission & Vision */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="label-text">MISSION & VISION</div>
                <h2 className="section-title">
                  Our commitment to
                  <br />
                  engineering excellence
                </h2>
                <div className="space-y-8">
                  <div>
                    <div className="text-sm font-mono text-neutral-500 mb-4">/ MISSION</div>
                    <p className="body-text">
                      To deliver precision-engineered heavy machinery parts that empower our clients to build and innovate with confidence, while maintaining the highest standards of quality and reliability.
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-neutral-500 mb-4">/ VISION</div>
                    <p className="body-text">
                      To be the leading global supplier of heavy machinery parts, recognized for innovation, quality excellence, and sustainable manufacturing practices that advance the industry worldwide.
                    </p>
                  </div>
                </div>
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
                    alt="Eblon Dynamics facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">CORE VALUES</div>
              <h2 className="section-title mb-6">What drives us forward</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our values shape every decision we make and every part we manufacture, ensuring consistent excellence across all operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 card-hover"
                >
                  <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6">
                    <value.icon size={24} className="text-neutral-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">{value.title}</h3>
                  <p className="body-text">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">LEADERSHIP</div>
              <h2 className="section-title mb-6">Meet our team</h2>
              <p className="body-large max-w-2xl mx-auto">
                Our highly qualified and experienced leaders drive innovation and excellence across all aspects of our operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 text-center card-hover"
                >
                  <div className="w-24 h-24 bg-neutral-800 rounded-2xl overflow-hidden mx-auto mb-6">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{leader.name}</h3>
                  <div className="text-sm font-mono text-neutral-500 mb-4">{leader.position}</div>
                  <p className="body-text text-sm">{leader.bio}</p>
                </motion.div>
              ))}
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
                Ready to work with
                <br />
                industry leaders?
              </h2>
              <p className="body-large">
                Contact our team today to discuss your project requirements and discover how our expertise can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Get Started
                  <ArrowRight className="ml-2" size={16} />
                </button>
                <button className="btn-secondary">
                  View Products
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 