import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const EasterEgg = () => {
  const [matrixChars, setMatrixChars] = useState([])

  useEffect(() => {
    // Generate matrix characters
    const chars = []
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    
    for (let i = 0; i < 50; i++) {
      chars.push({
        id: i,
        char: characters[Math.floor(Math.random() * characters.length)],
        x: Math.random() * 100,
        delay: Math.random() * 3
      })
    }
    setMatrixChars(chars)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 overflow-hidden"
    >
      {/* Matrix Background */}
      <div className="absolute inset-0">
        {matrixChars.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-green-400 font-mono text-xl matrix-char"
            style={{
              left: `${item.x}%`,
              top: '-10vh'
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [1, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {item.char}
          </motion.div>
        ))}
      </div>

      {/* Hacker Mode Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl font-bold text-green-400 mb-4 font-mono"
            animate={{
              textShadow: [
                '0 0 10px #00ff00',
                '0 0 20px #00ff00',
                '0 0 10px #00ff00'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            HACKER MODE
          </motion.h1>
          
          <motion.p
            className="text-green-300 text-xl mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {'> ACCESSING MAINFRAME...'}
          </motion.p>

          <motion.div
            className="text-green-400 font-mono text-lg space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div>{'> DECRYPTING FILES... [████████████] 100%'}</div>
            <div>{'> BYPASSING SECURITY... [████████████] 100%'}</div>
            <div>{'> ACCESSING PORTFOLIO... [████████████] 100%'}</div>
            <div className="text-green-300 mt-4">{'> WELCOME TO THE MATRIX, NEO'}</div>
          </motion.div>

          <motion.div
            className="mt-8 text-green-500 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <div className="text-sm">Easter egg activated! 🥚</div>
            <div className="text-xs mt-2">Press Ctrl+Shift+H to activate anytime</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
      </div>
    </motion.div>
  )
}

export default EasterEgg

