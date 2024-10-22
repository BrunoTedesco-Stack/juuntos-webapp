import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-10 font-spacegrotesk">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Container Principal */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-12 space-y-8 lg:space-y-0">
          {/* Logo e Navegação */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/images/logo-branco.png" alt="Logo Juuntos" className="h-8" />
            </div>

            {/* Navegação */}
            <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-white text-lg">
              <a href="#home" className="hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="#sobre-nos" className="hover:text-orange-500 transition-colors">
                Sobre Nós
              </a>
              <a href="#planos" className="hover:text-orange-500 transition-colors">
                Nossos Planos
              </a>
              <a href="#contato" className="hover:text-orange-500 transition-colors">
                Fale Conosco
              </a>
              <a href="#entrar" className="hover:text-orange-500 transition-colors">
                Entrar
              </a>
            </div>
          </div>

          {/* Download na App Store e Google Play */}
          <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:bg-orange-500"
            >
              <FaApple size={20} />
              <span>Baixar na App Store</span>
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:bg-orange-500"
            >
              <FaGooglePlay size={20} />
              <span>Baixar na Google Play</span>
            </a>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Direitos Autorais e Informações Adicionais */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            <p className="mb-2">
              Direitos Autorais © Juuntos - 
              <a href="#termos" className="hover:text-orange-500 ml-1">Termos de Uso</a> - 
              <a href="#privacidade" className="hover:text-orange-500 ml-1">Política de Privacidade</a>
            </p>
            <p className="mb-2">JUUNTOS ASSISTÊNCIA FARMACÊUTICA LTDA</p>
            <p>CNPJ: 00.000.000/0001-00</p>
            <p>Rua XPTO, 100, Rio de Janeiro, RJ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
