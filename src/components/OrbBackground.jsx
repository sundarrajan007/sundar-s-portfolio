import React from 'react';
import { motion } from 'framer-motion';

const OrbBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fade Overlay - darker for less brightness */}
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/90 pointer-events-none" />
      {/* Main Orb */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Secondary Orb */}
      <motion.div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-tr from-blue-400 via-cyan-400 to-green-400 opacity-20 blur-2xl rounded-full"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Tertiary Orb */}
      <motion.div
        className="absolute top-0 right-1/3 w-[30vw] h-[30vw] bg-gradient-to-tl from-yellow-400 via-pink-400 to-red-500 opacity-12 blur-2xl rounded-full"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 25, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Quaternary Orb */}
      <motion.div
        className="absolute bottom-1/4 left-0 w-[25vw] h-[25vw] bg-gradient-to-br from-green-300 via-blue-300 to-purple-400 opacity-10 blur-2xl rounded-full"
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 18, 0],
          y: [0, 18, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default OrbBackground; 