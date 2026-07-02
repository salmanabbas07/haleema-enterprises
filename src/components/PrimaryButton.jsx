import React from 'react'
import './PrimaryButton.css'

const PrimaryButton = ({ children, onClick, type = 'button', variant = 'primary', className = '', disabled = false, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
