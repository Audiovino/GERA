import React from 'react';
import useTranslations from '../hooks/useTranslations';

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mx-auto mb-2 text-blue-400">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mx-auto mb-2 text-purple-400">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);


const CostOfLiving: React.FC = () => {
    const { t } = useTranslations();

    const summary = {
        family: { ars: 3844675, usd: 2824 },
        single: { ars: 1698886, usd: 1248 }
    };
    
    return (
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-4 text-center">{t('financialTools.costOfLiving.title')}</h3>
            <div className="space-y-4 flex-grow flex flex-col justify-center">

                <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center">
                    <UsersIcon />
                    <h4 className="text-md text-blue-300 mb-1">{t('financialTools.costOfLiving.family')}</h4>
                    <p className="text-2xl font-bold text-white mb-1">${summary.family.usd.toLocaleString()}</p>
                    <p className="text-xs text-blue-400">ARS ${summary.family.ars.toLocaleString()} / mes</p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center">
                    <UserIcon />
                    <h4 className="text-md text-purple-300 mb-1">{t('financialTools.costOfLiving.single')}</h4>
                    <p className="text-2xl font-bold text-white mb-1">${summary.single.usd.toLocaleString()}</p>
                    <p className="text-xs text-purple-400">ARS ${summary.single.ars.toLocaleString()} / mes</p>
                </div>

            </div>
            <div className="text-center mt-4">
                 <a 
                    href="https://www.expatistan.com/es/costo-de-vida/buenos-aires?currency=USD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {t('financialTools.costOfLiving.viewDetails')}
                </a>
                <p className="text-xs text-gray-500 mt-2">
                    <a href="https://www.expatistan.com/es/costo-de-vida/buenos-aires?currency=USD" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {t('financialTools.costOfLiving.source')}
                    </a>
                     • {t('financialTools.costOfLiving.updated')}
                </p>
            </div>
        </div>
    );
};

export default CostOfLiving;