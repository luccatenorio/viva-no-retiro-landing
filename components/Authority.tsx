import React from 'react';
import { CheckCircle, TreePine, ShieldCheck, Eye, MapPin, LayoutTemplate } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  const benefits = [
    "Conhecimento profundo do Retiro do Chalé",
    "Curadoria dos melhores imóveis disponíveis",
    "Processo seguro, personalizado e discreto",
    "Acompanhamento até depois da entrega das chaves"
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            A imobiliária referência no <span className="text-brand-petrol">Retiro do Chalé.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Há mais de 20 anos conectando famílias a imóveis de alto padrão na Serra da Moeda. 
            Especialistas no condomínio, com atendimento consultivo e transparente, garantindo 
            que você faça o melhor negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-brand-light p-3 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-brand-petrol" />
              </div>
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyRetiroSection: React.FC = () => {
  const features = [
    { icon: TreePine, text: "Condomínio cercado pela mata preservada" },
    { icon: Eye, text: "Vista definitiva para a Serra da Moeda" },
    { icon: ShieldCheck, text: "Segurança armada e portaria 24h" },
    { icon: LayoutTemplate, text: "Casas amplas e totalmente privativas" },
    { icon: MapPin, text: "Apenas 40 minutos do centro de BH" },
    { icon: CheckCircle, text: "Ambiente perfeito para descanso e qualidade de vida" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-light/50 skew-x-12 translate-x-20 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="uppercase tracking-widest text-brand-green font-bold text-sm mb-2 block">O Lugar</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              O Refúgio Premium da <br /> Serra da Moeda
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Se você busca uma casa que entregue espaço, natureza e exclusividade, esse é o lugar certo. 
              Viva dias tranquilos, com ar puro e uma infraestrutura completa de lazer e serviços.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <feat.icon className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                  <span className="text-gray-700">{feat.text}</span>
                </div>
              ))}
            </div>

            <button className="border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Ver opções de casas disponíveis
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gray-100">
               <img 
                src="https://i.ibb.co/tTCPNz7G/f590154b-beff-4c44-bd8f-f28f87adc101.png" 
                alt="Vista aérea do Retiro" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">Clube do Retiro</p>
                <p className="text-sm opacity-90">Lazer completo para sua família</p>
              </div>
            </div>
            {/* Decorative floating card - Adjusted positioning to remove "glued" effect */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-white p-5 rounded-xl shadow-2xl hidden md:block max-w-xs border border-gray-50">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="font-bold text-brand-dark text-lg">Natureza Exuberante</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Mais de 1 milhão de m² de área verde preservada.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
