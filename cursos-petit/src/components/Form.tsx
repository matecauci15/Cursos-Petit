// import React, { useState } from 'react';
// import { X, User, Mail, Phone, CreditCard, Send } from 'lucide-react';

// interface EnrollmentFormProps {
//   isOpen: boolean;
//   onClose: () => void;
//   courseTitle: string;
//   coursePrice: string;
//   onSubmit: (formData: EnrollmentData) => void;
// }

// interface EnrollmentData {
//   nombre: string;
//   apellido: string;
//   email: string;
//   telefono: string;
//   dni: string;
// }

// const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ 
//   isOpen, 
//   onClose, 
//   courseTitle, 
//   coursePrice, 
//   onSubmit 
// }) => {
//   const [formData, setFormData] = useState<EnrollmentData>({
//     nombre: '',
//     apellido: '',
//     email: '',
//     telefono: '',
//     dni: ''
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState<Partial<EnrollmentData>>({});

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Limpiar error cuando el usuario empiece a escribir
//     if (errors[name as keyof EnrollmentData]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors: Partial<EnrollmentData> = {};

//     if (!formData.nombre.trim()) {
//       newErrors.nombre = 'El nombre es requerido';
//     }

//     if (!formData.apellido.trim()) {
//       newErrors.apellido = 'El apellido es requerido';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'El email es requerido';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Por favor ingresa un email válido';
//     }

//     if (!formData.telefono.trim()) {
//       newErrors.telefono = 'El teléfono es requerido';
//     }

//     if (!formData.dni.trim()) {
//       newErrors.dni = 'El DNI es requerido';
//     } else if (!/^\d{7,8}$/.test(formData.dni)) {
//       newErrors.dni = 'El DNI debe tener 7 u 8 dígitos';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);

//     // Simular envío del formulario
//     try {
//       await new Promise(resolve => setTimeout(resolve, 2000)); // Simular delay de envío
      
//       onSubmit(formData);
      
//       // Limpiar formulario
//       setFormData({
//         nombre: '',
//         apellido: '',
//         email: '',
//         telefono: '',
//         dni: ''
//       });
      
//       onClose();
//     } catch (error) {
//       console.error('Error al enviar formulario:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <div>
//             <h3 className="text-xl font-bold text-gray-900">Inscripción al curso</h3>
//             <p className="text-sm text-gray-600 mt-1">{courseTitle}</p>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Form */}
//         <div className="p-6 space-y-4">
//           {/* Nombre */}
//           <div>
//             <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
//               <User className="w-4 h-4 inline mr-2" />
//               Nombre *
//             </label>
//             <input
//               type="text"
//               id="nombre"
//               name="nombre"
//               value={formData.nombre}
//               onChange={handleInputChange}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//                 errors.nombre ? 'border-red-500' : 'border-gray-300'
//               }`}
//               placeholder="Tu nombre"
//             />
//             {errors.nombre && (
//               <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
//             )}
//           </div>

//           {/* Apellido */}
//           <div>
//             <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
//               <User className="w-4 h-4 inline mr-2" />
//               Apellido *
//             </label>
//             <input
//               type="text"
//               id="apellido"
//               name="apellido"
//               value={formData.apellido}
//               onChange={handleInputChange}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//                 errors.apellido ? 'border-red-500' : 'border-gray-300'
//               }`}
//               placeholder="Tu apellido"
//             />
//             {errors.apellido && (
//               <p className="mt-1 text-sm text-red-600">{errors.apellido}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//               <Mail className="w-4 h-4 inline mr-2" />
//               Email *
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//                 errors.email ? 'border-red-500' : 'border-gray-300'
//               }`}
//               placeholder="tu@email.com"
//             />
//             {errors.email && (
//               <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//             )}
//           </div>

//           {/* Teléfono */}
//           <div>
//             <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
//               <Phone className="w-4 h-4 inline mr-2" />
//               Teléfono *
//             </label>
//             <input
//               type="tel"
//               id="telefono"
//               name="telefono"
//               value={formData.telefono}
//               onChange={handleInputChange}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//                 errors.telefono ? 'border-red-500' : 'border-gray-300'
//               }`}
//               placeholder="11 1234-5678"
//             />
//             {errors.telefono && (
//               <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>
//             )}
//           </div>

