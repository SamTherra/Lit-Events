import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: "Phone",
      details: "647-847-2556",
      link: "tel:+16478472556"
    },
    {
      icon: <Mail className="w-6 h-6 text-gold" />,
      title: "Email",
      details: "hello@litevents.ca",
      link: "mailto:hello@litevents.ca"
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      title: "Location",
      details: "Ontario, Canada",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6 text-gold" />,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      link: "#"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-gray-400 mb-12">
              Ready to elevate your event with premium bar service? Contact us today 
              to discuss your vision and let us create an unforgettable experience.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="p-6 bg-black/30 rounded-lg border border-gold/20 
                    hover:border-gold/40 transition-all duration-300 group"
                >
                  <div className="mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gold">{info.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {info.details}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/30 p-8 rounded-lg border border-gold/20">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 
                      focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 
                      focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 
                    focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Event Type
                </label>
                <select
                  className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 
                    focus:outline-none focus:border-gold/40 transition-colors"
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="private">Private Party</option>
                  <option value="religious">Religious Celebration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 
                    focus:outline-none focus:border-gold/40 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold/90 text-black py-3 rounded-md font-medium 
                  hover:bg-gold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;