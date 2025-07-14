import React from 'react'
import { motion } from 'framer-motion'

const Hyperspeed = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Simple speed lines */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 100}px`,
          }}
          initial={{ x: -400, opacity: 0 }}
          animate={{
            x: window.innerWidth + 400,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* Center burst effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-500 rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          scale: [0, 200, 0],
          opacity: [1, 0, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Rotating circles */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 border border-orange-500/20 rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-60 h-60 border border-orange-400/30 rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-orange-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

export default Hyperspeed 