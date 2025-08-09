import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { slideUp, scaleIn } from '../utils/animations'

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container-padding">
        <div className="container-max">
          <motion.div
            initial={slideUp.initial}
            animate={slideUp.animate}
            transition={slideUp.transition}
            className="text-center max-w-2xl mx-auto space-y-8"
          >
            <motion.div
              initial={scaleIn.initial}
              animate={scaleIn.animate}
              transition={{ ...scaleIn.transition, delay: 0.2 }}
              className="w-24 h-24 mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center mb-8"
            >
              <Wrench size={32} className="text-purple-400" />
            </motion.div>
            
            <motion.h1
              initial={slideUp.initial}
              animate={slideUp.animate}
              transition={{ ...slideUp.transition, delay: 0.4 }}
              className="text-4xl md:text-5xl font-light text-white mb-6"
            >
              Coming Soon
            </motion.h1>
            
            <motion.p
              initial={slideUp.initial}
              animate={slideUp.animate}
              transition={{ ...slideUp.transition, delay: 0.6 }}
              className="body-large text-center"
            >
              This page is currently under construction. Our team is working hard to bring you new features and content. Please check back soon!
            </motion.p>
            
            <motion.div
              initial={slideUp.initial}
              animate={slideUp.animate}
              transition={{ ...slideUp.transition, delay: 0.8 }}
              className="flex items-center justify-center gap-2 text-neutral-400"
            >
              <Clock size={16} />
              <span className="text-sm">We'll be back shortly</span>
            </motion.div>
            
            <motion.div
              initial={slideUp.initial}
              animate={slideUp.animate}
              transition={{ ...slideUp.transition, delay: 1 }}
              className="pt-8"
            >
              <Link to="/">
                <button className="btn-primary">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Home
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon