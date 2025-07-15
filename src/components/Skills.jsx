import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Code, 
  Palette, 
  Database, 
  Brain, 
  Lightbulb,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import ScrollFloat from './ScrollFloat';

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [currentTechIndex, setCurrentTechIndex] = useState(0)

  const skillCategories = [
    {
      name: 'Frontend Development',
      percentage: 90,
      icon: Code,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'UI/UX Design',
      percentage: 80,
      icon: Palette,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Backend Development',
      percentage: 70,
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Problem Solving',
      percentage: 95,
      icon: Brain,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Database Management',
      percentage: 75,
      icon: Database,
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const techStack = [
    {
      category: 'Languages',
      technologies: [
        { name: 'Python', icon: '🐍', proficiency: 85 },
        { name: 'JavaScript', icon: '⚡', proficiency: 90 },
        { name: 'C', icon: '⚙️', proficiency: 75 },
        { name: 'MySQL', icon: '🗄️', proficiency: 80 }
      ]
    },
    {
      category: 'Frontend',
      technologies: [
        { name: 'React.js', icon: '⚛️', proficiency: 90 },
        { name: 'HTML5', icon: '🌐', proficiency: 95 },
        { name: 'CSS3', icon: '🎨', proficiency: 90 },
        { name: 'Tailwind', icon: '💨', proficiency: 85 }
      ]
    },
    {
      category: 'Backend & Tools',
      technologies: [
        { name: 'Node.js', icon: '🟢', proficiency: 75 },
        { name: 'MongoDB', icon: '🍃', proficiency: 70 },
        { name: 'Git', icon: '📝', proficiency: 80 },
        { name: 'VS Code', icon: '💻', proficiency: 95 }
      ]
    },
    {
      category: 'Design & Others',
      technologies: [
        { name: 'Figma', icon: '🎯', proficiency: 85 },
        { name: 'DSA', icon: '🧮', proficiency: 80 },
        { name: 'OOPS', icon: '🔧', proficiency: 85 },
        { name: 'DBMS', icon: '📊', proficiency: 75 }
      ]
    }
  ]

  const nextTech = () => {
    setCurrentTechIndex((prev) => (prev + 1) % techStack.length)
  }

  const prevTech = () => {
    setCurrentTechIndex((prev) => (prev - 1 + techStack.length) % techStack.length)
  }

  return (
    <section id="skills" className="py-20 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-6">
            <ScrollFloat text="My Skills" className="inline-block gradient-text" />
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills Radar/Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Skill Proficiency</h3>
            <div className="space-y-6">
              {skillCategories.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-dark p-6 rounded-lg hover-lift"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                      <span className="text-orange-400 font-bold">{skill.percentage}%</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
              <div className="flex space-x-2">
                <motion.button
                  onClick={prevTech}
                  className="p-2 rounded-full glass-dark hover:bg-orange-500/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  onClick={nextTech}
                  className="p-2 rounded-full glass-dark hover:bg-orange-500/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            <motion.div
              key={currentTechIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-dark p-8 rounded-lg"
            >
              <h4 className="text-xl font-bold text-orange-400 mb-6 text-center">
                {techStack[currentTechIndex].category}
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {techStack[currentTechIndex].technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-slate-800/50 p-4 rounded-lg hover:bg-slate-700/50 transition-colors group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {tech.icon}
                      </div>
                      <h5 className="text-white font-medium mb-2">{tech.name}</h5>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-white mt-1">{tech.proficiency}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {techStack.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTechIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTechIndex ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Fun Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: '☕', 
                stat: '100+', 
                label: 'Cups of Coffee',
                description: 'Fueling late-night coding sessions'
              },
              { 
                icon: '💡', 
                stat: '50+', 
                label: 'Problem Solved',
                description: 'On various coding platforms'
              },
              { 
                icon: '🚀', 
                stat: '24/7', 
                label: 'Learning Mode',
                description: 'Always exploring new technologies'
              }
            ].map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center glass-dark p-8 rounded-lg hover-lift"
              >
                <div className="text-4xl mb-4">{fact.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">{fact.stat}</div>
                <div className="text-white font-semibold mb-2">{fact.label}</div>
                <div className="text-white text-sm">{fact.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

