import React from 'react'
import { Link } from 'react-router-dom'
import { RiPhoneLine, RiMailLine, RiMapPinLine, RiFacebookFill, RiTwitterXFill, RiInstagramFill, RiLinkedinFill, RiArrowUpLine } from 'react-icons/ri'
import Container from '../Container'
import { contactInfo, servicesData, socialLinks } from '../../data/servicesData'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <h3>Haleema Enterprises</h3>
                <p className="footer-tagline">Your Gateway to Global Opportunities</p>
              </div>
              <p className="footer-description">
                Leading provider of visa endorsement, overseas recruitment, and travel services 
                for over 15 years. Trust us for your global journey.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => {
                  const IconComponent = {
                    RiFacebookFill: RiFacebookFill,
                    RiTwitterXFill: RiTwitterXFill,
                    RiInstagramFill: RiInstagramFill,
                    RiLinkedinFill: RiLinkedinFill
                  }[social.icon]
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/grievance">Grievance</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-links">
                {servicesData.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link to={`/services/${service.slug}`}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="footer-title">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <div className="contact-icon">
                    <RiPhoneLine />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Phone</span>
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <RiMailLine />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Email</span>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon">
                    <RiMapPinLine />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Address</span>
                    <span>{contactInfo.address}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Haleema Enterprises. All rights reserved.
            </p>
            <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
              <RiArrowUpLine />
            </button>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
