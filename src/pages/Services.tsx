import React, { useState } from 'react';
import { Wine, GlassWater, Utensils } from 'lucide-react';

function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Wine className="w-12 h-12 text-gold" />,
      title: "Premium Bar Service",
      description: "Full-service bar setup with premium spirits, craft cocktails, and expert mixologists.",
      features: [
        "Custom cocktail menu design",
        "Professional bartenders",
        "Top-shelf spirits and mixers",
        "Elegant bar setup and glassware",
        "Ice and garnish service"
      ]
    },
    {
      icon: <GlassWater className="w-12 h-12 text-gold" />,
      title: "Soft Beverage Service",
      description: "Elevate your alcohol-free events with our premium mocktail and beverage service, perfect for all occasions.",
      features: [
        "Signature mocktail creations",
        "Custom coffee and tea station",
        "Refreshing slushie bar",
        "Kid-friendly drink options",
        "Halal and kosher-friendly beverages"
      ]
    },
    {
      icon: <Utensils className="w-12 h-12 text-gold" />,
      title: "Mixology Workshops",
      description: "Interactive drink-making classes for team building and private events.",
      features: [
        "Hands-on instruction",
        "Recipe cards",
        "All ingredients provided",
        "Take-home drink kit",
        "Group activities"
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1920&h=1080&fit=crop&q=100"
          alt="Beverage Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">Exceptional beverage experiences for every occasion</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg cursor-pointer transition-all duration-300 
                ${activeService === index ? 'bg-gold/10 border-gold' : 'bg-black/50 border-gray-800'} 
                border hover:border-gold`}
              onClick={() => setActiveService(index)}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gold">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft Beverage Service Highlight */}
        <div className="mt-32 bg-black/30 p-12 rounded-lg border border-gold/20">
          <h2 className="text-3xl font-semibold text-gold mb-6">Elevate Your Alcohol-Free Events</h2>
          <p className="text-gray-300 mb-8 max-w-3xl">
            Experience the sophistication of premium beverages without alcohol. Our Soft Beverage Service 
            is perfect for religious celebrations, corporate events, youth parties, and any occasion where 
            you want to create memorable moments with innovative, alcohol-free drinks. From artisanal 
            mocktails to custom coffee experiences, we bring creativity and elegance to every serve.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-gold font-semibold mb-3">Custom Mocktails</h3>
              <p>Expertly crafted alcohol-free cocktails using premium ingredients and innovative techniques.</p>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-3">Coffee & Tea Bar</h3>
              <p>Specialty coffee and tea service with artisanal preparations and unique flavor combinations.</p>
            </div>
            <div>
              <h3 className="text-gold font-semibold mb-3">Refreshment Station</h3>
              <p>Fresh juices, smoothies, and slushies perfect for any age group and dietary requirement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;