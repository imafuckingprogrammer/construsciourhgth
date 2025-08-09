import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { slideUp, slideLeft, slideRight, scaleIn, viewportOptions } from '../utils/animations'

const About = () => {
  const values = [
    {
      title: "Quality Excellence",
      description: "We partner only with ISO-certified manufacturers, ensuring all distributed components meet rigorous global standards for performance and safety."
    },
    {
      title: "Innovation Leadership",
      description: "We actively explore new technologies and supplier capabilities to offer clients modern, future-proof solutions."
    },
    {
      title: "Trusted Partnerships",
      description: "We build long-term relationships with clients and global partners based on transparency, speed, and reliability."
    },
    {
      title: "Global Reach",
      description: "Our global logistics network enables us to support clients in any region—on time, every time."
    }
  ]

  const stats = [
    { number: '20', symbol: '+', label: 'years of sourcing excellence' },
    { number: '500', symbol: '+', label: 'global supply and client partnerships' },
    { number: '99.7', symbol: '%', label: 'pass rate on verified manufacturer quality' },
    { number: '24', symbol: '/7', label: 'technical support' }
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
              <div className="label-text mb-8">ABOUT EBLON DYNAMICS</div>
              <h1 className="hero-title mb-12">
                Delivering Global Precision
                <br />
                Since 2005
              </h1>
              <p className="body-large max-w-3xl mb-8">
                Founded in 2005, Eblon Dynamics has grown from a local parts supplier into a regional leader in the distribution of precision heavy machinery components. Our mission is to bridge Middle Eastern industrial needs with world-class engineering—by supplying certified parts from top global manufacturers.
              </p>
              <p className="body-large max-w-3xl mb-8">
                We are trusted by companies across construction, energy, and mining sectors for our reliability, speed, and technical support. From sourcing to delivery, we simplify access to the best in heavy machinery technology.
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

      {/* Mission & Vision */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={slideLeft.initial}
                whileInView={slideLeft.animate}
                viewport={viewportOptions}
                transition={slideLeft.transition}
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
                      To deliver precision-engineered heavy machinery parts from trusted global manufacturers—empowering our clients to build and innovate with confidence.
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-neutral-500 mb-4">/ VISION</div>
                    <p className="body-text">
                      To become the leading global distributor of heavy machinery parts, recognized for quality, innovation, and sustainable sourcing practices that elevate industry standards.
                    </p>
                  </div>
                </div>
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
                    src="/About-image.jpg" 
                    alt="Industrial facility"
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
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">CORE VALUES</div>
              <h2 className="section-title mb-6">What Drives Us Forward</h2>
              <p className="body-large max-w-3xl mx-auto">
                Our values shape every decision we make and every part we manufacture, ensuring consistent excellence across all operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={scaleIn.initial}
                  whileInView={scaleIn.animate}
                  viewport={viewportOptions}
                  transition={{ ...scaleIn.transition, delay: index * 0.1 }}
                  className="glass-card p-8 card-hover"
                >
                  <h3 className="text-xl font-medium text-white mb-4">{value.title}</h3>
                  <p className="body-text">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/*
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
              <div className="label-text mb-4">LEADERSHIP</div>
              <h2 className="section-title mb-6">Meet our executive team driving growth and operational excellence:</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={scaleIn.initial}
                  whileInView={scaleIn.animate}
                  viewport={viewportOptions}
                  transition={{ ...scaleIn.transition, delay: index * 0.1 }}
                  className="glass-card p-8 text-center card-hover"
                >
                  <div className="w-24 h-24 bg-neutral-800 rounded-2xl overflow-hidden mx-auto mb-6">
                    <img 
                      src={'/About-image.jpg'} 
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
*/}

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
                Ready to Work With
                <br />
                Industry Leaders?
              </h2>
              <p className="body-large">
                Let's talk. Contact our team today to discuss your parts needs and discover how our expertise can power your success.
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