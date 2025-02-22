import React from 'react';
import { GlassWater, Award, Users, Heart } from 'lucide-react';

function About() {
  const values = [
    {
      icon: <GlassWater className="w-8 h-8 text-gold" />,
      title: "Craftsmanship",
      description: "Every drink is crafted with precision and passion, using premium ingredients and innovative techniques."
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Excellence",
      description: "We strive for excellence in every detail, from service to presentation, ensuring memorable experiences."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Teamwork",
      description: "Our expert team of mixologists and servers work in harmony to deliver flawless service."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "Passion",
      description: "We pour our heart into creating extraordinary moments through exceptional beverage experiences."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&h=1080&fit=crop&q=100"
          alt="Bar Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gold">Crafting Moments, One Drink at a Time</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2020, Lit Events emerged from a passion for exceptional mixology and a vision to transform ordinary 
              events into extraordinary experiences. Our journey began with a simple belief: every celebration deserves 
              a touch of magic in its beverages.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we're proud to be the premier choice for premium bar services, bringing sophistication and creativity 
              to events across the region. Our team of expert mixologists combines traditional techniques with innovative 
              approaches to create unforgettable drinking experiences.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800&h=1000&fit=crop&q=100"
              alt="Cocktail Preparation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-semibold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-gold/20 hover:border-gold/40 
                  transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gold">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;