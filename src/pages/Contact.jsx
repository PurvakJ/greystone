import React from 'react';
import './contact.css';
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaEnvelope} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  // Business information - Updated for Plywood/Wood Products Business
  const businessInfo = {
    name: 'GREYSTONE Plywood Industries',
    tagline: 'Premium Plywood, Chaugath, Veneer, Laminates & Flush Doors',
    locations: [
      {
        city: 'Bathinda (Head Office)',
        address: 'Behind Kikar Bazar, Gali Singh Sabha Gurudwara, Bathinda, Punjab - 151005',
        phone: '+91 88378 22231',
        phone2: '+91 95308 22202',
        phone2Whatsapp: false,
        email: 'info@GREYSTONEplywood.com',
        map: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6895.920790404763!2d74.92948289357908!3d30.20967780000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBehind%20Kikar%20Bazar%2C%20Gali%20Singh%20Sabha%20Gurudwara%2C%20Bathinda%2C%20Punjab%20-%20151005!5e0!3m2!1sen!2sin!4v1774023628386!5m2!1sen!2sin',
        hours: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: Closed'
      }
    ],
    socialMedia: [
      {
        platform: 'WhatsApp',
        link: 'https://wa.me/918837822231?text=Hello%20GREYSTONE%20Plywood%2C%20I%20would%20like%20to%20know%20more%20about%20your%20plywood%20and%20hardware%20products.',
        icon: FaWhatsapp,
        username: '+91 88378 22231',
        color: '#25D366'
      },
      {
        platform: 'Instagram',
        link: 'https://www.instagram.com/GREYSTONEplywood/',
        icon: FaInstagram,
        username: '@GREYSTONEplywood',
        color: '#E4405F'
      },
      {
        platform: 'Facebook',
        link: 'https://www.facebook.com/GREYSTONEplywood/',
        icon: FaFacebook,
        username: 'GREYSTONE Plywood',
        color: '#1877F2'
      }
    ],
    quickContact: {
      whatsapp: 'https://wa.me/918837822231?text=Hello%20GREYSTONE%20Plywood%2C%20I%20need%20assistance%20with%20plywood%20products.',
      email: 'info@GREYSTONEplywood.com',
      phone: '+91 88378 22231',
      phone2: '+91 95308 22202'
    }
  };

  // Product categories for quick contact
  const productCategories = [
    { name: 'Plywood', icon: '🪵', description: 'IS 303 & IS 710 certified, ULTRA PRIME, Diamond Club' },
    { name: 'Chaugath', icon: '📦', description: '5×2.5" & 6×2.5", 25 year guarantee' },
    { name: 'Veneer', icon: '🍂', description: 'Burma Teak, Santos, White Ash, Red Oak' },
    { name: 'Laminates', icon: '✨', description: '0.72mm to 1.25mm thickness' },
    { name: 'Flush Doors', icon: '🚪', description: '30mm & 32mm, water proof' }
  ];

  // Function to handle WhatsApp click
  const handleWhatsAppClick = (phone, message = '', isWhatsappEnabled = true) => {
    if (!isWhatsappEnabled) {
      alert('This number is not available on WhatsApp. Please call us directly at ' + phone);
      return;
    }
    const defaultMessage = 'Hello GREYSTONE Plywood, I would like to know more about your plywood and hardware products.';
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message || defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Function to handle phone call
  const handlePhoneCall = (phone) => {
    window.location.href = `tel:${phone.replace(/[^0-9]/g, '')}`;
  };

  // Function to handle email
  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="container hero-content">
          <span className="hero-badge" style={{ color: '#ffffff' }}>Get in Touch</span>
          <h1 className="hero-title">
            <span className="hero-title-line">Connect with</span>
            <span className="hero-title-main">
              <span className="hero-letter">G</span>
              <span className="hero-letter">R</span>
              <span className="hero-letter">E</span>
              <span className="hero-letter">Y</span>
              <span className="hero-letter">S</span>
              <span className="hero-letter">T</span>
              <span className="hero-letter">O</span>
              <span className="hero-letter">N</span>
              <span className="hero-letter">E</span>
            </span>
          </h1>
          <p className="hero-description">
            We're just a message away! Reach out to us on WhatsApp for instant support on plywood, chaugath, veneer, laminates, and flush doors. 
            Connect with us on social media for updates and inspiration.
          </p>
        </div>
      </section>

      {/* Quick WhatsApp Contact */}
      <section className="section whatsapp-quick-section">
        <div className="container">
          <div className="whatsapp-quick-card">
            <div className="whatsapp-icon-large">
              <FaWhatsapp size={48} />
            </div>
            <h2>Chat with Us on WhatsApp</h2>
            <p>Get instant responses from our plywood and hardware experts</p>
            <button 
              onClick={() => handleWhatsAppClick(businessInfo.quickContact.phone)}
              className="btn btn-whatsapp"
            >
              <span className="btn-icon"><FaWhatsapp /></span>
              Start WhatsApp Chat
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Categories Quick Contact - NEW SECTION */}
      <section className="section product-contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Quick Inquiry</span>
            <h2 className="section-title">Inquire About <span className="text-highlight">Our Products</span></h2>
            <p className="section-description">
              Click on any product category to get instant information on WhatsApp
            </p>
          </div>
          <div className="product-contact-grid">
            {productCategories.map((product, index) => (
              <div 
                key={index} 
                className="product-contact-card"
                onClick={() => handleWhatsAppClick(
                  businessInfo.quickContact.phone, 
                  `Hello GREYSTONE Plywood, I'm interested in your ${product.name} products. Please share more details about pricing and availability.`
                )}
              >
                <div className="product-contact-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="inquiry-link">Inquire Now →</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Business Hours Banner */}
      <section className="section hours-banner">
        <div className="container">
          <div className="hours-grid">
            <div className="hours-item">
              <span className="hours-icon"><MdEmail /></span>
              <div>
                <h4>Email ID</h4>
                <p>Chandangoyal97@gmail.com</p>
              </div>
            </div>
            <div className="hours-item highlight">
              <span className="hours-icon"><FaWhatsapp /></span>
              <div>
                <h4>WhatsApp Support</h4>
                <p>24/7 Quick Response</p>
                <button 
                  onClick={() => handleWhatsAppClick(businessInfo.quickContact.phone)}
                  className="btn-link"
                >
                  Chat Now →
                </button>
              </div>
            </div>
            <div className="hours-item">
              <span className="hours-icon"><FaPhone /></span>
              <div>
                <h4>Call Support</h4>
                <p>+91 88378 22231</p>
                <p>+91 95308 22231</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Footer */}
      <section className="section contact-footer">
        <div className="container">
          <div className="contact-footer-grid">
            <div className="contact-footer-item">
              <FaEnvelope className="footer-icon" />
              <h4>Email Us</h4>
              <p>Chandangoyal97@gmail.com</p>
              <button onClick={() => handleEmail(businessInfo.quickContact.email)} className="btn-link">
                Send Email →
              </button>
            </div>
            <div className="contact-footer-item">
              <FaPhone className="footer-icon" />
              <h4>Call Us</h4>
              <p>{businessInfo.quickContact.phone}</p>
              <button onClick={() => handlePhoneCall(businessInfo.quickContact.phone)} className="btn-link">
                Call Now →
              </button>
            </div>
            <div className="contact-footer-item">
              <FaWhatsapp className="footer-icon" />
              <h4>WhatsApp</h4>
              <p>Quick response within minutes</p>
              <button onClick={() => handleWhatsAppClick(businessInfo.quickContact.phone)} className="btn-link">
                Start Chat →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
