import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, ShieldCheck, Gem, Zap, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* --------------------------------------------
          SECTION 1: HERO
      -------------------------------------------- */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-Poultry-Solutions/main/20952.jpg")', 
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-4 inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 animate-fade-in-up">
            <Scissors className="text-gold mr-2" size={20} />
            <span className="text-white text-sm font-semibold tracking-widest uppercase">ClassicCuts Barbing Salon</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-fade-in-up delay-100 max-w-4xl">
            Experience Premium <span className="text-gold">Grooming</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light animate-fade-in-up delay-200">
            Where style meets precision. Sharp cuts, clean fades & top-tier barbering tailored for the modern gentleman.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up delay-300 w-full sm:w-auto">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-gold text-black rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
            >
              Book Appointment
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------
          SECTION 2: ABOUT US (EXPANDED)
      -------------------------------------------- */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/amoduikimot-cloud/Agro-bal-Poultry-Solutions/251fa4e14b2525dd9b546a3f76c24abcda224f64/1422.jpg" 
                  alt="Modern Barbershop Interior" 
                  className="w-full h-[500px] object-cover transform transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gold text-black p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm font-semibold uppercase tracking-wider">Years Exp.</p>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">About Us</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your Style. <br/><span className="text-gray-500">Our Expertise.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                ClassicCuts Barbing Salon provides a luxurious grooming experience tailored for the modern man. 
                From precision fades to professional beard sculpting, we deliver premium services using the best tools, 
                hygienic practices, and stylish techniques.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Skilled and experienced barbers",
                  "Modern haircut techniques",
                  "Clean & comfortable environment",
                  "Customer-first service"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="text-gold flex-shrink-0" size={20} />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="inline-flex items-center text-gold font-bold hover:text-white transition-colors group">
                Read More About Us 
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------
          SECTION 3: FEATURE HIGHLIGHTS
      -------------------------------------------- */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scissors size={32} />,
                title: "Professional Barbers",
                desc: "Our team delivers clean fades, sharp lines, and expert grooming."
              },
              {
                icon: <Gem size={32} />,
                title: "Luxury Grooming",
                desc: "Enjoy a premium experience in a serene, polished environment."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Top Hygiene",
                desc: "We use sterilized tools and follow strict cleanliness protocols."
              },
              {
                icon: <Zap size={32} />,
                title: "Modern Styles",
                desc: "From classic cuts to trendy looks, we create styles that suit you."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-dark p-8 rounded-xl border border-white/5 hover:border-gold/50 hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------
          SECTION 4: SERVICES PREVIEW
      -------------------------------------------- */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-gold font-bold tracking-wider uppercase text-sm">Services</span>
              <h2 className="text-4xl font-bold text-white mt-2">What We Offer</h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-white hover:text-gold transition-colors font-medium">
              View All Services <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Haircut",
                desc: "Classic, modern, and clean fade styles.",
                img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Beard Grooming",
                desc: "Beard shaping, trimming & sculpting.",
                img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Kids’ Haircut",
                desc: "Friendly and comfortable cuts for children.",
                img: "https://images.unsplash.com/photo-1519699047748-40ba5266f2bd?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Deluxe Package",
                desc: "Haircut + Beard + Wash + Aftershave.",
                img: "https://images.unsplash.com/photo-1622288432452-b7a1801c4518?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden aspect-[3/4]">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.desc}</p>
                  <Link to="/services" className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white hover:bg-gold hover:text-black transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-white hover:text-gold transition-colors font-medium">
              View All Services <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------
          SECTION 5: TESTIMONIALS
      -------------------------------------------- */}
      <section className="py-24 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Best haircut experience I’ve ever had! The attention to detail is unmatched.",
                name: "Michael R.",
                role: "Regular Client",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
              },
              {
                text: "Professional barbers and a very clean environment. Highly recommended!",
                name: "David K.",
                role: "Client",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
              },
              {
                text: "My go-to place for sharp and stylish cuts. The vibe is amazing.",
                name: "Sarah J.",
                role: "Client",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-dark p-8 rounded-2xl border border-white/5 relative">
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center">
                  <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold mr-4" />
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------
          SECTION 6: CALL TO ACTION
      -------------------------------------------- */}
      <section className="py-24 relative overflow-hidden">
        {/* Golden Background */}
        <div className="absolute inset-0 bg-gold">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready for a Fresh Look?</h2>
          <p className="text-black/80 text-xl mb-10 font-medium max-w-2xl mx-auto">
            Book your next haircut with our expert barbers and experience the difference.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
          >
            Book Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;