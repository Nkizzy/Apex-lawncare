import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <section id="social" className="social-media">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Follow Us</h2>
          <p className="section-subtitle">Stay connected and see our latest projects</p>
        </div>
        <div className="social-grid">
          <div className="social-card facebook-card">
            <div className="social-header">
              <FaFacebook className="social-icon" />
              <h3>Facebook</h3>
            </div>
            <div className="social-embed">
              <div className="social-placeholder">
                <p>This is a sample website. Social media embeds would appear here.</p>
                <p className="placeholder-note">
                  <small>To add your Facebook page embed, visit your Facebook page, click the three dots (⋯), select "Embed", and paste the code here.</small>
                </p>
              </div>
            </div>
          </div>
          <div className="social-card instagram-card">
            <div className="social-header">
              <FaInstagram className="social-icon" />
              <h3>Instagram</h3>
            </div>
            <div className="social-embed instagram-link">
              <div className="instagram-content">
                <FaInstagram className="instagram-large-icon" />
                <h4>@apexpestsolutions</h4>
                <p>This is a sample website. Instagram content would appear here.</p>
                <p className="instagram-note">
                  <small>Note: Instagram doesn't allow full profile embeds. To embed individual posts, visit a specific post on Instagram, click the three dots (⋯), and select "Embed" to get the code.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialMedia

