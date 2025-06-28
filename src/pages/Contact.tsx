import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      title: "General Inquiries",
      email: "info@eblondynamics.com",
      phone: "+963 12 345 6789",
      icon: Mail,
      color: "gear-purple-500"
    },
    {
      title: "Sales & Quotations",
      email: "sales@eblondynamics.com", 
      phone: "+963 12 345 6790",
      icon: Phone,
      color: "gear-purple-400"
    },
    {
      title: "Technical Support",
      email: "support@eblondynamics.com",
      phone: "+963 12 345 6791", 
      icon: MapPin,
      color: "gear-purple-600"
    },
    {
      title: "Emergency Hotline",
      email: "emergency@eblondynamics.com",
      phone: "+963 12 345 6799",
      icon: Clock,
      color: "gear-purple-300"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

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
                GET IN TOUCH
              </motion.div>
              
              <motion.h1 
                className="hero-title mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Let's build the future
                <br />
                <span className="text-gear-purple-400">together</span>
              </motion.h1>
              
              <motion.p
                className="body-large max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Ready to discuss your heavy machinery requirements? Our expert team 
                is here to provide solutions, technical support, and personalized service.
              </motion.p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <h2 className="section-title mb-6">Contact Methods</h2>
              <p className="body-large max-w-2xl mx-auto">
              Choose the right contact method for your needs. Our specialists are ready to assist you.
            </p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                  initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card p-8 card-hover group"
                >
                  <div className={`w-16 h-16 bg-${contact.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-white text-xl font-medium mb-4 group-hover:text-gear-purple-300 transition-colors">
                    {contact.title}
                  </h3>
                <div className="space-y-3">
                  <a 
                    href={`mailto:${contact.email}`} 
                      className="block text-neutral-400 hover:text-gear-purple-300 transition-colors duration-300 text-sm"
                  >
                    {contact.email}
                  </a>
                  <a 
                    href={`tel:${contact.phone}`} 
                      className="block text-neutral-400 hover:text-gear-purple-300 transition-colors duration-300 text-sm font-mono"
                  >
                    {contact.phone}
                  </a>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
                className="glass-card p-10"
            >
                <h2 className="section-title mb-8">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-white text-sm font-medium">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                        className="input-field"
                      placeholder="Your full name"
                    />
                  </div>
                    <div className="space-y-2">
                      <label className="block text-white text-sm font-medium">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                        className="input-field"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-white text-sm font-medium">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                        className="input-field"
                      placeholder="Your company name"
                    />
                  </div>
                    <div className="space-y-2">
                      <label className="block text-white text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                        className="input-field"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                  <div className="space-y-2">
                    <label className="block text-white text-sm font-medium">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                      className="input-field"
                    placeholder="What can we help you with?"
                  />
                </div>

                  <div className="space-y-2">
                    <label className="block text-white text-sm font-medium">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                      className="textarea-field"
                    placeholder="Please describe your requirements, project details, or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                    className="btn-primary w-full group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>

              {/* Company Info */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
                <div>
                  <h2 className="section-title mb-8">Our Locations</h2>
              
                  <div className="space-y-8">
                    <div className="glass-card p-8">
                      <h3 className="text-xl font-medium text-gear-purple-400 mb-4">Headquarters</h3>
                      <div className="space-y-4 text-neutral-400">
                        <div className="flex items-start space-x-3">
                          <MapPin size={20} className="text-gear-purple-500 mt-1 flex-shrink-0" />
                    <div>
                            <p>Industrial Zone B, Block 15</p>
                            <p>Damascus, Syria</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock size={20} className="text-gear-purple-500 flex-shrink-0" />
                          <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card p-8">
                      <h3 className="text-xl font-medium text-gear-purple-400 mb-4">Manufacturing Facility</h3>
                      <div className="space-y-4 text-neutral-400">
                        <div className="flex items-start space-x-3">
                          <MapPin size={20} className="text-gear-purple-500 mt-1 flex-shrink-0" />
                    <div>
                            <p>Heavy Industry Complex</p>
                            <p>Aleppo Industrial City, Syria</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock size={20} className="text-gear-purple-500 flex-shrink-0" />
                          <p>24/7 Operations</p>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-gradient-to-r from-gear-purple-900 to-gear-purple-800">
        <div className="container-padding">
          <div className="container-max text-center">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <h2 className="section-title mb-8 text-white">
                Ready to start your next project?
            </h2>
              <p className="body-large mb-12 text-neutral-200 max-w-2xl mx-auto">
              Contact our team today for expert consultation and customized solutions for your heavy machinery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                  className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                  Request Quote
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                  className="btn-secondary border-white text-white hover:bg-white hover:text-gear-purple-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
        </div>
      </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 