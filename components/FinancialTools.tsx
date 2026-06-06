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

interface DolarRate {
    moneda: string;
    casa: string;
    nombre: string;
    compra: number;
    venta: number;
    fechaActualizacion: string;
}

const DolarRatesWidget: React.FC = () => {
    const { t } = useTranslations();
    const [rates, setRates] = useState<DolarRate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'native' | 'iframe'>('native');

    const fetchRates = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('https://dolarapi.com/v1/dolares');
            if (!res.ok) throw new Error('Error al obtener cotizaciones');
            const data = await res.json();
            setRates(data);
        } catch (err: any) {
            console.error(err);
            setError(err.message || 'No se pudo cargar la cotización en vivo.');
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchRates();
    }, []);

    const formatDate = (dateStr: string) => {
        try {
            const date = new Date(dateStr);
            return date.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }) + ' hs';
        } catch {
            return '';
        }
    };

    const casasInteres = ['blue', 'oficial', 'bolsa', 'tarjeta'];

    return (
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col min-h-[400px]">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-white text-center sm:text-left">
                    {t('financialTools.dolarOficial.title')}
                </h3>
                
                <div className="flex bg-gray-900 rounded-lg p-0.5 border border-gray-700">
                    <button
                        onClick={() => setViewMode('native')}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                            viewMode === 'native'
                                ? 'bg-blue-600 text-white shadow'
                                : 'text-gray-400 hover:text-white'
                        }`}
                        id="btn-dolar-envivo"
                    >
                        En Vivo
                    </button>
                    <button
                        onClick={() => setViewMode('iframe')}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                            viewMode === 'iframe'
                                ? 'bg-blue-600 text-white shadow'
                                : 'text-gray-400 hover:text-white'
                        }`}
                        id="btn-dolar-iframe"
                    >
                        Iframe
                    </button>
                </div>
            </div>

            {viewMode === 'native' ? (
                <div className="flex-grow flex flex-col justify-between">
                    {loading ? (
                        <div className="flex-grow flex flex-col items-center justify-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
                            <span className="text-sm text-gray-400">Cargando cotizaciones...</span>
                        </div>
                    ) : error ? (
                        <div className="flex-grow flex flex-col items-center justify-center py-6 text-center">
                            <svg className="w-12 h-12 text-red-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                            <p className="text-sm text-red-400 mb-4">{error}</p>
                            <button
                                onClick={fetchRates}
                                className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors"
                                id="btn-retry-rates"
                            >
                                Reintentar
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-3 flex-grow flex flex-col justify-center">
                            {rates
                                .filter((r) => casasInteres.includes(r.casa))
                                .map((rate) => (
                                    <div
                                        key={rate.casa}
                                        className="bg-gray-900 border border-gray-700/50 hover:border-gray-600/80 transition-all rounded-xl p-3 flex justify-between items-center"
                                        id={`rate-card-${rate.casa}`}
                                    >
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white text-md">
                                                Dólar {rate.nombre === 'Bolsa' ? 'MEP / Bolsa' : rate.nombre}
                                            </span>
                                            <span className="text-[10px] text-gray-500">
                                                Actualizado: {formatDate(rate.fechaActualizacion)}
                                            </span>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="text-right">
                                                <span className="block text-[10px] uppercase text-gray-400 tracking-wider font-semibold">
                                                    Compra
                                                </span>
                                                <span className="text-md font-mono font-bold text-blue-400">
                                                    ${rate.compra ? Math.round(rate.compra) : '-'}
                                                </span>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-[10px] uppercase text-gray-400 tracking-wider font-semibold">
                                                    Venta
                                                </span>
                                                <span className="text-md font-mono font-bold text-green-400">
                                                    ${rate.venta ? Math.round(rate.venta) : '-'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <div className="flex justify-between items-center text-[10px] text-gray-500 pt-2 border-t border-gray-700/50">
                                <span>Fuente: DolarApi.com</span>
                                <button
                                    onClick={fetchRates}
                                    className="flex items-center gap-1 hover:text-white transition-colors"
                                    title="Actualizar cotización"
                                    id="btn-refresh-rates"
                                >
                                    <svg className="w-3.5 h-3.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.2"/>
                                    </svg>
                                    Actualizar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-full flex-grow rounded-xl overflow-hidden bg-white mt-1 border border-gray-700 min-h-[300px]">
                    <iframe
                        src="https://www.cotizacion-dolar.com.ar/recursos/recurso-dolar-hoy-compacto.php"
                        className="w-full h-full min-h-[300px]"
                        frameBorder="0"
                        scrolling="yes"
                        title={t('financialTools.dolarOficial.title')}
                        id="iframe-dolar-oficial"
                    ></iframe>
                </div>
            )}
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

                <DolarRatesWidget />
            </div>
        </div>
    );
};

export default FinancialTools;