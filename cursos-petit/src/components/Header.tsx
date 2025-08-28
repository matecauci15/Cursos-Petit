import { useState } from 'react';
import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

interface HeaderProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Inicio', id: 'home', scrollTo: 'top' },
    { name: 'Destacado', id: 'featured', scrollTo: 'featured-course' },
    { name: 'Cursos', id: 'cursos', scrollTo: 'latest-courses' },
    // { name: 'Newsletter', id: 'newsletter', scrollTo: 'newsletter' }
  ];

  const handleItemClick = (item: typeof navigationItems[0]) => {
    if (setActiveSection) {
      setActiveSection(item.id);
    }
    setMobileMenuOpen(false);

    // Manejar scroll
    if (item.scrollTo === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(item.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleItemClick({ name: 'Inicio', id: 'home', scrollTo: 'top' })}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          >
            <img className="h-8 w-auto" src={logo} alt="Petit Financieros" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleItemClick({ name: 'Newsletter', id: 'newsletter', scrollTo: 'newsletter' })}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Suscribirse
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? 
              <X className="h-5 w-5 text-gray-600" /> : 
              <Menu className="h-5 w-5 text-gray-600" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`px-2 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-left ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleItemClick({ name: 'Newsletter', id: 'newsletter', scrollTo: 'newsletter' })}
                  className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:bg-blue-700 transition-colors duration-200"
                >
                  Suscribirse al Newsletter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;