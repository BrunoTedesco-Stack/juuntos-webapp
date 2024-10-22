import { useState, useEffect } from 'react';
import Link from 'next/link';

// Função para definir um cookie
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Duração em dias
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

// Função para obter um cookie
const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const PrivacyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Verifica se o cookie 'policyAccepted' já está definido
    const policyAccepted = getCookie('policyAccepted');
    if (!policyAccepted) {
      setIsModalOpen(true); // Abre o modal se não houver cookie
    }
  }, []);

  const handleAccept = () => {
    setCookie('policyAccepted', 'true', 365); // Cookie dura 1 ano
    setIsModalOpen(false);
  };

  const handleReject = () => {
    setCookie('policyAccepted', 'rejected', 365); // Armazena a rejeição
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          {/* Fundo do Modal com Animação */}
          <div className="bg-black bg-opacity-95 w-full md:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-2xl transform transition-transform duration-300 ease-in-out animate-slide-up">
            {/* Título do Modal */}
            <h2 className="text-2xl font-extrabold text-orange-500 mb-4 tracking-tight flex items-center">
              🛡️ Termos de Privacidade e Cookies
            </h2>

            {/* Conteúdo do Modal */}
            <p className="text-base text-gray-300 mb-6 leading-relaxed">
  Usamos cookies para melhorar sua experiência no site. Ao continuar a navegar, você concorda com os nossos{' '}
  <Link href="/politicas" legacyBehavior>
    <a className="text-orange-500 font-semibold cursor-pointer hover:underline">
      Termos de Privacidade
    </a>
  </Link>{' '}
  e o uso de cookies para personalização de conteúdo e análises.
</p>
            {/* Botões de Ação */}
            <div className="flex justify-end space-x-4">
              <button
                className="py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition-all duration-300"
                onClick={handleReject}
              >
                Rejeitar
              </button>
              <button
                className="py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
                onClick={handleAccept}
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
