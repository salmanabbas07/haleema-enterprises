import React, { useState } from 'react'
import { RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri'
import Container from '../Container'
import SectionHeading from '../SectionHeading'
import PrimaryButton from '../PrimaryButton'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'
import { contactInfo } from '../../data/servicesData'
import './CallbackSection.css'

const CallbackSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you! We will call you back shortly.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    })
  }

  return (
    <section className="callback-section">
      <Container>
        <div className="callback-content">
          <div className="callback-info">
            <ScrollAnimation animation="fade-right">
              <SectionHeading
                subtitle="Get In Touch"
                title="Request a Callback"
                align="left"
              />
              <p className="callback-description">
                Have questions about our services? Fill out the form and our team will get back to you 
                within 24 hours. We're here to help you with all your visa, recruitment, and travel needs.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <RiPhoneLine />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">{contactInfo.phone}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <RiMailLine />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{contactInfo.email}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <RiMapPinLine />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Address</span>
                    <span className="contact-value">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="callback-form-wrapper">
            <ScrollAnimation animation="fade-left">
              <form className="callback-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="visa-endorsement">Visa Endorsement</option>
                    <option value="ticketing">Ticketing</option>
                    <option value="overseas-recruitment">Overseas Recruitment</option>
                    <option value="shutdown-jobs">Shutdown Jobs</option>
                    <option value="emigration">Emigration</option>
                    <option value="hajj-umrah">Hajj & Umrah</option>
                    <option value="document-attestation">Document Attestation</option>
                    <option value="medical-recruitment">Medical Recruitment</option>
                    <option value="engineering-design">Engineering & Design</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <PrimaryButton type="submit" variant="primary" className="callback-submit">
                  Request Callback
                </PrimaryButton>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CallbackSection
