import React from 'react'
import './Map.css'

const Map = () => {
  const address = "24 S Main Street, Bainbridge, NY"
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&hl=en&z=16&output=embed`

  return (
    <section id="map" className="map-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">Find us or contact us for service</p>
        </div>
        <div className="map-container">
          <div className="map-wrapper">
            <iframe 
              src={mapEmbedUrl} 
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Apex Pest Solutions Location"
            ></iframe>
          </div>
          <div className="map-info">
            <h3>Apex Pest Solutions</h3>
            <div className="map-address-row">
              <p className="map-address">{address}</p>
              <a href="#contact" className="map-link map-contact-btn">
                Contact Us
              </a>
            </div>
            <div className="map-hours">
              <p className="map-note"><small>Emergency pest control available 24/7. Call for immediate assistance with urgent pest problems.</small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map

