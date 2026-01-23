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
      title: 'Lawn Mowing & Maintenance',
      description: 'Regular mowing, edging, and trimming to keep your lawn looking pristine and healthy all season long.',
      price: 'Starting at $50',
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop'
    },
    {
      title: 'Snow Removal & Plowing',
      description: 'Reliable snow removal and plowing services to keep your driveways and walkways safe and clear.',
      price: 'Starting at $75',
      beforeImage: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=600&fit=crop'
    },
    {
      title: 'Landscaping & Design',
      description: 'Custom landscape design and installation to transform your outdoor space into a beautiful oasis.',
      price: 'Starting at $500',
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop'
    },
    {
      title: 'Fertilization & Weed Control',
      description: 'Professional fertilization and weed control treatments to promote healthy, lush grass growth.',
      price: 'Starting at $100',
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop'
    },
    {
      title: 'Seasonal Cleanup',
      description: 'Spring and fall cleanup services including leaf removal, debris clearing, and garden preparation.',
      price: 'Starting at $150',
      beforeImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop'
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
          <img src={afterImage} alt="After" className="slider-image slider-after" />
          <div 
            className="slider-before-wrapper"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img src={beforeImage} alt="Before" className="slider-image slider-before" />
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
          <p className="section-subtitle">Professional outdoor services tailored to your property</p>
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
            <div className="service-content-header">
              <h3 className="service-content-title">{activeService.title}</h3>
              <p className="service-content-price">{activeService.price}</p>
            </div>
            <p className="service-content-description">{activeService.description}</p>
            <BeforeAfterSlider 
              beforeImage={activeService.beforeImage}
              afterImage={activeService.afterImage}
              position={sliderPosition}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

