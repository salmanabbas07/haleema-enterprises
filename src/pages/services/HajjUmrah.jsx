import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import Navbar from '../../components/Navbar/Navbar'
import PageBanner from '../../components/PageBanner/PageBanner'
import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation'
import SidebarServices from '../../components/SidebarServices/SidebarServices'
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import '../services/VisaEndorsement.css'

const HajjUmrah = () => {
  return (
    <div className="service-page">
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Hajj & Umrah" 
        subtitle="Premium Hajj and Umrah services with complete travel packages and guidance"
        backgroundImage="/assets/images/services/hajj-umrah.jpg"
      />
      
      <section className="service-detail section">
        <Container>
          <div className="service-detail-grid">
            <div className="service-content">
              <ScrollAnimation animation="fade-up">
                <SectionHeading
                  subtitle="Service Details"
                  title="Hajj & Umrah Services"
                  align="left"
                />
                <div className="service-description">
                  <p>
                    We offer premium Hajj and Umrah services with complete travel packages and guidance. Our spiritual 
                    journey packages are designed to provide a comfortable and meaningful experience for pilgrims 
                    performing these sacred duties.
                  </p>
                  <p>
                    From visa processing to accommodation in Makkah and Madinah, transportation, and guided tours, 
                    we handle all arrangements so you can focus on your spiritual journey. Our experienced team 
                    provides comprehensive support throughout your pilgrimage.
                  </p>
                </div>

                <h3 className="service-subheading">Our Services Include:</h3>
                <ul className="service-features">
                  <li>Hajj Visa Processing</li>
                  <li>Umrah Visa Processing</li>
                  <li>Flight Bookings</li>
                  <li>Hotel Accommodation</li>
                  <li>Ground Transportation</li>
                  <li>Guided Tours & Support</li>
                </ul>

                <h3 className="service-subheading">Why Choose Us?</h3>
                <ul className="service-features">
                  <li>Experienced pilgrimage organizers</li>
                  <li>Quality accommodations</li>
                  <li>Comprehensive packages</li>
                  <li>Spiritual guidance</li>
                  <li>24/7 support during journey</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="service-sidebar">
              <ScrollAnimation animation="fade-left">
                <SidebarServices currentServiceSlug="hajj-umrah" />
                <EnquiryForm serviceTitle="Hajj & Umrah" />
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

export default HajjUmrah
