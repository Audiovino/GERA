
import React, { useEffect } from 'react';
import useTranslations from '../hooks/useTranslations';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

const servicesIcons = [
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, // Placeholder for Drone
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string, tag: string }> = ({ icon, title, description, tag }) => (
    <div className="bg-gray-700/50 rounded-lg p-6 flex flex-col items-start h-full border border-gray-600 hover:border-blue-500 transition-colors">
        <div className="flex items-center justify-between w-full mb-4">
            <div className="bg-gray-800 rounded-full p-3">
                {icon}
            </div>
            <span className="text-xs font-semibold bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">{tag}</span>
        </div>
        <h4 className="font-bold text-lg text-white mb-2">{title}</h4>
        <p className="text-sm text-gray-400 flex-grow">{description}</p>
    </div>
);


const ServicesModal: React.FC<ServicesModalProps> = ({ isOpen, onClose, onRequestQuote }) => {
  const { t } = useTranslations();
  const services = t('servicesModal.services');
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-[999] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <div>
                <h2 className="text-2xl font-bold text-white">{t('servicesModal.title')}</h2>
                <p className="text-gray-400">{t('servicesModal.subtitle')}</p>
            </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl leading-none flex-shrink-0 ml-4">
            &times;
          </button>
        </div>
        <div className="flex-1 w-full h-full overflow-y-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service: {title: string; description: string}, index: number) => (
                    <ServiceCard 
                        key={index}
                        icon={servicesIcons[index]}
                        title={service.title}
                        description={service.description}
                        tag={t('servicesModal.quoteTag')}
                    />
                ))}
            </div>
        </div>
         <div className="p-6 border-t border-gray-700 flex justify-end">
            <button onClick={onRequestQuote} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-lg">
                {t('servicesModal.requestQuote')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;
