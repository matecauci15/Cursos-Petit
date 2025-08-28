// import React from 'react';
// import { ChevronRight, Star, Users, Clock, Globe } from 'lucide-react';
// import type { Course } from '../data/courseData';

// interface CourseDetailProps {
//   course: Course | null;
//   onBack: () => void;
//   onEnroll: (courseId: string) => void;
//   onBackClick?: (course?: Course) => void; // Optional, not used here
//   onShare?: (platform: string, course?: Course) => void; // Optional,
//   onComment?: (courseId: string, comment: string) => void; // Optional, not used here
// }

// const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack, onEnroll }) => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Back button */}
//         <button 
//           onClick={onBack}
//           className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
//         >
//           <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
//           Volver a cursos
//         </button>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main content */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
//               <img 
//                 src={course!.image} 
//                 alt={course!.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-8">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {course!.tags.map((tag) => (
//                     <span key={tag} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
                
//                 <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                   {course!.title}
//                 </h1>
                
//                 <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
//                   <div className="flex items-center gap-2">
//                     <Star className="w-5 h-5 text-yellow-500 fill-current" />
//                     <span className="font-medium">{course!.rating}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Users className="w-5 h-5" />
//                     <span>{course!.students} estudiantes</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-5 h-5" />
//                     <span>{course!.duration}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Globe className="w-5 h-5" />
//                     <span>{course!.language.join(', ')}</span>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                   {course!.detailedDescription}
//                 </p>

//                 {/* What you'll learn */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Qué aprenderás?</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {course!.whatYouWillLearn.map((item, index) => (
//                       <div key={index} className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
//                         <span className="text-gray-700">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Requirements */}
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Requisitos</h3>
//                   <ul className="space-y-3">
//                     {course!.requirements.map((req, index) => (
//                       <li key={index} className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                         <span className="text-gray-700">{req}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-8">
//               <div className="text-center mb-6">
//                 <div className="text-3xl font-bold text-gray-900 mb-2">
//                   {course!.price}
//                 </div>
//                 {course!.originalPrice && (
//                   <div className="text-lg text-gray-500 line-through">
//                     {course!.originalPrice}
//                   </div>
//                 )}
//               </div>

//               <button 
//                 onClick={() => onEnroll(course!.id)}
//                 className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6"
//               >
//                 Inscribirse ahora
//               </button>

//               <div className="space-y-4 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Instructor:</span>
//                   <span className="font-medium">{course!.instructor}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Duración:</span>
//                   <span className="font-medium">{course!.duration}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Nivel:</span>
//                   <span className="font-medium">{course!.level}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Idiomas:</span>
//                   <span className="font-medium">{course!.language.join(', ')}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Certificado:</span>
//                   <span className="font-medium">Sí</span>
//                 </div>
//               </div>

//               {/* <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="flex items-center gap-3 mb-2">
//                   <BookOpen className="w-5 h-5 text-blue-600" />
//                   <span className="font-medium">Acceso de por vida</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Award className="w-5 h-5 text-green-500" />
//                   <span className="font-medium">Certificado al completar</span>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;


// import React from 'react';
// import { ChevronRight, Star, Users, Clock, Globe } from 'lucide-react';
// import type { Course } from '../data/courseData';

// interface CourseDetailProps {
//   course: Course | null;
//   onBack: () => void;
//   onEnroll: (courseId: string) => void;
//   onBackClick?: (course?: Course) => void;
//   onShare?: (platform: string, course?: Course) => void;
//   onComment?: (courseId: string, comment: string) => void;
// }

// const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack, onEnroll }) => {
//   // Si no hay curso, mostrar loading o redirigir inmediatamente
//   if (!course) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Cargando curso...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Back button */}
//         <button 
//           onClick={onBack}
//           className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
//         >
//           <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
//           Volver a cursos
//         </button>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main content */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
//               <img 
//                 src={course.image} 
//                 alt={course.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-8">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {course.tags.map((tag) => (
//                     <span key={tag} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
                
