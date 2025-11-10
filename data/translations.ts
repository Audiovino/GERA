
import { Translations } from '../types';

// FIX: Extracted 'es' translations to a separate const to avoid self-reference in object literal.
const es = {
  nav: {
    inicio: 'Inicio',
    experiencia: 'Experiencia',
    barrios: 'Barrios',
    desarrollos: 'Desarrollos',
    financialTools: 'Herramientas',
    referidos: 'Mis Referidos',
    guias: 'Guías',
    blog: 'Blog',
    faq: 'FAQ',
    contacto: 'Contacto',
  },
  hero: {
    subheading: 'MARKETING INMOBILIARIO',
    heading: 'Gerardo Leiserson',
    description: 'Te ayudo a encontrar la propiedad de tus sueños y a navegar el mercado inmobiliario de Buenos Aires con confianza y conocimiento experto.',
    ctaAppointment: 'Agendar Reunión',
    ctaWhatsapp: 'Contactar por WhatsApp',
    talkWithUs: '¡Hablemos!'
  },
  experience: {
      title: 'Mi Experiencia a Tu Servicio',
      subtitle: 'Transformando transacciones en relaciones duraderas.',
      cards: [
          {
              title: 'Conocimiento Profundo del Mercado',
              description: 'Análisis constante de tendencias y valores para asegurar la mejor inversión y el precio justo en cada operación.',
          },
          {
              title: 'Negociación Estratégica',
              description: 'Habilidad y experiencia para defender tus intereses, logrando acuerdos beneficiosos y cierres exitosos.',
          },
          {
              title: 'Enfoque Personalizado',
              description: 'Entiendo que cada cliente es único. Mi servicio se adapta a tus necesidades, asegurando una experiencia transparente y sin estrés.',
          },
      ],
  },
  neighborhoods: {
      title: 'Explorá los Barrios de Buenos Aires',
      subtitle: 'Descubrí lo que cada barrio tiene para ofrecer. Seleccioná un barrio para ver sus puntos de interés o buscá una dirección para encontrar lugares cercanos.',
      poiTitle: 'Puntos de Interés en',
      poiTitleNearby: 'Puntos de Interés Cercanos',
      poiCategories: {
          all: 'Todos',
          food: 'Gastronomía',
          shopping: 'Compras',
          culture: 'Cultura',
          health: 'Salud',
          education: 'Educación',
      },
      visitWebsite: 'Visitar sitio web',
      clearSearch: 'Limpiar búsqueda',
  },
   developments: {
      title: 'Mapa de Desarrollos',
      subtitle: 'Explorá los últimos emprendimientos inmobiliarios en construcción y en pozo en Buenos Aires.',
      allNeighborhoods: 'Todos los Barrios',
      priceFrom: 'Desde USD',
      status: 'Estado',
      bedrooms: 'Dorms',
      surface: 'Superficie',
      viewProject: 'Ver Proyecto',
  },
  topNeighborhoods: {
      title: 'Barrios en Demanda',
      subtitle: 'Descubrí las zonas más buscadas de Buenos Aires.',
  },
  financialTools: {
      title: 'Herramientas Financieras',
      subtitle: 'Calculadoras y datos útiles para planificar tu inversión inmobiliaria en Buenos Aires.',
      converter: {
          title: 'Conversor de Moneda',
          disclaimer: 'Tasa de cambio de referencia (MEP): 1 USD ≈ {rate} ARS. Valores aproximados.',
      },
      costOfLiving: {
          title: 'Costo de Vida (Estimado)',
          family: 'Familia de 4',
          single: 'Persona Sola',
          viewDetails: 'Ver Detalle Completo',
          source: 'Fuente: Expatistan.com',
          updated: 'Actualizado 2024',
      },
      dolarOficial: {
          title: 'Cotización Dólar en Argentina',
      }
  },
  referrals: {
      title: 'Mis Referidos',
      subtitle: 'Te conecto con profesionales de primer nivel que complementan mi servicio, asegurando que cada aspecto de tu operación esté en las mejores manos.',
      selectNeighborhood: 'Filtrar por barrio:',
      allNeighborhoods: 'Todos los barrios',
      searchPlaceholder: 'Buscar por rubro o nombre...',
      contact: 'Contactar por WhatsApp',
      noReferrals: 'No hay referidos para esta selección. Probá con otro barrio o búsqueda.',
      referralsCount: 'referencias',
      viewTestimonial: 'Ver Testimonio',
      closeTestimonial: 'Ocultar Testimonio',
      refers: 'Refiere',
      shareContact: 'Recomendar',
      disclaimer: {
        title: 'INFORMACIÓN IMPORTANTE',
        text: 'Los comercios y servicios aquí referidos aparecen por voluntad propia. Ellos eligen aparecer en este sitio y ser contactados por usuarios finales.',
        ctaTitle: '¿QUERÉS APARECER EN MIS REFERIDOS?',
        ctaSubtitle: 'Completá el formulario para solicitar aparecer en nuestro directorio',
        ctaQrText: 'Escaneame para completar el formulario',
        ctaButton: 'Completar Formulario',
        ctaLink: 'https://bit.ly/48RzmUi',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe7RcXVmcDHSZ1hLb5zv4-Yk3XkCRFP1PRPY0fJNfvk_TklMQ/viewform?embedded=true',
        shareButton: 'Compartir por WhatsApp',
        shareMessage: '¡Hola! Te invito a sumarte a la red de referidos de Gerardo Leiserson. Podés registrarte acá: https://bit.ly/48RzmUi',
        qrCodeUrl: 'https://audiovino.github.io/imagenes-publicas/Formulario-qr.png'
      },
      testimonials: {
          carlosRodriguez: { 
              name: 'Carlos Rodríguez',
              quote: 'El Estudio López manejó nuestra sucesión con una profesionalidad y empatía increíbles. Nos sentimos acompañados en todo momento.'
          },
          sofiaMartinez: {
              name: 'Sofía Martínez',
              quote: 'Gerardo revolucionó nuestra estrategia de marketing. Entendió perfectamente el mercado y nos posicionó como líderes en la zona. ¡Resultados increíbles!'
          },
          anaGarcia: {
              name: 'Ana García',
              quote: 'La atención en la Clínica Dental Belgrano es de primer nivel. Me sentí segura y los resultados fueron excelentes. ¡Muy recomendados!'
          }
      }
  },
   guides: {
      title: 'Guías Inmobiliarias 2025',
      subtitle: 'Información clave y consejos prácticos para tomar las mejores decisiones.',
      download: 'Ver Guía Completa',
      cards: [
          { id: 'comprador', title: 'Guía para Compradores', description: 'Todo lo que necesitás saber para comprar tu propiedad en Buenos Aires: costos, documentos y precios de mercado.' },
          { id: 'vendedor', title: 'Guía para Vendedores', description: 'Maximizá el valor de tu propiedad con estrategias de venta, checklist de preparación y análisis de tendencias.' },
          { id: 'inversion', title: 'Guía de Inversión', description: 'Descubrí oportunidades de inversión, rentabilidad por barrio y las claves del mercado de alquileres.' },
          { id: 'dueno', title: 'Dueño Vende vs. Inmobiliaria', description: 'Analizamos los pros y contras de vender por tu cuenta o con un profesional para que elijas la mejor opción.' },
          { id: 'extranjero', title: 'Guía para Extranjeros', description: 'El proceso de compra para no residentes explicado passo a passo: requisitos, costos y consejos clave.' }
      ],
      content: {
          important: "Importante",
          tip: "Consejo",
          warning: "Atención",
          comprador: {
              title: "Guía del Comprador",
              card1_costs: {
                  title: "Costos y Comisiones de Compra",
                  question: "¿Qué costos adicionales tiene un comprador en CABA (2025)?",
                  items: [
                      { label: "Honorarios Inmobiliarios:", value: "4% + IVA", description: "Sobre el valor de la propiedad" },
                      { label: "Escribanía (Escritura):", value: "1-2%", description: "Varía según el valor" },
                      { label: "Impuesto de Sellos:", value: "1.75%", description: "Generalmente compartido" },
                      { label: "Tasas de Registro:", value: "0.2%", description: "" },
                      { label: "Certificados:", value: "~$200 USD", description: "Aproximado" }
                  ],
                  important: "Total estimado: Esperá sumar entre un 7% y 9% al precio de compra.",
                  tip: "Algunos costos, como el Impuesto de Sellos, pueden negociarse. ¡Consultame!"
              },
              card2_docs: {
                  title: "Documentación Requerida",
                  question: "¿Qué documentos necesita un comprador?",
                  items: ["DNI o Pasaporte vigente", "Constancia de CUIT/CUIL/CDI", "Justificación de fondos (requerido por ley)", "Datos personales completos"],
                  warning: "La 'Clave de Identificación' (CDI) es esencial para extranjeros sin residencia. Se tramita en AFIP."
              },
              card3_tips: {
                  title: "Consejos para Comprar",
                  question: "¿Cómo hacer una compra exitosa en 2025?",
                  items: ["Obtené una pre-aprobación de crédito si es necesario", "Visitá la propiedad en diferentes horarios", "Revisá las expensas y actas de consorcio", "Contratá un agrimensor si comprás un lote o casa"],
                  tip: "¡No te apures! El mercado está activo, pero siempre hay buenas oportunidades. Analisemos juntos las opciones."
              },
              card4_prices: {
                  title: "Precios de Referencia (m²)",
                  question: "¿Cuál es el valor promedio del m² en CABA (2025)?",
                  data: {
                      avg_price: "USD 2,155 / m²",
                      avg_change: "(+4% anual)",
                      studio: "USD 75,000 - 95,000",
                      one_bed: "USD 100,000 - 150,000",
                      two_bed: "USD 160,000 - 250,000"
                  },
                  most_expensive: ["Puerto Madero: USD 5,500/m²", "Palermo: USD 2,900/m²", "Belgrano: USD 2,700/m²"],
                  most_accessible: "Flores, Villa Urquiza, Caballito.",
                  tip: "Los precios varían mucho por ubicación, estado y amenities. Estos son promedios para darte una idea."
              }
          },
          vendedor: {
              title: "Guía del Vendedor"
          },
          inversion: {
              title: "Guía de Inversión",
              card1_roi: {
                  title: "Rentabilidad y ROI",
                  question: "¿Cuál es el retorno de inversión (ROI) promedio en CABA 2025?",
                  data: [
                      "Rentabilidad Anual (Alquiler): 4.5% - 6% en USD",
                      "Apreciación Anual (Valor): 3% - 5% en USD",
                      "ROI Total Estimado: 7.5% - 11% en USD"
                  ],
                  important_title: "Costos a considerar para el inversor:",
                  cost_items: [
                      "ABL y Aysa: ~0.5% anual",
                      "Expensas: 1-2% anual",
                      "Mantenimiento: ~1% anual"
                  ],
                  tip: "La rentabilidad es mayor en unidades pequeñas (monoambientes y 2 ambientes) bien ubicadas."
              },
              card2_checklist: {
                  title: "Checklist del Inversor",
                  question: "¿Qué analizar antes de invertir?",
                  items: [
                      "Ubicación y conectividad (subte, colectivos, avenidas)",
                      "Potencial de crecimiento del barrio",
                      "Calidad de construcción y antigüedad",
                      "Estado de las expensas y del consorcio",
                      "Demanda de alquiler en la zona",
                      "Proyectos de desarrollo urbano cercanos"
                  ],
                  important: "Una buena administración del consorcio es clave para proteger tu inversión a largo plazo."
              },
              card3_opportunities: {
                  title: "Zonas de Oportunidad",
                  question: "¿Dónde están las mejores oportunidades de inversión en 2025?",
                  items: [
                      "Villa Crespo / Chacarita: El 'nuevo Palermo', con gran potencial de revalorización.",
                      "Caballito: Alta demanda de alquiler por su ubicación céntrica y servicios.",
                      "Saavedra / Coghlan: Zonas residenciales en crecimiento, atractivas para familias.",
                      "Barracas: Distrito de diseño con desarrollos modernos y buena accesibilidad."
                  ],
                  tip: "Comprar en pozo puede ofrecer un retorno de hasta un 30% en USD, pero implica mayores riesgos. ¡Consultame para analizar proyectos!"
              },
              card4_rent: {
                  title: "Mercado de Alquileres",
                  question: "¿Cómo se comportan los precios de alquiler en CABA 2025?",
                  data: {
                      increase: "+250% anual en pesos",
                      inflation: "211%",
                      studio: "$350,000 - $450,000 ARS",
                      one_bed: "$480,000 - $600,000 ARS",
                      two_bed: "$650,000 - $850,000 ARS"
                  },
                  most_expensive: ["Palermo: $550,000 (2 amb)", "Núñez: $520,000 (2 amb)"],
                  most_accessible_label: "Barrios más accesibles:",
                  most_accessible_value: "Balvanera, San Cristóbal",
                  warning: "Tras la derogación de la Ley de Alquileres, los contratos se pactan con mayor flexibilidad. Es clave tener un buen asesoramiento legal."
              }
          },
          dueno: {
              title: "Dueño Vende vs. Inmobiliaria",
              subtitle: "Una comparación para que tomes la mejor decisión.",
              prosConsTitle: "Pros y Contras: ¿Qué camino elegir?",
              pros: [
                  "Ahorro en comisiones (potencialmente)",
                  "Control total sobre el proceso",
                  "Contacto directo con compradores"
              ],
              cons: [
                  "Menor exposición y alcance",
                  "Dificultad para fijar un precio correcto",
                  "Riesgos legais y de negociación",
                  "Inversión de tiempo y esfuerzo significativos",
                  "Filtrado de interesados poco serios"
              ],
              stepsTitle: "Pasos que cubre un profesional inmobiliario:",
              steps: [
                  "Valoración profesional del inmueble.",
                  "Estrategia de marketing y difusión en portales.",
                  "Fotografía y videos profesionales.",
                  "Filtrado y calificación de interesados.",
                  "Coordinación y gestión de visitas.",
                  "Negociación experta y defensa de tus intereses.",
                  "Asesoramiento legal y administrativo hasta el cierre."
              ]
          },
          extranjero: {
              title: "Guía para Extranjeros",
              subtitle: "Comprar una propiedad en Buenos Aires siendo no residente.",
              card1_reqs: {
                  title: "Requisitos Clave",
                  question: "¿Qué necesita un extranjero para comprar en Argentina?",
                  items: [
                      "Pasaporte vigente.",
                      "Obtener una CDI (Clave de Identificación) en AFIP. Es un trámite simple y gratuito.",
                      "Demostración del origen de los fondos (requerido por la UIF - Unidad de Información Financiera)."
                  ],
                  tip: "No necesitás ser residente para comprar una propiedad. El proceso es relativamente sencillo con el asesoramiento adecuado."
              },
              card2_steps: {
                  title: "Proceso de Compra Simplificado",
                  question: "¿Cuáles son los pasos para la compra?",
                  items: [
                      "Búsqueda y selección de la propiedad.",
                      "Realización de una oferta de compra formal (Reserva).",
                      "Firma del Boleto de Compraventa (se paga ~30% del valor).",
                      "Gestión de la transferencia de fondos a Argentina.",
                      "Firma de la Escritura traslativa de dominio ante escribano público (se paga el 70% restante)."
                  ],
                  warning: "La transferencia de fondos es un paso crítico. Es fundamental planificarlo con antelación para evitar demoras."
              },
              card3_costs: {
                  title: "Costos para Extranjeros",
                  question: "¿Los costos son diferentes para los extranjeros?",
                  items: [
                      { label: "Honorarios y Escribanía:", value: "Igual que para locales", description: "(ver Guía del Comprador)" },
                      { label: "Transferencia de Fondos:", value: "Varía", description: "Depende del banco/método" },
                      { label: "Impuestos:", value: "Los mismos", description: "No hay impuestos adicionales por ser extranjero" }
                  ],
                  tip: "Recomiendo utilizar servicios financieros especializados para la transferencia de fondos para asegurar un proceso transparente y eficiente."
              },
              card4_tips: {
                  title: "Consejos Esenciales",
                  question: "¿Qué más debería saber un comprador extranjero?",
                  items: [
                      "Contratá un escribano de confianza. Es una figura imparcial clave en el proceso.",
                      "Si no hablás español fluido, considerá un traductor público para los documentos legales.",
                      "Entendé el mercado local. Los precios y dinámicas pueden ser diferentes a los de tu país.",
                      "Planificá tus viajes para estar presente en la firma de la escritura, o tramitá un poder notarial."
                  ],
                  tip: "Estoy aquí para guiarte en cada paso, desde la obtención de tu CDI hasta la entrega de las llaves. ¡Hagámoslo fácil!"
              }
          }
      }
  },
  blog: {
      title: 'Blog Inmobiliario',
      subtitle: 'Análisis, noticias y consejos sobre el mercado de bienes raíces en Buenos Aires.',
      readMore: 'Leer más',
      posts: [
          {
              id: 'comprar-en-pozo',
              title: 'Comprar en Pozo en Argentina 2025: 5 Verdades Que Podrían Salvar Tu Inversión',
              description: 'Descubrí las 5 claves esenciales antes de comprar un departamento en pozo en Argentina. Guía actualizada 2025 con consejos de expertos sobre fideicomisos, desarrolladores y estafas inmobiliarias.',
              date: '2025-10-25',
              author: 'Gerardo Leiserson',
              tags: ['Comprar en Pozo', 'Inversión', 'Fideicomiso', 'Desarrollos'],
              content: `
                    <div>
                    <h2 class="text-3xl font-bold text-white mt-8 mb-4">¿Es Seguro Comprar un Departamento en Pozo en 2025?</h2>
                    <p class="mb-4 text-gray-300 leading-relaxed">Comprar un departamento en pozo en Argentina sigue siendo una de las formas más atractivas de acceder a la vivienda propia con precios hasta 30% más bajos que el mercado. Sin embargo, casos recientes de estafas inmobiliarias han encendido las alarmas entre inversores y compradores.</p>
                    <p class="mb-4 text-gray-300 leading-relaxed">En esta guía actualizada 2025, te revelamos las <strong>5 verdades que nadie te cuenta</strong> sobre la compra en pozo y que podrían marcar la diferencia entre una inversión exitosa y una pesadilla financiera.</p>
                    <hr class="border-gray-600 my-8"/>

                    <h2 class="text-3xl font-bold text-white mt-8 mb-4">1. Fideicomiso: Tu Mejor Protección Legal al Comprar en Pozo</h2>
                    <h3 class="text-2xl font-semibold text-blue-300 mt-6 mb-3">¿Qué es un Fideicomiso Inmobiliario?</h3>
                    <p class="mb-4 text-gray-300 leading-relaxed">El <strong>fideicomiso inmobiliario</strong> (Ley 24.441) es el mecanismo de protección más poderoso cuando comprás en pozo. Funciona como un escudo legal que separa tu inversión del patrimonio personal del desarrollador.</p>
                    <h3 class="text-2xl font-semibold text-blue-300 mt-6 mb-3">Cómo Funciona el Patrimonio Separado</h3>
                    <p class="mb-4 text-gray-300 leading-relaxed">Cuando un proyecto se estructura bajo fideicomiso:</p>
                    <ul class="list-disc list-inside space-y-2 mb-4 text-gray-300">
                        <li>El desarrollador (fiduciante) transfiere el terreno y los fondos a un administrador independiente (fiduciario).</li>
                        <li>Se crea un <strong>"patrimonio separado"</strong> legalmente blindado.</li>
                        <li>Si el desarrollador tiene problemas financieros, quiebra o es embargado, tus fondos están protegidos.</li>
                        <li>Los acreedores personales del desarrollador <strong>no pueden tocar</strong> el dinero del fideicomiso.</li>
                    </ul>
                    <div class="mt-4 p-4 rounded-lg border-l-4 bg-blue-900/50 border-blue-500 text-gray-300"><strong>💡 Consejo clave:</strong> Antes de firmar, verificá que el proyecto esté registrado como fideicomiso y solicitá la documentación legal que lo acredite.</div>

                    <hr class="border-gray-600 my-8"/>

                    <h2 class="text-3xl font-bold text-white mt-8 mb-4">2. Terreno Hipotecado: ¿Bandera Roja o Señal Verde?</h2>
                    <h3 class="text-2xl font-semibold text-blue-300 mt-6 mb-3">La Verdad Sobre las Hipotecas en Desarrollos Inmobiliarios</h3>
                    <p class="mb-4 text-gray-300 leading-relaxed">Contrario a la creencia popular, encontrar un terreno hipotecado <strong>no siempre es malo</strong>. El experto Damián Caffarella explica que muchos desarrolladores adquieren terrenos mediante <strong>"permuta por metros cuadrados"</strong>.</p>
                    <h3 class="text-2xl font-semibold text-blue-300 mt-6 mb-3">¿Qué es la Permuta por Metros Cuadrados?</h3>
                    <ul class="list-disc list-inside space-y-2 mb-4 text-gray-300">
                        <li>El desarrollador no compra el terreno con dinero.</li>
                        <li>Le ofrece al propietario original departamentos terminados como forma de pago.</li>
                        <li>La hipoteca se constituye como <strong>garantía</strong> de que el dueño original recibirá las unidades acordadas.</li>
                        <li>Indica un acuerdo formal y profesional entre las partes.</li>
                    </ul>
                    <div class="mt-4 p-4 rounded-lg border-l-4 bg-gray-700 border-gray-500 text-gray-300"><strong>ℹ️ Importante:</strong> Preguntá al desarrollador el motivo de la hipoteca. Si es por permuta, es una operatoria legítima y común en el mercado inmobiliario argentino.</div>

                    <hr class="border-gray-600 my-8"/>

                    <h2 class="text-3xl font-bold text-white mt-8 mb-4">3. Planos Aprobados: El Requisito Innegociable</h2>
                    <h3 class="text-2xl font-semibold text-blue-300 mt-6 mb-3">Por Qué los Planos Municipales Son Críticos</h3>
                    <p class="mb-4 text-gray-300 leading-relaxed">Los <strong>planos aprobados por la municipalidad</strong> son uno de los documentos más importantes antes de comprar en pozo. Sin esta aprobación, tu inversión corre riesgos catastróficos.</p>
                    <h3 class="text-2xl font-semibold text-blue-300 mt-6 mb-3">Riesgos de Comprar Sin Planos Aprobados</h3>
                    <ul class="list-disc list-inside space-y-2 mb-4 text-gray-300">
                        <li><strong>Demoras indefinidas</strong> en el inicio de obra.</li>
                        <li>Paralización total del proyecto.</li>
                        <li><strong>Modificaciones estructurales</strong> que alteren tu unidad.</li>
                        <li>Reducción de metros cuadrados o eliminación de amenities.</li>
                        <li>Pérdida total de la inversión.</li>
                    </ul>
                    <blockquote class="border-l-4 border-gray-500 pl-4 italic text-gray-400 my-4">"Esto último es central para evitar que la obra pueda ser paralizada y/o modificada a partir de exigencias del ente regulador" — José Rozados, Reporte Inmobiliario</blockquote>
                    <div class="mt-4 p-4 rounded-lg border-l-4 bg-blue-900/50 border-blue-500 text-gray-300"><strong>✅ Acción recomendada:</strong> Solicitá copia de los planos aprobados y verificá su autenticidad en la municipalidad correspondiente.</div>

                    <hr class="border-gray-600 my-8"/>

                    <h2 class="text-3xl font-bold text-white mt-8 mb-4">4. Trayectoria del Desarrollador: La Regla de las 10 Obras</h2>
                    <h3 class="text-2xl font-semibold text-blue-300 mt-6 mb-3">Cómo Evaluar a un Desarrollador Inmobiliario</h3>
                    <p class="mb-4 text-gray-300 leading-relaxed">"Investigá la trayectoria del desarrollador" es un consejo común, pero ¿qué significa en la práctica? Los expertos ofrecen una métrica clara y accionable.</p>
                    <h3 class="text-2xl font-semibold text-blue-300 mt-6 mb-3">El Estándar de las 10 Obras Terminadas</h3>
                    <p class="mb-4 text-gray-300 leading-relaxed">Según Damián Caffarella, una constructora confiable debe tener <strong>mínimo 10 obras terminadas</strong>. Este número demuestra:</p>
                    <ol class="list-decimal list-inside space-y-2 mb-4 text-gray-300">
                        <li><strong>Experiencia comprobada</strong> en gestión de proyectos complejos.</li>
                        <li><strong>Solvencia financiera</strong> para completar desarrollos a largo plazo.</li>
                        <li><strong>Historial de cumplimiento</strong> con compradores anteriores.</li>
                        <li><strong>Capacidad operativa</strong> para sortear obstáculos inevitables.</li>
                    </ol>
                    <h3 class="text-xl font-semibold text-white mt-6 mb-3">Checklist de Verificación</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li>✅ Pedí una lista de proyectos anteriores.</li>
                        <li>✅ Visitá algunas de las obras terminadas.</li>
                        <li>✅ Buscá opiniones online de compradores anteriores.</li>
                        <li>✅ Verificá que no tengan juicios por incumplimiento.</li>
                    </ul>
                </div>`
          },
          {
              id: 'tendencias-inmobiliarias',
              title: 'Tendencias del Mercado Inmobiliario 2025',
              description: 'Análisis de las principales tendencias que darán forma al mercado de bienes raíces en Buenos Aires durante el 2025. ¿Qué barrios se revalorizan? ¿Sube o baja el m²?',
              date: '2025-10-20',
              author: 'Gerardo Leiserson',
              tags: ['Tendencias', 'Mercado', 'Inversión', '2025'],
              content: `<div><h2 class="text-3xl font-bold text-white mt-8 mb-4">El mercado inmobiliario de Buenos Aires está en constante cambio.</h2><p class="mb-4 text-gray-300 leading-relaxed">En este artículo, exploramos las tendencias clave para 2025, desde el auge de los barrios del sur hasta el impacto de la tecnología en la compra y venta de propiedades.</p></div>`
          },
          {
              id: 'compradores-primerizos',
              title: 'Guía Definitiva para Compradores Primerizos',
              description: '¿Comprando tu primera propiedad? Evitá los errores comunes con esta guía completa. Te explicamos desde cómo calcular tu presupuesto hasta qué mirar en una visita.',
              date: '2025-10-15',
              author: 'Gerardo Leiserson',
              tags: ['Compradores', 'Primera Vivienda', 'Consejos', 'Créditos'],
              content: `<div><h2 class="text-3xl font-bold text-white mt-8 mb-4">Comprar tu primera casa es un gran paso.</h2><p class="mb-4 text-gray-300 leading-relaxed">Para que la experiencia sea un éxito, es fundamental estar bien informado. Aquí te damos los mejores consejos para que tomes la decisión correcta y sin estrés.</p></div>`
          },
          {
              id: 'palermo',
              title: 'Más Allá de Palermo: Barrios Emergentes para Invertir',
              description: 'Palermo es el rey, pero hay vida más allá. Descubrí qué barrios emergentes de Buenos Aires ofrecen el mayor potencial de revalorización y rentabilidad para tu próxima inversión.',
              date: '2025-10-10',
              author: 'Gerardo Leiserson',
              tags: ['Barrios Emergentes', 'Inversión', 'Rentabilidad', 'Crecimiento'],
              content: `<div><h2 class="text-3xl font-bold text-white mt-8 mb-4">Invertir bien es invertir con visión.</h2><p class="mb-4 text-gray-300 leading-relaxed">Mientras todos miran a Palermo, otras zonas de la ciudad están creciendo a pasos agigantados. Te mostramos dónde poner el ojo para obtener los mejores retornos a futuro.</p></div>`
          }
      ]
  },
  faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas a las preguntas más comunes sobre el mercado inmobiliario.',
      questions: [
          { 
              q: '¿Cuál es el primer paso para comprar una propiedad?', 
              a: 'El primer paso es definir tu presupuesto y obtener una pre-aprobación para un préstamo si lo necesitas. Esto te permitirá buscar propiedades de manera realista y te posicionará como un comprador serio.' 
          },
          { 
              q: '¿Qué costos adicionales debo considerar al comprar?', 
              a: 'Además del precio de la propiedad, debes considerar los honorarios inmobiliarios (generalmente 4% + IVA), gastos de escribanía (1-2%), impuesto de sellos y tasas de registro. En total, espera sumar entre un 7% y un 9%.' 
          },
          { 
              q: '¿Cuánto dura el proceso de compra?', 
              a: 'Desde que encuentras la propiedad hasta la firma de la escritura, el proceso puede tomar entre 60 y 90 días, dependiendo de la complejidad de la transacción y la documentación.' 
          },
          { 
              q: '¿Es un buen momento para invertir en Buenos Aires?', 
              a: 'El mercado inmobiliario de Buenos Aires está mostrando signos de recuperación, con precios estabilizados y una demanda creciente. Es un momento interesante para inversores que buscan una valorización a mediano y largo plazo.' 
          },
          { 
              q: '¿Necesito ser residente para comprar una propiedad en Argentina?', 
              a: 'No, no es necesario ser residente. Los extranjeros pueden comprar propiedades obteniendo una CDI (Clave de Identificación) de la AFIP, que es un proceso relativamente sencillo. Puedo guiarte en ello.' 
          }
      ]
  },
  contact: {
      title: 'Contacto',
      subtitle: '¿Tenés una pregunta o querés empezar a trabajar juntos? Enviame un mensaje.',
      form: {
          title: 'Enviame tu consulta',
          name: 'Nombre',
          namePlaceholder: 'Tu nombre completo',
          email: 'Email',
          emailPlaceholder: 'tuemail@ejemplo.com',
          phone: 'Teléfono (Opcional)',
          phonePlaceholder: 'Tu número de teléfono',
          inquiryType: 'Tipo de Consulta',
          inquiryOptions: {
              buy: 'Quiero Comprar',
              sell: 'Quiero Vender',
              invest: 'Quiero Invertir',
              other: 'Otra Consulta'
          },
          message: 'Mensaje',
          messagePlaceholder: 'Contame un poco más sobre tu consulta...',
          charCount: '500 caracteres máx.',
          submit: 'Enviar Mensaje'
      },
      info: {
          title: 'Información de Contacto',
          whatsapp: 'WhatsApp',
          email: 'Email',
          location: 'Ubicación',
          locationValue: 'Buenos Aires, Argentina',
          hours: 'Horario de Atención',
          hoursValue: 'Lun - Vie, 9am - 6pm'
      },
      quickActions: {
          title: 'Acciones Rápidas',
          schedule: 'Agendar Reunión',
          join: 'Sumate a Mis Referidos',
          call: 'Llamar Ahora'
      }
  },
  aiAssistant: {
      title: '¿Necesitás una respuesta rápida?',
      description: 'Mi asistente de IA puede ayudarte con consultas generales del mercado.',
      button: 'Chatear Ahora'
  },
  chatbox: {
      initialMessage: '¡Hola! Soy Gerardo, tu asistente inmobiliario virtual. ¿Cómo puedo ayudarte hoy? ¿Estás buscando comprar, vender o invertir?',
      headerTitle: 'Asesor Inmobiliario',
      inputPlaceholder: 'Escribí tu mensaje...'
  },
  footer: {
      description: 'Asesor inmobiliario especialista en Buenos Aires. Conectando personas con sus propiedades ideales.',
      contact: 'Contacto Rápido',
      consult: 'Consultar por WhatsApp',
      rights: '© 2024 Leiserson Gerardo. Todos los derechos reservados.'
  }
};

