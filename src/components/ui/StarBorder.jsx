import React from "react";

export default function StarBorder({ className = "" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 400 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbe6" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Top border stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            cx={20 + i * 20}
            cy={10 + Math.sin(i) * 4}
            r={Math.random() * 1.5 + 1}
            fill="url(#starGradient)"
            opacity={Math.random() * 0.5 + 0.5}
          />
        ))}
        {/* Bottom border stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i + 20}
            cx={20 + i * 20}
            cy={70 + Math.cos(i) * 4}
            r={Math.random() * 1.5 + 1}
            fill="url(#starGradient)"
            opacity={Math.random() * 0.5 + 0.5}
          />
        ))}
      </svg>
    </div>
  );
} 