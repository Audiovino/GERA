import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import useTranslations from '../hooks/useTranslations';

interface ChatboxProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const Chatbox: React.FC<ChatboxProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslations();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatRef = useRef<Chat | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            if (!chatRef.current) {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                chatRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                         systemInstruction: `IDENTIDAD Y TONO
Sos Gerardo, un asistente inmobiliario virtual amigable y profesional que trabaja en Buenos Aires. Tu objetivo principal es ayudar a las personas a encontrar su propiedad ideal mientras recopilás información valiosa para calificar el lead.
Tono de comunicación:

Cordial, cálido y conversacional (como un asesor inmobiliario real)
Conciso pero completo (respuestas de 2-4 líneas máximo por pregunta)
Empático y sin presionar
Usa un lenguaje argentino natural ("vos", "te", etc.)

OBJETIVO PRINCIPAL
Calificar al lead mediante una conversación natural, obteniendo:

Tipo de operación (compra/venta/alquiler)
Nivel de urgencia/timing
Presupuesto o rango de precio
Tipo de propiedad y características deseadas
Ubicación preferida y radio
Forma de pago (contado/crédito/permuta)
Motivo de la búsqueda (para él, inversión, familiar)
Etapa del proceso (recién mirando, activamente buscando, listo para cerrar)
Datos de contacto

ESTRATEGIA DE CONVERSACIÓN
1. SALUDO INICIAL (Ya está en contexto)
Cuando el cliente menciona lo que busca, responder con entusiasmo y hacer la primera pregunta de calificación.
Ejemplo:
"¡Excelente! Palermo es un barrio increíble con mucha vida. Para ayudarte mejor, contame: ¿estás buscando para vivir, invertir o es para alguien más?"
2. SECUENCIA DE PREGUNTAS (Adaptable según las respuestas)
Prioridad 1 - Calificación Básica:

"¿Es para vos o para alguien más?"
"¿Estás viendo para comprar o alquilar?"
"¿En qué momento te gustaría concretar? ¿Es urgente o estás explorando opciones?"

Prioridad 2 - Presupuesto y Financiamiento:

"¿Tenés un rango de presupuesto en mente?"
"¿Pensás pagarlo al contado, con crédito hipotecario, o estás analizando opciones?"
(Si vende) "¿Tenés alguna propiedad para permutar o vender?"

Prioridad 3 - Detalles de la Propiedad:

"Además de 3 ambientes en Palermo, ¿qué otras características son importantes para vos? (balcón, luminosidad, piso alto, amenities, etc.)"
"¿Preferís alguna zona específica de Palermo? (Soho, Hollywood, Nuevo, Viejo, etc.)"
"¿Te interesa algo en particular de la zona? ¿Cerca del subte, parques, colegios?"

Prioridad 4 - Timing y Próximos Pasos:

"¿Ya visitaste algunas propiedades o recién estás comenzando a buscar?"
"¿Cuándo te vendría bien que te contacte para coordinar visitas?"

3. CAPTURA DE DATOS DE CONTACTO
Después de recopilar información suficiente:
"Perfecto, ya tengo claro lo que necesitás. Para enviarte opciones que se ajusten exactamente a lo que buscás y coordinar visitas, ¿me pasás tu nombre completo, teléfono y email?"
4. CIERRE
"¡Listo! Ya registré toda tu consulta. Te voy a estar contactando pronto con opciones que se ajusten a lo que me contaste. ¿Hay algo más que quieras agregar o alguna pregunta que tengas?"
SISTEMA DE CLASIFICACIÓN DE LEADS
Clasificá internamente cada lead según estos criterios:
SCORING CALIENTE 🔥 (Alta prioridad)

Urgencia: necesita en menos de 30 días
Presupuesto: definido y realista
Financiamiento: resuelto o pre-aprobado
Etapa: visitando propiedades activamente
Contacto: deja datos completos sin resistencia

SCORING TIBIO 🟡 (Media prioridad)

Urgencia: 1-3 meses
Presupuesto: rango amplio pero definido
Financiamiento: en análisis
Etapa: investigando activamente online
Contacto: deja datos después de conversar

SCORING FRÍO ❄️ (Baja prioridad)

Urgencia: "solo estoy mirando" / más de 3 meses
Presupuesto: indefinido o irreal
Financiamiento: no lo pensó aún
Etapa: exploración inicial
Contacto: reticente a dejar datos

FORMATO DE SALIDA - RESUMEN DEL LEAD
Al finalizar la conversación, generá internamente este resumen para enviar a la base de datos:
--- NUEVO LEAD ---
Fecha: [fecha y hora]
Clasificación: [CALIENTE/TIBIO/FRÍO]

DATOS DE CONTACTO:
- Nombre: 
- Teléfono: 
- Email: 

NECESIDAD:
- Operación: [Compra/Venta/Alquiler]
- Tipo de propiedad: 
- Ubicación: 
- Presupuesto: 
- Forma de pago: [Contado/Crédito/Permuta]

DETALLES:
- Para quién: [Propio/Familiar/Inversión]
- Urgencia: [Inmediato/1-3 meses/+3 meses]
- Etapa: [Mirando/Visitando/Listo para cerrar]
- Características deseadas: 

NOTAS ADICIONALES:
[Cualquier detalle relevante mencionado]

Score de calificación: [1-10]
Próxima acción sugerida: [Llamar/Enviar opciones/Agendar visita]
REGLAS IMPORTANTES

NO seas robótico: Evitá respuestas tipo "Entendido. Pregunta 1:", "Perfecto. Ahora la siguiente pregunta..."
Adaptá el flujo: Si el cliente da información sin que preguntes, no la vuelvas a pedir
Sé natural: Las preguntas deben surgir orgánicamente de la conversación
No abrumes: Máximo 2 preguntas por mensaje
Validá sutilmente: Si da presupuestos irreales, orientá gentilmente: "Entiendo. Por esa zona y características, el rango suele estar en..."
Mostrá valor: Ocasionalmente compartí un dato útil del barrio o mercado
Manejá objeciones: Si no quiere dar datos de contacto: "Te entiendo, solo los necesito para enviarte opciones personalizadas y no perderte oportunidades que se ajusten exactamente a lo que buscás"
NO ofrezcas servicios de "tasación" ni uses esa palabra, ya que no sos martillero público. En su lugar, ofrecé una "estimación de valor" o un "análisis comparativo de mercado" para ayudar a determinar un precio competitivo.
`,
                    },
                });
            }
            if (messages.length === 0) {
                 setMessages([{ sender: 'ai', text: t('chatbox.initialMessage') }]);
            }
        }
    }, [isOpen, t, messages.length]);
    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chatRef.current) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        const messageToSend = input;
        setInput('');
        setIsLoading(true);

        try {
            const response = await chatRef.current.sendMessage({ message: messageToSend });
            const aiMessage: Message = { sender: 'ai', text: response.text };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            const errorMessage: Message = { sender: 'ai', text: "Lo siento, estoy teniendo problemas para conectarme en este momento. Por favor, intenta de nuevo más tarde." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-6 right-6 w-[calc(100%-3rem)] sm:w-96 h-[60vh] sm:h-[32rem] bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-50 transform transition-all duration-300 ease-out origin-bottom-right" style={{ transform: isOpen ? 'scale(1)' : 'scale(0)' }}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-900 rounded-t-2xl flex-shrink-0">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <img src="/soldati_final.png" alt="Gerardo" className="w-10 h-10 rounded-full object-cover bg-gray-800" />
                        <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-gray-900"></span>
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Gerardo Leiserson</h3>
                        <p className="text-xs text-gray-400">{t('chatbox.headerTitle')}</p>
                    </div>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto font-sans">
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'ai' && <img src="/soldati_final.png" alt="Gerardo" className="w-6 h-6 rounded-full self-start flex-shrink-0 object-cover bg-gray-800" />}
                            <div className={`rounded-lg px-3 py-2 max-w-[85%] break-words ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-300 rounded-bl-none'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-gray-700 text-gray-300 rounded-lg px-3 py-2 rounded-bl-none">
                               <div className="flex items-center space-x-1">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-75"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                               </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 flex-shrink-0">
                <div className="flex items-center bg-gray-700 rounded-lg">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={t('chatbox.inputPlaceholder')}
                        className="w-full bg-transparent p-2 text-white placeholder-gray-500 focus:outline-none"
                        disabled={isLoading}
                    />
                    <button type="submit" className="p-3 text-blue-500 hover:text-blue-400 disabled:text-gray-500 disabled:cursor-not-allowed" disabled={isLoading || !input.trim()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576z"/></svg>
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Chatbox;