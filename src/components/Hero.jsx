import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Code } from 'lucide-react'
import FallingText from './FallingText'
import SplitText from './SplitText'
import BlurText from './BlurText'
import DecryptedText from './DecryptedText'
import RotatingText from './RotatingText'

// Removed AnimationTest

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = ['Frontend Developer', 'UI Enthusiast', 'Problem Solver', 'Creative Thinker']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Particle animation variants
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-orange-500 text-2xl sm:text-3xl font-medium">Hi, I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 relative"
        >
          <BlurText
            text="Sundarrajan"
            className="text-6xl sm:text-7xl lg:text-8xl text-orange-500 font-mono tracking-wider"
            delay={0}
            stagger={0.1}
          />
        </motion.h1>
        {/* Removed DecryptedText subtitle */}

        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 h-16 flex items-center justify-center"
        >
          <BlurText
            key={titles[currentTitle]}
            text={titles[currentTitle]}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-orange-500"
            delay={0}
            stagger={0.06}
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <SplitText
            text="I build experiences, not just code"
            className="text-xl sm:text-2xl text-white text-center"
            delay={1200}
            stagger={0.05}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="https://github.com/rmsundarrajan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-lg font-semibold rounded-full floating"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            className="glass-dark px-8 py-4 text-lg font-semibold rounded-full text-white border border-orange-500/30 hover:border-orange-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/rmsundarrajan', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/rmsundarrajan/', label: 'LinkedIn' },
            { icon: Code, href: 'https://www.codechef.com/users/rmsundarrajan', label: 'CodeChef' },
            { icon: Mail, href: 'mailto:rmsundarrajan@gmail.com', label: 'Email' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-dark hover:bg-orange-500/20 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <social.icon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        {/* Removed scroll down button and indicator */}
      </div>
    </section>
  )
}

export default Hero

