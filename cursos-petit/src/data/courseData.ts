export interface Course {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  duration: string;
  level: string;
  language: string[];
  students: string;
  rating: number;
  image: string;
  tags: string[];
  whatYouWillLearn: string[];
  requirements: string[];
  instructor: string;
  instructorRole: string;
  price: string;
  originalPrice?: string;
}

export const courses: Course[] = [
  {
    id: 'fundamentos-chatgpt',
    title: 'Fundamentos de ChatGPT',
    description: 'Descubre cómo ChatGPT puede convertirse en tu asistente personal para una amplia variedad de tareas.',
    detailedDescription: 'En este curso descubrirás cómo ChatGPT puede convertirse en tu asistente personal para una amplia variedad de tareas. Aprenderás a aprovechar su potencial para automatizar procesos, estructurar ideas de manera más clara, generar lluvia de ideas de forma creativa, practicar idiomas e incluso crear imágenes en cuestión de segundos.',
    duration: '8 horas',
    level: 'Principiante',
    language: ['Español', 'Inglés', 'Portugués', 'Alemán', 'Polaco'],
    students: '50,000+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    tags: ['IA', 'ChatGPT', 'Productividad', 'Automatización'],
    whatYouWillLearn: [
      'Dominar las funcionalidades básicas y avanzadas de ChatGPT',
      'Automatizar tareas repetitivas usando inteligencia artificial',
      'Estructurar ideas y contenido de manera más efectiva',
      'Generar contenido creativo y lluvia de ideas',
      'Practicar idiomas con un asistente IA',
      'Crear imágenes descriptivas usando prompts',
      'Optimizar tu productividad personal y profesional'
    ],
    requirements: [
      'Ser mayor de 16 años',
      'Acceso a internet estable',
      'Computadora, tablet o smartphone',
      'Conocimientos básicos de informática',
      'Cuenta gratuita en ChatGPT (se explica cómo crearla)'
    ],
    instructor: 'Santander Open Academy',
    instructorRole: 'Plataforma Educativa Internacional',
    price: 'Gratuito',
    originalPrice: undefined
  },
  {
    id: 'excel-basico-intermedio',
    title: 'Excel - de Básico a Intermedio',
    description: 'Domina Excel desde los conceptos fundamentales hasta técnicas intermedias para el análisis de datos.',
    detailedDescription: 'Este curso te llevará desde los conceptos básicos de Excel hasta un nivel intermedio, donde podrás manejar grandes volúmenes de datos, crear gráficos profesionales, usar funciones avanzadas y automatizar tareas repetitivas. Perfecto para profesionales que buscan mejorar su productividad.',
    duration: '12 horas',
    level: 'Básico a Intermedio',
    language: ['Español', 'Inglés', 'Portugués'],
    students: '75,000+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
    tags: ['Excel', 'Análisis de Datos', 'Productividad', 'Oficina'],
    whatYouWillLearn: [
      'Navegación eficiente por la interfaz de Excel',
      'Fórmulas y funciones esenciales (SUMA, PROMEDIO, BUSCARV)',
      'Formateo profesional de hojas de cálculo',
      'Creación de gráficos y visualizaciones de datos',
      'Uso de tablas dinámicas para análisis avanzado',
      'Funciones lógicas (SI, Y, O)',
      'Automatización básica con macros',
      'Gestión de bases de datos en Excel'
    ],
    requirements: [
      'Conocimientos básicos de computación',
      'Microsoft Excel instalado (cualquier versión reciente)',
      'Computadora con Windows o Mac',
      'Ganas de aprender y practicar'
    ],
    instructor: 'Santander Open Academy',
    instructorRole: 'Expertos en Tecnología Empresarial',
    price: 'Gratuito',
    originalPrice: undefined
  },
  {
    id: 'negociacion-avanzada',
    title: 'Curso de Negociación Avanzada',
    description: 'Desarrolla habilidades de negociación profesional para alcanzar acuerdos exitosos en cualquier contexto.',
    detailedDescription: 'Aprende las técnicas más efectivas de negociación utilizadas por profesionales de alto nivel. Este curso te enseñará a preparar, ejecutar y cerrar negociaciones exitosas, ya sea en el ámbito laboral, personal o empresarial. Descubre cómo crear valor, manejar conflictos y lograr acuerdos win-win.',
    duration: '10 horas',
    level: 'Intermedio',
    language: ['Español', 'Inglés'],
    students: '35,000+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
    tags: ['Negociación', 'Liderazgo', 'Comunicación', 'Habilidades Blandas'],
    whatYouWillLearn: [
      'Principios fundamentales de la negociación efectiva',
      'Preparación estratégica antes de cualquier negociación',
      'Técnicas de comunicación persuasiva',
      'Manejo de objeciones y situaciones difíciles',
      'Creación de valor y acuerdos win-win',
      'Psicología de la negociación',
      'Negociación en diferentes culturas',
      'Cierre efectivo de acuerdos'
    ],
    requirements: [
      'Experiencia laboral básica (recomendado)',
      'Interés en mejorar habilidades interpersonales',
      'Acceso a internet y dispositivo de estudio',
      'Mente abierta para practicar nuevas técnicas'
    ],
    instructor: 'Santander Open Academy',
    instructorRole: 'Especialistas en Desarrollo Profesional',
    price: 'Gratuito',
    originalPrice: undefined
  },
  {
    id: 'programas-educacion-financiera-bcra-2025',
    title: 'Programas de Educación Financiera BCRA 2025',
    description: 'Programas educativos del Banco Central de Argentina para promover la inclusión financiera, dirigidos a docentes, emprendedores y sectores vulnerables.',
    detailedDescription: 'Para promover la inclusión financiera el Banco Central, en colaboración con distintos gobiernos provinciales, ministerios, universidades, entidades financieras, entidades no financieras y organismos nacionales e internacionales, lleva adelante programas educativos dirigidos a diferentes públicos para favorecer el desarrollo de las capacidades y la salud financiera de todas las personas, priorizando a los sectores más vulnerables de la sociedad. Incluye: "La Educación Financiera en el Aula" para docentes (aplicado en 10 provincias: Chaco, Catamarca, La Pampa, La Rioja, Misiones, Neuquén, San Juan, San Luis, Santa Fe y Tierra del Fuego), "Finanzas Cerca" para emprendedores y sectores vulnerables, talleres de visita al BCRA, y el Grupo de Trabajo en Iniciativas de Educación Financiera (GTIEF).',
    duration: 'Variable según programa',
    level: 'Todos los niveles',
    language: ['Español'],
    students: '20,000+ docentes inscriptos, 1,300,000+ estudiantes alcanzados, 4,000+ formadores en territorio',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    tags: ['BCRA', 'Educación Financiera', 'Inclusión', 'Argentina', 'Docentes'],
    whatYouWillLearn: [
      'Actualizar y afianzar contenidos de Educación Financiera',
      'Integrar la educación financiera en espacios curriculares',
      'Facilitar que estudiantes desarrollen capacidades financieras y socialicen saberes',
      'Desarrollar habilidades financieras para interactuar con el sistema financiero',
      'Fomentar el uso de medios electrónicos de pago',
      'Contribuir a mejorar la toma de decisiones financieras',
      'Promover la inclusión financiera en sectores vulnerables',
      'Implementar capacitaciones territoriales con grupos específicos',
      'Conocer misiones y funciones del BCRA',
      'Comprender diferencias entre efectivo y billetera digital',
      'Gestionar cuentas para menores de edad',
      'Identificar riesgos en seguridad de información y apuestas en línea'
    ],
    requirements: [
      'Para docentes: ser docente de educación secundaria con título habilitante',
      'Para "Finanzas Cerca": estar en sectores vulnerables o emprendedores',
      'Acceso a internet para modalidades virtuales',
      'Residir en provincias con convenios BCRA activos',
      'Para talleres presenciales: contactar bancocentraleduca@bcra.gob.ar',
      'Para formadores: experiencia en trabajo territorial'
    ],
    instructor: 'BCRA - Gerencia de Educación Financiera',
    instructorRole: 'Banco Central de la República Argentina',
    price: 'Gratuito',
    originalPrice: undefined
  }
];