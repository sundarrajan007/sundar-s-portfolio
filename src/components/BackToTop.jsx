import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLaunching, setIsLaunching] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    setIsLaunching(true)
    
    // Rocket launch animation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 300)

    // Reset animation after scroll
    setTimeout(() => {
      setIsLaunching(false)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            className={`p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              isLaunching ? 'rocket-launch' : ''
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={isLaunching ? {
              y: -1000,
              rotate: 360,
              scale: 0.5
            } : {
              y: [0, -10, 0],
            }}
            transition={isLaunching ? {
              duration: 1,
              ease: "easeIn"
            } : {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            title="Back to top"
          >
            <Rocket className="w-6 h-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BackToTop

