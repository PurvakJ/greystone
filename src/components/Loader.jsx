// components/Loader.jsx
import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [animationState, setAnimationState] = useState('small');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animation sequence:
    // 1. Small size at center
    // 2. Jump and grow larger
    // 3. Jump again and grow to full size
    // 4. Stable at center then fade out
    
    const timer1 = setTimeout(() => {
      setAnimationState('jump1');
    }, 100);
    
    const timer2 = setTimeout(() => {
      setAnimationState('jump2');
    }, 400);
    
    const timer3 = setTimeout(() => {
      setAnimationState('stable');
    }, 700);
    
    const timer4 = setTimeout(() => {
      setIsVisible(false);
    }, 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-overlay">
      <div className={`loader-container ${animationState}`}>
        <div className="loader-logo">
          <span className="loader-letter">L</span>
          <span className="loader-letter">U</span>
          <span className="loader-letter">M</span>
          <span className="loader-letter">B</span>
          <span className="loader-letter">E</span>
          <span className="loader-letter">R</span>
          <span className="loader-letter">T</span>
        </div>
        <div className="loader-spinner"></div>
        <div className="loader-wood-texture"></div>
      </div>
    </div>
  );
};

export default Loader;
