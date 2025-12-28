import React, { useState, useRef } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import './Navigation.css'

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const panelRef = useRef(null)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsExpanded(false)
    }
  }

  const togglePanel = () => {
    setIsExpanded(!isExpanded)
  }

  const handleTouchStart = (e) => {
    if (!isExpanded) return
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e) => {
    if (!isExpanded) return
    // Prevent default scrolling if we're swiping horizontally
    const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current)
    const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current)
    
    // Only prevent default if horizontal swipe is more dominant
    if (deltaX > deltaY && deltaX > 10) {
      e.preventDefault()
    }
  }

  const handleTouchEnd = (e) => {
    if (!isExpanded) return
    
    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY
    const deltaX = touchEndX - touchStartX.current
    const deltaY = Math.abs(touchEndY - touchStartY.current)
    
    // Minimum swipe distance and check if it's more horizontal than vertical
    const minSwipeDistance = 50
    if (deltaX < -minSwipeDistance && Math.abs(deltaX) > deltaY) {
      // Swiped left - close the sidebar
      setIsExpanded(false)
    }
  }

  const navSections = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'social', label: 'Social Media' },
    { id: 'map', label: 'Map' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Backdrop overlay */}
      {isExpanded && (
        <div 
          className="nav-backdrop" 
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      {/* Navigation wrapper to contain both button and panel */}
      <div className={`nav-wrapper ${isExpanded ? 'expanded' : ''}`}>
        {/* Arrow button - moves with panel */}
        <button 
          className="nav-arrow"
          onClick={togglePanel}
          aria-label={isExpanded ? 'Close navigation' : 'Open navigation'}
        >
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>

        {/* Side panel */}
        <nav 
          ref={panelRef}
          className="side-panel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="panel-content">
            <div className="panel-logo" onClick={() => scrollToSection('hero')}>
              <h2>Tips and Toes</h2>
            </div>
            <ul className="panel-menu">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(section.id)
                    }}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navigation

