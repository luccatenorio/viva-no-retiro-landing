import React, { useState, useRef } from 'react';
import { ArrowRight, MessageCircle, Volume2, VolumeX } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const whatsappLink = "https://wa.me/553197970000";

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero" className="w-full bg-brand-dark border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6 text-center">
        
        {/* 1. Text Content Area */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="block text-brand-green font-semibold tracking-widest text-sm uppercase mb-6">
            Imóveis à venda no Retiro do Chalé
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Viva o alto padrão <br />
            <span className="text-brand-green">do Retiro do Chalé.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Casas exclusivas em meio à natureza, com privacidade, segurança e qualidade de vida, tudo a poucos minutos de BH.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-brand-green hover:bg-lime-500 text-brand-dark font-bold text-xl px-10 py-4 md:px-12 md:py-5 rounded-full transition-all transform hover:scale-105 flex items-center gap-3 shadow-[0_0_30px_rgba(132,204,22,0.3)]"
            >
              Agendar visita agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <span className="text-gray-400 text-sm font-medium flex items-center gap-2 uppercase tracking-wide bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <MessageCircle className="w-4 h-4 text-brand-green" />
              Atendimento rápido e personalizado via WhatsApp
            </span>
          </div>
        </div>

        {/* 2. Video Card Area */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5 aspect-video bg-black">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1600596542815-e32cb5313d5b?q=80&w=1920&auto=format&fit=crop"
            >
              <source
                src="https://ik.imagekit.io/vzmf3kaou/3bf82f1e-4ce4-4ad8-ad9d-fa8822ccb93d.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            
            {/* Optional: Subtle overlay to blend edges slightly if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none"></div>

            {/* Sound Control Button */}
            <button 
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-20 bg-black/50 hover:bg-brand-green/90 hover:text-brand-dark text-white p-3 rounded-full backdrop-blur-md transition-all duration-300 group border border-white/10"
              aria-label={isMuted ? "Ativar som" : "Mudo"}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6" />
              ) : (
                <Volume2 className="w-6 h-6" />
              )}
            </button>
          </div>
          
          {/* Decorative Glow behind the video */}
          <div className="absolute -inset-4 bg-brand-green/20 blur-3xl -z-10 opacity-30 rounded-[3rem]"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
