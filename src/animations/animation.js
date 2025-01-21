// Animation variants with improved smoothness and timing

export const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: {
      x: "0",
      transition: {
        duration: 0.9,
        ease: [0.25, 1, 0.5, 1], // Custom cubic bezier for smoother entry
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      x: "calc(100% + 100px)",
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1], // Material Design easing for natural exit
      }
    }
  }
  
  export const slide = {
    initial: { x: 80 },
    enter: i => ({
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.02 * i, // Slightly reduced delay for tighter sequence
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }),
    exit: i => ({
      x: 80,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.04 * i
      }
    })
  }
  
  export const scale = {
    open: {
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    },
    closed: {
      scale: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }
  
  export const slideUp = {
    initial: {
      y: 300,
      opacity: 0
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }
  
  export const slideUpDec = {
    initial: {
      y: "100%",
      opacity: 0
    },
    open: (i) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.015 * i, // Slightly faster sequence
        ease: [0.25, 1, 0.5, 1],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }),
    closed: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }
  
  export const opacity = {
    initial: {
      opacity: 0
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }