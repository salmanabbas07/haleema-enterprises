import React, { useEffect, useState } from 'react'
import './ScrollProgressBar.css'

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = (window.scrollY / documentHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress-bar">
      <div 
        className="scroll-progress-fill" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  )
}

export default ScrollProgressBar
