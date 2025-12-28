import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './SocialMedia.css'

const SocialMedia = () => {

  return (
    <section id="social" className="social-media">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Follow Us</h2>
          <p className="section-subtitle">Stay connected and see our latest work</p>
        </div>
        <div className="social-grid">
          <div className="social-card facebook-card">
            <div className="social-header">
              <FaFacebook className="social-icon" />
              <h3>Facebook</h3>
            </div>
            <div className="social-embed">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61569788840248%26ref%3Dpl_edit_xav_ig_profile_page_web&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
                style={{ border: 'none', overflow: 'hidden', width: '100%', height: '500px' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Tips and Toes Salon Facebook Page"
              ></iframe>
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
                <h4>@tipsandtoes</h4>
                <p>Follow us on Instagram to see our latest nail art designs, spa treatments, and behind-the-scenes content!</p>
                <a 
                  href="https://www.instagram.com/tipsandtoes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="instagram-button"
                >
                  Visit Our Instagram
                </a>
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

