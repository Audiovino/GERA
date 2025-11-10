
import React from 'react';
import useTranslations from '../hooks/useTranslations';

interface AiAssistantProps {
    onOpenChat: () => void;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ onOpenChat }) => {
    const { t } = useTranslations();

    return (
        <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-10 text-center flex flex-col md:flex-row items-center justify-between shadow-lg">
                <div className="md:text-left mb-6 md:mb-0">
                    <h3 className="text-3xl font-bold mb-2">{t('aiAssistant.title')}</h3>
                    <p>{t('aiAssistant.description')}</p>
                </div>
                <button 
                    onClick={onOpenChat}
                    className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap flex items-center space-x-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/></svg>
                    <span>{t('aiAssistant.button')}</span>
                </button>
            </div>
        </div>
    );
};

export default AiAssistant;