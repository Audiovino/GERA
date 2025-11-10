
import React from 'react';
import useTranslations from '../hooks/useTranslations';

interface FloatingChatButtonProps {
    onOpenChat: () => void;
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onOpenChat }) => {
    const { t } = useTranslations();
    
    return (
        <button 
            onClick={onOpenChat}
            className="fixed bottom-6 right-6 bg-blue-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 z-40"
            aria-label={t('hero.talkWithUs')}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/></svg>
            <span className="hidden sm:inline">{t('hero.talkWithUs')}</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
        </button>
    );
};

export default FloatingChatButton;