import React, { useEffect, useState, useRef } from 'react'

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

const randomChar = () => chars[Math.floor(Math.random() * chars.length)]

const DecryptedText = ({ text, className = '', speed = 30, revealDelay = 100, delay = 0 }) => {
  const [displayed, setDisplayed] = useState('')
  const [revealed, setRevealed] = useState(Array(text.length).fill(false))
  const [done, setDone] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    let timeouts = []
    let revealTimeout
    setDisplayed(''.padEnd(text.length, ' '))
    setRevealed(Array(text.length).fill(false))
    setDone(false)
    doneRef.current = false

    const decrypt = () => {
      if (doneRef.current) return
      setDisplayed((prev) =>
        prev
          .split('')
          .map((c, i) => (revealed[i] ? text[i] : randomChar()))
          .join('')
      )
      if (revealed.every(Boolean)) {
        setDone(true)
        doneRef.current = true
        setDisplayed(text)
        return
      }
      if (!revealed.every(Boolean)) {
        timeouts.push(setTimeout(decrypt, speed))
      }
    }

    revealTimeout = setTimeout(() => {
      let i = 0
      const revealNext = () => {
        setRevealed((prev) => {
          const next = [...prev]
          next[i] = true
          return next
        })
        i++
        if (i < text.length) {
          timeouts.push(setTimeout(revealNext, revealDelay))
        }
      }
      revealNext()
    }, delay)

    decrypt()
    return () => {
      timeouts.forEach(clearTimeout)
      clearTimeout(revealTimeout)
    }
  }, [text, speed, revealDelay, delay])

  // When done, show the real text
  return (
    <span className={className} style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>{done ? text : displayed}</span>
  )
}

export default DecryptedText 