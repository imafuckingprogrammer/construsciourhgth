import React from 'react'
import { motion } from 'framer-motion'
import GearLoader from './GearLoader'

interface PageLoaderProps {
  isLoading: boolean
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <GearLoader size={80} />
    </motion.div>
  )
}

export default PageLoader 