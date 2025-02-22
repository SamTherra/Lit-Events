import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Reviews', path: '/reviews' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link to="/" className="hover:opacity-80 transition-opacity transform hover:scale-105 duration-300">
          <img 
            src="/src/pages/Black White Minimalist SImple Monogram Typography Logo (3) (1).png"
            alt="Lit Events Logo"
            className="w-[350px] h-[120px] object-contain"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link text-sm tracking-wider transition-all duration-300 transform hover:scale-105 ${
                location.pathname === item.path ? 'text-gold' : 'hover:text-gold'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg> : 
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-black/95 transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="flex flex-col space-y-4 px-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm tracking-wider transition-colors ${
                location.pathname === item.path ? 'text-gold' : 'hover:text-gold'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;