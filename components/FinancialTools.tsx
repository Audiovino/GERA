import React, { useState } from 'react';
import useTranslations from '../hooks/useTranslations';
import CostOfLiving from './CostOfLiving';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
    </div>
);

const CurrencyConverter: React.FC = () => {
    const { t } = useTranslations();
    const rate = 1250;
    const [amount1, setAmount1] = useState('125000');
    const [amount2, setAmount2] = useState('100');
    const [currency1, setCurrency1] = useState('ARS');
    const [currency2, setCurrency2] = useState('USD');

    const handleAmountChange = (
        value: string,
        from: 'amount1' | 'amount2'
    ) => {
        const numValue = parseFloat(value);
        if (value === '' || isNaN(numValue)) {
            setAmount1('');
            setAmount2('');
            if (from === 'amount1') setAmount1(value);
            else setAmount2(value);
            return;
        }

        if (from === 'amount1') {
            setAmount1(value);
            if (currency1 === 'ARS') {
                setAmount2((numValue / rate).toFixed(2));
            } else { // currency1 is USD
                setAmount2((numValue * rate).toFixed(2));
            }
        } else { // from amount2
            setAmount2(value);
            if (currency2 === 'ARS') {
                setAmount1((numValue / rate).toFixed(2));
            } else { // currency2 is USD
                setAmount1((numValue * rate).toFixed(2));
            }
        }
    };
    
    const swapCurrencies = () => {
        setCurrency1(currency2);
        setCurrency2(currency1);
        setAmount1(amount2);
        setAmount2(amount1);
    };
    
    return (
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-4 text-center">{t('financialTools.converter.title')}</h3>
            <div className="space-y-4 flex-grow flex flex-col justify-center">
                <div className="bg-gray-900 p-3 rounded-lg flex items-center">
                    <div className="flex items-center space-x-2 mr-4 flex-shrink-0">
                        <span className="text-2xl">{currency1 === 'ARS' ? '🇦🇷' : '🇺🇸'}</span>
                        <span className="font-semibold text-white">{currency1}</span>
                    </div>
                    <input
                        type="number"
                        value={amount1}
                        onChange={(e) => handleAmountChange(e.target.value, 'amount1')}
                        className="w-full bg-transparent text-white text-right font-semibold text-xl focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                </div>
                
                <div className="flex justify-center">
                    <button onClick={swapCurrencies} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-blue-400" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/></svg>
                    </button>
                </div>

                <div className="bg-gray-900 p-3 rounded-lg flex items-center">
                     <div className="flex items-center space-x-2 mr-4 flex-shrink-0">
                        <span className="text-2xl">{currency2 === 'ARS' ? '🇦🇷' : '🇺🇸'}</span>
                        <span className="font-semibold text-white">{currency2}</span>
                    </div>
                    <input
                        type="number"
                        value={amount2}
                        onChange={(e) => handleAmountChange(e.target.value, 'amount2')}
                        className="w-full bg-transparent text-white text-right font-semibold text-xl focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                </div>
            </div>
             <p className="text-xs text-gray-500 text-center mt-4">{t('financialTools.converter.disclaimer').replace('{rate}', rate.toLocaleString())}</p>
        </div>
    );
};

const FinancialTools: React.FC = () => {
    const { t } = useTranslations();

    return (
        <div className="container mx-auto max-w-7xl">
            <SectionHeader title={t('financialTools.title')} subtitle={t('financialTools.subtitle')} />
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                
                <CostOfLiving />

                <CurrencyConverter />

                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col min-h-[400px]">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">{t('financialTools.dolarOficial.title')}</h3>
                    <div className="w-full flex-grow rounded-lg overflow-hidden bg-white">
                        <iframe
                            src="https://www.dolaroficial.com.ar/"
                            className="w-full h-full"
                            frameBorder="0"
                            scrolling="yes"
                            title={t('financialTools.dolarOficial.title')}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialTools;