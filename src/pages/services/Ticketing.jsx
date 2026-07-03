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

const Ticketing = () => {
  return (
    <div className="service-page">
      <TopBar />
      <Navbar />
      <PageBanner 
        title="Ticketing" 
        subtitle="Complete ticketing solutions for domestic and international flights"
        backgroundImage="/assets/images/services/ticketing.jpg"
      />
      
      <section className="service-detail section">
        <Container>
          <div className="service-detail-grid">
            <div className="service-content">
              <ScrollAnimation animation="fade-up">
                <SectionHeading
                  subtitle="Service Details"
                  title="Flight Ticketing Services"
                  align="left"
                />
                <div className="service-description">
                  <p>
                    We offer complete ticketing solutions for domestic and international flights with the best price 
                    guarantee. Our partnerships with major airlines ensure that you get competitive rates and flexible 
                    booking options.
                  </p>
                  <p>
                    Whether you're traveling for business, leisure, or pilgrimage, our experienced travel consultants 
                    help you find the best routes, schedules, and prices to suit your needs and budget.
                  </p>
                </div>

                <h3 className="service-subheading">Our Services Include:</h3>
                <ul className="service-features">
                  <li>Domestic Flight Booking</li>
                  <li>International Flight Booking</li>
                  <li>Group Travel Arrangements</li>
                  <li>Corporate Travel Solutions</li>
                  <li>Last-minute Bookings</li>
                  <li>Flight Changes & Cancellations</li>
                </ul>

                <h3 className="service-subheading">Why Choose Us?</h3>
                <ul className="service-features">
                  <li>Best price guarantee</li>
                  <li>24/7 customer support</li>
                  <li>Flexible payment options</li>
                  <li>Easy booking process</li>
                  <li>Expert travel advice</li>
                </ul>
              </ScrollAnimation>
            </div>

            <div className="service-sidebar">
              <ScrollAnimation animation="fade-left">
                <SidebarServices currentServiceSlug="ticketing" />
                <EnquiryForm serviceTitle="Ticketing" />
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

export default Ticketing
