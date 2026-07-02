import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PrimaryButton from '../PrimaryButton'
import './Hero.css'

const Hero = () => {
  const [swiper, setSwiper] = useState(null)

  const slides = [
    {
      id: 1,
      title: "Your Gateway to Global Opportunities",
      subtitle: "Visa Endorsement & Overseas Recruitment",
      description: "Professional services for visa endorsement, overseas recruitment, and document attestation. Trust Haleema Enterprises for your global journey.",
      image: "/assets/images/hero/slide1.jpg",
      cta: "Our Services",
      link: "/services"
    },
    {
      id: 2,
      title: "Expert Travel Solutions",
      subtitle: "Ticketing & Hajj Umrah Services",
      description: "Complete travel solutions including domestic and international ticketing, Hajj and Umrah packages with personalized service.",
      image: "/assets/images/hero/slide2.jpg",
      cta: "Contact Us",
      link: "/contact"
    },
    {
      id: 3,
      title: "Building Careers Worldwide",
      subtitle: "Medical & Engineering Recruitment",
      description: "Connecting skilled professionals with international opportunities. Specialized recruitment for medical, engineering, and industrial sectors.",
      image: "/assets/images/hero/slide3.jpg",
      cta: "Learn More",
      link: "/about"
    }
  ]

  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={setSwiper}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <div className="hero-slide-bg">
                <img src={slide.image} alt={slide.title} />
                <div className="hero-overlay"></div>
              </div>
              <div className="container">
                <div className="hero-content">
                  <span className="hero-subtitle">{slide.subtitle}</span>
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>
                  <PrimaryButton variant="primary" className="hero-cta">
                    {slide.cta}
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
