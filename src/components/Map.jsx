import React from 'react'
import './Map.css'

const Map = () => {
  const address = "123 Main Street, Your City, State 12345"

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.9623517460956!2d-76.04440433452697!3d43.02867096791386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d98da363865e6d%3A0x5c77e63c9fa72c1d!2sSample%20Business!5e1!3m2!1sen!2sus!4v1765937552035!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Apex Pest Solutions Location"
            ></iframe>
          </div>
          <div className="map-info">
            <h3>Apex Pest Solutions</h3>
            <p className="map-address">{address}</p>
            <div className="map-hours">
              <h4>Service Hours</h4>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Emergency services only</p>
              <p className="map-note"><small>Emergency pest control available 24/7. Call for immediate assistance with urgent pest problems.</small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map

