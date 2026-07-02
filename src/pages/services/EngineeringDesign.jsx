import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import Navbar from '../../components/Navbar/Navbar'
import PageBanner from '../../components/PageBanner/PageBanner'
import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'
import ScrollAnimation from '../../components/ScrollAnimation'
import SidebarServices from '../../components/SidebarServices/SidebarServices'
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import '../services/VisaEndorsement.css'

const EngineeringDesign = () => {
  return (
    <div className="service-page">
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Engineering & Design" 
        subtitle="Engineering and design services for various industries with expert professionals"
        backgroundImage="/assets/images/services/engineering-design.jpg"
      />
      
      <section className="service-detail section">
        <Container>
          <div className="service-detail-grid">
            <div className="service-content">
              <ScrollAnimation animation="fade-up">
                <SectionHeading
                  subtitle="Service Details"
                  title="Engineering & Design Services"
                  align="left"
                />
                <div className="service-description">
                  <p>
                    We provide engineering and design services for various industries with expert professionals. 
                    Our engineering division offers comprehensive solutions for construction, manufacturing, and 
                    industrial projects.
                  </p>
                  <p>
                    From conceptual design to detailed engineering and project management, our team delivers 
                    high-quality engineering solutions that meet international standards. We work with clients 
                    across multiple sectors including oil & gas, construction, and manufacturing.
                  </p>
                </div>

                <h3 className="service-subheading">Our Services Include:</h3>
                <ul className="service-features">
                  <li>Engineering Design</li>
                  <li>Project Management</li>
                  <li>Technical Consultation</li>
                  <li>CAD Drafting</li>
                  <li>Structural Analysis</li>
                  <li>Quality Assurance</li>
                </ul>

                <h3 className="service-subheading">Why Choose Us?</h3>
                <ul className="service-features">
                  <li>Expert engineering team</li>
                  <li>Industry experience</li>
                  <li>Quality standards</li>
                  <li>Innovative solutions</li>
                  <li>Cost-effective design</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="service-sidebar">
              <ScrollAnimation animation="fade-left">
                <SidebarServices currentServiceSlug="engineering-design" />
                <EnquiryForm serviceTitle="Engineering & Design" />
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

export default EngineeringDesign
