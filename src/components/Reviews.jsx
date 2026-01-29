import React, { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaFacebook } from 'react-icons/fa'
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
      name: 'Kelsey F',
      rating: 5,
      text: 'I bought a house to find out I had a mosquito, cluster fly and wasp problem! Apex came right out to help! Thank you so much!! I highly recommend',
      date: '2 weeks ago'
    },
    {
      name: 'Jamie B',
      rating: 5,
      text: 'Had Apex treat our property for ticks recently and was very pleased with the outcome and service that was provided. The entire process was seamless. No doubt I recommend their services! Thank you Apex!',
      date: '1 month ago'
    },
    {
      name: 'Jenn B',
      rating: 5,
      text: 'They showed up same day to assess the situation and came out over the weekend to follow through. Very comfortable dealing with them myself while my husband was out of town. Very friendly understanding and professional. Will absolutely have them on speed dial from now on. 💯 recommend.',
      date: '3 weeks ago'
    },
    {
      name: 'Matthew L',
      rating: 5,
      text: 'Apex was great! Quick response, quoting, and delivery of services. Will work with them again!',
      date: '1 week ago'
    },
    {
      name: 'Paula S',
      rating: 5,
      text: 'We have had a great experience with this company and I highly recommend him. The solutions he uses work wonderful.',
      date: '5 days ago'
    },
    {
      name: 'Philip P',
      rating: 5,
      text: 'Did a great job on my farm, had a really bad carpenter bee infestation. Did all my barns for a very fair price and included a treatment around my house & garage as well.',
      date: '4 days ago'
    },
    {
      name: 'Antonio F',
      rating: 5,
      text: 'I called Joe and he promptly responded to my call! He made our property a priority and did exactly what he said he was going to do! Prompt service highly recommended! A+++++++++',
      date: '6 days ago'
    },
    {
      name: 'Jennifer D',
      rating: 5,
      text: 'Apex Pest Solutions provides exceptional services at our home. Their customer service is top notch. Always there when we need them. They are very knowledgeable and go above and beyond for all of their customers. Thank you Apex',
      date: '1 week ago'
    }
  ]

  const totalReviews = reviews.length
  const visibleCount = isMobile ? 1 : 3
  const maxIndex = Math.max(0, totalReviews - visibleCount)

  const handleNext = () => {
    if (isTransitioning) return
    if (currentIndex >= maxIndex) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const handlePrevious = () => {
    if (isTransitioning) return
    if (currentIndex <= 0) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
    setTimeout(() => setIsTransitioning(false), 300)
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

  // Reset to start when mobile state changes
  useEffect(() => {
    setCurrentIndex(0)
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
            disabled={isTransitioning || currentIndex <= 0}
          >
            <FaChevronLeft />
          </button>
          <div className="reviews-carousel-viewport">
            <div 
              ref={carouselRef}
              className="reviews-carousel-container"
            >
              {reviews.map((review, index) => (
                <div key={`${index}-${review.name}`} className="review-card">
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-author">
                    <strong>{review.name}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={handleNext}
            aria-label="Next review"
            disabled={isTransitioning || currentIndex >= maxIndex}
          >
            <FaChevronRight />
          </button>
        </div>
        <p className="reviews-facebook-cta">
          To see more or write a review, check out our{' '}
          <a
            href="https://www.facebook.com/apexofpestservices"
            className="reviews-facebook-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apex Pest Solutions on Facebook"
          >
            <FaFacebook className="reviews-facebook-icon" /> Facebook
          </a>
          !
        </p>
      </div>
    </section>
  )
}

export default Reviews

