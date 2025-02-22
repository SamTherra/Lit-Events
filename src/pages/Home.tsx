import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&h=1080&fit=crop&q=100"
          alt="Fancy Cocktail Bar"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end pb-20">
        {/* Book With Us Button */}
        <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link 
            to="/contact"
            className="bg-gold/90 text-black px-12 py-4 rounded-full text-lg font-medium 
              hover:bg-gold transition-all duration-500 transform hover:scale-105 
              hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]
              relative overflow-hidden group"
          >
            <span className="relative z-10">Book With Us</span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 
              transition-transform duration-500"></div>
          </Link>
        </div>

        {/* Company name and sparkle */}
        <div className="absolute bottom-8 right-12 flex flex-col items-end space-y-2 animate-fade-in" 
             style={{ animationDelay: '0.6s' }}>
          <span className="text-gold/90 text-3xl tracking-wider font-semibold mb-2 animate-pulse">
            LIT EVENTS
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-gold/90 text-xl font-light italic tracking-wider">
              with a touch
            </span>
            <Sparkles className="w-5 h-5 text-gold animate-sparkle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;