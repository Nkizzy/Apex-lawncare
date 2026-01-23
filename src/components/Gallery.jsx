import React, { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  // Gallery images - replace these with your actual lawncare photos
  const galleryImages = [
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=800&fit=crop', 
      alt: 'Professional lawn mowing service' 
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop', 
      alt: 'Snow removal and plowing service' 
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=800&fit=crop', 
      alt: 'Well-maintained green lawn' 
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop', 
      alt: 'Driveway snow plowing' 
    },
    { 
      id: 5, 
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=800&fit=crop', 
      alt: 'Landscaping and lawn care work' 
    },
    { 
      id: 6, 
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop', 
      alt: 'Winter snow removal service' 
    },
    { 
      id: 7, 
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=800&fit=crop', 
      alt: 'Professional lawn maintenance' 
    },
    { 
      id: 8, 
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop', 
      alt: 'Commercial snow removal' 
    },
    { 
      id: 9, 
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=800&fit=crop', 
      alt: 'Beautiful landscaped yard' 
    },
  ]

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">See our quality work and beautiful results</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => {
            // Determine size class based on position in mosaic pattern
            const sizeClasses = ['large', 'small', 'medium', 'medium', 'large', 'small', 'medium', 'small', 'large']
            const sizeClass = sizeClasses[index] || 'medium'
            
            return (
              <div
                key={image.id}
                className={`gallery-item gallery-item-${sizeClass}`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            )
          })}
        </div>
      </div>
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery

