import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo } from './components/Logo';
import Hero from './components/Hero';
import { AuthoritySection, WhyRetiroSection } from './components/Authority';
import Catalog from './components/Catalog';
import { TeamSection, TestimonialsSection } from './components/SocialProof';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/553197970000";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-dark shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">

          {/* Logo sempre na versão original colorida */}
          <div className="transition-all">
            <Logo className="h-12" />
          </div>
          
          {/* Desktop Nav - Always white text to contrast with dark blue background */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-white">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, 'hero')}
              className="hover:text-brand-green transition-colors cursor-pointer"
            >
              Sobre
            </a>
            <a 
              href="#retiro" 
              onClick={(e) => scrollToSection(e, 'retiro')}
              className="hover:text-brand-green transition-colors cursor-pointer"
            >
              O Retiro
            </a>
            <a 
              href="#imoveis" 
              onClick={(e) => scrollToSection(e, 'imoveis')}
              className="hover:text-brand-green transition-colors cursor-pointer"
            >
              Imóveis
            </a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-green hover:bg-lime-500 text-brand-dark px-6 py-2 rounded-full font-bold transition-transform hover:scale-105 inline-block"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile Toggle - Always white */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t p-6 md:hidden shadow-xl flex flex-col gap-4 items-center text-lg">
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, 'hero')} 
              className="text-gray-800 py-2 w-full text-center"
            >
              Sobre
            </a>
            <a 
              href="#retiro" 
              onClick={(e) => scrollToSection(e, 'retiro')} 
              className="text-gray-800 py-2 w-full text-center"
            >
              O Retiro
            </a>
            <a 
              href="#imoveis" 
              onClick={(e) => scrollToSection(e, 'imoveis')} 
              className="text-gray-800 py-2 w-full text-center"
            >
              Imóveis
            </a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-brand-green text-brand-dark font-bold py-3 rounded-lg text-center"
            >
              Agendar Visita
            </a>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <AuthoritySection />
        <WhyRetiroSection />
        <Catalog />
        <TeamSection />
        <TestimonialsSection />

        {/* Final CTA Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
            Pronto para conhecer o melhor <br /> do Retiro do Chalé?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl">
            Ganhe um atendimento rápido e objetivo e descubra qual casa combina com o seu momento de vida.
          </p>
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-dark text-white text-xl font-bold px-10 py-5 rounded-full hover:bg-brand-petrol transition-all shadow-lg hover:shadow-2xl flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6 text-brand-green" />
            Agendar visita agora
          </a>
          <p className="mt-4 text-sm text-gray-500 font-medium uppercase tracking-wide">
            Atendimento via WhatsApp • Imóveis selecionados • Alto padrão
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo no footer, sempre colorida */}
          <div>
            <Logo className="h-12 !opacity-100 !brightness-100 !invert-0" />
          </div>

          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Viva no Retiro Imóveis. CRECI 1234-J.</p>
            <p className="mt-1">Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 animate-in fade-in slide-in-from-bottom-10 duration-700"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default App;