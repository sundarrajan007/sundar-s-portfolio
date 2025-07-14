import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FallingText = ({ text, className = "", delay = 0, staggerDelay = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  const letters = text.split('')

  return (
    <div className={`flex ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ 
            y: -100, 
            opacity: 0,
            rotateX: -90
          }}
          animate={isVisible ? {
            y: 0,
            opacity: 1,
            rotateX: 0
          } : {
            y: -100,
            opacity: 0,
            rotateX: -90
          }}
          transition={{
            duration: 0.8,
            delay: delay + (index * staggerDelay),
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  )
}

export default FallingText 