import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const News = () => {
  const newsArticles = [
    {
      id: 'NEWS_001',
      title: "Eblon Dynamics Expands Manufacturing Capacity",
      excerpt: "New production facility increases output by 40% to meet growing international demand for precision heavy machinery components.",
      date: "2024-03-15",
      readTime: "3 min read",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
    },
    {
      id: 'NEWS_002',
      title: "ISO 14001 Environmental Certification Achieved",
      excerpt: "Eblon Dynamics receives environmental management certification, reinforcing commitment to sustainable manufacturing practices.",
      date: "2024-02-28",
      readTime: "2 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop"
    },
    {
      id: 'NEWS_003',
      title: "Partnership with European Construction Giants",
      excerpt: "Strategic partnerships established with major European construction companies to supply critical infrastructure projects.",
      date: "2024-02-10",
      readTime: "4 min read",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
    },
    {
      id: 'NEWS_004',
      title: "Innovation Award for Smart Manufacturing",
      excerpt: "Industry recognition for implementing IoT and AI technologies in heavy machinery component manufacturing processes.",
      date: "2024-01-20",
      readTime: "3 min read",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
    }
  ]

  const pressReleases = [
    {
      title: "Q4 2023 Financial Results",
      date: "2024-01-15",
      type: "Financial Report"
    },
    {
      title: "New Product Line Launch",
      date: "2023-12-05",
      type: "Product Announcement"
    },
    {
      title: "Sustainability Initiative Update",
      date: "2023-11-20",
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="label-text mb-8">NEWS & UPDATES</div>
              <h1 className="hero-title mb-12">
                Latest insights from
                <br />
                the industry leaders
              </h1>
              <p className="body-large max-w-3xl mb-8">
                Stay informed about our latest developments, industry partnerships, innovation breakthroughs, and company milestones that shape the future of heavy machinery manufacturing.
              </p>
              <button className="btn-primary">
                Subscribe to Updates
                <ArrowRight className="ml-2" size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-small bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-6">
                <div className="label-text">FEATURED STORY</div>
                <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
                  {newsArticles[0].title}
                </h2>
                <p className="body-text">{newsArticles[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{new Date(newsArticles[0].date).toLocaleDateString()}</span>
                  </div>
                  <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} />
                    <span>{newsArticles[0].readTime}</span>
                  </div>
                </div>
                <button className="btn-secondary group">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card overflow-hidden card-hover group cursor-pointer"
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
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </div>
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="label-text">PRESS RELEASES</div>
                <h2 className="section-title">
                  Official company
                  <br />
                  announcements
                </h2>
                <p className="body-text">
                  Access our official press releases, financial reports, and corporate announcements for media and investor relations.
                </p>
                <button className="btn-secondary">
                  View All Releases
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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

      {/* Newsletter CTA */}
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
                Stay informed about
                <br />
                industry developments
              </h2>
              <p className="body-large">
                Subscribe to our newsletter for the latest company updates, industry insights, and innovation breakthroughs delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Subscribe Now
                  <ArrowRight className="ml-2" size={16} />
                </button>
                <button className="btn-secondary">
                  Media Kit
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News 