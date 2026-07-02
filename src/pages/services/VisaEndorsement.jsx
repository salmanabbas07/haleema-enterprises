import React from 'react'
import { Helmet } from 'react-helmet-async'
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
import './VisaEndorsement.css'

const VisaEndorsement = () => {
  return (
    <div className="service-page">
      <Helmet>
        <title>Visa Endorsement Services - Haleema Enterprises</title>
        <meta name="description" content="Professional visa endorsement services for work, visit, student, and business visas. Expert guidance for all your visa processing needs." />
      </Helmet>
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Visa Endorsement" 
        subtitle="Professional visa endorsement services for all types of visas"
        backgroundImage="/assets/images/services/visa-endorsement.jpg"
      />
      
      <section className="service-detail section">
        <Container>
          <div className="service-detail-grid">
            <div className="service-content">
              <ScrollAnimation animation="fade-up">
                <SectionHeading
                  subtitle="Service Details"
                  title="Visa Endorsement Services"
                  align="left"
                />
                <div className="service-description">
                  <p>
                    We provide comprehensive visa endorsement services for all types of visas including work visas, 
                    visit visas, student visas, and business visas. Our experienced team guides you through the entire 
                    process, ensuring all documentation is complete and accurate.
                  </p>
                  <p>
                    With years of experience in visa processing, we understand the requirements of different countries 
                    and help you navigate the complex visa application process with ease. Our services include document 
                    verification, application preparation, and follow-up with consulates.
                  </p>
                </div>

                <h3 className="service-subheading">Our Services Include:</h3>
                <ul className="service-features">
                  <li>Work Visa Endorsement</li>
                  <li>Visit Visa Processing</li>
                  <li>Student Visa Assistance</li>
                  <li>Business Visa Services</li>
                  <li>Document Verification</li>
                  <li>Application Follow-up</li>
                </ul>

                <h3 className="service-subheading">Why Choose Us?</h3>
                <ul className="service-features">
                  <li>Expert knowledge of visa requirements</li>
                  <li>High success rate</li>
                  <li>Personalized guidance</li>
                  <li>Timely processing</li>
                  <li>Competitive pricing</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="service-sidebar">
              <ScrollAnimation animation="fade-left">
                <SidebarServices currentServiceSlug="visa-endorsement" />
                <EnquiryForm serviceTitle="Visa Endorsement" />
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

export default VisaEndorsement
