'use client';

import { useState, useEffect, useMemo } from 'react';
import { Heart, ShoppingCart, Filter } from 'lucide-react';
import { extendedProductData } from './ProductData.js'; // Updated import

const ProductPictures = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isHovering, setIsHovering] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Available categories
  const categories = ['Tops', 'Pants', 'Men', 'Women', 'Dresses',];

  const productsPerPage = 12;

  // Filter products based on selected categories
  const filteredProducts = useMemo(() => {
    return selectedCategories.length > 0
      ? extendedProductData.filter(product => selectedCategories.includes(product.category))
      : extendedProductData;
  }, [selectedCategories]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const isMobile = windowWidth < 768;

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl leading-tight text-center font-normal mb-11 sm:mb-16">Products</h1>
        
        {/* Mobile Filter Toggle */}
        {isMobile && (
          <button 
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="bg-gray-100 p-2 rounded-full"
          >
            <Filter className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex">
        {/* Desktop Filters */}
        {!isMobile && (
          <div className="w-64 pr-8">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            {categories.map(category => (
              <div key={category} className="flex items-center mb-2">
                <input
                 type="checkbox"
                 id={category}
                 checked={selectedCategories.includes(category)}
                 onChange={() => toggleCategory(category)}
                 className="mr-2 accent-[#58005F] checked:bg-[#58005F]"
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Filters */}
        {isMobile && isMobileFilterOpen && (
          <div className="fixed inset-0 bg-white z-50 p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Filter Categories</h2>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-gray-600"
              >
                Close
              </button>
            </div>
            {categories.map(category => (
              <div key={category} className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id={`mobile-${category}`}
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="mr-2"
                />
                <label htmlFor={`mobile-${category}`}>{category}</label>
              </div>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                className={`${isMobile ? 'w-full' : 'w-full'}`}
                onMouseEnter={() => !isMobile && setIsHovering(index)}
                onMouseLeave={() => !isMobile && setIsHovering(null)}
              >
                <div className="group relative overflow-hidden rounded-lg border border-gray-100">
                  <div className="relative overflow-hidden">
                    <div className="overflow-hidden rounded-t-lg">
                      <img
                        src={product.mainImage}
                        alt={product.name}
                        className={`w-full aspect-[3/4] object-cover transition-transform duration-500 ease-in-out 
                          ${!isMobile && isHovering === index 
                          ? 'scale-110' 
                          : 'scale-100'}`}
                      />
                    </div>
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <button className="bg-white/80 p-1.5 rounded-full hover:bg-white hover:shadow-md transition">
                        <Heart className="text-[#58005F] w-4 h-4" />
                      </button>
                      <button className="bg-white/80 p-1.5 rounded-full hover:bg-white hover:shadow-md transition">
                        <ShoppingCart className="text-[#58005F] w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-2 sm:p-3 bg-white border-x border-b border-gray-100 rounded-b-lg">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-sm sm:text-base text-[#58005F]">
                      ₦{product.price.toLocaleString()}
                    </span>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12 mb-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`
                  w-10 h-10 rounded-full text-sm font-medium
                  transition-all duration-200 ease-in-out
                  ${currentPage === pageNum
                    ? 'bg-[#f0ccf2] text-black'
                    : 'text-gray-500 hover:text-black hover:bg-[#fbe7fc]'
                  }
                `}
              >
                {pageNum}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPictures;
