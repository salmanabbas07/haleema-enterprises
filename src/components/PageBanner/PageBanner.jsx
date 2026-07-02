import React from 'react'
import { Link } from 'react-router-dom'
import { RiHomeLine } from 'react-icons/ri'
import Container from '../Container'
import './PageBanner.css'

const PageBanner = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="page-banner">
      <div className="banner-bg">
        <img src={backgroundImage || "/assets/images/banner-default.jpg"} alt={title} />
        <div className="banner-overlay"></div>
      </div>
      <Container>
        <div className="banner-content">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              <RiHomeLine />
              <span>Home</span>
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{title}</span>
          </nav>
          <h1 className="banner-title">{title}</h1>
          {subtitle && <p className="banner-subtitle">{subtitle}</p>}
        </div>
      </Container>
    </section>
  )
}

export default PageBanner
