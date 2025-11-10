
import React, { useRef, useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Neighborhoods from './components/Neighborhoods';
import TopNeighborhoods from './components/TopNeighborhoods';
import Developments from './components/Developments';
import Guides from './components/Guides';
import Blog from './components/Blog';
import Faq from './components/Faq';
import AiAssistant from './components/AiAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChatButton from './components/FloatingChatButton';
import Chatbox from './components/Chatbox';
import FinancialTools from './components/FinancialTools';
import Referrals from './components/Referrals';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import GoogleFormModal from './components/GoogleFormModal';

const App: React.FC = () => {
  const refs: { [key: string]: React.RefObject<HTMLElement> } = {
    inicio: useRef<HTMLElement>(null),
    experiencia: useRef<HTMLElement>(null),
    barrios: useRef<HTMLElement>(null),
    desarrollos: useRef<HTMLElement>(null),
    financialTools: useRef<HTMLElement>(null),
    referidos: useRef<HTMLElement>(null),
    guias: useRef<HTMLElement>(null),
    blog: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    contacto: useRef<HTMLElement>(null),
  };

  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [formUrl, setFormUrl] = useState('');

  const openFormModal = (url: string) => {
    setFormUrl(url);
    setIsFormModalOpen(true);
  };

  const scrollToRef = (refName: string) => {
    refs[refName]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('main > section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });

    // Hash link handling
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && refs[hash]) {
        // Use a slight delay to ensure the page has settled, especially on initial load.
        setTimeout(() => {
          refs[hash].current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };
    
    handleHashChange(); // For initial load
    window.addEventListener('hashchange', handleHashChange); // For subsequent hash changes
    
    return () => {
        sections.forEach(section => {
            observer.unobserve(section);
        });
        window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  return (
    <LanguageProvider>
      <div className="bg-gray-900 text-gray-300 font-sans">
        <Header scrollToRef={scrollToRef} />
        <main>
          <section ref={refs.inicio}>
            <Hero scrollToContact={() => scrollToRef('contacto')} />
          </section>

          <section ref={refs.experiencia} className="py-20 px-4 md:px-8 bg-gray-900">
            <Experience />
          </section>

          <section ref={refs.barrios} className="py-20 px-4 md:px-8 bg-gray-900">
            <TopNeighborhoods />
            <div className="mt-20">
              <Neighborhoods />
            </div>
          </section>

          <section ref={refs.desarrollos} className="py-20 px-4 md:px-8 bg-gray-800">
            <Developments />
          </section>

          <section ref={refs.financialTools} className="py-20 px-4 md:px-8 bg-gray-800">
            <FinancialTools />
          </section>

          <section ref={refs.referidos} className="py-20 px-4 md:px-8 bg-gray-900">
            <Referrals openFormModal={openFormModal} />
          </section>

          <section ref={refs.guias} className="py-20 px-4 md:px-8 bg-gray-800">
            <Guides />
          </section>

          <section ref={refs.blog} className="py-20 px-4 md:px-8 bg-gray-900">
            <Blog />
          </section>

          <section ref={refs.faq} className="py-20 px-4 md:px-8 bg-gray-800">
            <Faq />
          </section>

          <section className="py-8 px-4 md:px-8 bg-gray-900">
            <AiAssistant onOpenChat={() => setIsChatboxOpen(true)} />
          </section>

          <section ref={refs.contacto} className="py-20 px-4 md:px-8 bg-gray-800">
            <Contact />
          </section>
        </main>

        <Footer />
        <FloatingChatButton onOpenChat={() => setIsChatboxOpen(true)} />
        <FloatingWhatsAppButton />
        <Chatbox isOpen={isChatboxOpen} onClose={() => setIsChatboxOpen(false)} />
        <GoogleFormModal
          isOpen={isFormModalOpen}
          onClose={() => setIsFormModalOpen(false)}
          formUrl={formUrl}
        />
      </div>
    </LanguageProvider>
  );
};

export default App;
