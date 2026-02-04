import React from 'react'
import { FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa'
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
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li><FaPhone /> <a href="tel:+16076249569" className="phone-link">(607) 624-9569</a></li>
              <li><FaEnvelope /> apexpest607@gmail.com</li>
              <li>123 Main Street, Your City, State 12345</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/apexofpestservices"
                className="facebook-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Apex Pest Solutions on Facebook"
              >
                <FaFacebook />
              </a>
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

