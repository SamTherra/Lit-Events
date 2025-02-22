import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-12 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/src/pages/Black White Minimalist SImple Monogram Typography Logo (3) (1).png" 
              alt="Lit Events Logo" 
              className="w-[220px] h-[80px] object-contain hover:opacity-80 transition-all duration-300"
            />
            <p className="text-gray-400">Premium Bar & Beverage Service</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Reviews */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-110">
                <img src="/src/components/1729836717_tiktok-logo-png-transparent-background.png" alt="TikTok" className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-400">
              <p>Ontario, Canada</p>
              <p>hello@litevents.ca</p>
              <p>647-847-2556</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-500">
          <p>© {currentYear} Lit Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer