// utils/catalogMapper.js
export const mapProductToCatalog = (productCategory) => {
    const categoryMap = {
      'Plywood': 'Veneer', // Map plywood to veneer catalog
      'MR Grade': 'Veneer',
      'Boiling Water Proof': 'Veneer',
      'Commercial Ply': 'Veneer',
      'Decorative Ply': 'Veneer',
      'Flush Doors': 'Veneer',
      'Block Board': 'Veneer',
      // Add more mappings as needed
    };
  
    // If the product category directly matches a catalog category
    const catalogCategories = ['Louvers', 'Fluted Louvers', 'Acrylic', 'Veneer'];
    
    if (catalogCategories.includes(productCategory)) {
      return productCategory;
    }
    
    // Otherwise use the mapping or default to 'Veneer'
    return categoryMap[productCategory] || 'Veneer';
  };
  
  // Get the first image of a specific catalog category
  export const getFirstCatalogImageByCategory = (catalogImages, category) => {
    const firstImage = catalogImages.find(img => img.category === category);
    return firstImage || null;
  };