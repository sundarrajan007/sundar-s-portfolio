import React, { useState, useEffect } from "react";

export default function PixelTransition({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Create pixel grid
    const gridSize = 20;
    const newPixels = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        newPixels.push({
          id: `${i}-${j}`,
          x: i,
          y: j,
          delay: Math.random() * 1000,
        });
      }
    }
    setPixels(newPixels);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Pixel overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {pixels.map((pixel) => (
          <div
            key={pixel.id}
            className="absolute bg-orange-500"
            style={{
              left: `${(pixel.x / 20) * 100}%`,
              top: `${(pixel.y / 20) * 100}%`,
              width: '5%',
              height: '5%',
              opacity: isVisible ? 0 : 1,
              transition: `opacity 0.3s ease-in-out ${pixel.delay}ms`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div 
        className="relative z-20"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out 500ms',
        }}
      >
        {children}
      </div>
    </div>
  );
} 