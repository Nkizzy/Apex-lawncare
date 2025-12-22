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
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=500&fit=crop',
      alt: 'Elegant nail art'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
      alt: 'Beautiful manicure'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=500&fit=crop',
      alt: 'Spa treatment'
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
            Flower City<br />
            Nails
          </h1>
          <p className="hero-subtitle">Where Beauty Blooms</p>
          <p className="hero-description">
            Experience luxury nail care and spa treatments in an elegant, relaxing environment.
            Your journey to beauty and wellness starts here.
          </p>
          <div className="hero-buttons">
            <a href="#social" className="btn btn-primary">Visit our socials</a>
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

