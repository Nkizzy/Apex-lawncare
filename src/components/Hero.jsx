import React, { useEffect, useState } from 'react'
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
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=500&fit=crop',
      alt: 'Professional pest control service'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
      alt: 'Pest inspection and treatment'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=500&fit=crop',
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
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Apex<br />
            Pest Solutions
          </h1>
          <p className="hero-subtitle">Professional Pest Control Services</p>
          <p className="hero-description">
            Expert pest control solutions you can trust. From ants and roaches to rodents and termites,
            we eliminate pests and protect your home or business with safe, effective treatments.
          </p>
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

