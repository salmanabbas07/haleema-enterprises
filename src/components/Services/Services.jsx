import React from 'react'
import { Link } from 'react-router-dom'
import {
  RiPassportLine,
  RiBuildingLine,
  RiTicketLine,
  RiGlobalLine,
  RiToolsLine,
  RiFileTextLine,
  RiArrowRightLine,
} from "react-icons/ri";
import Container from '../Container'
import SectionHeading from '../SectionHeading'
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { servicesData } from '../../data/servicesData'
import './Services.css'

const iconMap = {
  RiPassportLine: RiPassportLine,
  RiTicketLine: RiTicketLine,
  RiGlobalLine: RiGlobalLine,
  RiToolsLine: RiToolsLine,
  // RiFlightTakeoffLine: RiFlightTakeoffLine,
  // RiMosqueLine: RiMosqueLine,
  RiBuildingLine: RiBuildingLine,
  RiFileTextLine: RiFileTextLine,
  // RiHeartPulseLine: RiHeartPulseLine,
  // RiDraftLine: RiDraftLine
}

const Services = () => {
  return (
    <section className="services-section">
      <Container>
        <ScrollAnimation animation="fade-up">
          <SectionHeading
            subtitle="Our Services"
            title="What We Offer"
          />
        </ScrollAnimation>
        
        <div className="services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon]
            return (
              <ScrollAnimation key={service.id} animation="fade-up" delay={index * 100}>
                <Link to={`/services/${service.slug}`} className="service-card">
                  <div className="service-icon">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-link">
                    <span>Learn More</span>
                    <RiArrowRightLine className="link-icon" />
                  </div>
                </Link>
              </ScrollAnimation>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Services
