// pages/Products.jsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/productsData';
import './product.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState('');
  
  const products = productsData.products;
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  // Filter by search term
  let filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });
  
  // Filter by category
  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }
  
  // Filter by price range
  if (priceRange !== 'all') {
    filteredProducts = filteredProducts.filter(product => {
      const price = parseInt(product.price.replace(/[^0-9]/g, ''));
      if (priceRange === 'under100') return price < 100;
      if (priceRange === '100to200') return price >= 100 && price <= 200;
      if (priceRange === '200to300') return price >= 200 && price <= 300;
      if (priceRange === 'above300') return price > 300;
      return true;
    });
  }
  
  // Sort products
  if (sortBy === 'priceLow') {
    filteredProducts.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
      return priceA - priceB;
    });
  } else if (sortBy === 'priceHigh') {
    filteredProducts.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
      return priceB - priceA;
    });
  } else if (sortBy === 'nameAsc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'nameDesc') {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-content">
          <h1>OUR PRODUCTS</h1>
          <p>Premium Quality Plywood for Every Need</p>

        </div>
      </section>

      {/* Products Content */}
      <section className="products-content">
        <div className="container">
          {/* Search Bar */}
          <div className="search-section">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search products by name, category or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
              {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm('')}>✕</button>
              )}
            </div>
          </div>

          {/* Products Header */}
          <div className="products-header">
            <div className="results-count">
              Showing {filteredProducts.length} of {products.length} products
            </div>
            <div className="controls-section">
              {/* View Toggle */}
              <div className="view-toggle">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  📱 Grid
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  📋 List
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="sort-section">
                <label>Sort by:</label>
                <select 
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="nameAsc">Name: A to Z</option>
                  <option value="nameDesc">Name: Z to A</option>
                </select>
              </div>

              <button 
                className="filter-toggle-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? 'Hide Filters ▲' : 'Show Filters ▼'}
              </button>
            </div>
          </div>

          {/* Filters Section */}
          <div className={`filters-section ${showFilters ? 'show' : ''}`}>
            <div className="filters-grid">
              {/* Category Filter Dropdown */}
              <div className="filter-group">
                <h4>Category</h4>
                <select 
                  className="category-select-dropdown"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="filter-group">
                <h4>Price Range</h4>
                <div className="price-options">
                  <label className="price-option">
                    <input 
                      type="radio" 
                      name="price" 
                      value="all" 
                      checked={priceRange === 'all'}
                      onChange={() => setPriceRange('all')}
                    />
                    <span>All Prices</span>
                  </label>
                  <label className="price-option">
                    <input 
                      type="radio" 
                      name="price" 
                      value="under100" 
                      checked={priceRange === 'under100'}
                      onChange={() => setPriceRange('under100')}
                    />
                    <span>Under ₹100/sq.ft</span>
                  </label>
                  <label className="price-option">
                    <input 
                      type="radio" 
                      name="price" 
                      value="100to200" 
                      checked={priceRange === '100to200'}
                      onChange={() => setPriceRange('100to200')}
                    />
                    <span>₹100 - ₹200/sq.ft</span>
                  </label>
                  <label className="price-option">
                    <input 
                      type="radio" 
                      name="price" 
                      value="200to300" 
                      checked={priceRange === '200to300'}
                      onChange={() => setPriceRange('200to300')}
                    />
                    <span>₹200 - ₹300/sq.ft</span>
                  </label>
                  <label className="price-option">
                    <input 
                      type="radio" 
                      name="price" 
                      value="above300" 
                      checked={priceRange === 'above300'}
                      onChange={() => setPriceRange('above300')}
                    />
                    <span>Above ₹300/sq.ft</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'All' || priceRange !== 'all' || searchTerm) && (
              <div className="active-filters">
                <span className="active-filters-label">Active Filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="filter-tag">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')}>✕</button>
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="filter-tag">
                    Price: {priceRange === 'under100' ? 'Under ₹100' : 
                           priceRange === '100to200' ? '₹100 - ₹200' :
                           priceRange === '200to300' ? '₹200 - ₹300' : 'Above ₹300'}
                    <button onClick={() => setPriceRange('all')}>✕</button>
                  </span>
                )}
                {searchTerm && (
                  <span className="filter-tag">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm('')}>✕</button>
                  </span>
                )}
                <button 
                  className="clear-all-filters"
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange('all');
                    setSearchTerm('');
                    setSortBy('default');
                  }}
                >
                  Clear All
                </button>
              </div>
            )}
          </div>

          {/* Products Display - Grid View */}
          {viewMode === 'grid' && (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Products Display - List View */}
          {viewMode === 'list' && (
            <div className="products-list">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-list-item">
                  <div className="list-item-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="list-item-content">
                    <span className="list-item-category">{product.category}</span>
                    <h3 className="list-item-title">{product.name}</h3>
                    <p className="list-item-description">{product.description}</p>
                    <div className="list-item-features">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="list-feature-tag">✓ {feature}</span>
                      ))}
                    </div>
                    <div className="list-item-details">
                      <span className="list-item-price">{product.price}</span>
                      <span className="list-item-thickness">📏 {product.thickness}</span>
                      <span className="list-item-size">📐 {product.size}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <div className="no-products-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filters</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setPriceRange('all');
                  setSearchTerm('');
                  setSortBy('default');
                }} 
                className="reset-filters-btn"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;

