import React from 'react'
import { motion } from 'framer-motion'

const ShapeBlur = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large blur circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/30 dark:bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/25 dark:bg-blue-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />

      {/* Medium blur shapes */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/8 rounded-full blur-2xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/3 w-56 h-56 bg-pink-500/12 rounded-full blur-2xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7
        }}
      />

      {/* Small blur elements */}
      <motion.div
        className="absolute top-1/6 right-1/6 w-32 h-32 bg-yellow-500/6 rounded-full blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-cyan-500/8 rounded-full blur-xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
      />

      {/* Geometric shapes with blur */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-24 h-24 bg-orange-400/10 rounded-lg blur-lg rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-blue-400/8 rounded-lg blur-lg -rotate-45"
        animate={{
          rotate: [-45, -225, -45],
          scale: [1, 0.7, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
      />
    </div>
  )
}

export default ShapeBlur 