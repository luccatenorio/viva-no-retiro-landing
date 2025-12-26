import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { id: 1, name: "Josimar Miranda", role: "Sócio Diretor", image: "https://i.ibb.co/HLpPxCvL/imagem-2025-11-28-113804819.png" },
  { id: 2, name: "Márcio Freitas", role: "Sócio Diretor", image: "https://i.ibb.co/chsgHxVs/Imagem-do-Whats-App-de-2025-12-01-s-17-53-52-0f6dd644.jpg" }
];

const testimonialImages = [
  "https://i.ibb.co/Y76dhHpn/imagem-2025-11-26-160055242.png",
  "https://i.ibb.co/XZ88pSjW/imagem-2025-11-26-154238669.png",
  "https://i.ibb.co/pB84d5TM/imagem-2025-11-26-161149270.png"
];

export const TeamSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
        Atendimento personalizado, <span className="text-brand-petrol">discreto e consultivo.</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        Aqui você não fala com robô. Fala com especialistas que conhecem cada rua, cada vista e cada história do Retiro do Chalé.
      </p>

      <div className="flex flex-wrap justify-center gap-12 md:gap-24">
        {team.map(member => (
          <div key={member.id} className="flex flex-col items-center group">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-brand-light group-hover:border-brand-green transition-colors duration-300 shadow-lg">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TestimonialsSection: React.FC = () => (
  <section className="py-20 bg-brand-dark text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">O que nossos clientes dizem</h2>
        <div className="w-16 h-1 bg-brand-green mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {testimonialImages.map((imgUrl, index) => (
          <div 
            key={index} 
            className={`rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-125 hover:z-50 bg-brand-dark/50 ${index === 2 ? 'self-start' : 'h-full'}`}
          >
            <img 
              src={imgUrl} 
              alt={`Depoimento cliente ${index + 1}`} 
              className={`w-full ${index === 2 ? 'h-auto object-contain' : 'h-full object-cover'}`}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);