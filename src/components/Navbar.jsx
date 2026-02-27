'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '/collection' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center h-16 rounded-full border border-white/50 bg-white/75 backdrop-blur-xl px-6 shadow-[0_8px_30px_rgba(17,17,17,0.08)]">
          {/* Brand logo */}
          <a href="/">
            <img src="/images/Logo2.svg" alt="Logo" className='w-28 sm:w-32 hover:cursor-pointer' />
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide uppercase text-gray-700 hover:text-black transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Hamburger menu button */}
          <button 
            className="lg:hidden rounded-full bg-black text-white p-2.5 hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 sm:px-6 lg:px-8 -mt-1">
          <div className="rounded-3xl border border-white/50 bg-white/90 backdrop-blur-xl px-3 py-4 space-y-1 shadow-[0_14px_40px_rgba(17,17,17,0.12)]">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-black transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
