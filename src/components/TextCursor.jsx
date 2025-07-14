import React, { useEffect, useState } from 'react'

const TextCursor = ({ text = '', speed = 100, className = '' }) => {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    setDisplayed('')
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <span className={`font-mono whitespace-pre ${className}`}>
      {displayed}
      <span className={`inline-block w-2 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  )
}

export default TextCursor 