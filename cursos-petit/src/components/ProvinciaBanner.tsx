import sur from '../assets/provincia.jpg';

// Banner Juegos Suramericanos 2026 con imagen oficial (300x250px)
const ProvinciaBanner = () => {
  return (
    <div className="flex justify-center mb-8">
      <a 
        href="https://www.santafe.gob.ar/noticias/noticia/284042/"
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-80 h-64">
          {/* Imagen de fondo con aspecto 300x250 */}
          <img 
            src={sur}
            alt="Santa Fe Provincia"
            className="w-full h-full object-cover object-center"
            style={{ aspectRatio: '300/250' }}
          />
          
          {/* Overlay sutil para mejor legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
          
          {/* Efecto de brillo en hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
        </div>
      </a>
    </div>
  );
};

export default ProvinciaBanner;