import React from 'react'
import { Link } from 'react-router-dom'
import { RiHomeLine, RiArrowLeftLine } from 'react-icons/ri'
import TopBar from '../components/TopBar/TopBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import PrimaryButton from '../components/PrimaryButton'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <TopBar />
      <Navbar />
      <section className="not-found-section">
        <div className="not-found-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-description">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="error-actions">
            <Link to="/">
              <PrimaryButton variant="primary">
                <RiHomeLine />
                Go to Homepage
              </PrimaryButton>
            </Link>
            <button onClick={() => window.history.back()} className="back-button">
              <RiArrowLeftLine />
              Go Back
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default NotFound
