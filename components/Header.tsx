import React, { useState, useEffect } from 'react';
import useTranslations from '../hooks/useTranslations';
import { Language } from '../types';

interface HeaderProps {
    scrollToRef: (refName: string) => void;
}


const SpainFlag = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#ffc400" d="M0 0h512v512H0z"/><path fill="#c60b1e" d="M0 0h512v128H0zm0 384h512v128H0z"/></svg>;
const USFlag = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#bd3d44" d="M0 0h512v39.385H0zm0 78.77h512v39.385H0zm0 78.77h512v39.385H0zm0 78.77h512v39.385H0zm0 78.77h512v39.385H0zm0 78.77h512v39.385H0z"/><path fill="#fff" d="M0 39.385h512v39.385H0zm0 78.77h512v39.385H0zm0 78.77h512v39.385H0zm0 78.77h512v39.385H0zm0 78.77h512v39.385H0z"/><path fill="#192f5d" d="M0 0h256v275.695H0z"/><path fill="#fff" d="m64 19.692 7.848 24.13L96 43.822l-19.848 14.33 7.848 24.13-20-14.545-20 14.545 7.848-24.13L44 43.822l24.152.001zM192 19.692l7.848 24.13L224 43.822l-19.848 14.33 7.848 24.13-20-14.545-20 14.545 7.848-24.13L172 43.822l24.152.001zM64 98.462l7.848 24.13 24.152-.001-19.848 14.33 7.848 24.13-20-14.545-20 14.545 7.848-24.13L44 122.592l24.152-.001zM192 98.462l7.848 24.13 24.152-.001-19.848 14.33 7.848 24.13-20-14.545-20 14.545 7.848-24.13L172 122.592l24.152-.001zM128 59.077l7.848 24.13 24.152-.001-19.848 14.33 7.848 24.13-20-14.545-20 14.545 7.848-24.13L108 83.207l24.152-.001zM64 177.232l7.848 24.13 24.152-.001-19.848 14.33 7.848 24.13-20-14.545-20 14.545 7.848-24.13L44 201.362l24.152-.001zM192 177.232l7.848 24.13 24.152-.001-19.848 14.33 7.848 24.13-20-14.545-20 14.545 7.848-24.13L172 201.362l24.152-.001zM128 137.847l7.848 24.13 24.152-.001-19.848 14.33 7.848 24.13-20-14.545-20 14.545 7.848-24.13L108 161.977l24.152-.001zM128 216.617l7.848 24.13L160 240.747l-19.848 14.33 7.848 24.13-20-14.545-20 14.545 7.848-24.13L108 240.747l24.152-.001z"/></svg>;
const BrazilFlag = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#009b3a" d="M0 0h512v512H0z"/><path fill="#ffc400" d="m42.342 256 213.658-151.058L469.658 256l-213.658 151.058z"/><path fill="#192f5d" d="M256 341.333a85.333 85.333 0 1 1 0-170.666 85.333 85.333 0 0 1 0 170.666z"/></svg>;


const LanguageSwitcher: React.FC = () => {
    const { setLanguage, language } = useTranslations();
    const [isOpen, setIsOpen] = useState(false);

    const languages = {
        es: { name: 'ES', flag: <SpainFlag /> },
        en: { name: 'EN', flag: <USFlag /> },
        pt: { name: 'PT', flag: <BrazilFlag /> },
    };

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
            >
                {languages[language].flag}
                <span className="font-medium text-white">{languages[language].name}</span>
                <svg className={`w-4 h-4 transition-transform text-white ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-md shadow-lg z-20">
                    <ul>
                        <li onClick={() => handleSetLanguage('es')} className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer text-white">
                            <SpainFlag /> <span>Español</span>
                        </li>
                        <li onClick={() => handleSetLanguage('en')} className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer text-white">
                            <USFlag /> <span>English</span>
                        </li>
                        <li onClick={() => handleSetLanguage('pt')} className="flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer text-white">
                            <BrazilFlag /> <span>Português</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};


const Header: React.FC<HeaderProps> = ({ scrollToRef }) => {
    const { t } = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navItems = [
        { name: t('nav.inicio'), ref: 'inicio'},
        { name: t('nav.experiencia'), ref: 'experiencia'},
        { name: t('nav.barrios'), ref: 'barrios'},
        { name: t('nav.desarrollos'), ref: 'desarrollos'},
        { name: t('nav.financialTools'), ref: 'financialTools'},
        { name: t('nav.referidos'), ref: 'referidos'},
        { name: t('nav.guias'), ref: 'guias'},
        { name: t('nav.blog'), ref: 'blog'},
        { name: t('nav.faq'), ref: 'faq'},
        { name: t('nav.contacto'), ref: 'contacto'},
    ];

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const handleNavClick = (refName: string) => {
        scrollToRef(refName);
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 bg-gray-900 border-b border-gray-700 z-50">
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                                LS
                            </div>
                            <div>
                                <h1 className="font-bold text-lg text-white">LeisersonGerardo</h1>
                                <p className="text-xs text-gray-400">{t('hero.subheading')}</p>
                            </div>
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-6 items-center">
                        {navItems.map((item) => (
                            <button key={item.name} onClick={() => scrollToRef(item.ref)} className="text-gray-300 hover:text-blue-400 transition-colors">
                                {item.name}
                            </button>
                        ))}
                    </nav>
                     <div className="flex items-center">
                        <LanguageSwitcher />
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
                <div className="relative w-72 max-w-[80vw] h-full bg-gray-900 shadow-xl p-6">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-white" aria-label="Close menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <nav className="mt-16">
                        <ul className="space-y-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <button onClick={() => handleNavClick(item.ref)} className="text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors w-full text-left">
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
