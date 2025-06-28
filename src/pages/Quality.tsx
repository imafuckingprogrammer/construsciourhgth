import { Shield, Award, CheckCircle, Target, TrendingUp, Globe, Users, Zap } from 'lucide-react'

const Quality = () => {
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
      <section className="py-32 border-b border-dotted border-neutral-800">
        <div className="container-padding">
          <div className="container-max">
            <div className="max-w-4xl">
              <div className="text-neutral-400 text-xs tracking-widest mb-6">QUALITY ASSURANCE</div>
              <h1 className="hero-title mb-8">Excellence in every<br />component</h1>
              <p className="body-large max-w-3xl">
                Our unwavering commitment to quality assurance ensures every component meets international standards and exceeds expectations in the most demanding applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 border-b border-dotted border-neutral-800 bg-neutral-950">
        <div className="container-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">Performance Metrics</h2>
              <p className="body-large max-w-2xl mx-auto">
                Our commitment to quality is measurable through consistent performance indicators that exceed industry standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {qualityMetrics.map((stat, index) => (
                <div key={index} className="space-y-4 p-8 rounded-2xl border border-neutral-800 bg-black/60">
                  <div className="text-4xl font-light text-white mb-2">{stat.metric}</div>
                  <div className="text-neutral-400 font-medium mb-1">{stat.label}</div>
                  <div className="text-neutral-500 text-sm">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Inspection */}
      <section className="py-24 border-b border-dotted border-neutral-800">
        <div className="container-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">Testing & Inspection</h2>
              <p className="body-large max-w-3xl mx-auto">
                Every component undergoes comprehensive multi-stage inspections, including material verification, dimensional checks, and performance testing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {testingProcesses.map((test, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-center p-8 rounded-2xl border border-neutral-800 bg-neutral-950">
                  <div className="flex-1">
                    <div className="text-xl font-semibold text-white mb-2">{test.title}</div>
                    <div className="text-neutral-400 mb-4">{test.desc}</div>
                  </div>
                  <div className="flex-1">
                    <img src={test.image} alt={test.title} className="rounded-xl w-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-black">
        <div className="container-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">Certifications</h2>
              <p className="body-large max-w-3xl mx-auto">
                We maintain the highest international standards through rigorous certification and continuous improvement processes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {certifications.map((cert, index) => (
                <div key={index} className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950 space-y-3">
                  <div className="text-lg font-semibold text-white mb-1">{cert.title}</div>
                  <div className="text-neutral-400 text-sm mb-1">{cert.subtitle}</div>
                  <div className="text-neutral-500 text-sm">{cert.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quality 