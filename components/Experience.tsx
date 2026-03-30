
import React, { useState, useEffect, useRef } from 'react';
import useTranslations from '../hooks/useTranslations';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400">{subtitle}</p>
    </div>
);

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.539 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.07 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);


const Experience: React.FC = () => {
    const { t } = useTranslations();
    const testimonials = t('experience.testimonials');
    const [currentIndex, setCurrentIndex] = useState(0);
    // FIX: In a browser environment, setTimeout returns a number, not a NodeJS.Timeout object.
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)),
            5000 // Change slide every 5 seconds
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, testimonials.length]);

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
    
    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('experience.title')} subtitle={t('experience.subtitle')} />
            
            <div 
                className="max-w-4xl mx-auto relative h-80"
                onMouseEnter={() => resetTimeout()}
                onMouseLeave={() => {
                     timeoutRef.current = setTimeout(
                        () => setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)),
                        5000
                    );
                }}
            >
                <div className="overflow-hidden h-full relative">
                    {testimonials.map((testimonial: any, index: number) => (
                        <div
                            key={testimonial.id}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 h-full flex flex-col justify-center items-center text-center">
                                <StarRating rating={testimonial.rating} />
                                <blockquote className="text-xl italic text-gray-300 my-4">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="mt-2">
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-blue-400">{testimonial.deal}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Left Arrow */}
                <button onClick={goToPrev} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-20 p-2 bg-gray-700/50 hover:bg-gray-600 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                {/* Right Arrow */}
                <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-20 p-2 bg-gray-700/50 hover:bg-gray-600 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
                
                <div className="absolute bottom-[-30px] w-full flex justify-center gap-2">
                    {testimonials.map((_: any, index: number) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
