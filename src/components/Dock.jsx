import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Layers, Globe, BookOpen, MessageCircle } from 'lucide-react'
import StarBorder from './ui/StarBorder';

const Dock = () => {
  const [activeItem, setActiveItem] = useState('home')

  const dockItems = [
    { id: 'home', icon: Home, label: 'Home', href: '#hero' },
    { id: 'about', icon: User, label: 'About', href: '#about' },
    { id: 'projects', icon: Briefcase, label: 'Projects', href: '#projects' },
    { id: 'skills', icon: Layers, label: 'Skills', href: '#skills' },
    { id: 'experience', icon: Globe, label: 'Experience', href: '#experience' },
    { id: 'certifications', icon: BookOpen, label: 'Certifications', href: '#certifications' },
    { id: 'contact', icon: MessageCircle, label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarBorder />
      </div>
      <motion.div 
        className="flex items-center gap-2 px-4 py-3 bg-white/80 dark:bg-black/20 backdrop-blur-md rounded-full border border-white/10 shadow-2xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {dockItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id
          
          return (
            <motion.button
              key={item.id}
              onClick={() => {
                setActiveItem(item.id)
                scrollToSection(item.href)
              }}
              className={`relative p-3 rounded-full transition-all duration-300 group ${
                isActive 
                  ? 'bg-orange-500/20 text-orange-400' 
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <motion.div
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 pointer-events-none"
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
              </motion.div>
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-orange-400"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Dock 