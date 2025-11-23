import React, { useState, useEffect } from 'react';
import { Property } from '../types';
import { Bed, Bath, Maximize, ArrowRight, Car, Sofa, Check } from 'lucide-react';

// Extended interface locally to handle specific new fields without breaking global types
interface CatalogProperty extends Omit<Property, 'beds' | 'baths'> {
  beds?: number;
  baths?: number;
  // New fields for the custom card
  gallery?: string[];
  specs?: { icon: React.ElementType; label: string }[];
}

const properties: CatalogProperty[] = [
  {
    id: '1',
    title: 'Casa Condomínio Retiro do Chalé',
    price: 'R$ 3.990.000',
    image: 'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-gustavo-cauas-rodrigo-day/img-5589.jpg&mode=fit&bgcolor=f7f7f7&width=750&height=520',
    gallery: [
      'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-gustavo-cauas-rodrigo-day/img-5589.jpg&mode=fit&bgcolor=f7f7f7&width=750&height=520',
      'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-gustavo-cauas-rodrigo-day/img-5390.jpg&mode=fit&bgcolor=f7f7f7&width=1024&height=768',
      'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-gustavo-cauas-rodrigo-day/img-5515.jpg&mode=fit&bgcolor=f7f7f7&width=1024&height=768'
    ],
    features: ['Piscina', 'Área Gourmet', 'Vista para a Natureza', 'Lote 9.000m²'],
    specs: [
      { icon: Sofa, label: '3 salas' },
      { icon: Bed, label: '4 quartos' },
      { icon: Check, label: '4 suítes' },
      { icon: Bath, label: '6 banheiros' },
      { icon: Car, label: '10 vagas' },
    ]
  },
  {
    id: '2',
    title: 'Casa Condomínio Retiro do Chalé',
    price: 'R$ 1.990.000',
    image: 'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-adalberto/images.jpg&mode=fit&bgcolor=f7f7f7&width=750&height=520',
    gallery: [
      'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-adalberto/images.jpg&mode=fit&bgcolor=f7f7f7&width=750&height=520',
      'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-adriano-orquideas-2/cf16121d-a941-486a-893b-a0432ac1af83.jpg&mode=fit&bgcolor=f7f7f7&width=1024&height=768',
      'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-adriano-orquideas-2/05.jpg&mode=fit&bgcolor=f7f7f7&width=1024&height=768'
    ],
    features: ['Arquitetura Contemporânea', 'Vista para a Serra', 'Gourmet Planejado', 'Piscina Aquecida', 'Energia Solar'],
    specs: [
      { icon: Bed, label: '4 quartos' },
      { icon: Check, label: '4 suítes' },
      { icon: Bath, label: '7 banheiros' },
      { icon: Sofa, label: 'Sala ampla' },
      { icon: Car, label: '4 vagas' },
    ]
  },
  {
    id: '3',
    title: 'Casa Condomínio Retiro do Chalé',
    price: 'R$ 2.800.000',
    image: 'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-orquideas/03.jpg&mode=fit&bgcolor=f7f7f7&width=1024&height=768',
    gallery: [
      'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-orquideas/03.jpg&mode=fit&bgcolor=f7f7f7&width=1024&height=768',
      'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-orquideas/ad3a3444-03ee-483a-850c-227fd05f711c.jpg&mode=fit&bgcolor=f7f7f7&width=1024&height=768',
      'https://cdn.izap.com.br/vivanoretiro.com.br/plus/images?src=casa-orquideas/3362db95-7c06-42e7-ba76-5382fa59f123.jpg&mode=fit&bgcolor=f7f7f7&width=1024&height=768'
    ],
    features: ['Acabamentos Nobres', 'Quartzito Kalahari', 'Espaço Gourmet', 'Vista Definitiva', 'Condomínio Arborizado'],
    specs: [
      { icon: Bed, label: '4 quartos' },
      { icon: Check, label: '1 suíte master' },
      { icon: Sofa, label: 'Sala TV' },
      { icon: Bath, label: '3 banheiros' },
      { icon: Car, label: 'Garagem coberta' },
    ]
  }
];

const PropertyCard: React.FC<{ property: CatalogProperty }> = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel Logic
  useEffect(() => {
    if (!property.gallery || property.gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % property.gallery!.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, [property.gallery]);

  const whatsappLink = "https://wa.me/553197970000";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {/* Render Carousel or Single Image */}
        {property.gallery ? (
          property.gallery.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${property.title} - ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))
        ) : (
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        )}
        
        <div className="absolute top-4 right-4 bg-brand-dark/90 text-white px-3 py-1 rounded-full text-sm font-semibold z-20">
          {property.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-dark mb-2 truncate" title={property.title}>{property.title}</h3>
        
        {/* Specs Section: Conditional rendering for detailed list vs simple beds/baths */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 text-sm mb-4 min-h-[2.5rem]">
          {property.specs ? (
            property.specs.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <spec.icon className="w-4 h-4" />
                <span>{spec.label}</span>
              </div>
            ))
          ) : (
            <>
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>{property.beds} quartos</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{property.baths} banhos</span>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {property.features.map((feat, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
              {feat}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-transparent border border-brand-green text-brand-dark hover:bg-brand-green hover:text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
          >
            Quero mais detalhes
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Catalog: React.FC = () => {
  return (
    <section id="imoveis" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Casas selecionadas para quem busca <br className="hidden md:block" /> mais que um endereço.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Imóveis de 1 a 10 milhões de reais, com plantas amplas, áreas gourmet, piscina, 
            vistas deslumbrantes e arquitetura diferenciada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(prop => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://vivanoretiro.com.br" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-brand-petrol font-semibold hover:underline hover:text-brand-dark transition-colors"
          >
            Ver todo o inventário disponível &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;