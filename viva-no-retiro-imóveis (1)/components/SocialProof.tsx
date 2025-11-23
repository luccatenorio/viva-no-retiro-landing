import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TeamMember, Testimonial } from '../types';

const team: TeamMember[] = [
  { id: 1, name: "Roberto Almeida", role: "Especialista Senior", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Carla Mendes", role: "Consultora Imobiliária", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Ricardo Veiga", role: "Diretor Comercial", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" }
];

const testimonials: Testimonial[] = [
  { id: 1, text: "A melhor experiência imobiliária que já tive. Profissionalismo do início ao fim.", author: "Dr. Fernando G." },
  { id: 2, text: "Transparência total. Encontraram exatamente o imóvel que eu buscava sem me fazer perder tempo.", author: "Mariana S." },
  { id: 3, text: "O acompanhamento pós-venda foi incrível. Recomendo de olhos fechados.", author: "Carlos e Patrícia" }
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

      <div className="grid md:grid-cols-3 gap-8">
        {team.map(member => (
          <div key={member.id} className="flex flex-col items-center group">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-brand-light group-hover:border-brand-green transition-colors duration-300">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
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

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(t => (
          <div key={t.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-brand-green/20" />
            <p className="text-gray-300 italic mb-6 relative z-10">"{t.text}"</p>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-semibold text-brand-green ml-auto">- {t.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);