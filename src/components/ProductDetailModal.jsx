// components/ProductDetailModal.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetailModal.css';

const ProductDetailModal = ({ product, onClose }) => {
  const navigate = useNavigate();

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Map product categories to catalog categories
  const getCatalogCategory = (productCategory) => {
    const categoryMap = {
      'Plywood': 'Veneer',
      'MR Grade': 'Veneer',
      'BWR Grade': 'Veneer',
      'Film Faced': 'Veneer',
      'Commercial': 'Veneer',
      'Premium': 'Veneer',
      'Marine': 'Veneer',
      'Flush Door': 'Veneer',
      'Block Board': 'Veneer',
      'Veneer': 'Veneer',
      'Acrylic': 'Acrylic',
      'PVC': 'Acrylic',
      'Laminate': 'Veneer',
      'MDF': 'Veneer',
      'HDF': 'Veneer',
      'Louvers': 'Louvers',
      'Fluted Louvers': 'Fluted Louvers'
    };
    return categoryMap[productCategory] || null;
  };

  // Check if category exists in catalog
  const hasCatalogCategory = (productCategory) => {
    const catalogCategory = getCatalogCategory(productCategory);
    return catalogCategory !== null;
  };

  // Handle catalog navigation
  const handleShowCatalog = () => {
    const catalogCategory = getCatalogCategory(product.category);
    if (catalogCategory) {
      // Close the modal
      onClose();
      // Navigate to catalog page with category filter
      navigate(`/catalog?category=${encodeURIComponent(catalogCategory)}`);
    }
  };

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-content">
          <div className="modal-image-section">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="modal-info-section">
            <span className="modal-category">{product.category}</span>
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-description">{product.description}</p>
            
            <div className="modal-specs">
              <div className="spec-item">
                <span className="spec-label">Thickness:</span>
                <span className="spec-value">{product.thickness}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Size:</span>
                <span className="spec-value">{product.size}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Price:</span>
                <span className="spec-value price">{product.price}</span>
              </div>
            </div>
            
            <div className="modal-features">
              <h4>Key Features</h4>
              <div className="features-list">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modal-actions">
              {hasCatalogCategory(product.category) && (
                <button className="modal-catalog-btn" onClick={handleShowCatalog}>
                  📚 View Similar Products in Catalog
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;