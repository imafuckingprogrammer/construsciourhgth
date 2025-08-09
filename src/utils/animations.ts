// Smooth, optimized animation system
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1]
  }
}

export const slideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1]
  }
}

export const slideLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1]
  }
}

export const slideRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1]
  }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1]
  }
}

export const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px"
}