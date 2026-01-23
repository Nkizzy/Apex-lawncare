import React, { useState, useEffect, useRef } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Reviews.css'

const Reviews = () => {
  const initialIsMobile = window.innerWidth < 768
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(initialIsMobile)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef(null)
  const cardWidthRef = useRef(0)
  const gapRef = useRef(0)

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768
      setIsMobile(newIsMobile)
      // Recalculate card width and gap on resize
      calculateCardDimensions()
    }

    window.addEventListener('resize', handleResize)
    calculateCardDimensions()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const calculateCardDimensions = () => {
    if (!carouselRef.current) return
    
    const container = carouselRef.current
    const cards = container.querySelectorAll('.review-card')
    if (cards.length === 0) return

    const firstCard = cards[0]
    const secondCard = cards[1]
    
    if (firstCard) {
      cardWidthRef.current = firstCard.offsetWidth
      if (secondCard) {
        gapRef.current = secondCard.offsetLeft - firstCard.offsetLeft - firstCard.offsetWidth
      }
    }
  }

  const reviews = [
    {
      name: 'Michael Thompson',
      rating: 5,
      text: 'Sample Business has been taking care of my lawn for two seasons now. They\'re reliable, professional, and my yard has never looked better. Highly recommend!',
      date: '2 weeks ago'
    },
    {
      name: 'Jennifer Martinez',
      rating: 5,
      text: 'Best lawncare service in the area! They showed up right after the snowstorm and cleared my driveway perfectly. Always on time and thorough.',
      date: '1 month ago'
    },
    {
      name: 'David Wilson',
      rating: 5,
      text: 'Excellent landscaping work! They transformed my backyard into a beautiful space. The team is knowledgeable and the results exceeded my expectations.',
      date: '3 weeks ago'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'The fertilization program they set up has made such a difference. My grass is thick, green, and healthy. Worth every penny!',
      date: '1 week ago'
    },
    {
      name: 'Robert Chen',
      rating: 5,
      text: 'I\'ve been using Sample Business for both lawn care and snow removal for over a year. Consistent quality, fair pricing, and they always communicate well.',
      date: '5 days ago'
    },
    {
      name: 'Amanda Davis',
      rating: 5,
      text: 'Perfect service! They handle everything from mowing to seasonal cleanup. My property always looks pristine. The attention to detail is unmatched.',
      date: '3 days ago'
    },
    {
      name: 'James Anderson',
      rating: 5,
      text: 'Outstanding snow removal service! They cleared my driveway and walkways quickly after the big storm. Professional, efficient, and reasonably priced.',
      date: '1 day ago'
    },
    {
      name: 'Lisa Brown',
      rating: 5,
      text: 'I\'ve tried several lawncare companies, but Sample Business is by far the best. They\'re reliable, professional, and my lawn has never looked better. Highly recommend!',
      date: '4 days ago'
    },
    {
      name: 'Mark Taylor',
      rating: 5,
      text: 'Exceptional quality and service! The team is friendly, professional, and truly cares about giving you the best results. My yard looks absolutely amazing!',
      date: '6 days ago'
    }
  ]

  const totalReviews = reviews.length
  const visibleCount = isMobile ? 1 : 3

  // Create extended array with duplicates for seamless looping
  const extendedReviews = [
    ...reviews.slice(-visibleCount), // Add last few at the beginning
    ...reviews,
    ...reviews.slice(0, visibleCount) // Add first few at the end
  ]

  const extendedTotal = extendedReviews.length
  const offset = visibleCount // Offset to account for prepended items

  const handleNext = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1
      
      // If we've reached the end of the original array (accounting for offset)
      if (nextIndex >= totalReviews + offset) {
        // After transition completes, reset to beginning without animation
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none'
            setCurrentIndex(offset)
            // Force reflow
            carouselRef.current.offsetHeight
            // Restore transition on next frame
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                if (carouselRef.current) {
                  carouselRef.current.style.transition = ''
                }
                setIsTransitioning(false)
              })
            })
          }
        }, 300)
        return nextIndex
      }
      
      setTimeout(() => setIsTransitioning(false), 300)
      return nextIndex
    })
  }

  const handlePrevious = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1
      
      // If we've reached the beginning of the original array (accounting for offset)
      if (prevIndex < offset) {
        // After transition completes, reset to end without animation
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none'
            setCurrentIndex(totalReviews + offset - 1)
            // Force reflow
            carouselRef.current.offsetHeight
            // Restore transition on next frame
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                if (carouselRef.current) {
                  carouselRef.current.style.transition = ''
                }
                setIsTransitioning(false)
              })
            })
          }
        }, 300)
        return prevIndex
      }
      
      setTimeout(() => setIsTransitioning(false), 300)
      return prevIndex
    })
  }

  // Update transform position
  useEffect(() => {
    if (!carouselRef.current) return

    const container = carouselRef.current
    
    // Wait for layout to update before calculating
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        calculateCardDimensions()

        const cardWidth = cardWidthRef.current
        const gap = gapRef.current
        
        if (cardWidth === 0 || !carouselRef.current) return

        const translateX = -(currentIndex * (cardWidth + gap))
        carouselRef.current.style.transform = `translateX(${translateX}px)`
      })
    })
  }, [currentIndex, isMobile])

  // Reset to offset position on mount and when mobile state changes
  useEffect(() => {
    const currentVisibleCount = isMobile ? 1 : 3
    const currentOffset = currentVisibleCount
    setCurrentIndex(currentOffset)
    setIsTransitioning(false)
  }, [isMobile])

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real reviews from our satisfied customers</p>
        </div>
        <div className="reviews-carousel-wrapper">
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={handlePrevious}
            aria-label="Previous review"
            disabled={isTransitioning}
          >
            <FaChevronLeft />
          </button>
          <div className="reviews-carousel-viewport">
            <div 
              ref={carouselRef}
              className="reviews-carousel-container"
            >
              {extendedReviews.map((review, index) => (
                <div key={`${index}-${review.name}`} className="review-card">
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, j) => (
                      <FaStar key={j} className="star" />
                    ))}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-author">
                    <strong>{review.name}</strong>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={handleNext}
            aria-label="Next review"
            disabled={isTransitioning}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Reviews

