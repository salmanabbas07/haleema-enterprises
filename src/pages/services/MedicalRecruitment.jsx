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

const MedicalRecruitment = () => {
  return (
    <div className="service-page">
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Medical & Nurses Recruitment" 
        subtitle="Specialized recruitment services for medical professionals, doctors, and nurses"
        backgroundImage="/assets/images/services/medical-recruitment.jpg"
      />
      
      <section className="service-detail section">
        <Container>
          <div className="service-detail-grid">
            <div className="service-content">
              <ScrollAnimation animation="fade-up">
                <SectionHeading
                  subtitle="Service Details"
                  title="Medical & Nurses Recruitment"
                  align="left"
                />
                <div className="service-description">
                  <p>
                    We offer specialized recruitment services for medical professionals, doctors, and nurses. Our 
                    healthcare recruitment division connects qualified medical staff with leading hospitals, clinics, 
                    and healthcare facilities worldwide.
                  </p>
                  <p>
                    With deep understanding of healthcare industry requirements, we ensure that both employers and 
                    candidates find the perfect match. Our rigorous screening process verifies qualifications, 
                    experience, and credentials of all medical professionals.
                  </p>
                </div>

                <h3 className="service-subheading">Our Services Include:</h3>
                <ul className="service-features">
                  <li>Doctor Recruitment</li>
                  <li>Nurse Recruitment</li>
                  <li>Medical Staff Placement</li>
                  <li>Credential Verification</li>
                  <li>Licensing Assistance</li>
                  <li>Visa & Immigration Support</li>
                </ul>

                <h3 className="service-subheading">Why Choose Us?</h3>
                <ul className="service-features">
                  <li>Healthcare industry expertise</li>
                  <li>Qualified candidate pool</li>
                  <li>Thorough credential verification</li>
                  <li>Global healthcare network</li>
                  <li>Specialized medical recruitment</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="service-sidebar">
              <ScrollAnimation animation="fade-left">
                <SidebarServices currentServiceSlug="medical-recruitment" />
                <EnquiryForm serviceTitle="Medical & Nurses Recruitment" />
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

export default MedicalRecruitment
