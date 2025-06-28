import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

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

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-32 border-b border-dotted border-neutral-800">
        <div className="container-padding">
          <div className="container-max">
            <div className="max-w-4xl">
              <div className="text-neutral-400 text-xs tracking-widest mb-6">GET IN TOUCH</div>
              <h1 className="hero-title mb-8">Let's build the future<br />together</h1>
              <p className="body-large max-w-3xl">
                Ready to discuss your heavy machinery requirements? Our expert team is here to provide solutions, technical support, and personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 border-b border-dotted border-neutral-800 bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">Contact Methods</h2>
              <p className="body-large max-w-2xl mx-auto">
                Choose the right contact method for your needs. Our specialists are ready to assist you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {contactInfo.map((contact, index) => (
                <div key={index} className="p-8 rounded-2xl border border-neutral-800 bg-black/60 space-y-4">
                  <div className="text-xl font-semibold text-white mb-2">{contact.title}</div>
                  <div className="space-y-2">
                    <div className="text-neutral-400 text-sm">{contact.email}</div>
                    <div className="text-neutral-400 text-sm font-mono">{contact.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-black">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              {/* Contact Form */}
              <div className="p-10 rounded-2xl border border-neutral-800 bg-neutral-950">
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
                  <button type="submit" className="btn-primary w-full mt-4">Send Message</button>
                </form>
              </div>
              {/* Info */}
              <div className="space-y-12">
                <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950">
                  <div className="text-lg font-semibold text-white mb-2">Head Office</div>
                  <div className="text-neutral-400 text-sm">Damascus, Syria</div>
                  <div className="text-neutral-400 text-sm">info@eblondynamics.com</div>
                  <div className="text-neutral-400 text-sm">+963 12 345 6789</div>
                </div>
                <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950">
                  <div className="text-lg font-semibold text-white mb-2">Working Hours</div>
                  <div className="text-neutral-400 text-sm">Mon - Fri: 9:00am - 6:00pm</div>
                  <div className="text-neutral-400 text-sm">Sat: 10:00am - 2:00pm</div>
                  <div className="text-neutral-400 text-sm">Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 