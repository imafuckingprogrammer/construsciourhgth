
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Story', path: '/about' },
      { name: 'Leadership', path: '/about' },
      { name: 'Careers', path: '/contact' },
    ],
    products: [
      { name: 'Engine Components', path: '/products' },
      { name: 'Hydraulic Systems', path: '/products' },
      { name: 'Undercarriage Parts', path: '/products' },
      { name: 'Electrical Systems', path: '/products' },
    ],
    services: [
      { name: 'Custom Manufacturing', path: '/innovation' },
      { name: 'Quality Assurance', path: '/quality' },
      { name: 'Global Shipping', path: '/contact' },
      { name: 'Technical Support', path: '/contact' },
    ],
    industries: [
      { name: 'Construction', path: '/industries' },
      { name: 'Mining', path: '/industries' },
      { name: 'Oil & Gas', path: '/industries' },
      { name: 'Agriculture', path: '/industries' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@eblondynamics.com', href: 'mailto:info@eblondynamics.com' },
    { icon: Phone, text: '+963 11 123 4567', href: 'tel:+963111234567' },
    { icon: MapPin, text: 'Damascus, Syria', href: '#' },
  ];

  return (
    <footer className="bg-neutral-950 border-t border-gear-purple-500/20">
      <div className="container-padding">
        <div className="container-max">
          {/* Main Footer Content */}
          <div className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Brand Section */}
              <div className="lg:col-span-5">
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  className="space-y-8"
              >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gear-purple-500 to-gear-purple-600 rounded-xl flex items-center justify-center">
                      <img 
                        src="/Gear.png" 
                        alt="Eblon Dynamics" 
                        className="w-7 h-7 opacity-90"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                    <div className="text-white font-medium tracking-wide text-xl">
                      EBLON DYNAMICS
                    </div>
                  </div>
                  
                  <p className="body-text max-w-md leading-relaxed">
                    Leading Syrian manufacturer of precision heavy machinery parts, 
                    committed to world-class quality and engineering excellence since 2005.
                  </p>
                  
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-3 text-neutral-400 hover:text-gear-purple-300 transition-colors group"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-gear-purple-500/20 transition-colors">
                          <item.icon size={18} className="text-gear-purple-400" />
                        </div>
                        <span className="text-sm font-medium">{item.text}</span>
                      </motion.a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="pt-4">
                    <p className="text-white font-medium mb-4">Follow Us</p>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-gear-purple-500 transition-all duration-300 group"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
              </motion.div>
              </div>

              {/* Links Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                    initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                    <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
                    <ul className="space-y-4">
                      {footerLinks.company.map((link, index) => (
                        <li key={index}>
                          <Link
                            to={link.path}
                            className="text-neutral-400 hover:text-gear-purple-300 transition-colors text-sm font-medium group flex items-center"
                          >
                            {link.name}
                            <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        </li>
                      ))}
                    </ul>
              </motion.div>

              <motion.div
                    initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-white font-semibold mb-6 text-lg">Products</h3>
                    <ul className="space-y-4">
                      {footerLinks.products.map((link, index) => (
                        <li key={index}>
                          <Link
                            to={link.path}
                            className="text-neutral-400 hover:text-gear-purple-300 transition-colors text-sm font-medium group flex items-center"
                >
                            {link.name}
                            <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
                    <ul className="space-y-4">
                      {footerLinks.services.map((link, index) => (
                        <li key={index}>
                          <Link
                            to={link.path}
                            className="text-neutral-400 hover:text-gear-purple-300 transition-colors text-sm font-medium group flex items-center"
                >
                            {link.name}
                            <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        </li>
                      ))}
                    </ul>
              </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-white font-semibold mb-6 text-lg">Industries</h3>
                    <ul className="space-y-4">
                      {footerLinks.industries.map((link, index) => (
                        <li key={index}>
                        <Link
                          to={link.path}
                            className="text-neutral-400 hover:text-gear-purple-300 transition-colors text-sm font-medium group flex items-center"
                        >
                            {link.name}
                            <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="py-12 border-t border-neutral-800">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h3 className="text-white font-semibold mb-3 text-xl">Stay Updated</h3>
              <p className="text-neutral-400 mb-8">
                Get the latest news, updates, and insights from Eblon Dynamics delivered to your inbox
                </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 input-field"
                />
                <motion.button 
                  className="btn-primary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8 border-t border-neutral-800">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
              >
              <p className="text-neutral-400 text-sm">
                  © {currentYear} Eblon Dynamics. All rights reserved.
                </p>
              <div className="flex space-x-6">
                <Link to="#" className="text-neutral-400 hover:text-gear-purple-300 text-sm transition-colors">
                    Privacy Policy
                  </Link>
                <Link to="#" className="text-neutral-400 hover:text-gear-purple-300 text-sm transition-colors">
                    Terms of Service
                  </Link>
                <Link to="#" className="text-neutral-400 hover:text-gear-purple-300 text-sm transition-colors">
                  Cookie Policy
                </Link>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 