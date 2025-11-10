import React from 'react';

// Card component to render parts of a guide
const GuideSectionCard = ({ t, title, question, items, important, tip, warning, data, most_expensive, most_accessible, most_accessible_label, most_accessible_value, cost_items, important_title }: any) => (
    <div className="mb-8 p-6 bg-gray-700/50 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        {question && <p className="text-lg text-blue-300 mb-4">{question}</p>}
        
        {Array.isArray(items) && (
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            {items.map((item: any, index: number) => 
              typeof item === 'string' ? <li key={index}>{item}</li> : 
              <li key={index}><strong>{item.label}</strong> {item.value} {item.description && <em className="text-gray-400 text-sm">({item.description})</em>}</li>
            )}
          </ul>
        )}
  
        {Array.isArray(data) && (
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            {data.map((item: string, index: number) => <li key={index}>{item}</li>)}
          </ul>
        )}
  
        {data && typeof data === 'object' && !Array.isArray(data) && (
          <div className="grid grid-cols-2 gap-4 text-center mb-4">
              {data.avg_price && <div className="bg-gray-800 p-3 rounded-lg"><div className="text-xs text-gray-400">Precio Promedio</div><div className="text-xl font-bold text-white">{data.avg_price} <span className="text-green-400 text-sm">{data.avg_change}</span></div></div>}
              {data.studio && <div className="bg-gray-800 p-3 rounded-lg"><div className="text-xs text-gray-400">Monoambiente</div><div className="text-xl font-bold text-white">{data.studio}</div></div>}
              {data.one_bed && <div className="bg-gray-800 p-3 rounded-lg"><div className="text-xs text-gray-400">2 Ambientes</div><div className="text-xl font-bold text-white">{data.one_bed}</div></div>}
              {data.two_bed && <div className="bg-gray-800 p-3 rounded-lg"><div className="text-xs text-gray-400">3 Ambientes</div><div className="text-xl font-bold text-white">{data.two_bed}</div></div>}
              {data.increase && <div className="bg-gray-800 p-3 rounded-lg"><div className="text-xs text-gray-400">Aumento Anual (Pesos)</div><div className="text-xl font-bold text-white">{data.increase}</div></div>}
              {data.inflation && <div className="bg-gray-800 p-3 rounded-lg"><div className="text-xs text-gray-400">Inflación (2024)</div><div className="text-xl font-bold text-white">{data.inflation}</div></div>}
          </div>
        )}
  
        {most_expensive && (
            <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Barrios más caros:</h4>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                    {most_expensive.map((item: string, i: number) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        )}
        
        {most_accessible && (
             <p className="text-sm text-gray-300"><strong className="text-white">{most_accessible_label || "Barrios más accesibles:"}</strong> {most_accessible_value || most_accessible}</p>
        )}
  
        {important_title && <h4 className="font-semibold text-white mt-4 mb-2">{important_title}</h4>}
  
        {cost_items && (
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            {cost_items.map((item: string, index: number) => <li key={index}>{item}</li>)}
          </ul>
        )}
        
        {important && <div className="mt-4 p-4 rounded-lg border-l-4 bg-blue-900/50 border-blue-500 text-gray-300"><strong>{t('guides.content.important')}:</strong> {important}</div>}
        {tip && <div className="mt-4 p-4 rounded-lg border-l-4 bg-yellow-900/50 border-yellow-500 text-gray-300"><strong>{t('guides.content.tip')}:</strong> {tip}</div>}
        {warning && <div className="mt-4 p-4 rounded-lg border-l-4 bg-red-900/50 border-red-500 text-gray-300"><strong>{t('guides.content.warning')}:</strong> {warning}</div>}
    </div>
);

// Special card for "Dueño vende"
const DuenoVendeCard = ({ t, content }: any) => (
    <div className="mb-8 p-6 bg-gray-700/50 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-4">{content.subtitle}</h3>
        <h4 className="text-xl font-semibold text-blue-300 mb-4">{content.prosConsTitle}</h4>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
                <h5 className="font-bold text-green-400 mb-2">Pros</h5>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {content.pros.map((p: string) => <li key={p}>{p}</li>)}
                </ul>
            </div>
            <div>
                <h5 className="font-bold text-red-400 mb-2">Contras</h5>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {content.cons.map((c: string) => <li key={c}>{c}</li>)}
                </ul>
            </div>
        </div>
        <h4 className="text-xl font-semibold text-blue-300 mb-4">{content.stepsTitle}</h4>
        <ul className="list-decimal list-inside text-gray-300 space-y-2">
            {content.steps.map((s: string) => <li key={s}>{s}</li>)}
        </ul>
    </div>
);
  
export const getGuidesContent = (t: (key: string) => any) => {
    const contentData = t('guides.content');
    if (!contentData || typeof contentData !== 'object') return [];

    const renderGuideContent = (guideId: string) => {
        const guideContent = contentData[guideId];
        if (!guideContent) return null;

        if (guideId === 'dueno') {
            return <DuenoVendeCard t={t} content={guideContent} />;
        }

        // Filter out title, subtitle properties and render the rest as cards
        return Object.keys(guideContent)
            .filter(key => typeof guideContent[key] === 'object' && guideContent[key] !== null)
            .map((key) => {
                const cardData = guideContent[key];
                return <GuideSectionCard key={key} t={t} {...cardData} />;
            });
    };

    const cards = t('guides.cards');
    if (!Array.isArray(cards)) return [];

    return cards.map((card: { id: string; title: string; description: string }) => ({
        id: card.id,
        title: contentData[card.id]?.title || card.title,
        description: card.description,
        content: <>{renderGuideContent(card.id)}</>
    }));
};
