// pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';
import './home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [randomProducts, setRandomProducts] = useState([]);

  // Carousel images for plywood industry
  const carouselImages = [
    {
      url: "https://forestplywood.com/app/uploads/2025/03/AdobeStock_1305158050-scaled.jpeg",
      title: "Greystone Premium Plywood",
      subtitle: "Quality You Can Trust"
    },
    {
      url: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Sustainable Forestry",
      subtitle: "Eco-Friendly Materials"
    },
    {
      url: "https://wearepapilio.co.uk/wp-content/uploads/2021/03/6-3-e1627393512510.jpg",
      title: "Modern Manufacturing",
      subtitle: "Precision Engineered"
    },
    {
      url: "https://wearepapilio.co.uk/wp-content/uploads/2021/04/unique-bespoke-kitchens-banner.jpg",
      title: "Veneers",
      subtitle: "Exquisite Wood Finishes"
    }
  ];

  // Gallery items data - Updated with Greystone and Sanmaica
  const galleryItems = [
    {
      id: 1,
      image: "https://manvikdoorframes.com/wp-content/uploads/2021/01/Untitled-design.jpg",
      title: "GREYSTONE CHAUGATH",
      description: "5×2.5 inch & 6×2.5 inch | Height customizable | 25 year guarantee | Termite proof | Water proof | Rust free | High density"
    },
    {
      id: 2,
      image: "https://naturalveneers.s3.ap-south-1.amazonaws.com/asset/public/images/natural-wood-veneers/Veneered-Fluted-Panels.webp",
      title: "VENEER",
      description: "4mm thickness | Species: Buram Teak, Santos, Died, White Ash, Red Oak, Succapiera, Designer | Size: 8×4, 10×4"
    },
    {
      id: 3,
      image: "https://media.licdn.com/dms/image/v2/D5612AQFFqHdPvOXvfA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706860932387?e=2147483647&v=beta&t=R51uiqQi5Flz39Kn_HzF_nTxT8BMvnYMD1VF1zFHWJE",
      title: "GREYSTONE LAMINATES",
      description: "Thickness: 0.72mm, 0.8mm, 1mm, 1.25mm | Premium quality finishes"
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/71qqeqXbbCL.jpg",
      title: "GREYSTONE FLUSH DOOR",
      description: "Thickness: 30mm, 32mm | Water proof | Semi water proof | All sizes available"
    }
  ];

  // Updated services based on new product categories with Greystone & Sanmaica
  const servicesData = [
    { title: "GREYSTONE CHAUGATH", description: "Premium high density frames with 25 year guarantee" },
    { title: "VENEER", description: "Premium veneer - Buram Teak, Santos, White Ash, Red Oak" },
    { title: "GREYSTONE LAMINATES", description: "Various thickness options (0.72mm to 1.25mm)" },
    { title: "GREYSTONE FLUSH DOORS", description: "Water proof and semi water proof doors" }
  ];

  // Updated plywood features with Greystone branding
  const plywoodFeatures = [
    { icon: "🏭", title: "Greystone 303 Grade", description: "Semi water proof plywood - Commercial grade quality" },
    { icon: "💧", title: "Greystone 710 Grade", description: "Boiling water proof plywood for extreme conditions" },
    { icon: "📏", title: "Multiple Thickness", description: "19mm, 16mm, 12mm, 9mm, 6mm available" },
    { icon: "👑", title: "Greystone ULTRA PRIME", description: "Premium Diamond Club quality plywood" }
  ];

  // Updated sustainable features with brand names
  const sustainableData = [
    { title: "QUALITY CONTROL", description: "Greystone IS 303 & 710 certified plywood with strict quality standards" },
    { title: "EXPERT TEAM", description: "Professional craftsmanship for veneer and laminate finishing" },
    { title: "CUSTOM PROCESSING", description: "Custom height and size options for Greystone chaugath and flush doors" }
  ];

  // Updated handcrafted features with Greystone & Sanmaica
  const handcraftedFeatures = ["GREYSTONE PRECISE", "ENGINEERING", "25 YEAR GUARANTEE", "TERMITE & WATER PROOF"];

  // Function to get random products
  const getRandomProducts = () => {
    const products = productsData.products;
    const shuffled = [...products];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 3);
  };

  // Initialize random products on component mount
  useEffect(() => {
    setRandomProducts(getRandomProducts());
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="home">
      {/* Image Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-container">
          <div 
            className="carousel-slide"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-item">
                <div className="carousel-image-wrapper">
                  <img src={image.url} alt={image.title} className="carousel-image" loading={index === 0 ? "eager" : "lazy"} />
                  <div className="carousel-overlay">
                    <div className="carousel-content">
                      <h2>{image.title}</h2>
                      <p>{image.subtitle}</p>
                      <Link to="/products" className="btn-primary">View Products</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">❮</button>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">❯</button>
          
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section - Random on each reload */}
      <section className="featured-products">
        <div className="section-header">
          <h2>FEATURED PRODUCTS</h2>
          <p>Discover Greystone Plywood & Veneer - Premium quality collection including Chaugath, Laminates & Flush Doors</p>
        </div>
        <div className="products-grid">
          {randomProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description.substring(0, 80)}...</p>
                <div className="product-details">
                  <span className="product-thickness">📏 {product.thickness}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Background Image Section - Updated with Greystone */}
      <section className="sticky-background">
        <div className="sticky-container">
          <div className="sticky-content">
            <h2>GREYSTONE PLYWOOD INDUSTRY LEADERS</h2>
            <p>Setting Standards in Quality and Innovation Since 2020</p>
            <div className="industry-stats">
              <div className="industry-stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years of Excellence (Since 2020)</span>
              </div>
              <div className="industry-stat">
                <span className="stat-number">710</span>
                <span className="stat-label">Greystone Boiling Water Proof</span>
              </div>
              <div className="industry-stat">
                <span className="stat-number">303</span>
                <span className="stat-label">Greystone Semi Water Proof</span>
              </div>
            </div>
            <Link to="/about" className="btn-primary-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Original Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>GREYSTONE<br />PLYWOOD</h1>
          <p>OPEN YOUR MIND TO THE<br />POSSIBILITY OF VENEERS</p>
          <Link to="/products" className="btn-primary">READ MORE</Link>
          <div className="rating">
            <span className="stars">★★★★★</span>
            <span className="rating-value">4.95</span>
            <span className="rating-label">Google Rating</span>
          </div>
        </div>
      </section>

      {/* Image Gallery Section - Updated with Greystone & */}
      <section className="image-gallery-section">
        <div className="gallery-container">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="gallery-label">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="gallery-overlay-hover"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Updated with Greystone & */}
      <section className="services">
        <h2>OUR SERVICES</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plywood Industry Info Section - Updated with Greystone */}
      <section className="plywood-industry">
        <div className="industry-content">
          <h2>WHY CHOOSE GREYSTONE PLYWOOD?</h2>
          <div className="industry-features">
            {plywoodFeatures.map((feature, index) => (
              <div key={index} className="industry-feature">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Section - Updated with Greystone & */}
      <section className="dedicated">
        <div className="dedicated-content">
          <h2>GREYSTONE - DEDICATED TO CRAFTING QUALITY WOODEN FURNITURE</h2>
          <p>With over 6 years of experience since 2020, Greystone Plywood and Veneer provide comprehensive service including project planning, manufacturing, finishing, and warranty support so clients can focus on design</p>
          <div className="features-list">
            <div className="feature-item">01. GREYSTONE CHAUGATH - High Density & Rust Free Frames</div>
            <div className="feature-item">02. VENEER - Premium Species & Designer Options</div>
            <div className="feature-item">03. GREYSTONE LAMINATES - Multiple Thickness (0.72mm to 1.25mm)</div>
            <div className="feature-item">04. GREYSTONE FLUSH DOORS - Water Proof & Semi Water Proof</div>
          </div>
        </div>
        <div className="dedicated-image"></div>
      </section>

      {/* Sustainable Section - Updated */}
      <section className="sustainable">
        <h2>GREYSTONE QUALITY PLYWOOD PRODUCTS</h2>
        <p className="subtitle">Premium grade plywood for every application - 19mm, 16mm, 12mm, 9mm, 6mm thickness available</p>
        <div className="sustainable-grid">
          {sustainableData.map((item, index) => (
            <div key={index} className="sustainable-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Handcrafted Section - Updated with Greystone & */}
      <section className="handcrafted">
        <div className="handcrafted-content">
          <h2>GREYSTONE & - COLLECTION OF HANDCRAFTED WOODEN PIECES HIGHLIGHTING OUR MASTERY AND UNIQUE CRAFTSMANSHIP</h2>
          <div className="handcrafted-features">
            {handcraftedFeatures.map((feature, index) => (
              <span key={index}>{feature}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats">
          <div className="stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">YEARS OF EXCELLENCE (Since 2020)</span>
          </div>
          <div className="stat">
            <span className="stat-number">1.270+</span>
            <span className="stat-label">SATISFIED CLIENTS</span>
          </div>
          <div className="stat">
            <span className="stat-number">8.592+</span>
            <span className="stat-label">SUCCESSFUL DELIVERIES</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;