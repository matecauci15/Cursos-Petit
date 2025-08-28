import React, { useState } from 'react';
import { courses } from '../data/courseData';
import type { Course } from '../data/courseData';
import ProvinciaBanner from './ProvinciaBanner';
import CourseCard from './CourseCard';
import { BookOpen, Award, Users } from 'lucide-react';

interface CoursesHomeProps {
  onCourseClick: (course: Course) => void;
  onNewsletterSubscribe: (email: string) => void;
  isSubscribed: boolean;
}

const CoursesHome: React.FC<CoursesHomeProps> = ({ onCourseClick, onNewsletterSubscribe, isSubscribed }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const featuredCourse = courses[0];
  const otherCourses = courses.slice(1);

  const handleNewsletterSubmit = async () => {
    if (!email || !email.includes('@')) {
      alert('Por favor ingresa un email válido');
      return;
    }

    setIsLoading(true);
    
    // Simular delay de envío
    setTimeout(() => {
      onNewsletterSubscribe(email);
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-16 pb-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Title */}
              <h1 className="text-5xl lg:text-6xl font-semibold text-[#74a4ab] leading-tight mb-6">
                Cursos Petit Financieros
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Desarrollá tus habilidades con cursos gratuitos de tecnología, finanzas y desarrollo profesional. 
                Contenido de calidad internacional con certificación incluida.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => document.getElementById('featured-course')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Ver cursos
                </button>
                <button 
                  onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  Suscribirse
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contenido Premium</h3>
                  <p className="text-gray-600">Cursos desarrollados por expertos internacionales</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificación</h3>
                  <p className="text-gray-600">Obtené certificados reconocidos al completar</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comunidad</h3>
                  <p className="text-gray-600">Unite a más de 160,000 estudiantes</p>
                </div>
              </div>
            </div>
            
            {/* Banner */}
            <div className="relative">
              <ProvinciaBanner />
            </div>
          </div>
        </section>

        {/* Featured Course */}
        <section id="featured-course" className="py-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Destacado</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Curso más popular
            </h2>
            <p className="text-gray-600 text-lg">
              El curso que más está transformando carreras profesionales
            </p>
          </div>
          
          <CourseCard course={featuredCourse} isLarge={true} onClick={onCourseClick} />
        </section>

        {/* Latest Courses */}
        <section id='latest-courses' className="py-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Disponibles</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Todos los cursos
            </h2>
            <p className="text-gray-600 text-lg">
              Desarrollá nuevas habilidades con contenido de calidad internacional
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherCourses.map((course) => (
              <CourseCard key={course.id} course={course} onClick={onCourseClick} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="px-8 py-12 text-center">
              {isSubscribed ? (
                <div className="max-w-md mx-auto">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Ya estás suscripto!
                  </h3>
                  <p className="text-gray-600">
                    Revisá tu email para confirmar la suscripción. 
                    Pronto recibirás notificaciones sobre nuevos cursos.
                  </p>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto space-y-6">
                  {/* Header */}
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
                      🎓 Newsletter educativo
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      No te pierdas ningún curso
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-8">
                      Únete a <strong className="text-gray-900">más de 15,000 estudiantes</strong> que 
                      reciben notificaciones sobre nuevos cursos y contenido exclusivo.
                    </p>
                  </div>

                  {/* Form */}
                  <div className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button 
                        onClick={handleNewsletterSubmit}
                        disabled={isLoading}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Enviando...' : 'Suscribirme'}
                      </button>
                    </div>
                  </div> 
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesHome;