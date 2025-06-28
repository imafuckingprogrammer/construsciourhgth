import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, CheckCircle, Target, TrendingUp, Globe, Users, Zap } from 'lucide-react'

const Quality = () => {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const qualityMetrics = [
    { metric: "99.7%", label: "Quality Pass Rate", desc: "First-time quality acceptance", icon: Target },
    { metric: "99.9%", label: "On-Time Delivery", desc: "Meeting customer schedules", icon: TrendingUp },
    { metric: "99.5%", label: "Customer Satisfaction", desc: "Based on feedback surveys", icon: Users },
    { metric: "Zero", label: "Major Defects", desc: "Last 12 months performance", icon: CheckCircle }
  ]

  const testingProcesses = [
    {
      title: "Material Testing",
      desc: "Chemical composition analysis and mechanical property verification",
      icon: Shield,
      image: "https://picsum.photos/400/300?random=10"
    },
    {
      title: "Dimensional Inspection", 
      desc: "Precision measurement using advanced coordinate measuring machines",
      icon: Target,
      image: "https://picsum.photos/400/300?random=11"
    },
    {
      title: "Performance Testing",
      desc: "Pressure testing, fatigue analysis, and operational validation",
      icon: Zap,
      image: "https://picsum.photos/400/300?random=12"
    },
    {
      title: "Final Inspection",
      desc: "Comprehensive quality check before packaging and delivery",
      icon: CheckCircle,
      image: "https://picsum.photos/400/300?random=13"
    }
  ]

  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management Systems",
      desc: "International standard for quality management systems ensuring consistent quality delivery",
      icon: Award
    },
    {
      title: "ASTM Standards",
      subtitle: "Material & Testing Standards", 
      desc: "Compliance with American Society for Testing and Materials specifications",
      icon: Shield
    },
    {
      title: "CE Marking",
      subtitle: "European Conformity",
      desc: "Compliance with European health, safety, and environmental protection standards",
      icon: Globe
    },
    {
      title: "Industry Associations",
      subtitle: "Professional Memberships",
      desc: "Active participation in international heavy machinery and manufacturing associations",
      icon: Users
    },
    {
      title: "Environmental Standards",
      subtitle: "ISO 14001 Compliance",
      desc: "Environmental management system ensuring sustainable manufacturing practices",
      icon: Shield
    },
    {
      title: "Safety Certifications",
      subtitle: "OHSAS 18001/ISO 45001",
      desc: "Occupational health and safety management system certification",
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-800"></div>
        
        <div className="relative z-10 container-padding">
          <div className="container-max">
      <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="label-text mb-6"
              >
                QUALITY ASSURANCE
              </motion.div>
              
              <motion.h1 
                className="hero-title mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Excellence in every
                <br />
                <span className="text-gear-purple-400">component</span>
              </motion.h1>
              
              <motion.p
                className="body-large max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Our unwavering commitment to quality assurance ensures every component meets 
                international standards and exceeds expectations in the most demanding applications.
              </motion.p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title mb-6">Performance Metrics</h2>
              <p className="body-large max-w-2xl mx-auto">
                Our commitment to quality is measurable through consistent performance indicators 
                that exceed industry standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityMetrics.map((stat, index) => (
            <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card p-8 text-center card-hover group"
            >
                  <div className="w-16 h-16 bg-gear-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={28} className="text-white" />
                  </div>
                  <div className="text-4xl font-light text-gear-purple-400 mb-4 group-hover:text-gear-purple-300 transition-colors">
                    {stat.metric}
              </div>
                  <h3 className="text-white font-medium mb-2 group-hover:text-gear-purple-200 transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-neutral-400 text-sm">{stat.desc}</p>
            </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Inspection */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <h2 className="section-title mb-6">Testing & Inspection</h2>
              <p className="body-large max-w-3xl mx-auto">
                Every component undergoes comprehensive multi-stage inspections, including material 
                verification, dimensional checks, and performance testing.
            </p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testingProcesses.map((test, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="glass-card overflow-hidden card-hover group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={test.image}
                      alt={test.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gear-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <test.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-medium text-white group-hover:text-gear-purple-300 transition-colors">
                        {test.title}
                      </h3>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">{test.desc}</p>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
              >
                <h2 className="section-title mb-8">ISO 9001:2015 Certified</h2>
                <p className="body-large mb-8">
                  Eblon Dynamics operates under a comprehensive ISO 9001:2015 certified quality 
                  management system, ensuring consistent excellence in every aspect of our manufacturing process.
                </p>
                <div className="space-y-6">
                  {[
                    "Systematic quality control at every production stage",
                    "Documented procedures and work instructions",
                    "Continuous improvement and corrective action processes", 
                    "Regular internal and external quality audits",
                    "Customer satisfaction monitoring and feedback integration"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-gear-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-400">{item}</span>
                    </motion.div>
                  ))}
                </div>
          </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://picsum.photos/600/450?random=14" 
                    alt="Quality control inspection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-medium mb-2">Quality Control</h3>
                    <p className="text-neutral-300 text-sm">Advanced inspection and testing facilities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <h2 className="section-title mb-6">International Certifications</h2>
              <p className="body-large max-w-2xl mx-auto">
                Our commitment to excellence is validated by internationally recognized 
                certifications and memberships.
            </p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card p-8 card-hover group"
              >
                  <div className="w-16 h-16 bg-gear-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-gear-purple-400 mb-2 group-hover:text-gear-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <h4 className="font-medium text-white mb-4">{cert.subtitle}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Guarantee */}
      <section className="page-section bg-gradient-to-r from-gear-purple-900 to-gear-purple-800">
        <div className="container-padding">
          <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="section-title mb-8 text-white">Quality Guarantee</h2>
                <p className="body-large text-neutral-200 mb-8">
                  We stand behind our commitment to quality with comprehensive warranties and 
                  guarantees that give our customers confidence in every purchase.
              </p>
              <div className="space-y-6">
                {[
                  "12-month comprehensive parts warranty",
                  "Performance guarantee on all manufactured components",
                  "30-day satisfaction guarantee",
                  "Technical support throughout product lifecycle",
                  "Rapid response to quality concerns"
                ].map((guarantee, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-200">{guarantee}</span>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
            >
                <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                    src="https://picsum.photos/500/500?random=15" 
                  alt="Quality guarantee"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-medium mb-2">Guaranteed Quality</h3>
                    <p className="text-neutral-300 text-sm">Backed by comprehensive warranties</p>
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
          <div className="container-max text-center">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <h2 className="section-title mb-8">
                Experience our quality difference
              </h2>
              <p className="body-large mb-12 max-w-2xl mx-auto">
                Quality is not a destination but a journey. We continuously invest in new technologies, 
                training, and processes to maintain our position as a quality leader.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  className="btn-primary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Quality Certificate
                  <Award size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  className="btn-secondary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Quality Audit
                </motion.button>
        </div>
      </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quality 