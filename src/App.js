// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import './styles/App.css';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Loader component with bounce animation
function Loader({ onLoadingComplete }) {
  useEffect(() => {
    // Animation sequence: small -> large -> small -> large -> stable
    const timer1 = setTimeout(() => {
      const loader = document.querySelector('.loader-image');
      if (loader) {
        loader.classList.add('scale-large');
        loader.classList.remove('scale-small');
      }
    }, 500);

    const timer2 = setTimeout(() => {
      const loader = document.querySelector('.loader-image');
      if (loader) {
        loader.classList.add('scale-small');
        loader.classList.remove('scale-large');
      }
    }, 1200);

    const timer3 = setTimeout(() => {
      const loader = document.querySelector('.loader-image');
      if (loader) {
        loader.classList.add('scale-large');
        loader.classList.remove('scale-small');
      }
    }, 1900);

    const timer4 = setTimeout(() => {
      const loader = document.querySelector('.loader-image');
      if (loader) {
        loader.classList.add('scale-stable');
        loader.classList.remove('scale-large', 'scale-small');
      }
    }, 2600);

    const timer5 = setTimeout(() => {
      onLoadingComplete();
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onLoadingComplete]);

  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <img 
          src="https://i.postimg.cc/tTYPNtK9/Gemini-Generated-Image-d8gvifd8gvifd8gv-removebg-preview.png" 
          alt="Loading" 
          className="loader-image scale-small"
        />
        <p className="loader-text">Crafting Excellence...</p>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      // Loader will handle its own completion
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;