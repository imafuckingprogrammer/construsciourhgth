import React from 'react'
import { motion } from 'framer-motion'

interface GearLoaderProps {
  size?: number
  className?: string
  color?: 'purple' | 'gray'
}

const GearLoader: React.FC<GearLoaderProps> = ({ 
  size = 64, 
  className = '',
  color = 'purple'
}) => {
  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <img 
        src="/Gear.png" 
        alt="Loading..." 
        width={size} 
        height={size}
        className={`${color === 'purple' ? 'opacity-100' : 'opacity-50 grayscale'}`}
        style={{ filter: color === 'gray' ? 'grayscale(100%) brightness(0.7)' : 'none' }}
      />
    </motion.div>
  )
}

export default GearLoader 