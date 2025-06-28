import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -30,
    scale: 1.02
  }
}

const pageTransition = {
  type: 'tween' as const,
  ease: [0.4, 0, 0.2, 1] as const,
  duration: 0.6
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition 