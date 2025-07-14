import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Award, 
  Calendar, 
  Building, 
  CheckCircle,
  Database,
  Code,
  Globe,
  Coffee
} from 'lucide-react'
import InfiniteScroll from "./ui/InfiniteScroll";
import ScrollFloat from './ScrollFloat';

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const certifications = [
    {
      id: 1,
      title: 'Database Management System',
      provider: 'NPTEL',
      year: '2024',
      score: '64%',
      description: 'Comprehensive course covering database design, SQL, normalization, and database administration concepts.',
      skills: ['SQL', 'Database Design', 'Normalization', 'DBMS Concepts'],
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      category: 'Database'
    },
    {
      id: 2,
      title: 'Python Programming Foundation',
      provider: 'Infosys',
      year: '2024',
      score: 'Certified',
      description: 'Foundation course in Python programming covering syntax, data structures, and basic programming concepts.',
      skills: ['Python', 'Data Structures', 'Programming Logic', 'Problem Solving'],
      icon: Code,
      color: 'from-green-500 to-teal-500',
      category: 'Programming'
    },
    {
      id: 3,
      title: 'Web Development using HTML & CSS',
      provider: 'Infosys',
      year: '2024',
      score: 'Certified',
      description: 'Comprehensive web development course covering HTML5, CSS3, responsive design, and modern web standards.',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Web Standards'],
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'IT Foundation in Java',
      provider: 'Infosys',
      year: '2024',
      score: 'Certified',
      description: 'Foundation course in Java programming covering object-oriented programming concepts and Java fundamentals.',
      skills: ['Java', 'OOP Concepts', 'Programming Fundamentals', 'Software Development'],
      icon: Coffee,
      color: 'from-purple-500 to-pink-500',
      category: 'Programming'
    },
    {
      id: 5,
      title: 'IT Foundation in Python',
      provider: 'Infosys',
      year: '2024',
      score: 'Certified',
      description: 'Advanced Python programming course focusing on application development and software engineering principles.',
      skills: ['Python', 'Software Engineering', 'Application Development', 'Best Practices'],
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      category: 'Programming'
    }
  ]

  const categories = ['All', 'Programming', 'Web Development', 'Database']
  const [activeCategory, setActiveCategory] = useState('All')

  // Magnet effect state for the title
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const titleRef = useRef(null);

  function handleMouseMove(e) {
    const rect = titleRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMagnet({ x: x * 0.15, y: y * 0.15 });
  }
  function handleMouseLeave() {
    setMagnet({ x: 0, y: 0 });
  }

  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory)

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
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
            <ScrollFloat text="My Certifications" className="inline-block gradient-text" />
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Professional certifications and achievements that validate my technical skills and knowledge across various domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 glass-dark p-2 rounded-lg">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'text-white hover:text-white hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Certifications Infinite Scroll */}
        <InfiniteScroll speed={40} className="py-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className="mx-4 w-[340px] min-w-[300px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between border border-slate-700"
            >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${cert.color} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <cert.icon className="w-8 h-8 text-white" />
                      <span className="text-white/80 text-sm font-medium">{cert.category}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:scale-105 transition-transform">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between text-white/90">
                      <span className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        {cert.provider}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                  {/* Score/Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white text-sm">Achievement</span>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-green-400 font-semibold">{cert.score}</span>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-white text-sm mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                  {/* Skills */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 text-sm">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-700 text-orange-400 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </InfiniteScroll>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-dark p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Certification Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  number: '5',
                  label: 'Certifications Earned',
                  description: 'Across multiple domains'
                },
                {
                  icon: Building,
                  number: '2',
                  label: 'Trusted Providers',
                  description: 'NPTEL & Infosys'
                },
                {
                  icon: CheckCircle,
                  number: '100%',
                  label: 'Completion Rate',
                  description: 'All courses completed successfully'
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-white text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

