import { useState } from 'react';

const PrivacyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          {/* Fundo do Modal com Animação */}
          <div className="bg-white w-full md:w-3/4 lg:w-1/2 p-6 rounded-t-lg shadow-2xl transform transition-transform duration-300 ease-in-out animate-slide-up">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4 tracking-tight">
              🛡️ Termos de Privacidade e Cookies
            </h2>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              Usamos cookies para melhorar sua experiência no site. Ao continuar a navegar, você concorda com os nossos 
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                Termos de Privacidade
              </span> 
              e o uso de cookies para personalização de conteúdo e análises.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-300"
                onClick={handleClose}
              >
                Rejeitar
              </button>
              <button
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
                onClick={handleClose}
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyModal;
