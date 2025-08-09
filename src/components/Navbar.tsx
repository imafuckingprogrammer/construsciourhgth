import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'INDUSTRIES', path: '/industries' },
    { name: 'NEWS', path: '/news' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-neutral-800/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <div className="container-max">
            <div className="flex items-center justify-between h-20">
              
              {/* Logo */}
              <Link to="/" className="group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <motion.img 
                      src="/Gear.png" 
                      alt="Eblon Dynamics" 
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100"
                      whileHover={{ rotate: 45 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  </div>
                  <div className="text-white font-medium tracking-wide group-hover:text-purple-300 transition-colors duration-300 font-space">
                    EBLON DYNAMICS
                  </div>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`nav-link hover:text-purple-300 ${location.pathname === item.path ? 'active text-purple-400' : ''}`}
                  >
                    <motion.span
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                  >
                    Get Quote
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <div className="relative flex flex-col h-full pt-24 pb-8">
              <div className="flex-1 container-padding">
                <div className="container-max">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center justify-between py-4 border-b border-neutral-800/50 group ${
                            location.pathname === item.path 
                              ? 'text-purple-400' 
                              : 'text-neutral-400 hover:text-purple-300'
                          }`}
                        >
                          <span className="text-lg font-medium">{item.name}</span>
                          <ChevronRight 
                            size={20} 
                            className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-200" 
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="container-padding border-t border-neutral-800/50 pt-8">
                <div className="container-max">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.05 + 0.1 }}
                  >
                    <Link to="/contact">
                      <button className="btn-primary w-full">
                        Get Quote
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 