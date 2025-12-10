import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
             <div className="flex items-center space-x-2">
                <Scissors className="text-gold" size={24} />
                <span className="text-xl font-bold uppercase tracking-wider text-white">
                  Classic<span className="text-gold">Cuts</span>
                </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium grooming services designed for the modern man. Where style meets precision in a comfortable environment.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-black rounded-full text-gold hover:bg-gold hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-black rounded-full text-gold hover:bg-gold hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-black rounded-full text-gold hover:bg-gold hover:text-black transition-all">
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gold/30 inline-block pb-1">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gold/30 inline-block pb-1">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                <span>123 Barber Street, Urban District, City State, 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-gold flex-shrink-0" size={18} />
                <span>+234 000 000 0000</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-gold flex-shrink-0" size={18} />
                <span>info@classiccuts.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ClassicCuts Barbing Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;