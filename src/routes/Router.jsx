import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import './Router.css'

// Lazy load pages
const Home = lazy(() => import('../pages/home/Home'))
const About = lazy(() => import('../pages/about/About'))
const VisaEndorsement = lazy(() => import('../pages/services/VisaEndorsement'))
const Ticketing = lazy(() => import('../pages/services/Ticketing'))
const OverseasRecruitment = lazy(() => import('../pages/services/OverseasRecruitment'))
const ShutdownJobs = lazy(() => import('../pages/services/ShutdownJobs'))
const Emigration = lazy(() => import('../pages/services/Emigration'))
const HajjUmrah = lazy(() => import('../pages/services/HajjUmrah'))
const DocumentAttestation = lazy(() => import('../pages/services/DocumentAttestation'))
const MedicalRecruitment = lazy(() => import('../pages/services/MedicalRecruitment'))
const EngineeringDesign = lazy(() => import('../pages/services/EngineeringDesign'))
const Contact = lazy(() => import('../pages/contact/Contact'))
const Grievance = lazy(() => import('../pages/grievance/Grievance'))
const NotFound = lazy(() => import('../pages/NotFound'))

// Loading component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
)

const Router = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/visa-endorsement" element={<VisaEndorsement />} />
            <Route path="/services/ticketing" element={<Ticketing />} />
            <Route path="/services/overseas-recruitment" element={<OverseasRecruitment />} />
            <Route path="/services/shutdown-jobs" element={<ShutdownJobs />} />
            <Route path="/services/emigration" element={<Emigration />} />
            <Route path="/services/hajj-umrah" element={<HajjUmrah />} />
            <Route path="/services/document-attestation" element={<DocumentAttestation />} />
            <Route path="/services/medical-recruitment" element={<MedicalRecruitment />} />
            <Route path="/services/engineering-design" element={<EngineeringDesign />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/grievance" element={<Grievance />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default Router
