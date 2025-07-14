import React from "react";

export default function InfiniteScroll({ children, className = "" }) {
  return (
    <div
      className={`relative w-full overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-slate-800 ${className}`}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex gap-6">
        {children}
      </div>
    </div>
  );
} 