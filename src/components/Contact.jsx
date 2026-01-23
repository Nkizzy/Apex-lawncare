import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  // Set to true to enable the contact form
  const ENABLE_FORM = false
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Get in touch to book your appointment</p>
        </div>
        <div className={`contact-content ${!ENABLE_FORM ? 'form-disabled' : ''}`}>
          <div className="contact-info">
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <p>info@apexpestsolutions.com</p>
            </div>
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Address</h3>
              <p>123 Main Street<br />Your City, State 12345</p>
            </div>
            <div className="info-card">
              <FaClock className="info-icon" />
              <h3>Hours</h3>
              <p>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM<br />Sun: Emergency Only</p>
            </div>
          </div>
          {ENABLE_FORM && (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="ant-roach">Ant & Roach Control</option>
                  <option value="rodent">Rodent Removal</option>
                  <option value="termite">Termite Treatment</option>
                  <option value="bedbug">Bed Bug Extermination</option>
                  <option value="wildlife">Wildlife Removal</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact

