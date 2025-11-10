import React, { useState, useEffect, useRef } from 'react';
import useTranslations from '../hooks/useTranslations';
import { developmentsData, Development } from '../data/developmentsData';
import { barriosGeo } from '../data/barriosGeo';
import { getDevelopmentImage } from '../data/developmentsImages';
import { neighborhoodsData } from '../data/realEstateData';

declare const L: any;

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400 max-w-4xl mx-auto">{subtitle}</p>
    </div>
);

// Helper function to clean the development name
const cleanName = (name: string) => name.replace(/^Emprendimiento en /i, '').trim();

const DevelopmentCard: React.FC<{ dev: Development, onSelect: (dev: Development) => void, isSelected: boolean }> = ({ dev, onSelect, isSelected }) => {
    const image = getDevelopmentImage(dev.barrio);

    return (
        <div 
            className={`bg-gray-800 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${isSelected ? 'border-blue-500 shadow-blue-500/30 shadow-lg' : 'border-transparent hover:border-gray-600'}`}
            onClick={() => onSelect(dev)}
        >
            <img src={image} alt={dev.nombre} className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-4">
                <h3 className="text-md font-bold text-white truncate">{cleanName(dev.nombre)}</h3>
                <p className="text-sm text-gray-400">{dev.direccion}</p>
                <div className="flex justify-end items-center mt-3">
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">{dev.estado}</span>
                </div>
            </div>
        </div>
    );
};


const Developments: React.FC = () => {
    const { t } = useTranslations();
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);
    const markersRef = useRef<{ [key: string]: any }>({});
    const geoJsonLayerRef = useRef<any>(null);

    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
    const [selectedDevelopment, setSelectedDevelopment] = useState<Development | null>(null);

    const uniqueNeighborhoods = [...new Set(developmentsData.map(d => d.barrio))];
    
    const filteredDevelopments = selectedNeighborhood === 'all'
        ? developmentsData
        : developmentsData.filter(d => d.barrio === selectedNeighborhood);

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            mapInstance.current = L.map(mapRef.current, {
                scrollWheelZoom: false,
                attributionControl: false
            }).setView([-34.6037, -58.45], 12);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            }).addTo(mapInstance.current);
        }
    }, []);

    useEffect(() => {
        // Clear previous markers
        // FIX: Cast marker to 'any' to resolve TypeScript error 'Property 'remove' does not exist on type 'unknown''.
        Object.values(markersRef.current).forEach(marker => (marker as any).remove());
        markersRef.current = {};

        filteredDevelopments.forEach((dev, index) => {
            const devId = `${dev.nombre}-${index}`;
            const marker = L.marker([dev.lat, dev.lon]).addTo(mapInstance.current);
            marker.bindPopup(`<b>${cleanName(dev.nombre)}</b><br>${dev.direccion}`);
            marker.on('click', () => {
                setSelectedDevelopment(dev);
                document.getElementById(`dev-${devId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            markersRef.current[devId] = marker;
        });

        if (geoJsonLayerRef.current) {
            geoJsonLayerRef.current.remove();
        }

        if(selectedNeighborhood !== 'all') {
            const neighborhoodGeo = barriosGeo.features.find(f => f.properties.barrio.toLowerCase() === selectedNeighborhood.toLowerCase());
             if(neighborhoodGeo){
                geoJsonLayerRef.current = L.geoJSON(neighborhoodGeo, {
                    style: { color: "#3b82f6", weight: 2, opacity: 0.7, fillOpacity: 0.1 }
                }).addTo(mapInstance.current);
                mapInstance.current.fitBounds(geoJsonLayerRef.current.getBounds());
             } else if (filteredDevelopments.length > 0) {
                 const bounds = L.latLngBounds(filteredDevelopments.map(d => [d.lat, d.lon]));
                 if (bounds.isValid()) mapInstance.current.fitBounds(bounds, { padding: [50, 50] });
             }
        } else {
            if(filteredDevelopments.length > 0) {
                 const bounds = L.latLngBounds(filteredDevelopments.map(d => [d.lat, d.lon]));
                 if (bounds.isValid()) mapInstance.current.fitBounds(bounds, { padding: [50, 50] });
            } else {
                 mapInstance.current.setView([-34.6037, -58.45], 12);
            }
        }

    }, [selectedNeighborhood, filteredDevelopments]);

    useEffect(() => {
        if (selectedDevelopment && mapInstance.current) {
            mapInstance.current.flyTo([selectedDevelopment.lat, selectedDevelopment.lon], 16);
            const devIndex = filteredDevelopments.findIndex(d => d.nombre === selectedDevelopment.nombre && d.lat === selectedDevelopment.lat && d.lon === selectedDevelopment.lon);
            const devId = `${selectedDevelopment.nombre}-${devIndex}`;
            const marker = markersRef.current[devId];
            if(marker) marker.openPopup();
        }
    }, [selectedDevelopment, filteredDevelopments]);

    const handleSelectDevelopment = (dev: Development) => {
        setSelectedDevelopment(dev);
    }
    
    const getBarrioDisplayName = (barrio: string) => {
        const matchingHood = neighborhoodsData.find(n => n.name === barrio);
        return matchingHood?.name || barrio;
    }

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('developments.title')} subtitle={t('developments.subtitle')} />
            
             <div className="mb-8 flex flex-wrap justify-center gap-2">
                <button 
                    onClick={() => {setSelectedNeighborhood('all'); setSelectedDevelopment(null);}}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition ${selectedNeighborhood === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                >
                    {t('developments.allNeighborhoods')}
                </button>
                {uniqueNeighborhoods.map(barrio => (
                    <button 
                        key={barrio}
                        onClick={() => {setSelectedNeighborhood(barrio); setSelectedDevelopment(null);}}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition ${selectedNeighborhood === barrio ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                    >
                        {getBarrioDisplayName(barrio)}
                    </button>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div id="map" ref={mapRef} className="lg:col-span-2 h-[400px] lg:h-[600px] rounded-lg z-10 bg-gray-700 shadow-inner"></div>
                <div className="lg:col-span-1 max-h-[600px] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                    {filteredDevelopments.map((dev, index) => {
                         const devId = `${dev.nombre}-${index}`;
                         return (
                            <div id={`dev-${devId}`} key={devId}>
                                <DevelopmentCard 
                                    dev={dev} 
                                    onSelect={handleSelectDevelopment} 
                                    isSelected={selectedDevelopment?.nombre === dev.nombre && selectedDevelopment?.lat === dev.lat && selectedDevelopment.lon === dev.lon}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Developments;