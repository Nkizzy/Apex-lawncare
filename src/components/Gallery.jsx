import React, { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  // Gallery images - pest control service photos
  const galleryImages = [
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=800&fit=crop', 
      alt: 'Professional pest control service' 
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=800&fit=crop', 
      alt: 'Pest inspection and treatment service' 
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=800&fit=crop', 
      alt: 'Expert pest control services' 
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop', 
      alt: 'Rodent control and removal' 
    },
    { 
      id: 5, 
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=800&fit=crop', 
      alt: 'Termite inspection and treatment' 
    },
    { 
      id: 6, 
      src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=800&fit=crop', 
      alt: 'Bed bug extermination service' 
    },
    { 
      id: 7, 
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=800&fit=crop', 
      alt: 'Ant and roach control' 
    },
    { 
      id: 8, 
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop', 
      alt: 'Wildlife removal service' 
    },
    { 
      id: 9, 
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=800&fit=crop', 
      alt: 'Professional pest control equipment' 
    },
  ]

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">See our professional pest control services in action</p>
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

