import React from 'react'
import { Helmet } from 'react-helmet-async'
import TopBar from '../../components/TopBar/TopBar'
import Navbar from '../../components/Navbar/Navbar'
import PageBanner from '../../components/PageBanner/PageBanner'
import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import { RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri'
import { contactInfo } from '../../data/servicesData'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - Haleema Enterprises</title>
        <meta name="description" content="Get in touch with Haleema Enterprises for visa endorsement, overseas recruitment, and travel services. Contact us via phone, email, or visit our office." />
      </Helmet>
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Contact Us" 
        subtitle="Get in touch with us for any queries or assistance"
        backgroundImage="/assets/images/banner-contact.jpg"
      />
      
      <section className="contact-info-section section">
        <Container>
          <ScrollAnimation animation="fade-up">
            <SectionHeading
              subtitle="Contact Information"
              title="Get In Touch"
            />
          </ScrollAnimation>
          
          <div className="contact-info-grid">
            <ScrollAnimation animation="fade-right" delay={100}>
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <RiPhoneLine />
                </div>
                <h3>Phone</h3>
                <p>{contactInfo.phone}</p>
                <a href={`tel:${contactInfo.phone}`} className="contact-link">Call Us</a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <RiMailLine />
                </div>
                <h3>Email</h3>
                <p>{contactInfo.email}</p>
                <a href={`mailto:${contactInfo.email}`} className="contact-link">Send Email</a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-left" delay={300}>
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <RiMapPinLine />
                </div>
                <h3>Address</h3>
                <p>{contactInfo.address}</p>
                <a href="#" className="contact-link">Get Directions</a>
              </div>
            </ScrollAnimation>
          </div>
        </Container>
      </section>

      <section className="contact-form-section section-bg">
        <Container>
          <div className="contact-form-grid">
            <div className="contact-map-side">
              <ScrollAnimation animation="fade-right">
                <h3>Our Location</h3>
                <p className="map-description">Find us on the map below</p>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7856!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnMDMuOSJF!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </ScrollAnimation>
            </div>

            <div className="contact-form-side">
              <ScrollAnimation animation="fade-left">
                <h3>Send Us a Message</h3>
                <p className="form-description">Fill out the form below and we'll get back to you as soon as possible.</p>
                <ContactForm />
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

export default Contact
