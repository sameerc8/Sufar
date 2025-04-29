// Footer.js
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4>Explore The World</h4>
          <p>&copy; 2025 Your Travel Company. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h5>Follow Us</h5>
          <div className="social-links">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>  */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;