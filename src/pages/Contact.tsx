import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideUp, slideLeft, slideRight, scaleIn, viewportOptions } from '../utils/animations'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formspree.io/f/mgvzvkjd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your message. Please try again or contact us directly at info@eblondynamics.com')
    }
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-32 border-b border-dotted border-neutral-800">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={slideUp.initial}
              animate={slideUp.animate}
              transition={slideUp.transition}
              className="max-w-4xl"
            >
              <div className="text-neutral-400 text-xs tracking-widest mb-6">GET IN TOUCH</div>
              <h1 className="hero-title mb-8">Let's build the future<br />together</h1>
              <p className="body-large max-w-3xl">
                Ready to discuss your heavy machinery requirements? Our expert team is here to provide solutions, technical support, and personalized service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-black">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              {/* Contact Form */}
              <motion.div
                initial={slideLeft.initial}
                whileInView={slideLeft.animate}
                viewport={viewportOptions}
                transition={slideLeft.transition}
                className="p-10 rounded-2xl border border-neutral-800 bg-neutral-950 mx-auto"
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
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-white text-sm font-medium">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Company name (optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-white text-sm font-medium">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Phone number (optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-white text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Subject (optional)"
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
                      placeholder="How can we help you?"
                    />
                  </div>
                  <motion.button 
                    type="submit" 
                    className="btn-primary w-full mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
              {/* Info Box */}
              <motion.div
                initial={slideRight.initial}
                whileInView={slideRight.animate}
                viewport={viewportOptions}
                transition={slideRight.transition}
                className="space-y-12"
              >
                <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950">
                  <div className="text-lg font-semibold text-white mb-2">Head Office</div>
                  <div className="text-neutral-400 text-sm">Damascus, Syria</div>
                  <div className="text-neutral-400 text-sm">info@eblondynamics.com</div>
                  <div className="text-neutral-400 text-sm">+963 933 545 630</div>
                </div>
                <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950">
                  <div className="text-lg font-semibold text-white mb-2">Working Hours</div>
                  <div className="text-neutral-400 text-sm">Mon - Fri: 9:00am - 6:00pm</div>
                  <div className="text-neutral-400 text-sm">Sat: 10:00am - 2:00pm</div>
                  <div className="text-neutral-400 text-sm">Sun: Closed</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 border-b border-dotted border-neutral-800 bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
              className="text-center mb-16"
            >
              <h2 className="section-title mb-6">Contact Methods</h2>
              <p className="body-large max-w-2xl mx-auto">
                Choose the right contact method for your needs. Our specialists are ready to assist you.
              </p>
            </motion.div>
            <div className="flex justify-center">
              <motion.div
                initial={scaleIn.initial}
                whileInView={scaleIn.animate}
                viewport={viewportOptions}
                transition={{ ...scaleIn.transition, delay: 0.1 }}
                className="p-8 rounded-2xl border border-neutral-800 bg-black/60 space-y-4 hover:border-purple-500/30 transition-all duration-300 max-w-md w-full"
              >
                <div className="text-xl font-semibold text-white mb-2">General Inquiries</div>
                <div className="space-y-2">
                  <div className="text-neutral-400 text-sm">info@eblondynamics.com</div>
                  <div className="text-neutral-400 text-sm font-mono">+963 933 545 630</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 