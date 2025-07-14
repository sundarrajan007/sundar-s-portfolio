import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RotatingText = ({ words = [], className = '', duration = 2000 }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (words.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, duration)
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <span className={`inline-block ${className}`} style={{ minHeight: '1em' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ rotateX: 90, opacity: 0, y: 20 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: -90, opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-block' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default RotatingText 