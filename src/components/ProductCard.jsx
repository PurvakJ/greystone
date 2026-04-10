// components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <span className="product-thickness">📏 {product.thickness}</span>
          <span className="product-size">📐 {product.size}</span>
        </div>
        <div className="product-features">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="feature-tag">✓ {feature}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
