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

const DocumentAttestation = () => {
  return (
    <div className="service-page">
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Document Attestation" 
        subtitle="Professional document attestation services for educational, personal, and commercial documents"
        backgroundImage="/assets/images/services/document-attestation.jpg"
      />
      
      <section className="service-detail section">
        <Container>
          <div className="service-detail-grid">
            <div className="service-content">
              <ScrollAnimation animation="fade-up">
                <SectionHeading
                  subtitle="Service Details"
                  title="Document Attestation Services"
                  align="left"
                />
                <div className="service-description">
                  <p>
                    We provide professional document attestation services for educational, personal, and commercial 
                    documents. Our team ensures that your documents are properly authenticated and attested for use 
                    in foreign countries.
                  </p>
                  <p>
                    Document attestation is a crucial requirement for various purposes including employment, education, 
                    and business abroad. We handle the entire attestation process, including notarization, state 
                    authentication, and embassy attestation.
                  </p>
                </div>

                <h3 className="service-subheading">Our Services Include:</h3>
                <ul className="service-features">
                  <li>Educational Document Attestation</li>
                  <li>Personal Document Attestation</li>
                  <li>Commercial Document Attestation</li>
                  <li>Notarization Services</li>
                  <li>State Authentication</li>
                  <li>Embassy Attestation</li>
                </ul>

                <h3 className="service-subheading">Why Choose Us?</h3>
                <ul className="service-features">
                  <li>Expert attestation knowledge</li>
                  <li>Fast processing</li>
                  <li>Secure handling of documents</li>
                  <li>Competitive pricing</li>
                  <li>End-to-end support</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="service-sidebar">
              <ScrollAnimation animation="fade-left">
                <SidebarServices currentServiceSlug="document-attestation" />
                <EnquiryForm serviceTitle="Document Attestation" />
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

export default DocumentAttestation