//           {/* DNI */}
//           <div>
//             <label htmlFor="dni" className="block text-sm font-medium text-gray-700 mb-2">
//               <CreditCard className="w-4 h-4 inline mr-2" />
//               DNI *
//             </label>
//             <input
//               type="text"
//               id="dni"
//               name="dni"
//               value={formData.dni}
//               onChange={handleInputChange}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//                 errors.dni ? 'border-red-500' : 'border-gray-300'
//               }`}
//               placeholder="12345678"
//               maxLength={8}
//             />
//             {errors.dni && (
//               <p className="mt-1 text-sm text-red-600">{errors.dni}</p>
//             )}
//           </div>

//           {/* Resumen del curso */}
//           <div className="bg-blue-50 rounded-lg p-4 mt-6">
//             <h4 className="font-medium text-gray-900 mb-2">Resumen de inscripción:</h4>
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">Precio del curso:</span>
//               <span className="font-bold text-blue-600 text-lg">{coursePrice}</span>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
//               disabled={isLoading}
//             >
//               Cancelar
//             </button>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   Enviando...
//                 </>
//               ) : (
//                 <>
//                   <Send className="w-4 h-4" />
//                   Inscribirme
//                 </>
//               )}
//             </button>
//           </div>

//           <p className="text-xs text-gray-500 text-center mt-4">
//             * Campos obligatorios. Nos contactaremos contigo para confirmar la inscripción.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnrollmentForm;


import React, { useState } from 'react';
import { X, User, Mail, Phone, CreditCard, Send } from 'lucide-react';

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  coursePrice: string;
  onSubmit: (formData: EnrollmentData) => void;
}

interface EnrollmentData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  dni: string;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ 
  isOpen, 
  onClose, 
  courseTitle, 
  coursePrice, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState<EnrollmentData>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    dni: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<EnrollmentData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof EnrollmentData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<EnrollmentData> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }

    if (!formData.dni.trim()) {
      newErrors.dni = 'El DNI es requerido';
    } else if (!/^\d{7,8}$/.test(formData.dni)) {
      newErrors.dni = 'El DNI debe tener 7 u 8 dígitos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent | React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simular delay de envío
      
      onSubmit(formData);
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        dni: ''
      });
      
      onClose();
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Inscripción al curso</h3>
            <p className="text-sm text-gray-600 mt-1">{courseTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4"
             onKeyDown={(e) => {
               if (e.key === 'Enter' && e.ctrlKey) {
                 handleSubmit(e as React.KeyboardEvent);
               }
             }}>
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.nombre ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tu nombre"
            />
            {errors.nombre && (
              <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
            )}
          </div>

          {/* Apellido */}
          <div>
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Apellido *
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.apellido ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tu apellido"
            />
            {errors.apellido && (
              <p className="mt-1 text-sm text-red-600">{errors.apellido}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.telefono ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="11 1234-5678"
            />
            {errors.telefono && (
              <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>
            )}
          </div>

          {/* DNI */}
          <div>
            <label htmlFor="dni" className="block text-sm font-medium text-gray-700 mb-2">
              <CreditCard className="w-4 h-4 inline mr-2" />
              DNI *
            </label>
            <input
              type="text"
              id="dni"
              name="dni"
              value={formData.dni}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.dni ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="12345678"
              maxLength={8}
            />
            {errors.dni && (
              <p className="mt-1 text-sm text-red-600">{errors.dni}</p>
            )}
          </div>

          {/* Resumen del curso */}
          <div className="bg-blue-50 rounded-lg p-4 mt-6">
            <h4 className="font-medium text-gray-900 mb-2">Resumen de inscripción:</h4>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Precio del curso:</span>
              <span className="font-bold text-blue-600 text-lg">{coursePrice}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              onClick={(e) => handleSubmit(e)}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Inscribirme
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            * Campos obligatorios. Nos contactaremos contigo para confirmar la inscripción.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;