

import React, { useState, useRef, useEffect } from 'react';
import useTranslations from '../hooks/useTranslations';
import { getGuidesContent } from '../data/guidesContent';

// SECTION HEADER
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400">{subtitle}</p>
    </div>
);

// GUIDE MODAL
interface GuideModalProps {
  guideId: string;
  onClose: () => void;
}

const GuideModal: React.FC<GuideModalProps> = ({ guideId, onClose }) => {
    const { t } = useTranslations();
    const guidesContent = getGuidesContent(t);
    // FIX: Use .find() to get the guide object from the array by ID, instead of incorrect property access.
    const guide = guidesContent.find(g => g.id === guideId);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!guide) return null;

    const handleDownload = () => {
        const contentNode = contentRef.current;
        if (!contentNode) return;
        
        const printContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>${guide.title}</title>
              <script src="https://cdn.tailwindcss.com"></script>
              <style>
                @media print {
                  @page { margin: 1in; }
                  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                }
                body { font-family: sans-serif; }
                .guide-section { border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1.5rem; margin-bottom: 2rem; background-color: #f9fafb; }
                .guide-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; color: #111827; }
                .guide-list { list-style-position: inside; }
                .guide-list-item { display: flex; align-items: flex-start; margin-bottom: 0.5rem; }
                .guide-list-item-icon { margin-right: 0.5rem; color: #2563eb; }
              </style>
            </head>
            <body>
              ${contentNode.innerHTML}
            </body>
          </html>
        `;

        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(printContent);
            printWindow.document.close();
            setTimeout(() => {
                printWindow.print();
            }, 250);
        }
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">{guide.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl leading-none">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 text-gray-300" ref={contentRef}>
          {guide.content}
        </div>

        <div className="p-4 border-t border-gray-700 flex justify-end gap-4">
          <button onClick={onClose} className="px-5 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
            Cerrar
          </button>
          <button onClick={handleDownload} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg>
            Descargar PDF
          </button>
        </div>
      </div>
    </div>
  );
}


// GUIDE CARD
// FIX: Changed component to React.FC to properly type props and handle React-specific props like `key`.
const GuideCard: React.FC<{ icon: React.ReactNode, title: string, description: string, gradient: string, downloadText: string, onPreview: () => void }> = ({ icon, title, description, gradient, downloadText, onPreview }) => (
    <div className="bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <div className={`relative p-8 text-white ${gradient}`}>
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative">
                <div className="bg-white/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <p className="text-gray-300 mb-6 flex-grow">{description}</p>
            <button 
                onClick={onPreview}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mt-auto"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-4V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                <span>{downloadText}</span>
            </button>
        </div>
    </div>
);


// MAIN GUIDES COMPONENT
const Guides: React.FC = () => {
    const { t } = useTranslations();
    const cards = t('guides.cards');
    const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L8.707 1.5Z"/><path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708z"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M4 11H2v3h2zm5-4H7v7h2zm5-5h-2v12h2zM12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m-5 4a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1M3 8a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M11 1.5a.5.5 0 0 1 .5.5v1.293L12.854 2.146a.5.5 0 0 1 .708.708L12.207 4H13.5a.5.5 0 0 1 .5.5v1.293l1.354-1.353a.5.5 0 0 1 .708.708L14.207 6H15.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1.293L13.146 5.354a.5.5 0 0 1-.708-.708L13.793 6H12.5a.5.5 0 0 1-.5-.5V4.207l-1.354 1.353a.5.5 0 0 1-.708-.708L11.293 3.5H10.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5zM10 5.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5zm-3 4a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5z"/><path d="M4 1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5zM3 4.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5z"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.763-1.158 1.133-.37.37-.74.74-1.133 1.158-.08.08-.158.162-.234.242-.05.05-.222.333-.484.743-.65 1.185-2.892 2.39-3.19 3.717-.29.292-.636.55-.996.763.291-.328.696-.688 1.05-.996.354-.308.718-.688.996-1.05.278-.36.636-.787.996-1.158.36-.37.787-.74 1.158-1.133.37-.393.74-.787 1.133-1.158.393-.37.787-.74 1.158-.996.37-.278.787-.636 1.158-.996.37-.36.74-.718.996-1.05.258-.332.688-.718.996-1.05.308-.354.688-.718.996-1.05.292-.29.55-.636.763-.996-.328-.291-.688-.696-1.05-.996-.308-.354-.688-.718-1.05-.996-.36-.278-.787-.636-1.158-.996-.37-.37-.74-.787-1.133-1.158-.393-.37-.787-.74-1.158-1.133-.37-.37-.74-.787-.996-1.158-.278-.36-.636-.787-.996-1.158a7 7 0 0 0-.688-.996 7 7 0 0 0-.996-.688z"/></svg>
    ];

    const gradients = [
        "bg-gradient-to-br from-green-400 to-teal-500",
        "bg-gradient-to-br from-blue-500 to-indigo-600",
        "bg-gradient-to-br from-purple-500 to-pink-500",
        "bg-gradient-to-br from-orange-500 to-red-500",
        "bg-gradient-to-br from-cyan-500 to-blue-600"
    ];

    return (
        <div className="container mx-auto">
            <SectionHeader title={t('guides.title')} subtitle={t('guides.subtitle')} />
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {cards.map((card: {id: string, title: string, description: string}, index: number) => (
                    <GuideCard 
                        key={card.id} 
                        icon={icons[index]} 
                        title={card.title} 
                        description={card.description} 
                        gradient={gradients[index]} 
                        downloadText={t('guides.download')}
                        onPreview={() => setSelectedGuideId(card.id)}
                    />
                ))}
            </div>

            {selectedGuideId && (
                <GuideModal 
                    guideId={selectedGuideId} 
                    onClose={() => setSelectedGuideId(null)}
                />
            )}
        </div>
    );
};

export default Guides;