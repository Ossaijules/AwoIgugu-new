'use client';

import { useState, useRef, useEffect } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('Men');
  const [isHovering, setIsHovering] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Crop Top Purple',
      price: 59.00,
      image: '/images/Sample11.png',
      category: 'Men'
    },
    {
      id: 2,
      name: 'Crop Top White',
      price: 49.00,
      image: '/images/Sample13.png',
      category: 'Men'
    },
    {
      id: 3,
      name: 'Crop Top Black',
      price: 55.00,
      image: '/images/Sample15.png',
      category: 'Men'
    },
    {
      id: 4,
      name: 'Crop Top Yellow',
      price: 62.00,
      image: '/images/Sample17.png',
      category: 'Men'
    },
    {
      id: 5,
      name: 'Summer Dress Purple',
      price: 69.00,
      image: '/images/Sample2.png',
      category: 'Women'
    },
    {
      id: 6,
      name: 'Summer Dress White',
      price: 65.00,
      image: '/images/Sample4.png',
      category: 'Women'
    },
    {
      id: 7,
      name: 'Summer Dress Blue',
      price: 72.00,
      image: '/images/Sample6.png',
      category: 'Women'
    },
    {
      id: 8,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample8.png',
      category: 'Women'
    },
    {
      id: 9,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample26.png',
      category: 'Top'
    },
    {
      id: 10,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample28.png',
      category: 'Top'
    },
    {
      id: 11,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample32.png',
      category: 'Top'
    },
    {
      id: 12,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample34.png',
      category: 'Top'
    },
    {
      id: 13,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample35.png',
      category: 'Pants'
    },
    {
      id: 14,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample31.png',
      category: 'Pants'
    },
    {
      id: 15,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample24.png',
      category: 'Pants'
    },
    {
      id: 16,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample21.png',
      category: 'Pants'
    },
    {
      id: 17,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample1.png',
      category: 'Dresses'
    },
    {
      id: 18,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample3.png',
      category: 'Dresses'
    },
    {
      id: 19,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample5.png',
      category: 'Dresses'
    },
    {
      id: 20,
      name: 'Summer Dress Green',
      price: 67.00,
      image: '/images/Sample7.png',
      category: 'Dresses'
    },
  ];

  const filteredProducts = products.filter(product => product.category === activeCategory);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPercentage = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
    setScrollProgress(scrollPercentage);
  };

  return (
    <section className="px-4 sm:px-10 lg:px-16 py-16 bg-gradient-to-b from-[#faf8fb] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-3">Curated Drop</p>
          <h2 className="text-4xl sm:text-5xl leading-[0.95] text-black">
            Featured Products
          </h2>
        </div>
        <div className="flex justify-center mb-8 sm:mb-10 space-x-2 sm:space-x-4 flex-wrap gap-2">
          {['Men', 'Women', 'Top', 'Pants', 'Dresses'].map((category) => (
            <button
              key={category}
              className={`px-5 py-2.5 mb-2 rounded-full text-xs sm:text-sm tracking-wide uppercase transition-colors 
                ${activeCategory === category 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-black hover:text-black'}
              `}
              onClick={() => setActiveCategory(category)}
            >
            {category}
            </button>
          ))}
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar scroll-smooth -mx-2 sm:mx-0"
          onScroll={handleScroll}
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`${isMobile ? 'w-[68%]' : 'w-1/4'} flex-shrink-0 px-2 mb-4`}
              onMouseEnter={() => !isMobile && setIsHovering(index)}
              onMouseLeave={() => !isMobile && setIsHovering(null)}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_14px_35px_rgba(17,17,17,0.06)]">
                <div className="relative overflow-hidden">
                  <div className="overflow-hidden rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full aspect-[3/4] object-cover transition-transform duration-500 ease-in-out 
                        ${!isMobile && isHovering === index 
                        ? 'scale-110' 
                        : 'scale-100'}`}
                    />
                  </div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white hover:shadow-md transition">
                      <Heart className="text-black w-4 h-4" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white hover:shadow-md transition">
                      <ShoppingCart className="text-black w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-white border-x border-b border-gray-100 rounded-b-2xl">
                <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-500 truncate">{activeCategory}</span>
                  <span className="font-semibold text-sm sm:text-base text-black">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 rounded-full bg-gray-200">
              <div 
                className="h-full rounded-full bg-black"
                style={{ 
                  width: `${scrollProgress}%`,
                  transition: 'none'
                }}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center text-center mt-10">
          <a href="/collection">
          <button className="px-8 py-3 bg-black text-white text-sm tracking-wide uppercase rounded-full hover:bg-[#1f1f1f] transition duration-300">
            View All Collection
          </button>
          </a>
        </div>
      </div>

    </section>
  );
};

export default FeaturedProducts;
