import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed top-20 right-4 z-40"
    >
      <motion.button
        onClick={toggleTheme}
        className="p-3 glass-dark rounded-full border border-orange-500/30 hover:border-orange-500 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-orange-400" />
          ) : (
            <Moon className="w-6 h-6 text-slate-600" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  )
}

export default ThemeToggle

