import React from 'react'
import { RiPhoneLine, RiMailLine, RiTimeLine } from 'react-icons/ri'
import { contactInfo } from '../../data/servicesData'
import './TopBar.css'

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-content">
          <div className="topbar-left">
            <div className="topbar-item">
              <RiPhoneLine className="topbar-icon" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="topbar-item">
              <RiMailLine className="topbar-icon" />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className="topbar-right">
            <div className="topbar-item">
              <RiTimeLine className="topbar-icon" />
              <span>{contactInfo.workingHours}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
