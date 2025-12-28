import React, { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  // Gallery images - replace these with your actual salon photos
  const galleryImages = [
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=800&fit=crop', 
      alt: 'Elegant nail art with floral design' 
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=800&fit=crop', 
      alt: 'Beautiful manicure with gemstone accents' 
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop', 
      alt: 'Relaxing spa pedicure treatment' 
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=800&fit=crop', 
      alt: 'Professional manicure service' 
    },
    { 
      id: 5, 
      src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&h=800&fit=crop', 
      alt: 'Luxury nail art design' 
    },
    { 
      id: 6, 
      src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=800&fit=crop', 
      alt: 'Elegant French manicure' 
    },
  ]

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">See our beautiful work and elegant space</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => {
            // Determine size class based on position in mosaic pattern
            const sizeClasses = ['large', 'small', 'medium', 'medium', 'large', 'small']
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

