import React, { useState, useMemo } from 'react';
import useTranslations from '../hooks/useTranslations';
import { referralsData } from '../data/referralsData';
import { neighborhoodsData } from '../data/realEstateData';
import { Testimonial, Referral as ReferralType } from '../types';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
    </div>
);

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.539 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.07 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial }: { testimonial: { name: string; quote: string; } | undefined }) => {
    if (!testimonial) return null;
    return (
        <div className="mt-4 p-4 bg-gray-900/50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-sm italic text-gray-300">"{testimonial.quote}"</p>
            <p className="text-right text-xs font-semibold text-white mt-2">- {testimonial.name}</p>
        </div>
    );
};


const ReferralCard: React.FC<{ referral: ReferralType }> = ({ referral }) => {
    const { t } = useTranslations();
    const testimonials = t('referrals.testimonials');
    const testimonial = referral.testimonialKey ? testimonials[referral.testimonialKey] : undefined;
    
    return (
        <div className="bg-gray-700 rounded-2xl shadow-lg p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{referral.emoji}</span>
                <div>
                    <h3 className="text-xl font-bold text-white">{referral.name}</h3>
                    <p className="text-blue-400 font-semibold">{referral.specialty}</p>
                </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                {referral.rating && <StarRating rating={referral.rating} />}
                {referral.referralsCount && <span>{referral.referralsCount}+ {t('referrals.referralsCount')}</span>}
            </div>

            <TestimonialCard testimonial={testimonial} />
            
            <div className="mt-auto pt-4">
                <a 
                    href={`https://wa.me/${referral.whatsapp.replace(/\D/g, '')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full text-center block bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 8 0C3.582 0 0 3.582 0 8s3.582 8 8 8c4.418 0 8-3.582 8-8a7.854 7.854 0 0 0-2.399-5.674zM8 14.5A6.5 6.5 0 1 1 8 1.5a6.5 6.5 0 0 1 0 13zm.208-10.042c-1.332 0-2.285.83-2.67 1.525-.022.042-.045.082-.066.12l-.01.02c-.046.08-.09.162-.132.242-.04.078-.075.15-.104.22h-1.17v-.07c.02-.37.16-1.045.54-1.688C5.55 3.375 6.64 2.5 8.21 2.5c1.575 0 2.76.84 2.76 2.22 0 1.13-.685 1.77-1.325 2.22-.534.37-.87.65-.87 1.1v.175h-1.12v-.18c0-.425.28-.7.71-1.02.43-.32.925-.61 1.05-.74.32-.33.58-.7.58-1.24 0-.74-.5-1.24-1.24-1.24zM7.125 11.5v-1.12h1.75v1.12z"/></svg>
                    {t('referrals.contact')}
                </a>
            </div>
        </div>
    );
};

interface ReferralsProps {
  openFormModal: (url: string) => void;
}

const Referrals: React.FC<ReferralsProps> = ({ openFormModal }) => {
    const { t } = useTranslations();
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('palermo');
    const disclaimer = t('referrals.disclaimer');
    
    const availableNeighborhoods = useMemo(() => {
        const referralHoods = new Set(Object.keys(referralsData));
        return neighborhoodsData.filter(hood => referralHoods.has(hood.id));
    }, []);

    const filteredReferrals = useMemo(() => {
        if (selectedNeighborhood === 'all') {
            return Object.values(referralsData).flat();
        }
        return referralsData[selectedNeighborhood] || [];
    }, [selectedNeighborhood]);

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('referrals.title')} subtitle={t('referrals.subtitle')} />
            
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                 <button 
                    onClick={() => setSelectedNeighborhood('all')}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedNeighborhood === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                >
                    {t('referrals.allNeighborhoods')}
                </button>
                {availableNeighborhoods.map(hood => (
                    <button 
                        key={hood.id}
                        onClick={() => setSelectedNeighborhood(hood.id)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selectedNeighborhood === hood.id ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                    >
                        {hood.name}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredReferrals.length > 0 ? (
                    filteredReferrals.map((referral, index) => (
                        <ReferralCard key={`${referral.name}-${index}`} referral={referral} />
                    ))
                ) : (
                    <p className="text-gray-400 col-span-full text-center">{t('referrals.noReferrals')}</p>
                )}
            </div>

            <div className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-3">{disclaimer.title}</h4>
                        <p className="text-gray-400">{disclaimer.text}</p>
                    </div>

                    <div className="bg-gray-700 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="flex-shrink-0">
                            <a href={disclaimer.ctaLink} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                                <img 
                                    src={disclaimer.qrCodeUrl} 
                                    alt="QR Code" 
                                    className="w-48 h-48 rounded-lg bg-white p-1"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        console.error(`Failed to load QR code image: ${disclaimer.qrCodeUrl}`);
                                        target.src = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23e2e8f0%22%2F%3E%3Ctext%20x%3D%2250%22%20y%3D%2250%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%20fill%3D%22%234a5568%22%3EQR%20Error%3C%2Ftext%3E%3C%2Fsvg%3E';
                                    }}
                                />
                            </a>
                            <p className="text-xs text-gray-400 mt-2">{disclaimer.ctaQrText}</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-1">{disclaimer.ctaTitle}</h4>
                            <p className="text-sm text-gray-300 mb-4">{disclaimer.ctaSubtitle}</p>
                            <div className="flex flex-col gap-4 items-center md:items-start">
                                <button 
                                    onClick={() => openFormModal(disclaimer.formUrl)}
                                    className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 mr-2" viewBox="0 0 16 16">
                                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
                                    </svg>
                                    {disclaimer.ctaButton}
                                </button>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(disclaimer.shareMessage)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-600 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 mr-2" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.1-.836-.414-1.077-.484-.24-.07-.414-.1-.588.1-.174.2-.646.812-.792.977-.146.165-.293.184-.54.084-.247-.1-.95-.353-1.81-1.127-.662-.596-1.106-1.32-1.23-1.545-.124-.225-.015-.345.088-.45.103-.1.224-.26.336-.398.112-.137.149-.224.224-.373.075-.148.038-.272-.012-.372-.05-.1-.45-.96-.616-1.32-.165-.359-.333-.294-.45-.294h-.372c-.124 0-.32.05-.494.247-.174.2-.646.787-.646 1.902 0 1.115.66 2.201.75 2.347.09.147 1.395 2.132 3.38 2.992.472.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943s-.197-.15-.394-.257z"/>
                                    </svg>
                                    {disclaimer.shareButton}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Referrals;