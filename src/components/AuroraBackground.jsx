import React from 'react'
import { motion } from 'framer-motion'

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora gradients */}
      <motion.div
        className="absolute top-0 left-1/2 w-[120vw] h-[60vh] -translate-x-1/2 bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 opacity-40 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[80vw] h-[40vh] bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-indigo-500 opacity-30 blur-2xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-[60vw] h-[30vh] bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 opacity-20 blur-2xl rounded-full"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export default AuroraBackground 