//                 <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                   {course.title}
//                 </h1>
                
//                 <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
//                   <div className="flex items-center gap-2">
//                     <Star className="w-5 h-5 text-yellow-500 fill-current" />
//                     <span className="font-medium">{course.rating}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Users className="w-5 h-5" />
//                     <span>{course.students} estudiantes</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-5 h-5" />
//                     <span>{course.duration}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Globe className="w-5 h-5" />
//                     <span>{course.language.join(', ')}</span>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                   {course.detailedDescription}
//                 </p>

//                 {/* What you'll learn */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Qué aprenderás?</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {course.whatYouWillLearn.map((item, index) => (
//                       <div key={index} className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
//                         <span className="text-gray-700">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Requirements */}
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Requisitos</h3>
//                   <ul className="space-y-3">
//                     {course.requirements.map((req, index) => (
//                       <li key={index} className="flex items-start gap-3">
//                         <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                         <span className="text-gray-700">{req}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-8">
//               <div className="text-center mb-6">
//                 <div className="text-3xl font-bold text-gray-900 mb-2">
//                   {course.price}
//                 </div>
//                 {course.originalPrice && (
//                   <div className="text-lg text-gray-500 line-through">
//                     {course.originalPrice}
//                   </div>
//                 )}
//               </div>

//               <button 
//                 onClick={() => onEnroll(course.id)}
//                 className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6"
//               >
//                 Inscribirse ahora
//               </button>

//               <div className="space-y-4 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Instructor:</span>
//                   <span className="font-medium">{course.instructor}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Duración:</span>
//                   <span className="font-medium">{course.duration}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Nivel:</span>
//                   <span className="font-medium">{course.level}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Idiomas:</span>
//                   <span className="font-medium">{course.language.join(', ')}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Certificado:</span>
//                   <span className="font-medium">Sí</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;


import React, { useState } from 'react';
import { ChevronRight, Star, Users, Clock, Globe } from 'lucide-react';
import type { Course } from '../data/courseData';
import EnrollmentForm from './Form';

interface CourseDetailProps {
  course: Course | null;
  onBack: () => void;
  onEnroll: (courseId: string) => void;
  onBackClick?: (course?: Course) => void;
  onShare?: (platform: string, course?: Course) => void;
  onComment?: (courseId: string, comment: string) => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack, onEnroll }) => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const handleEnrollClick = () => {
    setShowEnrollmentForm(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = (formData: any) => {
    // Simular envío a backend
    console.log('Datos de inscripción:', formData);
    console.log('Curso:', course?.title);
    
    // Mostrar mensaje de éxito
    alert(`¡Inscripción exitosa!\n\nHola ${formData.nombre} ${formData.apellido}, te has inscrito exitosamente al curso "${course?.title}".\n\nEn breve nos contactaremos contigo al email ${formData.email} para coordinar el inicio del curso.`);
    
    // Llamar al onEnroll original si existe
    if (course) {
      onEnroll(course.id);
    }
  };
  // Si no hay curso, mostrar loading o redirigir inmediatamente
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando curso...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
          Volver a cursos
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{course.students} estudiantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    <span>{course.language.join(', ')}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {course.detailedDescription}
                </p>

                {/* What you'll learn */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Qué aprenderás?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Requisitos</h3>
                  <ul className="space-y-3">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {course.price}
                </div>
                {course.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">
                    {course.originalPrice}
                  </div>
                )}
              </div>

              <button 
                onClick={handleEnrollClick}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6"
              >
                Inscribirse ahora
              </button>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Instructor:</span>
                  <span className="font-medium">{course.instructor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duración:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nivel:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Idiomas:</span>
                  <span className="font-medium">{course.language.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Certificado:</span>
                  <span className="font-medium">Sí</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de inscripción */}
      <EnrollmentForm
        isOpen={showEnrollmentForm}
        onClose={() => setShowEnrollmentForm(false)}
        courseTitle={course.title}
        coursePrice={course.price}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default CourseDetail;