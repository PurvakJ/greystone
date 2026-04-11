// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'CATALOG', path: '/catalog' },
    { name: 'CONTACT', path: '/contact' }
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="header-top">
        <Link to="/" className="logo">
          <img 
            src="https://i.postimg.cc/tTYPNtK9/Gemini-Generated-Image-d8gvifd8gvifd8gv-removebg-preview.png" 
            alt="GreyStone Logo" 
            className={`logo-image ${isScrolled ? 'scrolled-logo' : 'transparent-logo'}`} 
          />
        </Link>
        <button className={`menu-toggle ${isScrolled ? 'scrolled-menu' : 'transparent-menu'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled-nav' : 'transparent-nav'}`}>
        {navLinks.map(link => (
          <Link 
            key={link.path} 
            to={link.path}
            className={`${location.pathname === link.path ? 'active' : ''} ${isScrolled ? 'scrolled-link' : 'transparent-link'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;