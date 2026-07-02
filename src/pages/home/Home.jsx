import React from 'react'
import { Helmet } from 'react-helmet-async'
import TopBar from '../../components/TopBar/TopBar'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import AboutSection from '../../components/AboutSection/AboutSection'
import Services from '../../components/Services/Services'
import Values from '../../components/Values/Values'
import CallbackSection from '../../components/CallbackSection/CallbackSection'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Haleema Enterprises - Home | Visa Endorsement & Overseas Recruitment</title>
        <meta name="description" content="Haleema Enterprises - Your trusted partner for visa endorsement, overseas recruitment, ticketing, and travel services. Connecting you with global opportunities." />
        <meta name="keywords" content="visa endorsement, overseas recruitment, ticketing, travel services, hajj umrah, document attestation" />
      </Helmet>
      <TopBar />
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Values />
      <CallbackSection />
      <section className="contact-section section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-side">
              <h2>Get In Touch</h2>
              <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
            <div className="contact-form-side">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home
