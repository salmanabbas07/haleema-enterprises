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

const Emigration = () => {
  return (
    <div className="service-page">
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Emigration" 
        subtitle="Complete emigration services including documentation, clearance, and immigration support"
        backgroundImage="/assets/images/services/emigration.jpg"
      />
      
      <section className="service-detail section">
        <Container>
          <div className="service-detail-grid">
            <div className="service-content">
              <ScrollAnimation animation="fade-up">
                <SectionHeading
                  subtitle="Service Details"
                  title="Emigration Services"
                  align="left"
                />
                <div className="service-description">
                  <p>
                    We provide complete emigration services including documentation, clearance, and immigration support. 
                    Our team guides you through the complex emigration process, ensuring all legal requirements are met 
                    for a smooth transition to your new country.
                  </p>
                  <p>
                    From emigration clearance to visa processing and travel arrangements, we handle every aspect of 
                    your emigration journey. Our experts stay updated with the latest immigration policies and 
                    requirements of various countries.
                  </p>
                </div>

                <h3 className="service-subheading">Our Services Include:</h3>
                <ul className="service-features">
                  <li>Emigration Clearance</li>
                  <li>Documentation Processing</li>
                  <li>Immigration Consultation</li>
                  <li>Visa Processing</li>
                  <li>Travel Arrangements</li>
                  <li>Pre-departure Briefing</li>
                </ul>

                <h3 className="service-subheading">Why Choose Us?</h3>
                <ul className="service-features">
                  <li>Expert immigration knowledge</li>
                  <li>Complete documentation support</li>
                  <li>Updated on policy changes</li>
                  <li>Personalized guidance</li>
                  <li>High success rate</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="service-sidebar">
              <ScrollAnimation animation="fade-left">
                <SidebarServices currentServiceSlug="emigration" />
                <EnquiryForm serviceTitle="Emigration" />
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

export default Emigration
