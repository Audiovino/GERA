
import React, { useState } from 'react';
import useTranslations from '../hooks/useTranslations';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400">{subtitle}</p>
    </div>
);

// FIX: Changed component to React.FC to properly type props.
const AccordionItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-700 rounded-2xl shadow-md mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left p-6 font-semibold text-lg text-white"
            >
                <span>{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-600" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="p-6 pt-0 text-gray-300">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const { t } = useTranslations();
    const questions = t('faq.questions');

    return (
        <div className="container mx-auto max-w-4xl">
            <SectionHeader title={t('faq.title')} subtitle={t('faq.subtitle')} />
            <div>
                {questions.map((item: {q: string, a: string}) => (
                    // FIX: Use a stable key `item.q` instead of `index`.
                    <AccordionItem key={item.q} question={item.q} answer={item.a} />
                ))}
            </div>
        </div>
    );
};

export default Faq;
