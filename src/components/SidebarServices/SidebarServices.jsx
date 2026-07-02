import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
import { servicesData } from '../../data/servicesData'
import './SidebarServices.css'

const SidebarServices = ({ currentServiceSlug }) => {
  const location = useLocation()

  return (
    <aside className="sidebar-services">
      <div className="sidebar-header">
        <h3>Our Services</h3>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          {servicesData.map((service) => (
            <li key={service.id} className="sidebar-item">
              <Link
                to={`/services/${service.slug}`}
                className={`sidebar-link ${currentServiceSlug === service.slug ? 'active' : ''}`}
              >
                <span className="sidebar-link-text">{service.title}</span>
                <RiArrowRightSLine className="sidebar-link-icon" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SidebarServices
