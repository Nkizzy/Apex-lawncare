import React from 'react'
import './Map.css'

const Map = () => {
  const address = "1100 Jefferson Rd., Ste. 7, Rochester, NY"

  return (
    <section id="map" className="map-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">Visit us at our beautiful location</p>
        </div>
        <div className="map-container">
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d747.9623517460956!2d-76.04440433452697!3d43.02867096791386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d98da363865e6d%3A0x5c77e63c9fa72c1d!2sFlower%20City%20Nails!5e1!3m2!1sen!2sus!4v1765937552035!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Flower City Nails Location"
            ></iframe>
          </div>
          <div className="map-info">
            <h3>Flower City Nails</h3>
            <p className="map-address">{address}</p>
            <div className="map-hours">
              <h4>Hours</h4>
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map

