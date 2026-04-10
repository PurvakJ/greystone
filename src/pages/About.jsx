// pages/About.jsx - Updated "Our Journey" section with modern timeline matching the image
import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {

  // Updated Milestones data starting from 2020
  const milestones = [
    { 
      year: "2020", 
      title: "Company Founded", 
      description: "Started our journey with a vision to deliver premium quality plywood, chaugath, veneer, laminates, and flush doors"
    },
    { 
      year: "2021", 
      title: "First Manufacturing Unit", 
      description: "Established our first state-of-the-art manufacturing facility with advanced machinery"
    },
    { 
      year: "2022", 
      title: "ISO & Grade Certifications", 
      description: "Achieved IS 303 & IS 710 certifications for semi-waterproof and boiling waterproof plywood"
    },
    { 
      year: "2023", 
      title: "Product Line Expansion", 
      description: "Launched ULTRA PRIME series and Diamond Club premium plywood collection"
    },
    { 
      year: "2024", 
      title: "Green Initiative", 
      description: "Committed to 100% sustainable sourcing and eco-friendly manufacturing practices"
    },
    { 
      year: "2025", 
      title: "Nationwide Reach", 
      description: "Expanded distribution network across the country with 500+ satisfied clients"
    }
  ];

  return (
    <div className="about">
      {/* Hero Section - Matching homepage hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>ABOUT GREYSTONE</h1>
          <p>Premium Plywood, Chaugath, Veneer, Laminates & Flush Doors</p>
        </div>
      </section>

      {/* Our Story Section - Updated with 2020 start */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>OUR STORY</h2>
              <p>Since our founding in 2020, GREYSTONE has been at the forefront of the plywood and woodworking industry. We specialize in manufacturing premium quality plywood, chaugath frames, veneer, laminates, and flush doors that combine durability with elegant design.</p>
              <p>Our commitment to quality is reflected in our IS 303 and IS 710 certifications, ensuring our products meet the highest industry standards. With our ULTRA PRIME series and Diamond Club collection, we offer boiling water proof and semi-water proof solutions for every application.</p>
              <div className="story-signature">
                <p>- Founder, GREYSTONE Industries</p>
              </div>
            </div>
            <div className="story-image">
              <img src="https://5.imimg.com/data5/SELLER/Default/2024/3/404660368/GW/FR/KV/15364920/15-mm-designer-wooden-plywood-500x500.jpg" alt="Our Manufacturing Facility" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Updated with product focus */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mission-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide high-quality, durable plywood, chaugath, veneer, laminates, and flush doors that enhance living spaces while maintaining environmental responsibility.</p>
            </div>
            <div className="vision-card">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To become the leading manufacturer of certified plywood products, setting new standards in quality, durability, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced with product-specific values */}
      <section className="about-values">
        <div className="container">
          <h2>OUR CORE VALUES</h2>
          <p className="values-subtitle">The principles that guide everything we do</p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Quality First</h3>
              <p>IS 303 & IS 710 certified products with 25 year guarantee on chaugath frames.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3>Sustainability</h3>
              <p>We source our timber from responsibly managed forests for eco-friendly production.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💧</div>
              <h3>Water Proof Excellence</h3>
              <p>Boiling water proof and semi-water proof plywood for all weather conditions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Customer Focus</h3>
              <p>Your satisfaction with our premium products is our ultimate goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated with 2020 start */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Years of Excellence (Since 2020)</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Expert Team Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline Section - Updated with 2020-2025 timeline */}
      <section className="milestones-section">
        <div className="container">
          <h2>OUR JOURNEY</h2>
          <p className="milestones-subtitle">Key milestones since our founding in 2020</p>
          <div className="modern-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item-modern">
                <div className="timeline-content-modern">
                  <div className="timeline-decoration"></div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className="timeline-year-modern">{milestone.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview Section - NEW */}
      <section className="products-overview">
        <div className="container">
          <h2>OUR PREMIUM PRODUCTS</h2>
          <p className="products-subtitle">Quality you can trust</p>
          <div className="products-grid-about">
            <div className="product-category-card">
              <div className="product-category-icon">📦</div>
              <h3>CHAUGATH</h3>
              <p>5×2.5 inch & 6×2.5 inch | Height customizable | 25 year guarantee | Termite proof | Water proof | Rust free | High density</p>
            </div>
            <div className="product-category-card">
              <div className="product-category-icon">🍂</div>
              <h3>VENEER</h3>
              <p>4mm thickness | Buram Teak, Santos, Died, White Ash, Red Oak, Succapiera, Designer | Size: 8×4, 10×4</p>
            </div>
            <div className="product-category-card">
              <div className="product-category-icon">✨</div>
              <h3>LAMINATES</h3>
              <p>0.72mm | 0.8mm | 1mm | 1.25mm thickness options for every application</p>
            </div>
            <div className="product-category-card">
              <div className="product-category-icon">🚪</div>
              <h3>FLUSH DOORS</h3>
              <p>30mm & 32mm thickness | Water proof & semi water proof | All sizes available</p>
            </div>
            <div className="product-category-card">
              <div className="product-category-icon">🪵</div>
              <h3>PLYWOOD</h3>
              <p>19mm | 16mm | 12mm | 9mm | 6mm | 303 Grade (Semi WP) | 710 Grade (Boiling WP) | ULTRA PRIME | Diamond Club</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>READY TO START YOUR PROJECT?</h2>
            <p>Let's bring your vision to life with our expert craftsmanship and premium quality products</p>
            <Link to="/contact" className="btn-primary">CONTACT US TODAY</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
