import React, { useRef, useEffect, useState } from "react";

export default function ScrollStack({ children, className = "" }) {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        // Reduce scroll effect on mobile for better performance
        const scrollMultiplier = isMobile ? 0.05 : 0.1;
        const opacityMultiplier = isMobile ? 0.0005 : 0.001;
        
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            transform: `translateY(${scrollY * (scrollMultiplier + index * 0.02)}px)`,
            opacity: Math.max(0.3, 1 - scrollY * opacityMultiplier),
            transition: isMobile ? 'transform 0.05s ease-out, opacity 0.05s ease-out' : 'transform 0.1s ease-out, opacity 0.1s ease-out',
          },
        });
      })}
    </div>
  );
} 