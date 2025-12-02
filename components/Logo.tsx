import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img 
        src="https://cdn.izap.com.br/vivanoretiro.com.br/uploads/tema/plusfiles/2_logo-transp.png"
        alt="Viva no Retiro Imóveis Logo"
        className="h-full w-auto object-contain !opacity-100"
      />
    </div>
  );
};
