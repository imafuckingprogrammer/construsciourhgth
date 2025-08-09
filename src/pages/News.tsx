import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Modal from '../components/Modal'
import { slideUp, slideLeft, slideRight, scaleIn, viewportOptions } from '../utils/animations'

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)
  const [showComingSoon, setShowComingSoon] = useState(false)
  const newsArticles = [
    {
      id: 'NEWS_001',
      title: "Eblon Dynamics Expands Regional Distribution Capacity",
      excerpt: "To meet growing demand across the Middle East and North Africa, Eblon Dynamics has expanded its warehousing and logistics capabilities—ensuring faster delivery, broader inventory access, and more efficient client support.",
      date: "2024-03-14",
      readTime: "3 min read",
      category: "Company News",
      image: "/pexels-szafran-33014117.jpg"
    },
    {
      id: 'NEWS_002',
      title: "ISO 14001 Environmental Certification Achieved",
      excerpt: "Eblon Dynamics is proud to announce ISO 14001 certification through our partners—solidifying our commitment to environmentally responsible sourcing and logistics.",
      date: "2024-02-27",
      readTime: "2 min read",
      category: "Sustainability",
      image: "/pexels-pok-rie-33563-1188532.jpg"
    },
    {
      id: 'NEWS_003',
      title: "Strategic Partnerships with European Construction Leaders",
      excerpt: "We've partnered with major European construction companies to supply OEM parts for critical infrastructure and development projects.",
      date: "2024-02-09",
      readTime: "4 min read",
      category: "Partnerships",
      image: "/pexels-digitalbuggu-368685.jpg"
    },
    {
      id: 'NEWS_004',
      title: "Recognized for Smart Distribution & Inventory Intelligence",
      excerpt: "Eblon Dynamics received recognition for integrating smart inventory systems and supplier tracking technologies that reduce lead times and increase sourcing efficiency.",
      date: "2024-01-19",
      readTime: "3 min read",
      category: "Innovation",
      image: "/pexels-acecranesindia-29543009.jpg"
    }
  ]

  const pressReleases = [
    {
      title: "Q4 2023 Financial Results",
      date: "2024-01-14",
      type: "Financial Report"
    },
    {
      title: "New Product Line Distribution Launch",
      date: "2023-12-04",
      type: "Product Announcement"
    },
    {
      title: "Sustainability Strategy Progress",
      date: "2023-11-19",
      type: "Environmental Report"
    }
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
              <div className="label-text mb-8">NEWS & UPDATES</div>
              <h1 className="hero-title mb-12">
                Latest Insights from
                <br />
                Industry Leaders
              </h1>
              <p className="body-large max-w-3xl mb-8">
                Stay informed on Eblon Dynamics' latest developments, global partnerships, product announcements, and strategic milestones as we continue to raise the standard in heavy machinery parts distribution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-small bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={slideUp.initial}
              whileInView={slideUp.animate}
              viewport={viewportOptions}
              transition={slideUp.transition}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-6">
                <div className="label-text">FEATURED STORY</div>
                <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
                  {newsArticles[0].title}
                </h2>
                <p className="body-text">{newsArticles[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-neutral-400">
                  <span>{new Date(newsArticles[0].date).toLocaleDateString()}</span>
                  <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
                  <span>{newsArticles[0].readTime}</span>
                </div>
                <button 
                  className="btn-secondary group"
                  onClick={() => setSelectedArticle(newsArticles[0].id)}
                >
                  Read Full Article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="w-full h-80 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden">
                <img 
                  src={newsArticles[0].image} 
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Grid */}
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
              <div className="label-text mb-4">RECENT NEWS</div>
              <h2 className="section-title mb-6">Company updates</h2>
              <p className="body-large max-w-3xl mx-auto">
                Discover the latest developments, achievements, and industry insights from Eblon Dynamics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={scaleIn.initial}
                  whileInView={scaleIn.animate}
                  viewport={viewportOptions}
                  transition={{ ...scaleIn.transition, delay: index * 0.1 }}
                  className="glass-card overflow-hidden card-hover group cursor-pointer"
                  onClick={() => setSelectedArticle(article.id)}
                >
                  <div className="w-full h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      {article.category}
                    </div>
                    
                    <h3 className="text-lg font-medium text-white leading-tight group-hover:text-neutral-300 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="body-text text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                      <div className="flex items-center space-x-3 text-xs text-neutral-400">
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                        <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <ArrowRight size={16} className="text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="page-section bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={slideLeft.initial}
                whileInView={slideLeft.animate}
                viewport={viewportOptions}
                transition={slideLeft.transition}
                className="space-y-8"
              >
                <div className="label-text">PRESS RELEASES</div>
                <h2 className="section-title">
                  Official Announcements
                  <br />
                  & Reports
                </h2>
                <p className="body-text">
                  Access our official company statements, financial updates, and product news for press and investor use.
                </p>
                <button className="btn-secondary mt-6" onClick={() => setShowComingSoon(true)}>
                  Announcements Coming Soon
                </button>
                <Modal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} title="Coming Soon">
                  <div className="space-y-6">
                    <div className="text-neutral-300 leading-relaxed">
                      Announcements and press releases will be available soon. Stay tuned!
                    </div>
                  </div>
                </Modal>
              </motion.div>

              <motion.div
                initial={slideRight.initial}
                whileInView={slideRight.animate}
                viewport={viewportOptions}
                transition={slideRight.transition}
                className="space-y-6"
              >
                {pressReleases.map((release, index) => (
                  <div key={index} className="glass-card p-6 card-hover group cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">
                          {release.title}
                        </h3>
                        <div className="flex items-center space-x-3 text-sm text-neutral-400">
                          <span>{release.type}</span>
                          <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
                          <span>{new Date(release.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <Modal 
        isOpen={selectedArticle !== null} 
        onClose={() => setSelectedArticle(null)}
        title={newsArticles.find(article => article.id === selectedArticle)?.title || ''}
      >
        <div className="space-y-6">
          <div className="flex items-center space-x-4 text-sm text-neutral-400">
            <span>{newsArticles.find(article => article.id === selectedArticle)?.date}</span>
            <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
            <span>{newsArticles.find(article => article.id === selectedArticle)?.readTime}</span>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed">
              Coming soon...
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default News 