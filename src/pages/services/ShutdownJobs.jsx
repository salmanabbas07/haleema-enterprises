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

const ShutdownJobs = () => {
  return (
    <div className="service-page">
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Shutdown Jobs" 
        subtitle="Specialized shutdown job recruitment for industrial maintenance and project-based employment"
        backgroundImage="/assets/images/services/shutdown-jobs.jpg"
      />
      
      <section className="service-detail section">
        <Container>
          <div className="service-detail-grid">
            <div className="service-content">
              <ScrollAnimation animation="fade-up">
                <SectionHeading
                  subtitle="Service Details"
                  title="Shutdown Job Recruitment"
                  align="left"
                />
                <div className="service-description">
                  <p>
                    We specialize in shutdown job recruitment for industrial maintenance and project-based employment. 
                    Our team connects skilled technicians and workers with companies undertaking planned maintenance 
                    shutdowns and turnarounds.
                  </p>
                  <p>
                    Shutdown projects require experienced professionals who can work efficiently under tight deadlines. 
                    We maintain a pool of qualified workers ready to deploy for short-term and long-term shutdown 
                    projects across various industries.
                  </p>
                </div>

                <h3 className="service-subheading">Our Services Include:</h3>
                <ul className="service-features">
                  <li>Technician Recruitment</li>
                  <li>Skilled Worker Deployment</li>
                  <li>Project Staffing</li>
                  <li>Safety Training</li>
                  <li>Document Processing</li>
                  <li>Accommodation Arrangements</li>
                </ul>

                <h3 className="service-subheading">Why Choose Us?</h3>
                <ul className="service-features">
                  <li>Quick deployment</li>
                  <li>Experienced workforce</li>
                  <li>Safety-focused approach</li>
                  <li>Industry knowledge</li>
                  <li>Cost-effective solutions</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="service-sidebar">
              <ScrollAnimation animation="fade-left">
                <SidebarServices currentServiceSlug="shutdown-jobs" />
                <EnquiryForm serviceTitle="Shutdown Jobs" />
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

export default ShutdownJobs
