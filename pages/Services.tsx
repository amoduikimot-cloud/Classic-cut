import React from 'react';
import { Scissors, Sun, Sparkles, Baby, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "Haircut",
      icon: <Scissors size={32} />,
      features: ["Classic cuts", "Modern styles", "Fades and tapers"],
      price: "$25"
    },
    {
      title: "Beard Grooming",
      icon: <Sun size={32} />, // Using Sun as generic icon for facial/beard styling brightness
      features: ["Shaping", "Trimming", "Full beard styling"],
      price: "$15"
    },
    {
      title: "Children’s Haircut",
      icon: <Baby size={32} />,
      features: ["Gentle handling", "Trendy kids styles", "Patience & Care"],
      price: "$20"
    },
    {
      title: "Hair Coloring",
      icon: <Sparkles size={32} />,
      features: ["Highlights", "Full color", "Beard dye"],
      price: "$40+"
    },
    {
      title: "Deluxe Package",
      icon: <Crown size={32} />,
      features: ["Haircut + Beard trim", "Hair wash", "Aftershave treatment"],
      price: "$50",
      highlight: true
    }
  ];

  return (
    <div className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-wider uppercase text-sm">Our Menu</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Premium Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the art of grooming with our comprehensive range of services tailored to your style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border transition-all duration-300 group flex flex-col
                ${service.highlight 
                  ? 'bg-dark border-gold shadow-[0_0_30px_rgba(212,175,55,0.1)] scale-100 lg:scale-105 z-10' 
                  : 'bg-black border-white/10 hover:border-gold/50'
                }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-gold text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors
                ${service.highlight ? 'bg-gold text-black' : 'bg-dark text-gold group-hover:bg-gold group-hover:text-black'}`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <div className="text-3xl font-bold text-gold mb-6">{service.price}</div>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`w-full py-3 rounded-lg font-bold text-center transition-colors
                  ${service.highlight 
                    ? 'bg-gold text-black hover:bg-white' 
                    : 'bg-white/5 text-white hover:bg-gold hover:text-black'
                  }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;