import React from "react";

export default function MetaBalls({ className = "" }) {
  return (
    <div className={`fixed inset-0 -z-20 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="metaballs" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="metaballs"
            />
            <feBlend in="SourceGraphic" in2="metaballs" mode="normal" />
          </filter>
        </defs>
        <g filter="url(#metaballs)">
          <circle cx="200" cy="300" r="120" fill="#18CCFC" fillOpacity="0.6">
            <animate
              attributeName="cx"
              values="200;600;200"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="600" cy="300" r="100" fill="#6344F5" fillOpacity="0.5">
            <animate
              attributeName="cy"
              values="300;500;100;300"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="400" cy="150" r="80" fill="#AE48FF" fillOpacity="0.4">
            <animate
              attributeName="cx"
              values="400;200;600;400"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
} 