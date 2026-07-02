import React from 'react'
import { RiShieldCheckLine, RiTeamLine, RiAwardLine, RiGlobalLine } from 'react-icons/ri'
import Container from '../Container'
import SectionHeading from '../SectionHeading'
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import './Values.css'

const Values = () => {
  const values = [
    {
      icon: RiShieldCheckLine,
      title: "Trust & Integrity",
      description: "We build lasting relationships based on trust, transparency, and ethical business practices."
    },
    {
      icon: RiTeamLine,
      title: "Expert Team",
      description: "Our experienced professionals are dedicated to providing exceptional service and guidance."
    },
    {
      icon: RiAwardLine,
      title: "Quality Service",
      description: "We are committed to delivering the highest quality services that exceed client expectations."
    },
    {
      icon: RiGlobalLine,
      title: "Global Reach",
      description: "Our extensive network allows us to serve clients across multiple countries and regions."
    }
  ]

  return (
    <section className="values-section section-bg">
      <Container>
        <ScrollAnimation animation="fade-up">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
          />
        </ScrollAnimation>

        <div className="values-grid">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="value-card">
                  <div className="value-icon">
                    <IconComponent />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Values
