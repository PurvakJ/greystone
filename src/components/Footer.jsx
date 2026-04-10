// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GREYSTONE</h3>
          <p className="tagline">Premium Plywood, Chaugath, Veneer, Laminates & Flush Doors</p>
          <p className="description">
            Since 2020, we have been delivering IS 303 & IS 710 certified plywood products with 25 year guarantee. 
            Quality you can trust, craftsmanship you deserve.
          </p>
          <div className="social-links">
            <a href="https://wa.me/918837822231" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>OUR PRODUCTS</h4>
          <ul>
            <li><Link to="/products?category=plywood">Plywood (IS 303 & IS 710)</Link></li>
            <li><Link to="/products?category=chaugath">Chaugath Frames</Link></li>
            <li><Link to="/products?category=veneer">Veneer Sheets</Link></li>
            <li><Link to="/products?category=laminates">Laminates</Link></li>
            <li><Link to="/products?category=flushdoors">Flush Doors</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT INFO</h4>
          <div className="contact-info">
            <p>
              <FaPhone className="contact-icon" />
              <strong>Phone:</strong><br />
              <a href="tel:+918837822231">+91 88378 22231</a><br />
              <a href="tel:+919530822202">+91 95308 22231</a> (Call Only)
            </p>
            <p>
              <FaWhatsapp className="contact-icon" />
              <strong>WhatsApp:</strong><br />
              <a href="https://wa.me/918837822231" target="_blank" rel="noopener noreferrer">
                +91 88378 22231
              </a>
            </p>
            <p>
              <FaEnvelope className="contact-icon" />
              <strong>Email:</strong><br />
              <a href="mailto:Chandangoyal97@gmail.com">Chandangoyal97@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2020 GREYSTONE Plywood Industries. All Rights Reserved.</p>
          <p className="footer-credits">
            Premium Plywood, Chaugath, Veneer, Laminates & Flush Doors | IS 303 & IS 710 Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;