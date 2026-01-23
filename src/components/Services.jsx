import React, { useState, useRef, useEffect } from 'react'
import './Services.css'

const Services = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)
  const sliderContainerRef = useRef(null)

  const services = [
    {
      title: 'Ant & Roach Control',
      description: 'Effective elimination of ants, roaches, and other crawling insects with safe, professional treatments that protect your family and pets.',
      price: 'Starting at $150',
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
    },
    {
      title: 'Rodent Removal',
      description: 'Comprehensive rodent control services including mice, rats, and squirrels. We identify entry points, remove existing pests, and prevent future infestations.',
      price: 'Starting at $200',
      beforeImage: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop'
    },
    {
      title: 'Termite Treatment',
      description: 'Professional termite inspection and treatment to protect your property from costly structural damage. We use advanced detection and elimination methods.',
      price: 'Starting at $500',
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
    },
    {
      title: 'Bed Bug Extermination',
      description: 'Complete bed bug elimination using heat treatment and targeted applications. We ensure thorough removal and provide follow-up inspections.',
      price: 'Starting at $300',
      beforeImage: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop'
    },
    {
      title: 'Wildlife Removal',
      description: 'Humane removal of raccoons, squirrels, birds, and other wildlife from your property. We safely relocate animals and seal entry points.',
      price: 'Starting at $250',
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
    }
  ]

  const activeService = services[activeTab]

  // Reset slider position when tab changes
  useEffect(() => {
    setSliderPosition(50)
  }, [activeTab])

  const updateSliderPosition = (e) => {
    // Use the slider-container for accurate positioning
    if (!sliderContainerRef.current) return
    
    const rect = sliderContainerRef.current.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  // Handle mouse/touch events for slider
  const handleStart = (e) => {
    e.preventDefault()
    setIsDragging(true)
    updateSliderPosition(e)
  }

  // Add global event listeners for mouse move/up when dragging
  useEffect(() => {
    if (!isDragging) return

    const handleMove = (e) => {
      e.preventDefault()
      updateSliderPosition(e)
    }

    const handleEnd = () => {
      setIsDragging(false)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleEnd)
    window.addEventListener('touchmove', handleMove, { passive: false })
    window.addEventListener('touchend', handleEnd)
    
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging])

  // Before/After Slider Component
  const BeforeAfterSlider = ({ beforeImage, afterImage, position }) => {
    return (
      <div 
        className="before-after-slider"
        ref={sliderRef}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className="slider-container" ref={sliderContainerRef}>
          <img src={beforeImage} alt="Before" className="slider-image slider-before" />
          <div 
            className="slider-after-wrapper"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          >
            <img src={afterImage} alt="After" className="slider-image slider-after" />
          </div>
          <div 
            className="slider-handle"
            style={{ left: `${position}%` }}
          >
            <div className="slider-handle-line"></div>
            <div className="slider-handle-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 12L12 8L16 12M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="slider-labels">
          <span className="slider-label-before">Before</span>
          <span className="slider-label-after">After</span>
        </div>
      </div>
    )
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Expert pest control solutions tailored to your needs</p>
        </div>
        
        {/* Mobile Grid Layout */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
            </div>
          ))}
        </div>

        {/* Desktop Tabbed Layout */}
        <div className="services-tabbed">
          <div className="services-tabs">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {service.title}
              </button>
            ))}
          </div>
          <div className="services-content">
            <div className="service-content-info">
              <div className="service-content-header">
                <h3 className="service-content-title">{activeService.title}</h3>
                <p className="service-content-price">{activeService.price}</p>
              </div>
              <p className="service-content-description">{activeService.description}</p>
            </div>
            <div className="service-content-image">
              <BeforeAfterSlider 
                beforeImage={activeService.beforeImage}
                afterImage={activeService.afterImage}
                position={sliderPosition}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

