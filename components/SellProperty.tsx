import React from 'react';
import useTranslations from '../hooks/useTranslations';

// Header component local to this file
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
    </div>
);

const SellProperty: React.FC<{ scrollToContact: () => void }> = ({ scrollToContact }) => {
    const { t } = useTranslations();

    const renders = [
        { src: 'https://images.unsplash.com/photo-1582463223914-257a07010fcd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Render de edificio moderno' },
        { src: 'https://images.unsplash.com/photo-1628012242823-37295a021873?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Render de torre de apartamentos' },
        { src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Render de complejo residencial' },
    ];

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('sellProperty.title')} subtitle={t('sellProperty.subtitle')} />

            <div className="grid lg:grid-cols-1 gap-16">

                {/* Home Staging Section */}
                <div className="bg-gray-700/50 p-8 rounded-2xl shadow-xl">
                    <h3 className="text-3xl font-bold text-white mb-4 text-center">{t('sellProperty.staging.title')}</h3>
                    <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">{t('sellProperty.staging.description')}</p>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-red-400 mb-2">{t('sellProperty.staging.before')}</h4>
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop" alt="Antes del home staging" className="rounded-lg shadow-lg w-full h-auto aspect-video object-cover" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-green-400 mb-2">{t('sellProperty.staging.after')}</h4>
                            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" alt="Después del home staging" className="rounded-lg shadow-lg w-full h-auto aspect-video object-cover" />
                        </div>
                    </div>
                </div>

                {/* Developer Potential Section */}
                <div className="bg-gray-700/50 p-8 rounded-2xl shadow-xl">
                    <h3 className="text-3xl font-bold text-white mb-6 text-center">{t('sellProperty.developer.title')}</h3>
                    <div className="text-center mb-8 bg-blue-900/50 border-l-4 border-blue-500 p-6 rounded-lg max-w-3xl mx-auto">
                        <p className="text-2xl italic text-blue-300">{t('sellProperty.developer.question')}</p>
                    </div>
                    <p className="text-gray-400 mb-8 text-center max-w-3xl mx-auto">{t('sellProperty.developer.description')}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {renders.map((render, index) => (
                            <img key={index} src={render.src} alt={render.alt} className="rounded-lg shadow-lg w-full h-48 md:h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-16">
                <button onClick={scrollToContact} className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-colors text-lg shadow-lg">
                    {t('sellProperty.cta')}
                </button>
            </div>
        </div>
    );
};

export default SellProperty;
