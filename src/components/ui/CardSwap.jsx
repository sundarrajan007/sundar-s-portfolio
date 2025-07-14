import React from "react";

export default function CardSwap({ front, back, className = "" }) {
  return (
    <div
      className={`relative w-full h-full [perspective:1000px] group ${className}`}
      tabIndex={0}
    >
      {/* Front Side */}
      <div
        className="absolute inset-0 transition-transform duration-500 [backface-visibility:hidden] group-hover:rotate-y-180 group-focus:rotate-y-180 bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-6 py-6 flex flex-col justify-between"
      >
        {front}
      </div>
      {/* Back Side */}
      <div
        className="absolute inset-0 transition-transform duration-500 [backface-visibility:hidden] rotate-y-180 group-hover:rotate-y-0 group-focus:rotate-y-0 bg-gray-100 dark:bg-slate-900 rounded-2xl shadow-xl px-6 py-6 flex flex-col justify-between"
      >
        {back}
      </div>
    </div>
  );
} 