export const translations: Translations = {
  es,
  pt: {
    nav: {
        inicio: "Início",
        experiencia: "Experiência",
        barrios: "Bairros",
        desarrollos: "Desenvolvimentos",
        financialTools: "Ferramentas",
        referidos: "Meus Indicados",
        guias: "Guias",
        blog: "Blog",
        faq: "FAQ",
        contacto: "Contato"
    },
    hero: {
        subheading: 'MARKETING IMOBILIÁRIO',
        heading: 'Gerardo Leiserson',
        description: 'Ajudo você a encontrar o imóvel dos seus sonhos e a navegar no mercado imobiliário de Buenos Aires com confiança e conhecimento especializado.',
        ctaAppointment: 'Agendar Reunião',
        ctaWhatsapp: 'Contatar por WhatsApp',
        talkWithUs: 'Vamos Conversar!'
    },
    experience: {
        title: 'Minha Experiência ao Seu Serviço',
        subtitle: 'Transformando transações em relacionamentos duradouros.',
        cards: [
            {
                title: 'Conhecimento Profundo do Mercado',
                description: 'Análise constante de tendências e valores para garantir o melhor investimento e o preço justo em cada operação.',
            },
            {
                title: 'Negociação Estratégica',
                description: 'Habilidade e experiência para defender seus interesses, alcançando acordos benéficos e fechamentos bem-sucedidos.',
            },
            {
                title: 'Abordagem Personalizada',
                description: 'Entendo que cada cliente é único. Meu serviço se adapta às suas necessidades, garantindo uma experiência transparente e sem estresse.',
            },
        ],
    },
    neighborhoods: {
        title: 'Explore os Bairros de Buenos Aires',
        subtitle: 'Descubra o que cada bairro tem a oferecer. Selecione um bairro para ver seus pontos de interesse ou procure um endereço para encontrar lugares próximos.',
        poiTitle: 'Pontos de Interesse em',
        poiTitleNearby: 'Pontos de Interesse Próximos',
        poiCategories: {
            all: 'Todos',
            food: 'Gastronomia',
            shopping: 'Compras',
            culture: 'Cultura',
            health: 'Saúde',
            education: 'Educação',
        },
        visitWebsite: 'Visitar site',
        clearSearch: 'Limpar busca',
    },
    developments: {
        title: 'Mapa de Empreendimentos',
        subtitle: 'Explore os últimos empreendimentos imobiliários em construção e na planta em Buenos Aires.',
        allNeighborhoods: 'Todos os Bairros',
        priceFrom: 'Desde USD',
        status: 'Status',
        bedrooms: 'Quartos',
        surface: 'Área',
        viewProject: 'Ver Projeto',
    },
    topNeighborhoods: {
        title: 'Bairros em Destaque',
        subtitle: 'Descubra as áreas mais procuradas de Buenos Aires.',
    },
    financialTools: {
        title: 'Ferramentas Financeiras',
        subtitle: 'Calculadoras e dados úteis para planejar seu investimento imobiliário em Buenos Aires.',
        converter: {
            title: 'Conversor de Moeda',
            disclaimer: 'Taxa de câmbio de referência (MEP): 1 USD ≈ {rate} ARS. Valores aproximados.',
        },
        costOfLiving: {
            title: 'Custo de Vida (Estimado)',
            family: 'Família de 4',
            single: 'Pessoa Solteira',
            viewDetails: 'Ver Detalhes Completos',
            source: 'Fonte: Expatistan.com',
            updated: 'Atualizado 2024',
        },
        dolarOficial: {
            title: 'Cotação do Dólar na Argentina',
        }
    },
    referrals: {
        title: 'Meus Indicados',
        subtitle: 'Eu conecto você com profissionais de alto nível que complementam meu serviço, garantindo que cada aspecto de sua transação esteja nas melhores mãos.',
        selectNeighborhood: 'Filtrar por bairro:',
        allNeighborhoods: 'Todos os bairros',
        searchPlaceholder: 'Pesquisar por categoria ou nome...',
        contact: 'Contatar pelo WhatsApp',
        noReferrals: 'Nenhuma referência para esta seleção. Tente outro bairro ou pesquisa.',
        referralsCount: 'referências',
        viewTestimonial: 'Ver Depoimento',
        closeTestimonial: 'Ocultar Depoimento',
        refers: 'Indica',
        shareContact: 'Recomendar',
        disclaimer: {
          title: 'INFORMAÇÃO IMPORTANTE',
          text: 'Os comércios e serviços aqui referidos aparecem por vontade própria. Eles escolhem aparecer neste site e ser contatados por usuários finais.',
          ctaTitle: 'QUER APARECER NAS MINHAS REFERÊNCIAS?',
          ctaSubtitle: 'Preencha o formulário para solicitar aparição em nosso diretório',
          ctaQrText: 'Escaneie-me para preencher o formulário',
          ctaButton: 'Preencher Formulário',
          ctaLink: 'https://bit.ly/48RzmUi',
          formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe7RcXVmcDHSZ1hLb5zv4-Yk3XkCRFP1PRPY0fJNfvk_TklMQ/viewform?embedded=true',
          shareButton: 'Compartilhar no WhatsApp',
          shareMessage: 'Olá! Convido você a se juntar à rede de indicados de Gerardo Leiserson. Você pode se inscrever aqui: https://bit.ly/48RzmUi',
          qrCodeUrl: 'https://audiovino.github.io/imagenes-publicas/Formulario-qr.png'
        },
        testimonials: {
            carlosRodriguez: { 
                name: 'Carlos Rodríguez',
                quote: 'O Escritório de Advocacia López cuidou da nossa sucessão com incrível profissionalismo e empatia. Nos sentimos apoiados em todos os momentos.'
            },
            sofiaMartinez: {
                name: 'Sofía Martínez',
                quote: 'Gerardo revolucionou nossa estratégia de marketing. Ele entendeu perfeitamente o mercado e nos posicionou como líderes na área. Resultados incríveis!'
            },
            anaGarcia: {
                name: 'Ana García',
                quote: 'O atendimento na Clínica Odontológica Belgrano é de primeira. Me senti segura e os resultados foram excelentes. Muito recomendados!'
            }
        }
    },
    guides: {
        title: 'Guias Imobiliários 2025',
        subtitle: 'Informações chave e dicas práticas para tomar as melhores decisões.',
        download: 'Ver Guia Completo',
        cards: [
            { id: 'comprador', title: 'Guia para Compradores', description: 'Tudo o que você precisa saber para comprar seu imóvel em Buenos Aires: custos, documentos e preços de mercado.' },
            { id: 'vendedor', title: 'Guia para Vendedores', description: 'Maximize o valor do seu imóvel com estratégias de venda, checklist de preparação e análise de tendências.' },
            { id: 'inversion', title: 'Guia de Investimento', description: 'Descubra oportunidades de investimento, rentabilidade por bairro e as chaves do mercado de aluguéis.' },
            { id: 'dueno', title: 'Proprietário Vende vs. Imobiliária', description: 'Analisamos os prós e contras de vender por conta própria ou com um profissional para que você escolha a melhor opção.' },
            { id: 'extranjero', title: 'Guia para Estrangeiros', description: 'O processo de compra para não residentes explicado passo a passo: requisitos, custos e dicas importantes.' }
        ],
        content: { ...es.guides.content, important: "Importante", tip: "Dica", warning: "Atenção" }
    },
    blog: {
        title: 'Blog Imobiliário',
        subtitle: 'Análises, notícias e dicas sobre o mercado imobiliário de Buenos Aires.',
        readMore: 'Leia mais',
        posts: [
             {
                id: 'comprar-en-pozo',
                title: 'Comprar na Planta na Argentina 2025: 5 Verdades que Podem Salvar Seu Investimento',
                description: 'Descubra as 5 chaves essenciais antes de comprar um apartamento na planta na Argentina. Guia atualizado 2025 com dicas de especialistas sobre fideicomissos, construtoras e fraudes imobiliárias.',
                date: '2025-10-25',
                author: 'Gerardo Leiserson',
                tags: ['Comprar na Planta', 'Investimento', 'Fideicomisso', 'Empreendimentos'],
                content: es.blog.posts[0].content
            },
            {
                id: 'tendencias-inmobiliarias',
                title: 'Tendências do Mercado Imobiliário 2025',
                description: 'Análise das principais tendências que moldarão o mercado imobiliário de Buenos Aires em 2025. Quais bairros estão se valorizando? O preço por m² sobe ou desce?',
                date: '2025-10-20',
                author: 'Gerardo Leiserson',
                tags: ['Tendências', 'Mercado', 'Investimento', '2025'],
                content: `<div><h2 class="text-3xl font-bold text-white mt-8 mb-4">O mercado imobiliário de Buenos Aires está em constante mudança.</h2><p class="mb-4 text-gray-300 leading-relaxed">Neste artigo, exploramos as principais tendências para 2025, desde o crescimento dos bairros do sul até o impacto da tecnologia na compra e venda de imóveis.</p></div>`
            },
            {
                id: 'compradores-primerizos',
                title: 'Guia Definitivo para Compradores de Primeira Viagem',
                description: 'Comprando seu primeiro imóvel? Evite os erros comuns com este guia completo. Explicamos desde como calcular seu orçamento até o que observar em uma visita.',
                date: '2025-10-15',
                author: 'Gerardo Leiserson',
                tags: ['Compradores', 'Primeira Casa', 'Dicas', 'Financiamento'],
                content: `<div><h2 class="text-3xl font-bold text-white mt-8 mb-4">Comprar a primeira casa é um grande passo.</h2><p class="mb-4 text-gray-300 leading-relaxed">Para que a experiência seja um sucesso, é fundamental estar bem informado. Aqui estão nossas melhores dicas para ajudá-lo a tomar a decisão certa e sem estresse.</p></div>`
            },
            {
                id: 'palermo',
                title: 'Além de Palermo: Bairros Emergentes para Investir',
                description: 'Palermo é o rei, mas há vida além dele. Descubra quais bairros emergentes em Buenos Aires oferecem o maior potencial de valorização e rentabilidade para seu próximo investimento.',
                date: '2025-10-10',
                author: 'Gerardo Leiserson',
                tags: ['Bairros Emergentes', 'Investimento', 'Rentabilidade', 'Crescimento'],
                content: `<div><h2 class="text-3xl font-bold text-white mt-8 mb-4">Investir bem é investir com visão.</h2><p class="mb-4 text-gray-300 leading-relaxed">Enquanto todos olham para Palermo, outras áreas da cidade estão crescendo a passos largos. Mostramos onde focar para obter os melhores retornos futuros.</p></div>`
            }
        ]
    },
    faq: {
        title: 'Perguntas Frequentes',
        subtitle: 'Respostas às dúvidas mais comuns sobre o mercado imobiliário.',
        questions: [
            { 
                q: 'Qual é o primeiro passo para comprar um imóvel?', 
                a: 'O primeiro passo é definir seu orçamento e obter uma pré-aprovação de crédito, se necessário. Isso permitirá que você procure imóveis de forma realista e o posicionará como um comprador sério.' 
            },
            { 
                q: 'Que custos adicionais devo considerar ao comprar?', 
                a: 'Além do preço do imóvel, você deve considerar as taxas imobiliárias (geralmente 4% + IVA), despesas de cartório (1-2%), imposto de selo e taxas de registro. No total, calcule entre 7% e 9% a mais.' 
            },
            { 
                q: 'Quanto tempo leva o processo de compra?', 
                a: 'Desde encontrar o imóvel até a assinatura da escritura, o processo pode levar de 60 a 90 dias, dependendo da complexidade da transação e da documentação.' 
            },
            { 
                q: 'É um bom momento para investir em Buenos Aires?', 
                a: 'O mercado imobiliário de Buenos Aires está mostrando sinais de recuperação, com preços estabilizados e demanda crescente. É um momento interessante para investidores que buscam valorização a médio e longo prazo.' 
            },
            { 
                q: 'Preciso ser residente para comprar um imóvel na Argentina?', 
                a: 'Não, não é necessário ser residente. Estrangeiros podem comprar imóveis obtendo uma CDI (Chave de Identificação) na AFIP, um processo relativamente simples. Posso orientá-lo em todo o processo.' 
            }
        ]
    },
    contact: {
        title: 'Contato',
        subtitle: 'Tem alguma pergunta ou quer começar a trabalhar juntos? Envie-me uma mensagem.',
        form: {
            title: 'Envie sua consulta',
            name: 'Nome',
            namePlaceholder: 'Seu nome completo',
            email: 'Email',
            emailPlaceholder: 'seuemail@exemplo.com',
            phone: 'Telefone (Opcional)',
            phonePlaceholder: 'Seu número de telefone',
            inquiryType: 'Tipo de Consulta',
            inquiryOptions: {
                buy: 'Quero Comprar',
                sell: 'Quero Vender',
                invest: 'Quero Investir',
                other: 'Outra Consulta'
            },
            message: 'Mensagem',
            messagePlaceholder: 'Conte-me um pouco mais sobre sua consulta...',
            charCount: '500 caracteres máx.',
            submit: 'Enviar Mensagem'
        },
        info: {
            title: 'Informações de Contato',
            whatsapp: 'WhatsApp',
            email: 'Email',
            location: 'Localização',
            locationValue: 'Buenos Aires, Argentina',
            hours: 'Horário de Atendimento',
            hoursValue: 'Seg - Sex, 9h - 18h'
        },
        quickActions: {
            title: 'Ações Rápidas',
            schedule: 'Agendar Reunião',
            join: 'Junte-se aos Meus Indicados',
            call: 'Ligar Agora'
        }
    },
    aiAssistant: {
        title: 'Precisa de uma resposta rápida?',
        description: 'Meu assistente com IA pode ajudar com consultas gerais sobre o mercado.',
        button: 'Converse Agora'
    },
    chatbox: {
        initialMessage: 'Olá! Sou Gerardo, seu assistente imobiliário virtual. Como posso te ajudar hoje? Você está procurando comprar, vender ou investir?',
        headerTitle: 'Assessor Imobiliário',
        inputPlaceholder: 'Escreva sua mensagem...'
    },
    footer: {
        description: 'Assessor imobiliário especializado em Buenos Aires. Conectando pessoas com seus imóveis ideais.',
        contact: 'Contato Rápido',
        consult: 'Consultar por WhatsApp',
        rights: '© 2024 Leiserson Gerardo. Todos os direitos reservados.'
    }
  },
  en: {
    faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Answers to the most common questions about the real estate market.',
        questions: [
            { 
                q: 'What is the first step to buying a property?', 
                a: 'The first step is to define your budget and get pre-approved for a loan if you need one. This will allow you to search for properties realistically and position you as a serious buyer.' 
            },
            { 
                q: 'What additional costs should I consider when buying?', 
                a: 'Besides the property price, you should consider real estate fees (usually 4% + VAT), notary expenses (1-2%), stamp duty, and registration fees. In total, expect to add between 7% and 9%.' 
            },
            { 
                q: 'How long does the buying process take?', 
                a: 'From finding the property to signing the deed, the process can take between 60 and 90 days, depending on the complexity of the transaction and documentation.' 
            },
            { 
                q: 'Is it a good time to invest in Buenos Aires?', 
                a: 'The Buenos Aires real estate market is showing signs of recovery, with stabilized prices and growing demand. It\'s an interesting time for investors looking for medium to long-term appreciation.' 
            },
            { 
                q: 'Do I need to be a resident to buy a property in Argentina?', 
                a: 'No, it\'s not necessary to be a resident. Foreigners can buy properties by obtaining a CDI (Identification Key) from AFIP, which is a relatively simple process. I can guide you through it.' 
            }
        ]
    }
  }
};
