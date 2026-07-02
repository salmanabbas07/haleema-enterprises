import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import SectionHeading from '../SectionHeading'
import PrimaryButton from '../PrimaryButton'
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import './AboutSection.css'

const AboutSection = () => {
  return (
    <section className="about-section section-bg">
      <Container>
        <div className="about-content">
          <div className="about-image">
            <ScrollAnimation animation="fade-right">
              <div className="about-img-wrapper">
                <img src="/assets/images/about-preview.jpg" alt="About Haleema Enterprises" />
                <div className="about-experience">
                  <span className="experience-number">15+</span>
                  <span className="experience-text">Years Experience</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="about-text">
            <ScrollAnimation animation="fade-left">
              <SectionHeading
                subtitle="About Us"
                title="Your Trusted Partner for Global Services"
                align="left"
              />
              <p className="about-description">
                Haleema Enterprises has been a leading provider of visa endorsement, overseas recruitment, 
                and travel services for over 15 years. We are committed to delivering exceptional service 
                and helping our clients achieve their global aspirations.
              </p>
              <p className="about-description">
                Our team of experienced professionals is dedicated to providing personalized solutions 
                tailored to your specific needs. Whether you're looking for visa services, recruitment 
                opportunities, or travel arrangements, we are here to guide you every step of the way.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Professional & Reliable Service</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Expert Team with Industry Knowledge</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Comprehensive Range of Services</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Customer-Centric Approach</span>
                </div>
              </div>
              <Link to="/about">
                <PrimaryButton variant="secondary" className="about-cta">
                  Learn More About Us
                </PrimaryButton>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
