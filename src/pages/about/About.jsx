import React from 'react'
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
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us - Haleema Enterprises</title>
        <meta name="description" content="Learn about Haleema Enterprises - our vision, mission, and philosophy. Your trusted partner for visa endorsement, overseas recruitment, and travel services for over 15 years." />
      </Helmet>
      <TopBar />
      <Navbar />
      <PageBanner 
        title="About Us" 
        subtitle="Learn more about our company and values"
        backgroundImage="/assets/images/banner-about.jpg"
      />
      
      <section className="about-hero section">
        <Container>
          <div className="about-hero-content">
            <ScrollAnimation animation="fade-up">
              <SectionHeading
                subtitle="Who We Are"
                title="Your Trusted Partner for Global Services"
              />
              <p className="about-text">
                Haleema Enterprises has been a leading provider of visa endorsement, overseas recruitment, 
                and travel services for over 15 years. Founded with a vision to connect people with global 
                opportunities, we have helped thousands of clients achieve their dreams of working, studying, 
                and traveling abroad.
              </p>
              <p className="about-text">
                Our commitment to excellence, integrity, and customer satisfaction has made us a trusted name 
                in the industry. We believe in building lasting relationships with our clients and providing 
                personalized solutions tailored to their unique needs.
              </p>
            </ScrollAnimation>
          </div>
        </Container>
      </section>

      <section className="about-mission-vision section-bg">
        <Container>
          <div className="mv-grid">
            <ScrollAnimation animation="fade-right">
              <div className="mv-card vision-card">
                <div className="mv-icon">👁️</div>
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted and reliable partner for individuals and businesses seeking 
                  global opportunities, setting the standard for excellence in visa, recruitment, and 
                  travel services.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="mv-card mission-card">
                <div className="mv-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To provide exceptional, personalized services that empower our clients to achieve 
                  their global aspirations while maintaining the highest standards of integrity, 
                  professionalism, and customer satisfaction.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="mv-card philosophy-card">
                <div className="mv-icon">💡</div>
                <h3>Our Philosophy</h3>
                <p>
                  We believe in transparency, honesty, and putting our clients first. Every decision 
                  we make is guided by our core values of trust, excellence, and dedication to 
                  helping others succeed.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </Container>
      </section>

      <section className="about-philosophy section">
        <Container>
          <ScrollAnimation animation="fade-up">
            <SectionHeading
              subtitle="Our Philosophy"
              title="Core Values That Drive Us"
            />
          </ScrollAnimation>
          
          <div className="philosophy-grid">
            {[
              { title: "Integrity", description: "We conduct business with honesty and transparency in all our dealings." },
              { title: "Excellence", description: "We strive for the highest quality in everything we do." },
              { title: "Customer Focus", description: "Our clients' success is our success." },
              { title: "Innovation", description: "We continuously improve and adapt to changing needs." },
              { title: "Teamwork", description: "We collaborate to achieve the best results." },
              { title: "Respect", description: "We treat everyone with dignity and respect." }
            ].map((value, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                <div className="philosophy-card">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default About
