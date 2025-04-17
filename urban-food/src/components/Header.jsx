import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#F5F5DC] text-[#4A4A4A] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-[#8BC34A] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h1 className="text-xl font-bold tracking-tight text-[#4A4A4A] md:text-2xl font-[Poppins]">Urban Food</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]">Home</Link>
          <Link to="/shop" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]">Shop</Link>
          <Link to="/categories" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]">Categories</Link>
          <Link to="/deals" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]">Deals</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]">Contact</Link>
        </nav>

        {/* Cart and Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <button className="bg-[#8BC34A] text-white px-3 py-1 rounded-full font-medium text-sm hover:bg-[#7CB342] transition-colors duration-300 font-[Poppins]">
            Cart (0)
          </button>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-[#4A4A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#EDEDED] py-3">
          <nav className="flex flex-col items-center space-y-3">
            <Link to="/" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/categories" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]" onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link to="/deals" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]" onClick={() => setIsMenuOpen(false)}>Deals</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-[#8BC34A] transition-colors duration-300 font-[Poppins]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;