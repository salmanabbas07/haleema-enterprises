import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import TopBar from '../../components/TopBar/TopBar'
import Navbar from '../../components/Navbar/Navbar'
import PageBanner from '../../components/PageBanner/PageBanner'
import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'
import ScrollAnimation from '../../components/ScrollAnimation'
import PrimaryButton from '../../components/PrimaryButton'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import './Grievance.css'

const Grievance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grievanceType: '',
    subject: '',
    description: ''
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
    console.log('Grievance submitted:', formData)
    alert('Thank you for your feedback. We will review your grievance and get back to you within 7 working days.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      grievanceType: '',
      subject: '',
      description: ''
    })
  }

  return (
    <div className="grievance-page">
      <Helmet>
        <title>Grievance Redressal - Haleema Enterprises</title>
        <meta name="description" content="Submit your grievances to Haleema Enterprises. We value your feedback and are committed to resolving any concerns promptly and fairly." />
      </Helmet>
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Grievance Redressal" 
        subtitle="We value your feedback and are committed to resolving any concerns"
        backgroundImage="/assets/images/banner-grievance.jpg"
      />
      
      <section className="grievance-section section">
        <Container>
          <ScrollAnimation animation="fade-up">
            <SectionHeading
              subtitle="Grievance Form"
              title="Submit Your Grievance"
            />
          </ScrollAnimation>

          <div className="grievance-content">
            <div className="grievance-info">
              <ScrollAnimation animation="fade-right">
                <h3>Our Commitment</h3>
                <p>
                  At Haleema Enterprises, we are committed to providing excellent service to all our clients. 
                  However, if you have any concerns or grievances, we want to hear from you and resolve them promptly.
                </p>
                <p>
                  Your feedback helps us improve our services and ensure that we meet the highest standards of 
                  customer satisfaction. All grievances are treated with confidentiality and are reviewed by our 
                  management team.
                </p>

                <div className="grievance-process">
                  <h4>Grievance Redressal Process:</h4>
                  <ol>
                    <li>Submit your grievance through the form</li>
                    <li>Our team acknowledges receipt within 24 hours</li>
                    <li>Investigation and review within 3-5 working days</li>
                    <li>Resolution and response within 7 working days</li>
                    <li>Follow-up to ensure satisfaction</li>
                  </ol>
                </div>

                <div className="grievance-contact">
                  <h4>For Urgent Matters:</h4>
                  <p>Contact our customer care directly:</p>
                  <p>Email: grievance@haleemaenterprises.com</p>
                  <p>Phone: +92 123 4567890</p>
                </div>
              </ScrollAnimation>
            </div>

            <div className="grievance-form-wrapper">
              <ScrollAnimation animation="fade-left">
                <form className="grievance-form" onSubmit={handleSubmit}>
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
                    <label htmlFor="grievanceType">Grievance Type *</label>
                    <select
                      id="grievanceType"
                      name="grievanceType"
                      value={formData.grievanceType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select grievance type</option>
                      <option value="service">Service Related</option>
                      <option value="staff">Staff Behavior</option>
                      <option value="billing">Billing & Payment</option>
                      <option value="delay">Delay in Service</option>
                      <option value="quality">Quality Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief subject of your grievance"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Detailed Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Please provide detailed description of your grievance..."
                    ></textarea>
                  </div>
                  <PrimaryButton type="submit" variant="primary" className="grievance-submit">
                    Submit Grievance
                  </PrimaryButton>
                </form>
              </ScrollAnimation>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Grievance
