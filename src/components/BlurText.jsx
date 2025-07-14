import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BlurText = ({ text, className = '', delay = 0, stagger = 0.05 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span className={`inline-block ${className}`} style={{ overflow: 'hidden' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{
            filter: 'blur(8px)',
            opacity: 0.2,
            y: 10
          }}
          animate={isVisible ? {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0
          } : {
            filter: 'blur(8px)',
            opacity: 0.2,
            y: 10
          }}
          transition={{
            duration: 0.5,
            delay: delay / 1000 + i * stagger,
            ease: 'easeOut'
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default BlurText 