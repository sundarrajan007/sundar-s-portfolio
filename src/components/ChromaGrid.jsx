import React from 'react'

const ChromaGrid = ({ children, className = '' }) => {
  return (
    <div className={`relative rounded-xl overflow-hidden p-1 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-xl ${className}`}>
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {React.Children.map(children, child => (
          child ? React.cloneElement(child, { className: `${child.props.className || ''} flex flex-col h-full` }) : null
        ))}
      </div>
    </div>
  )
}

export default ChromaGrid 