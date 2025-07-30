import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Code,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import TextCursor from './TextCursor'
import ScrollFloat from './ScrollFloat';

function ScrollVelocityText({ text, className = '' }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();
    const speed = 60; // pixels per second

    function animate(now) {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      setOffset(prev => {
        const container = containerRef.current;
        if (!container) return prev;
        const textWidth = container.scrollWidth;
        let next = prev - speed * delta;
        if (Math.abs(next) > textWidth) {
          next = 0;
        }
        return next;
      });
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className={`overflow-hidden w-full flex justify-center`} style={{height: '4.5rem'}}>
      <div
        ref={containerRef}
        className={`whitespace-nowrap font-extrabold text-3xl sm:text-5xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg ${className}`}
        style={{
          transform: `translateX(${offset}px)`,
          willChange: 'transform',
          minWidth: '100%',
        }}
      >
        {text} &nbsp; {text} &nbsp; {text}
      </div>
    </div>
  );
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null) // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rmsundarrajan@gmail.com',
      href: 'mailto:rmsundarrajan@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: null,
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Phone,
      label: 'Available',
      value: 'Mon - Fri, 9AM - 6PM',
      href: null,
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-400'
    }
  ]

  const emojis = ['👋', '😊', '🚀', '💻', '🎯', '✨']
  const [currentEmoji, setCurrentEmoji] = useState(0)

  // Emoji rotation effect
  useState(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(prev => (prev + 1) % emojis.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="contact" className="py-20 bg-transparent min-h-screen">
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
              <ScrollFloat text="Get In Touch" className="inline-block gradient-text" />
            </h2>
            <div className="flex justify-center mb-4">
              <TextCursor text="Let's connect!" speed={80} className="text-orange-400 text-xl sm:text-2xl font-mono" />
            </div>
            {/* Revert to the static shiny gradient style */}
            <p 
              className="text-3xl sm:text-5xl max-w-4xl mx-auto font-extrabold font-mono sm:font-serif bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-rainbow-shimmer drop-shadow-lg"
              style={{
                backgroundSize: '400% 400%',
                animation: 'rainbow-shimmer 4s linear infinite'
              }}
            >
              It’s not about being the best. It’s about being better than yesterday
            </p>
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-xl flex flex-col items-center"
            >
              {/* Say Hello Section */}
              <div className="mb-12 text-center">
                <motion.div
                  className="flex items-center mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-4xl mr-4">{emojis[currentEmoji]}</span>
                  <h3 className="text-2xl font-bold text-white">Say Hello!</h3>
                </motion.div>
                <p className="text-white text-lg leading-relaxed">
                  I'm always excited to work on new projects and collaborate with fellow developers. 
                  Whether you have a question, want to discuss a project, or just want to say hi, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6 mb-12 w-full">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="glass-dark p-6 rounded-lg hover-lift"
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center mr-4`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.label}</h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-white">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col items-center"
              >
                <h4 className="text-white font-semibold mb-6 text-center">Connect with me</h4>
                <div className="flex space-x-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`p-4 glass-dark rounded-lg text-white ${social.color} transition-all duration-300 group`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
    </section>
  )
}

export default Contact

