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

const OverseasRecruitment = () => {
  return (
    <div className="service-page">
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Overseas Recruitment" 
        subtitle="Comprehensive overseas recruitment services connecting skilled workers with international employers"
        backgroundImage="/assets/images/services/overseas-recruitment.jpg"
      />
      
      <section className="service-detail section">
        <Container>
          <div className="service-detail-grid">
            <div className="service-content">
              <ScrollAnimation animation="fade-up">
                <SectionHeading
                  subtitle="Service Details"
                  title="Overseas Recruitment Services"
                  align="left"
                />
                <div className="service-description">
                  <p>
                    We provide comprehensive overseas recruitment services connecting skilled workers with international 
                    employers. Our extensive network and rigorous screening process ensure that we match the right talent 
                    with the right opportunities.
                  </p>
                  <p>
                    From initial screening to final placement, we handle every aspect of the recruitment process, 
                    including documentation, visa processing, and travel arrangements. Our team specializes in various 
                    industries including construction, healthcare, engineering, and hospitality.
                  </p>
                </div>

                <h3 className="service-subheading">Our Services Include:</h3>
                <ul className="service-features">
                  <li>Worker Screening & Selection</li>
                  <li>Skill Assessment</li>
                  <li>Documentation Processing</li>
                  <li>Visa Assistance</li>
                  <li>Travel Arrangements</li>
                  <li>Post-placement Support</li>
                </ul>

                <h3 className="service-subheading">Why Choose Us?</h3>
                <ul className="service-features">
                  <li>Extensive employer network</li>
                  <li>Rigorous screening process</li>
                  <li>Industry expertise</li>
                  <li>End-to-end support</li>
                  <li>Transparent process</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="service-sidebar">
              <ScrollAnimation animation="fade-left">
                <SidebarServices currentServiceSlug="overseas-recruitment" />
                <EnquiryForm serviceTitle="Overseas Recruitment" />
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

export default OverseasRecruitment
