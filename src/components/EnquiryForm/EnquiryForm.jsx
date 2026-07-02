import React, { useState } from 'react'
import PrimaryButton from '../PrimaryButton'
import './EnquiryForm.css'

const EnquiryForm = ({ serviceTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceTitle || '',
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
    console.log('Enquiry submitted:', formData)
    alert('Thank you for your enquiry! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: serviceTitle || '',
      message: ''
    })
  }

  return (
    <div className="enquiry-form-wrapper">
      <h3 className="enquiry-form-title">Service Enquiry</h3>
      <p className="enquiry-form-subtitle">
        Interested in this service? Fill out the form below and we'll get back to you.
      </p>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Service</label>
          <input
            type="text"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Service name"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about your requirements..."
          ></textarea>
        </div>
        <PrimaryButton type="submit" variant="primary" className="enquiry-submit">
          Submit Enquiry
        </PrimaryButton>
      </form>
    </div>
  )
}

export default EnquiryForm
