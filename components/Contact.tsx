
import React from 'react';
import useTranslations from '../hooks/useTranslations';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400">{subtitle}</p>
    </div>
);


const Contact: React.FC = () => {
    const { t } = useTranslations();
    
    const contactInfo = [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-500" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.1-.836-.414-1.077-.484-.24-.07-.414-.1-.588.1-.174.2-.646.812-.792.977-.146.165-.293.184-.54.084-.247-.1-.95-.353-1.81-1.127-.662-.596-1.106-1.32-1.23-1.545-.124-.225-.015-.345.088-.45.103-.1.224-.26.336-.398.112-.137.149-.224.224-.373.075-.148.038-.272-.012-.372-.05-.1-.45-.96-.616-1.32-.165-.359-.333-.294-.45-.294h-.372c-.124 0-.32.05-.494.247-.174.2-.646.787-.646 1.902 0 1.115.66 2.201.75 2.347.09.147 1.395 2.132 3.38 2.992.472.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943s-.197-.15-.394-.257z"/></svg>, label: t('contact.info.whatsapp'), value: '+54 9 11 6360-1511', href: 'https://wa.me/5491163601511' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-red-500" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zM16 4.697v7.104l-5.803-3.558z"/></svg>, label: t('contact.info.email'), value: 'gerardoleiserson@gmail.com', href: 'mailto:gerardoleiserson@gmail.com' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-500" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>, label: t('contact.info.location'), value: t('contact.info.locationValue'), href: null },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-purple-500" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg>, label: t('contact.info.hours'), value: t('contact.info.hoursValue'), href: null }
    ];

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />
            <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 bg-gray-700 p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6 text-white">{t('contact.form.title')}</h3>
                    <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.name')} *</label>
                                <input type="text" placeholder={t('contact.form.namePlaceholder')} className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.email')} *</label>
                                <input type="email" placeholder={t('contact.form.emailPlaceholder')} className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.phone')}</label>
                                <input type="tel" placeholder={t('contact.form.phonePlaceholder')} className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.inquiryType')}</label>
                                <select className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-white">
                                    <option>{t('contact.form.inquiryOptions.buy')}</option>
                                    <option>{t('contact.form.inquiryOptions.sell')}</option>
                                    <option>{t('contact.form.inquiryOptions.invest')}</option>
                                    <option>{t('contact.form.inquiryOptions.other')}</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.message')} *</label>
                            <textarea placeholder={t('contact.form.messagePlaceholder')} rows={4} maxLength={500} className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                            <p className="text-xs text-right text-gray-500">{t('contact.form.charCount')}</p>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/></svg>
                            <span>{t('contact.form.submit')}</span>
                        </button>
                    </form>
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-gray-700 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-white">{t('contact.info.title')}</h3>
                        <div className="space-y-4">
                            {contactInfo.map(item => (
                                <div key={item.label} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">{item.icon}</div>
                                    <div>
                                        <p className="font-semibold text-white">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 underline break-all">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-300">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="bg-gray-700 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-white">{t('contact.quickActions.title')}</h3>
                        <div className="space-y-4">
                           <a href="https://calendly.com/gerardoleiserson" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">{t('contact.quickActions.schedule')}</a>
                           <a href="#referidos" className="block text-center w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">{t('contact.quickActions.join')}</a>
                           <a href="tel:+5491163601511" className="block text-center w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">{t('contact.quickActions.call')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
