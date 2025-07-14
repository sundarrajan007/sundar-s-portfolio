import React from 'react';

export const Stack = ({ children, className = '' }) => (
  <div className={`relative flex flex-row justify-center items-start gap-8 max-w-6xl mx-auto ${className}`}>
    {/* Timeline line: horizontal only */}
    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-full opacity-60 -translate-y-1/2 z-0" />
    {React.Children.map(children, (child, idx) =>
      child ? React.cloneElement(child, { timelineIndex: idx }) : null
    )}
  </div>
);

export const StackItem = ({
  icon,
  title,
  company,
  time,
  location,
  role,
  roleColor = 'bg-orange-500',
  tags = [],
  technologies = [],
  achievements = [],
  timelineIndex = 0,
  children,
}) => (
  <div className="relative flex flex-col items-center w-full sm:w-[320px] md:w-[350px] max-w-[350px] min-w-[280px] mx-auto z-10">
    {/* Card Content */}
    <div
      tabIndex={0}
      className="flex flex-col justify-between bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-6 py-4 mt-12 md:mt-0 md:pt-16 w-full h-full space-y-4 transition-shadow focus:outline-none focus:ring-4 focus:ring-blue-500/60 active:ring-4 active:ring-orange-500/60"
    >
      <div>
        <div className="flex flex-col items-center gap-2 mb-2">
          <div className="flex items-center gap-2 justify-center">
            <h3 className="text-xl font-bold text-white text-center">{title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${roleColor}`}>{role}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white flex-wrap justify-center">
            <span>{company}</span>
            <span>•</span>
            <span>{time}</span>
            <span>•</span>
            <span>{location}</span>
          </div>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2 justify-center">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-700 text-orange-300">
              {tag}
            </span>
          ))}
        </div>
        {/* Technologies Used */}
        {technologies.length > 0 && (
          <div className="mb-2 text-center">
            <span className="text-sm text-white font-semibold">Technologies Used: </span>
            <span className="text-sm text-white">{technologies.join(', ')}</span>
          </div>
        )}
      </div>
      {/* Key Achievements */}
      {achievements.length > 0 && (
        <div>
          <span className="text-sm text-white font-semibold">Key Achievements:</span>
          <ul className="list-disc list-inside text-sm text-white mt-1 space-y-1">
            {achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>
      )}
      {children}
    </div>
  </div>
); 