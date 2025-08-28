// import { useState } from 'react';
// import type { Course } from './data/courseData';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import BlogHome from './components/CoursesHome';
// import BlogPostComponent from './components/CourseDetail';
// import { useNavigate } from 'react-router-dom';

// // Componente principal de la App
// const App = () => {
//   const [currentView, setCurrentView] = useState<'home' | 'courses'>('home');
//   const [selectedPost, setSelectedPost] = useState<Course | null>(null);
//   const [activeSection, setActiveSection] = useState<string>('Course');
//   const [, setEmail] = useState<string>('');
//   const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
//   const [showNotification, setShowNotification] = useState<boolean>(false);
//   const navigate = useNavigate();

  
  
//   const handlePostClick = (courses: Course) => {
//     setSelectedPost(courses);
//     setCurrentView('courses');
//     // Smooth scroll to top
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleBackClick = (courses?: Course) => {
//     if (courses) {
//       setSelectedPost(courses);
//       setCurrentView('courses');
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       setCurrentView('home');
//       setSelectedPost(null);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const handleNewsletterSubscribe = (emailValue: string) => {
//     if (emailValue && emailValue.includes('@')) {
//       setEmail(emailValue);
//       setIsSubscribed(true);
//       setShowNotification(true);
      
//       // Simular envío a backend
//       console.log('Suscribiendo email:', emailValue);
      
//       // Ocultar notificación después de 3 segundos
//       setTimeout(() => {
//         setShowNotification(false);
//       }, 3000);
//     } else {
//       alert('Por favor ingresa un email válido');
//     }
//   };

//   const handleShare = (platform: string, courses?: Course) => {
//     const title = courses ? courses.title : 'Blog de Petit Financieros';
//     const url = window.location.href;
    
//     switch (platform) {
//       case 'twitter':
//         window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
//         break;
//       case 'facebook':
//         window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
//         break;
//       case 'linkedin':
//         window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
//         break;
//       case 'whatsapp':
//         window.open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`, '_blank');
//         break;
//       default:
//         // Copiar al portapapeles
//         navigator.clipboard.writeText(url).then(() => {
//           alert('¡Link copiado al portapapeles!');
//         });
//     }
//   };
//     const handleSectionChange = (newSection: string) => {
    
//     if (newSection === 'Rosario') {
//       navigate('/');
//     } else {
//       navigate(`/${newSection.toLowerCase()}`);
//     }
//   };

//   const handleComment = () => {
//     // Simular funcionalidad de comentarios
//     const comment = prompt('¿Qué te pareció este artículo?');
//     if (comment) {
//       alert('¡Gracias por tu comentario! Lo revisaremos pronto.');
//       console.log('Comentario enviado:', comment);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50" style={{ 
//       fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//     }}>

//       {/* Notificación de suscripción */}
//       {showNotification && (
//         <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
//           <div className="flex items-center space-x-2">
//             <span>✅</span>
//             <span className="font-medium">¡Suscripción exitosa!</span>
//           </div>
//         </div>
//       )}

//       <div className="flex flex-col min-h-screen">
//         <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
//         <main className="flex-grow">
//           {currentView === 'home' ? (
//             <BlogHome 
//               onCourseClick={handlePostClick} 
//               onNewsletterSubscribe={handleNewsletterSubscribe}
//               isSubscribed={isSubscribed}
//             />
//           ) : (
//             <BlogPostComponent 
//               course={selectedPost}
//               onBackClick={handleBackClick}
//               onEnroll={() => alert('¡Te has inscrito al curso!')}
//               onShare={handleShare}
//               onComment={handleComment}
//               onBack={handleBackClick}
//             />
//           )}
//         </main>
        
//         <Footer setActiveSection={handleSectionChange}/>
//       </div>
//     </div>
//   );
// };

// export default App;

import { useState } from 'react';
import type { Course } from './data/courseData';
import Header from './components/Header';
import Footer from './components/Footer';
import CoursesHome from './components/CoursesHome';
import CourseDetail from './components/CourseDetail';
import { useNavigate } from 'react-router-dom';

// Componente principal de la App
const App = () => {
  const [currentView, setCurrentView] = useState<'home' | 'courseDetail'>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeSection, setActiveSection] = useState<string>('Course');
  const [, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const navigate = useNavigate();

  // Manejar click en un curso (ir a detalle)
  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setCurrentView('courseDetail');
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Manejar botón "Volver a cursos"
  const handleBackToCourses = () => {
    setCurrentView('home');
    // No limpiamos selectedCourse inmediatamente para evitar el error
    // Se limpiará cuando seleccionen otro curso
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Manejar inscripción a curso
  const handleEnrollCourse = (courseId: string) => {
    const course = selectedCourse;
    if (course) {
      alert(`¡Te has inscrito al curso "${course.title}"!`);
      console.log('Inscripción a curso:', courseId);
    }
  };

  const handleNewsletterSubscribe = (emailValue: string) => {
    if (emailValue && emailValue.includes('@')) {
      setEmail(emailValue);
      setIsSubscribed(true);
      setShowNotification(true);
      
      // Simular envío a backend
      console.log('Suscribiendo email:', emailValue);
      
      // Ocultar notificación después de 3 segundos
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } else {
      alert('Por favor ingresa un email válido');
    }
  };

  const handleShare = (platform: string, course?: Course) => {
    const title = course ? course.title : 'Cursos de Petit Financieros';
    const url = window.location.href;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`, '_blank');
        break;
      default:
        // Copiar al portapapeles
        navigator.clipboard.writeText(url).then(() => {
          alert('¡Link copiado al portapapeles!');
        });
    }
  };

  const handleSectionChange = (newSection: string) => {
    if (newSection === 'Rosario') {
      navigate('/');
    } else {
      navigate(`/${newSection.toLowerCase()}`);
    }
  };

  const handleComment = (courseId: string, comment: string) => {
    // Simular funcionalidad de comentarios
    if (comment) {
      alert('¡Gracias por tu comentario! Lo revisaremos pronto.');
      console.log('Comentario enviado para curso:', courseId, comment);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>

      {/* Notificación de suscripción */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <span>✅</span>
            <span className="font-medium">¡Suscripción exitosa!</span>
          </div>
        </div>
      )}

      <div className="flex flex-col min-h-screen">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="flex-grow">
          {currentView === 'home' ? (
            <CoursesHome 
              onCourseClick={handleCourseClick} 
              onNewsletterSubscribe={handleNewsletterSubscribe}
              isSubscribed={isSubscribed}
            />
          ) : (
            <CourseDetail 
              course={selectedCourse}
              onBack={handleBackToCourses}
              onEnroll={handleEnrollCourse}
              onShare={handleShare}
              onComment={handleComment}
            />
          )}
        </main>
        
        <Footer setActiveSection={handleSectionChange}/>
      </div>
    </div>
  );
};

export default App;