import React from 'react';
import { CheckCircle, Award, PenTool, Smile } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: "James Carter",
      role: "Senior Stylist",
      image: "https://images.unsplash.com/photo-1588731234159-8b9963143fca?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      role: "Barber",
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Marcus Johnson",
      role: "Grooming Expert",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-gold">ClassicCuts</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              ClassicCuts Barbing Salon is a modern grooming brand offering stylish, professional, and hygienic haircut services. 
              Our journey began with a simple mission: to elevate the barbershop experience from a routine chore to a luxury ritual.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our team of skilled barbers deliver sharp cuts, clean fades, beard trimming, and top-tier customer service. 
              We believe that a great haircut can change the way you feel, and we are dedicated to making you look your absolute best.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 rounded-xl hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" 
              alt="Barber Shop Interior" 
              className="relative rounded-xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Award className="text-gold" size={32} />, 
                title: "Skilled Barbers", 
                desc: "Experienced professionals who understand your hair." 
              },
              { 
                icon: <PenTool className="text-gold" size={32} />, 
                title: "Quality Tools", 
                desc: "We use state-of-the-art equipment for precision cuts." 
              },
              { 
                icon: <CheckCircle className="text-gold" size={32} />, 
                title: "Trendy Styles", 
                desc: "From classic cuts to modern fades, we do it all." 
              },
              { 
                icon: <Smile className="text-gold" size={32} />, 
                title: "Customer First", 
                desc: "Your satisfaction and comfort are our top priorities." 
              }
            ].map((item, index) => (
              <div key={index} className="bg-black p-6 rounded-xl border border-white/5 hover:border-gold/50 transition-colors text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet The Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our barbers are trained professionals committed to giving you the perfect look every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {team.map((member, index) => (
             <div key={index} className="group relative overflow-hidden rounded-xl">
               <img 
                 src={member.image} 
                 alt={member.name} 
                 className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
               <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                 <h3 className="text-xl font-bold text-white">{member.name}</h3>
                 <p className="text-gold text-sm font-medium uppercase tracking-wider">{member.role}</p>
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default About;