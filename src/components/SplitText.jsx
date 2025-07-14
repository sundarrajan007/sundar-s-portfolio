import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SplitText = ({ text, className = '', delay = 0, stagger = 0.05 }) => {
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
            y: '100%',
            opacity: 0,
            rotate: -10,
            scale: 0.8
          }}
          animate={isVisible ? {
            y: '0%',
            opacity: 1,
            rotate: 0,
            scale: 1
          } : {}}
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

export default SplitText 