import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Apex Pest Solutions</h3>
            <p>Professional Pest Control Services</p>
            <p className="footer-tagline">Expert pest control solutions you can trust. Eliminating pests and protecting your home or business with safe, effective treatments year-round.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li><FaPhone /> (555) 123-4567</li>
              <li><FaEnvelope /> info@apexpestsolutions.com</li>
              <li>123 Main Street, Your City, State 12345</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <p className="social-placeholder-text">This is a sample website. Social media links would appear here.</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Apex Pest Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

