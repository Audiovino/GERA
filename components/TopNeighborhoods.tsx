import React from 'react';
import useTranslations from '../hooks/useTranslations';

// Versión para forzar actualización de cache
const VERSION = Date.now();

const neighborhoods = [
  {
    name: 'Palermo',
    image: `https://audiovino.github.io/imagenes-publicas/public/palermo.png?v=${VERSION}`,
    price: 'USD 2585/m²',
    change: '+6%'
  },
  {
    name: 'Belgrano',
    image: `https://audiovino.github.io/imagenes-publicas/public/belgrano_copia.png?v=${VERSION}`,
    price: 'USD 2535/m²',
    change: '+8%'
  },
  {
    name: 'Puerto Madero',
    image: `https://audiovino.github.io/imagenes-publicas/public/puertomadero.png?v=${VERSION}`,
    price: 'USD 4706/m²',
    change: '+4%'
  },
  {
    name: 'Núñez',
    image: `https://audiovino.github.io/imagenes-publicas/public/nunez.png?v=${VERSION}`,
    price: 'USD 2238/m²',
    change: '+5%'
  },
  {
    name: 'Coghlan',
    image: `https://audiovino.github.io/imagenes-publicas/public/coghlan_copia.png?v=${VERSION}`,
    price: 'USD 2260/m²',
    change: '+3%'
  },
  {
    name: 'Villa Urquiza',
    image: `https://audiovino.github.io/imagenes-publicas/public/villa_urquiza.png?v=${VERSION}`,
    price: 'USD 2450/m²',
    change: '+7%'
  },
  {
    name: 'Chacarita',
    image: `https://audiovino.github.io/imagenes-publicas/public/chacarita_copia.webp?v=${VERSION}`,
    price: 'USD 2300/m²',
    change: '+9%'
  },
  {
    name: 'Villa Crespo',
    image: `https://audiovino.github.io/imagenes-publicas/public/villa_crespo.png?v=${VERSION}`,
    price: 'USD 2250/m²',
    change: '+8%'
  },
  {
    name: 'Saavedra',
    image: `https://audiovino.github.io/imagenes-publicas/public/saavedra.png?v=${VERSION}`,
    price: 'USD 2100/m²',
    change: '+6%'
  }
];

const TopNeighborhoods: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('topNeighborhoods.title') || 'Barrios en Demanda'}
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            {t('topNeighborhoods.subtitle') || 'Descubrí las zonas más buscadas de Buenos Aires'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood.name}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    console.error(`Failed to load image: ${neighborhood.image}`);
                    target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%234A5568" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3E${neighborhood.name}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {neighborhood.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-blue-400">
                    {neighborhood.price}
                  </p>
                  {neighborhood.change && (
                    <span className="text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1 rounded-full">
                      {neighborhood.change}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopNeighborhoods;