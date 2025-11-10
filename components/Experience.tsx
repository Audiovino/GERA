import React from 'react';
import useTranslations from '../hooks/useTranslations';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400">{subtitle}</p>
    </div>
);

const ExperienceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg w-16 h-16 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    </div>
);

const Experience: React.FC = () => {
    const { t } = useTranslations();
    const cards = t('experience.cards');

    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M8.5 5.5a.5.5 0 0 0-1 0v3.793l-1.146 1.147a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708z"/><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M14.5 3A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5v-7A1.5 1.5 0 0 1 1.5 3zM1 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z"/><path d="M7 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.25.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
    ];

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('experience.title')} subtitle={t('experience.subtitle')} />
            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((card: {title: string, description: string}, index: number) => (
                    <ExperienceCard key={card.title} icon={icons[index]} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
};

export default Experience;