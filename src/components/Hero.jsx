import React, { useEffect, useState } from 'react'
import logo from '../assets/apexbiglogo.png'
import basketball from '../assets/basketball.jpg'
import holes from '../assets/holes.jpg'
import herobees from '../assets/herobees.jpg'
import './Hero.css'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const galleryImages = [
    {
      id: 1,
      src: basketball,
      alt: 'Professional pest control service'
    },
    {
      id: 2,
      src: holes,
      alt: 'Pest inspection and treatment'
    },
    {
      id: 3,
      src: herobees,
      alt: 'Expert pest control services'
    }
  ]

  const parallaxOffset = -scrollY * 0.3

  return (
    <section 
      id="hero" 
      className="hero"
      style={{
        transform: `translateY(${parallaxOffset}px)`
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-logo-mobile">
        <img src={logo} alt="Apex Pest Solutions" className="hero-logo-image" />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Apex<br />
            Pest Solutions
          </h1>
          <p className="hero-subtitle">Professional Pest Control Services</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get a Quote</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
        <div className="hero-gallery">
          {galleryImages.map((image, index) => (
            <div key={image.id} className={`hero-gallery-item hero-gallery-item-${index + 1}`}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  )
}

export default Hero

