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
  },
  {
    id: 'bna-te-suma-educacion-financiera',
    title: 'BNA TE SUMA: PROGRAMA DE EDUCACION FINANCIERA DEL BANCO NACION',
    description: 'Programa de inclusión y educación financiera del Banco Nación que busca transformar la vida de las personas a través del conocimiento financiero.',
    detailedDescription: 'BNA Te Suma es el programa de inclusión y educación financiera del Banco de la Nación Argentina que busca promover el acceso a conocimientos y contenidos financieros para miles de argentinos, especialmente sectores de bajos ingresos, rurales, personas mayores y pequeñas empresas. El programa se estructura en tres pilares fundamentales: una Red de Facilitadores Financieros con 1.000 trabajadores capacitados, convenios con organismos externos y entidades públicas, y productos y servicios inclusivos diseñados para acercar a todas las personas al sistema financiero.',
    duration: 'Permanente - Talleres y capacitaciones variables',
    level: 'Todos los niveles',
    language: ['Español'],
    students: 'Miles de beneficiarios en todo el país',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop',
    tags: ['BNA', 'Inclusión Financiera', 'Educación Financiera', 'Banco Nación', 'Argentina'],
    whatYouWillLearn: [
      'Conceptos fundamentales de educación financiera',
      'Uso de servicios financieros y canales digitales',
      'Herramientas de ahorro, crédito e inversión',
      'Acceso a productos bancarios inclusivos',
      'Utilización de banca móvil y canales electrónicos',
      'Aprovechamiento de descuentos y beneficios bancarios',
      'Gestión financiera para emprendimientos y pequeñas empresas',
      'Alternativas al uso del efectivo',
      'Desarrollo de capacidades financieras personales',
      'Acceso al crédito y servicios financieros de calidad'
    ],
    requirements: [
      'Ser mayor de edad o contar con autorización parental',
      'Residir en Argentina',
      'Preferencia para sectores de bajos ingresos, rurales, personas mayores',
      'Pequeños emprendedores y comerciantes',
      'No se requieren conocimientos previos',
      'Acceso básico a documentación de identidad',
      'Interés en mejorar conocimientos financieros'
    ],
    instructor: 'BNA - Red de Facilitadores Financieros',
    instructorRole: 'Banco de la Nación Argentina',
    price: 'Gratuito',
    originalPrice: undefined
  },
 
  {
    id: 'talleres-robotica-videojuegos-rosario',
    title: 'TALLERES DE ROBOTICA Y VIDEOJUEGOS PARA NIÑOS',
    description: 'Talleres presenciales de robótica y virtuales de creación de videojuegos para niños y niñas de Rosario.',
    detailedDescription: 'Estos talleres están dirigidos a niños y niñas que quieran adentrarse en el mundo de la tecnología. El taller de robótica es presencial, con 8 encuentros donde los participantes construyen robots y los programan para realizar diferentes acciones y movimientos. El taller de videojuegos es virtual, transmitido por Twitch y YouTube, donde aprenderán sobre diseño del juego, programación, arte digital, sonido y musicalización para crear videojuegos completos.',
    duration: 'Robótica: 8 encuentros de 1.5 horas semanales / Videojuegos: variable',
    level: 'Principiante',
    language: ['Español'],
    students: 'Cientos de niños y niñas de Rosario',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1581916459131-90da1f9c7162?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Robótica', 'Videojuegos', 'Programación', 'Niños', 'Tecnología', 'Rosario'],
    whatYouWillLearn: [
      'Construcción y programación de robots',
      'Resolución de desafíos tecnológicos creativos',
      'Diseño de videojuegos (reglas, objetivos, metas)',
      'Programación básica para videojuegos',
      'Creación de arte digital (gráficos, personajes, animaciones)',
      'Incorporación de sonido y música en videojuegos',
      'Trabajo en equipo y creatividad',
      'Pensamiento lógico y resolución de problemas',
      'Uso de herramientas tecnológicas',
      'Desarrollo de proyectos completos'
    ],
    requirements: [
      'Robótica: niños y niñas de 7 a 13 años',
      'Videojuegos: niños y niñas de 10 a 16 años',
      'Residir en Rosario',
      'Para robótica: disponibilidad para asistir presencialmente',
      'Para videojuegos: acceso a internet y dispositivo',
      'No se requieren conocimientos previos',
      'Inscripción previa obligatoria por distrito'
    ],
    instructor: 'Municipalidad de Rosario',
    instructorRole: 'Gobierno de la Ciudad de Rosario',
    price: 'Gratuito',
    originalPrice: undefined
  },
  {
    id: 'escuela-oficios-unr',
    title: 'Escuela de Oficios UNR: Capacitaciones Gratuitas',
    description: 'Más de 60 cursos de oficios gratuitos con certificación universitaria para inserción laboral en Rosario y la región.',
    detailedDescription: 'La Escuela de Oficios de la UNR ofrece herramientas de formación socio-laboral a través de ciclos cortos de capacitación que generan habilidades para la inserción laboral en diversas áreas. Con más de 10,000 graduados desde 2021, esta iniciativa brinda acceso a la educación universitaria sin importar el nivel de escolaridad alcanzado. Los cursos se dictan en convenio con la Municipalidad de Rosario en los 7 Centros de Distrito y forman parte del Programa "Impulsa" de la Provincia de Santa Fe, vinculando las capacitaciones públicas con las necesidades del sector privado. Las propuestas incluyen oficios tradicionales, tecnológicos, administrativos y de servicios, todos con certificación oficial de la Universidad Nacional de Rosario.',
    duration: 'Ciclos cortos - Variable según el curso (generalmente 2-4 meses)',
    level: 'Todos los niveles',
    language: ['Español'],
    students: '10,000+ graduados desde 2021',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
    tags: ['UNR', 'Oficios', 'Formación Laboral', 'Certificación Universitaria', 'Rosario', 'Inserción Laboral'],
    whatYouWillLearn: [
      'Oficios tradicionales: carpintería, electricidad, plomería, restauración de muebles',
      'Tecnología: diseño asistido por computadora (CAD), modelado 3D, reparación de electrodomésticos',
      'Construcción: bioconstrucción, elaboración de piezas cementicias, terrazo',
      'Gastronomía: panificación (niveles inicial y medio), pastelería',
      'Refrigeración: diagnóstico, instalación y reparación de aires acondicionados',
      'Habilidades para insertarse efectivamente en el mercado laboral',
      'Oficios digitales y nuevas tecnologías aplicadas',
      'Emprendedurismo y gestión de pequeños negocios',
      'Técnicas específicas certificadas por universidad nacional',
      'Acceso a redes de vinculación laboral local y regional'
    ],
    requirements: [
      'Ser mayor de 18 años',
      'Sin requisitos de nivel de escolaridad previo',
      'Residir en Rosario o la región',
      'Inscripción presencial en Centros de Distrito según el curso',
      'Crear cuenta en sistema SIU Guaraní 3 para inscripción online (algunos cursos)',
      'Disponibilidad horaria según el curso elegido',
      'Compromiso con la asistencia y finalización del curso'
    ],
    instructor: 'Universidad Nacional de Rosario',
    instructorRole: 'Escuela de Oficios UNR',
    price: 'Gratuito',
    originalPrice: undefined
  }
];