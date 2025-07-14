import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Code, Users, Lightbulb } from 'lucide-react'
import ScrollFloat from './ScrollFloat';

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const timelineEvents = [
    {
      year: '2020',
      title: 'Started Higher Secondary Education',
      description: 'Began my academic journey at Vivekanandha Vidyalaya',
      icon: GraduationCap
    },
    {
      year: '2022',
      title: 'Computer Science Engineering',
      description: 'Enrolled at Kalaignarkarunanidhi Institute of Technology',
      icon: Code
    },
    {
      year: '2023',
      title: 'First Web Development Training',
      description: 'Started my web development journey at Brinary Spot Technology',
      icon: Code
    },
    {
      year: '2024',
      title: 'Multiple Internships & Certifications',
      description: 'Gained experience in Data Science, Web Design, and earned multiple certifications',
      icon: Users
    },
    {
      year: 'Present',
      title: 'Building Innovative Projects',
      description: 'Creating user-focused applications and exploring new technologies',
      icon: Lightbulb
    }
  ]

  const traits = [
    {
      title: 'Passionate Learner',
      description: 'Always eager to explore new technologies and improve my skills',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Problem Solver',
      description: 'I enjoy tackling complex challenges with creative solutions',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Team Leader',
      description: 'Led teams with clear vision and motivation for better collaboration',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Creative Thinker',
      description: 'Generate innovative ideas to improve outcomes and user experiences',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="about" className="section-padding bg-transparent">
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
            <ScrollFloat text="About Me" className="inline-block gradient-text" />
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Passionate Computer Science graduate with a strong drive to build user-focused applications. 
            I enjoy experimenting with code, solving logical challenges, and turning ideas into digital solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">My Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-transparent"></div>
              
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-6 relative z-10">
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="glass-dark p-6 rounded-lg hover-lift bg-[var(--card-bg)] text-[var(--text)] border border-[var(--accent)]/10">
                      <div className="flex items-center mb-2">
                        <span className="text-orange-400 font-bold text-lg mr-3">{event.year}</span>
                        <h4 className="text-white font-semibold text-lg">{event.title}</h4>
                      </div>
                      <p className="text-white">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Traits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">What Drives Me</h3>
            <div className="grid gap-6">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-dark p-6 rounded-lg hover-tilt group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${trait.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{trait.title}</h4>
                  <p className="text-white">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '7.58', label: 'CGPA', suffix: '/10' },
            { number: '5+', label: 'Certifications', suffix: '' },
            { number: '3+', label: 'Projects', suffix: '' },
            { number: '3', label: 'Internships', suffix: '' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center glass-dark p-6 rounded-lg hover-lift"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-white font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

