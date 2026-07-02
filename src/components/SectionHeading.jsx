import React from 'react'
import './SectionHeading.css'

const SectionHeading = ({ title, subtitle, align = 'center', className = '' }) => {
  return (
    <div className={`section-heading ${align} ${className}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      <div className="section-divider"></div>
    </div>
  )
}

export default SectionHeading
