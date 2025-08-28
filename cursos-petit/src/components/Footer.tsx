import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { sections } from '../utils/constants';


interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="Petit Financieros" 
                className="h-10 w-60"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Tu fuente confiable para noticias financieras y generales de la región.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-medium mb-3">Secciones</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {sections.slice(0, 3).map(section => (
                  <li 
                    key={section} 
                    className="hover:text-white cursor-pointer"
                    onClick={() => handleSectionClick(section)}
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-3">Más secciones</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {sections.slice(3, 6).map(section => (
                  <li 
                    key={section} 
                    className="hover:text-white cursor-pointer"
                    onClick={() => handleSectionClick(section)}
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-3">Enlaces</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Sobre nosotros</li>
                <li className="hover:text-white cursor-pointer">Contacto</li>
                <li className="hover:text-white cursor-pointer">Términos y condiciones</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Desarrollado por GauchoLab.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="md:col-span-1">
//             <div className="flex items-center mb-6">
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mr-3">
//                 <span className="text-white font-bold text-lg">P</span>
//               </div>
//               <div>
//                 <span className="text-2xl font-bold text-white">Petit</span>
//                 <span className="text-2xl font-light text-blue-400 ml-1">Financieros</span>
//               </div>
//             </div>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               Tu fuente confiable para noticias financieras y generales de la región.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
//                 <span className="text-sm">📱</span>
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
//                 <span className="text-sm">📧</span>
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
//                 <span className="text-sm">🐦</span>
//               </a>
//             </div>
//           </div>
          
//           {/* Services */}
//           <div>
//             <h4 className="font-bold text-lg mb-6 text-white">Servicios</h4>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2">→</span>Asesoría Financiera</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2">→</span>Planificación</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2">→</span>Inversiones</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2">→</span>Seguros</a></li>
//             </ul>
//           </div>
          
//           {/* Resources */}
//           <div>
//             <h4 className="font-bold text-lg mb-6 text-white">Recursos</h4>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2">→</span>Blog</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2">→</span>Calculadoras</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2">→</span>Cursos</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"><span className="mr-2">→</span>Webinars</a></li>
//             </ul>
//           </div>
          
//           {/* Contact */}
//           <div>
//             <h4 className="font-bold text-lg mb-6 text-white">Contacto</h4>
//             <ul className="space-y-3">
//               <li className="text-gray-300 flex items-center">
//                 <span className="mr-3 text-blue-400">📧</span>info@petitfinancieros.com.ar
//               </li>
//               <li className="text-gray-300 flex items-center">
//                 <span className="mr-3 text-blue-400">📱</span>+54 11 1234-5678
//               </li>
//               <li className="text-gray-300 flex items-center">
//                 <span className="mr-3 text-blue-400">📍</span>Buenos Aires, Argentina
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-700 mt-12 pt-8 text-center">
//           <p className="text-gray-400">&copy; 2025 Desarrollado por GauchoLab.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;