import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Wrench, Award, TrendingUp, Users } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const solutions = [
    {
      id: 'UC_000',
      title: 'Precision Manufacturing',
      description: 'High-performance engine parts including pistons, cylinders, and drive train components for maximum reliability.'
    },
    {
      id: 'UC_001',
      title: 'Quality Assurance',
      description: 'ISO-certified manufacturing processes ensuring world-class reliability and performance standards.'
    },
    {
      id: 'UC_002',
      title: 'Global Supply Chain',
      description: 'Worldwide delivery capabilities with trusted logistics partners across continents and regions.'
    },
    {
      id: 'UC_003',
      title: 'Technical Excellence',
      description: 'Advanced engineering solutions backed by decades of industry experience and innovation.'
    },
    {
      id: 'UC_004',
      title: 'Custom Solutions',
      description: 'Tailored manufacturing for specific requirements with comprehensive engineering support.'
    },
    {
      id: 'UC_005',
      title: 'Industry Partnerships',
      description: 'Trusted by major construction, mining, and energy companies worldwide for critical components.'
    }
  ];

  const stats = [
    { number: '100', symbol: '+', label: 'Cumulative years of expertise', icon: Award },
    { number: '16', symbol: '%', label: 'Organic growth', icon: TrendingUp },
    { number: '500', symbol: '+', label: 'Global partnerships', icon: Globe },
    { number: '1000', symbol: '+', label: 'Products delivered monthly', icon: Wrench }
  ];

  const companyMilestones = [
    {
      year: '2005',
      title: 'Foundation',
      description: 'Eblon Dynamics established as a local parts supplier in Damascus, Syria, focusing on precision manufacturing.'
    },
    {
      year: '2010',
      title: 'Regional Expansion',
      description: 'Extended operations across the Middle East, serving major infrastructure and construction projects.'
    },
    {
      year: '2015',
      title: 'Quality Certification',
      description: 'Achieved ISO 9001 certification, establishing world-class quality standards and processes.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented advanced CAD/CAM systems and digital quality control for enhanced precision.'
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Serving clients across Europe, Asia, and Africa with expanding product portfolio and capabilities.'
    }
  ];

  const expertise = [
    {
      icon: Shield,
      title: 'High Quality Standards',
      description: 'Our highly qualified and certified experts ensure the highest security standards to meet all your specific needs.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Join our team for concrete and varied missions with high added value in heavy machinery manufacturing.'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-black to-neutral-800" />
        </motion.div>
        <div className="relative z-20 container-padding w-full">
          <div className="container-max">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <motion.h1 
                  className="hero-title"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Our responses tailored to
                  <br />
                  your machinery challenges
                </motion.h1>
                <motion.p
                  className="body-large max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Boost your growth with our customized heavy machinery solutions.
                  Whether it's managing a crisis, ensuring regulatory compliance, or
                  enhancing your protections, our expertise will help you overcome
                  every challenge.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <Link to="/products">
                    <button className="btn-primary group">
                      Explore Products
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="btn-secondary">
                      Get Quote
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="label-text mb-4">USE CASES</div>
              <h2 className="section-title mb-6">
                Our solutions to your
                <br />
                machinery issues
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 card-hover group"
                >
                  <div className="text-purple-400 text-sm font-mono mb-4">/ {solution.id}</div>
                  <h3 className="text-white text-xl font-medium mb-4">{solution.title}</h3>
                  <p className="body-text mb-6">{solution.description}</p>
                  <div className="flex items-center text-neutral-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Partner Section */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="section-title">
                  Your machinery
                  <br />
                  performance
                  <br />
                  partner
                </h2>
                <p className="body-large">
                  Let's make heavy machinery a strength for your business. We're here to help
                  with everything from risk management and compliance to training and
                  continuous monitoring, ensuring your growth is always protected.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl flex items-center justify-center group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                  <div className="w-32 h-32 bg-neutral-700 rounded-2xl flex items-center justify-center group-hover:bg-purple-900/20 transition-colors duration-500">
                    <Wrench size={64} className="text-neutral-400 group-hover:text-purple-400 transition-colors duration-500" />
                  </div>
                </div>
              </motion.div>
            </div>
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center space-y-3"
                >
                  <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-900/20 transition-colors duration-300">
                    <stat.icon size={24} className="text-neutral-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-light text-white">
                    {stat.number}
                    <span className="text-purple-400">{stat.symbol}</span>
                  </div>
                  <p className="body-text text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="page-section bg-black">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title mb-6">Company Milestones</h2>
              <p className="body-large max-w-3xl mx-auto">
                Two decades of growth, innovation, and commitment to excellence
                in heavy machinery manufacturing.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {companyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="text-2xl font-light text-white min-w-[80px]">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-white mb-2">{milestone.title}</h3>
                      <p className="body-text">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Expertises</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="space-y-6"
                >
                  <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center hover:bg-purple-900/20 transition-colors duration-300">
                    <item.icon size={32} className="text-neutral-400 hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                  <p className="body-large">{item.description}</p>
                </motion.div>
              ))}
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
                Ready to elevate your
                <br />
                machinery performance?
              </h2>
              <p className="body-large">
                Contact our experts today to discuss your specific requirements
                and discover how Eblon Dynamics can power your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="btn-primary">
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </Link>
                <Link to="/products">
                  <button className="btn-secondary">
                    View Products
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 