import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Components
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import EasterEgg from './components/EasterEgg'
import Dock from './components/Dock'
import ShapeBlur from './components/ShapeBlur'
import Navbar from './components/Navbar'
import ScrollStack from './components/ui/ScrollStack';
import PixelTransition from './components/ui/PixelTransition';

function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for theme preference
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    // Default to dark
    return true
  })

  useEffect(() => {
    // Easter egg keyboard combo (Ctrl+Shift+H)
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 5000)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className={`min-h-screen relative${darkMode ? ' dark' : ''}`}>
      {/* ShapeBlur Animated Background */}
      <ShapeBlur />
      {/* Main Content */}
      <main className="relative z-10">
        <ScrollStack>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <PixelTransition>
            <Hero />
          </PixelTransition>
          <PixelTransition>
            <About />
          </PixelTransition>
          <PixelTransition>
            <Skills />
          </PixelTransition>
          <PixelTransition>
            <Projects />
          </PixelTransition>
          <PixelTransition>
            <Experience />
          </PixelTransition>
          <PixelTransition>
            <Certifications />
          </PixelTransition>
          <PixelTransition>
            <Contact />
          </PixelTransition>
        </ScrollStack>
      </main>
      {/* Footer */}
      <Footer />
      {/* Back to Top Button */}
      <BackToTop />
      {/* Dock Navigation */}
      <Dock />
      {/* Easter Egg */}
      <AnimatePresence>
        {showEasterEgg && <EasterEgg />}
      </AnimatePresence>
    </div>
  )
}

export default App

