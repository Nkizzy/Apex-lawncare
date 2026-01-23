import React, { useState, useEffect } from 'react'
import logo from '../assets/apexlogo.png'
import './Header.css'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header only when at the very top (within 50px)
      if (currentScrollY < 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navSections = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'social', label: 'Social' },
    { id: 'map', label: 'Map' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className={`site-header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="header-container">
        <div className="header-logo" onClick={scrollToTop}>
          <img src={logo} alt="Apex Pest Solutions" className="logo-image" />
          <h1 className="logo-text">Apex Pest Solutions</h1>
        </div>
        <nav className="header-nav">
          {navSections.map((section) => (
            <button
              key={section.id}
              className="nav-button"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

