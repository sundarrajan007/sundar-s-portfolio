import React, { useRef, useEffect, useState } from 'react';

// ScrollFloat: Animated text that floats up as you scroll into view
const ScrollFloat = ({ text, className = '' }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight * 0.85) {
        setInView(true);
      } else {
        setInView(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <span
      ref={ref}
      className={
        `inline-block transition-all duration-700 ease-out transform ` +
        (inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8') +
        ' ' + className
      }
      style={{ willChange: 'transform, opacity' }}
    >
      {text}
    </span>
  );
};

export default ScrollFloat; 