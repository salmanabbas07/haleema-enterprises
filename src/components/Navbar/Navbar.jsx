import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri'
import { navLinks, servicesData } from '../../data/servicesData'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesDropdownOpen(false)
  }, [location])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">Haleema Enterprises</span>
          </Link>

          <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  {link.hasDropdown ? (
                    <div className="nav-item-dropdown">
                      <button
                        className={`nav-link dropdown-toggle ${isServicesDropdownOpen ? 'open' : ''}`}
                        onClick={toggleServicesDropdown}
                      >
                        {link.label}
                        <RiArrowDownSLine className="dropdown-icon" />
                      </button>
                      <ul className={`dropdown-menu ${isServicesDropdownOpen ? 'open' : ''}`}>
                        {servicesData.map((service) => (
                          <li key={service.id}>
                            <Link
                              to={`/services/${service.slug}`}
                              className={`dropdown-link ${isActive(`/services/${service.slug}`)}`}
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link to={link.path} className={`nav-link ${isActive(link.path)}`}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
