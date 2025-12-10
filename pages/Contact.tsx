import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react';

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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-20 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-gray-400">Ready for a fresh look? Book your appointment or visit us today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-dark p-8 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-black rounded-lg text-gold border border-white/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Our Location</h3>
                    <p className="text-gray-400 mt-1">123 Barber Street, Urban District,<br/>City State, 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-black rounded-lg text-gold border border-white/10">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone Number</h3>
                    <p className="text-gray-400 mt-1">+234 000 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-black rounded-lg text-gold border border-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email Address</h3>
                    <p className="text-gray-400 mt-1">info@classiccuts.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="p-3 bg-black rounded-lg text-gold border border-white/10">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Opening Hours</h3>
                    <p className="text-gray-400 mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-400">Sunday: 12:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-dark p-8 rounded-2xl border border-white/5">
               <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
               <div className="flex space-x-6">
                 <a href="#" className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                      <Facebook size={24} />
                    </div>
                    <span className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors">Facebook</span>
                 </a>
                 <a href="#" className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                      <Instagram size={24} />
                    </div>
                     <span className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors">Instagram</span>
                 </a>
                 <a href="#" className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                      <TikTokIcon size={24} />
                    </div>
                     <span className="text-gray-400 text-sm mt-2 group-hover:text-white transition-colors">TikTok</span>
                 </a>
               </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-dark p-2 rounded-2xl border border-white/5 h-64 relative overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                 alt="Map Location" 
                 className="w-full h-full object-cover rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-gold text-black px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                   <MapPin size={18} /> View on Map
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-2">Book Appointment</h2>
            <p className="text-gray-400 mb-8">Fill out the form below and we will get back to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message / Appointment Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="I would like to book a haircut for..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black font-bold py-4 rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? 'Message Sent!' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;