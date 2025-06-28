import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BackgroundGears: React.FC = () => {
  const { scrollYProgress } = useScroll()
  
  // Different rotation speeds for each gear based on scroll
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -270])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const rotate4 = useTransform(scrollYProgress, [0, 1], [0, -360])
  const rotate5 = useTransform(scrollYProgress, [0, 1], [0, 450])

  const gears = [
    { 
      size: 120, 
      top: '15%', 
      left: '10%', 
      rotate: rotate1,
      duration: 8 
    },
    { 
      size: 80, 
      top: '25%', 
      right: '15%', 
      rotate: rotate2,
      duration: 12 
    },
    { 
      size: 100, 
      top: '60%', 
      left: '5%', 
      rotate: rotate3,
      duration: 10 
    },
    { 
      size: 90, 
      top: '70%', 
      right: '20%', 
      rotate: rotate4,
      duration: 15 
    },
    { 
      size: 60, 
      top: '40%', 
      left: '50%', 
      rotate: rotate5,
      duration: 6 
    }
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {gears.map((gear, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            top: gear.top,
            left: gear.left,
            right: gear.right,
            width: gear.size,
            height: gear.size,
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: gear.duration,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ rotate: gear.rotate }}
          >
            <img 
              src="/Gear.png" 
              alt="" 
              className="w-full h-full opacity-30"
              style={{ filter: 'grayscale(100%) brightness(0.4)' }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default BackgroundGears 