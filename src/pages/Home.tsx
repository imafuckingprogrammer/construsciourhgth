import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Modal from '../components/Modal';
import { slideUp, slideLeft, slideRight, scaleIn, viewportOptions } from '../utils/animations';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const solutions = [
    {
      id: 'UC_000',
      title: 'Precision Distribution',
      description: 'High-performance engine parts including pistons, cylinders, and drivetrain components, sourced from leading international manufacturers for maximum reliability.'
    },
    {
      id: 'UC_001',
      title: 'Quality Assurance',
      description: 'All components are sourced exclusively from ISO-certified manufacturers to ensure world class reliability and performance standards.'
    },
    {
      id: 'UC_002',
      title: 'Global Supply Chain',
      description: 'Worldwide delivery capabilities through trusted logistics partners across continents and regions.'
    },
    {
      id: 'UC_003',
      title: 'Technical Excellence',
      description: 'Our team delivers advanced product matching and technical support, backed by decades of industry knowledge and supplier coordination.'
    },
    {
      id: 'UC_004',
      title: 'Custom Solutions',
      description: 'Need specific parts or rare components? We tailor our sourcing and logistics services to meet your exact technical and operational requirements.'
    },
    {
      id: 'UC_005',
      title: 'Industry Partnerships',
      description: 'Trusted by major construction, mining, and energy companies worldwide to deliver dependable, high-quality parts from top global brands.'
    }
  ];

  const stats = [
    { number: '100', symbol: '+', label: 'Cumulative years of expertise' },
    { number: '16', symbol: '%', label: 'Organic growth' },
    { number: '500', symbol: '+', label: 'Global partnerships' },
    { number: '1000', symbol: '+', label: 'Products delivered monthly' }
  ];



  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src="/pexels-pok-rie-33563-1188532.jpg" 
            alt="Heavy machinery background"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        <div className="relative z-20 container-padding w-full">
          <div className="container-max">
            <div className="max-w-4xl">
              <motion.div
                initial={slideUp.initial}
                animate={slideUp.animate}
                transition={slideUp.transition}
                className="space-y-8"
              >
                <motion.h1 
                  className="hero-title"
                  initial={slideUp.initial}
                  animate={slideUp.animate}
                  transition={{ ...slideUp.transition, delay: 0.2 }}
                >
                  Premium Heavy Machinery Parts,
                  <br />
                  Serving Lebanon, Syria & UAE
                </motion.h1>
                <motion.p
                  className="body-large max-w-3xl"
                  initial={slideUp.initial}
                  animate={slideUp.animate}
                  transition={{ ...slideUp.transition, delay: 0.4 }}
                >
                  When your equipment stops, your business stops. Eblon Dynamics delivers high-quality, ISO-certified parts from the world's top manufacturers: fast, reliable, and trusted by industry leaders.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={slideUp.initial}
                  animate={slideUp.animate}
                  transition={{ ...slideUp.transition, delay: 0.6 }}
                >
                  <Link to="/products">
                    <button className="btn-primary group">
                      View Products
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="btn-secondary">
                      Get a Quote
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands & Partnerships Section */}
      <section className="section-small bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
              className="text-center mb-12"
            >
              <div className="label-text mb-4">OUR BRANDS & PARTNERSHIPS</div>
              <h2 className="section-title mb-6">We are proud to be:</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: 'Komatsu',
                  description: 'Leading supplier of Komatsu in the regions',
                  image: '/Komatsu_company_logos.svg.png',
                  isWhite: false
                },
                {
                  name: 'Caterpillar',
                  description: 'Leading supplier of Caterpillar in the regions',
                  image: '/cater.png',
                  isWhite: true
                },
                {
                  name: 'Maxiforce',
                  description: 'Official distributor for maxiForce in Syria and Lebanon',
                  image: '/maxi.png',
                  isWhite: false
                },
                {
                  name: 'Blumaq',
                  description: 'Official distributor for Blumaq in Syria',
                  image: '/logo-blumaq-min.png',
                  isWhite: true
                },
                {
                  name: 'Perkins',
                  description: 'Supplier of Perkins OEM in the regions',
                  image: '/perkins[new]perkin.png',
                  isWhite: false
                },
                {
                  name: 'Cummins',
                  description: 'Best supplier of Cummins OEM in the regions',
                  image: '/cummins{new}.png',
                  isWhite: true
                },
                {
                  name: 'John Deere',
                  description: 'Supplier of John Deere OEM in the region',
                  image: '/JOHN DEERE MAIN.png',
                  isWhite: false
                }
              ].map((brand, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={scaleIn.initial}
                    whileInView={scaleIn.animate}
                    viewport={viewportOptions}
                    transition={{ ...scaleIn.transition, delay: index * 0.1 }}
                    className={`glass-card p-8 flex flex-col items-center text-center card-hover ${brand.isWhite ? 'bg-white/60 backdrop-blur-md' : ''}`}
                  >
                    <img src={brand.image} alt={brand.name} className="h-16 mb-4 object-contain" />
                    <div className={`text-xl font-semibold mb-2 ${brand.isWhite ? 'text-black' : 'text-white'}`}>{brand.name}</div>
                    <div className={`body-text mb-2 ${brand.isWhite ? 'text-black' : 'text-neutral-300'}`}>{brand.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
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
                  initial={scaleIn.initial}
                  whileInView={scaleIn.animate}
                  viewport={viewportOptions}
                  transition={{ ...scaleIn.transition, delay: index * 0.1 }}
                  className="glass-card p-8 card-hover group"
                >
                  <div className="text-purple-400 text-sm font-mono mb-4">/ {solution.id}</div>
                  <h3 className="text-white text-xl font-medium mb-4">{solution.title}</h3>
                  <p className="body-text mb-6">{solution.description}</p>
                  <div 
                    className="flex items-center text-neutral-400 group-hover:text-purple-300 transition-colors cursor-pointer"
                    onClick={() => setSelectedSolution(solution.id)}
                  >
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
                initial={slideLeft.initial}
                whileInView={slideLeft.animate}
                viewport={viewportOptions}
                transition={slideLeft.transition}
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
                  Let's make heavy machinery a strength for your business. We help with everything from part sourcing and inventory planning to risk management and continuous support—ensuring your operations stay efficient and protected.
                </p>
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
                    src="/Home-image.jpg" 
                    alt="Heavy machinery components"
                    className="w-full h-full object-cover"
                  />
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Stats */}
              <div className="space-y-8">
                <h2 className="section-title">
                  Eblon Dynamics
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={slideUp.initial}
                      whileInView={slideUp.animate}
                      viewport={viewportOptions}
                      transition={{ ...slideUp.transition, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="text-3xl md:text-4xl font-light text-white">
                        {stat.number}
                        <span className="text-purple-400">{stat.symbol}</span>
                      </div>
                      <p className="body-text text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Right side - Contact Info */}
              <motion.div
                initial={slideRight.initial}
                whileInView={slideRight.animate}
                viewport={viewportOptions}
                transition={slideRight.transition}
                className="space-y-6"
              >
                <div className="text-neutral-500 text-sm">C. Damascus, Syria</div>
                <div className="text-neutral-500 text-sm">info@eblondynamics.com</div>
                <div className="text-neutral-500 text-sm">eblondynamics.com</div>
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
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
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

      {/* Solution Modal */}
      <Modal 
        isOpen={selectedSolution !== null} 
        onClose={() => setSelectedSolution(null)}
        title={solutions.find(solution => solution.id === selectedSolution)?.title || ''}
      >
        <div className="space-y-6">
          <div className="text-sm font-mono text-neutral-500 mb-4">
            / {selectedSolution}
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed">
              {solutions.find(solution => solution.id === selectedSolution)?.description}
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Coming soon...
            </p>
          </div>
        </div>
      </Modal>

      {/* Coming Soon Modal */}
      <Modal 
        isOpen={showComingSoon} 
        onClose={() => setShowComingSoon(false)}
        title="Coming Soon"
      >
        <div className="space-y-6">
          <div className="text-neutral-300 leading-relaxed">
            This feature is coming soon. Stay tuned!
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home; 