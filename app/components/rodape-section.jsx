import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

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
              <ScrollLink 
                to="home" 
                smooth={true} 
                duration={1000} 
                offset={0} 
                className="cursor-pointer hover:text-orange-500 transition-colors"
              >
                Home
              </ScrollLink>
              <ScrollLink 
                to="sobre" 
                smooth={true} 
                duration={1000}
                offset={-70}  
                className="cursor-pointer hover:text-orange-500 transition-colors"
              >
                Sobre Nós
              </ScrollLink>
              <ScrollLink 
                to="planos" 
                smooth={true} 
                duration={1000} 
                offset={0} 
                className="cursor-pointer hover:text-orange-500 transition-colors"
              >
                Nossos Planos
              </ScrollLink>
              <ScrollLink 
                to="contato" 
                smooth={true} 
                duration={1000} 
                offset={0} 
                className="cursor-pointer hover:text-orange-500 transition-colors"
              >
                Fale Conosco
              </ScrollLink>
              <ScrollLink 
                to="entrar" 
                smooth={true} 
                duration={1000} 
                offset={0} 
                className="cursor-pointer hover:text-orange-500 transition-colors"
              >
                Entrar
              </ScrollLink>
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
              <Link href="/politicas" legacyBehavior>
               
               <a className="text-orange-500 font-semibold cursor-pointer hover:underline">
               
                Termos de Uso
                </a>
              </Link> - 
              <Link href="/politicas" legacyBehavior>
               
               <a className="text-orange-500 font-semibold cursor-pointer hover:underline">
               
                Política de Privacidade
                </a>
                </Link>{' '}
            </p>
            <p className="mb-2">JUUNTOS ASSISTÊNCIA FARMACÊUTICA LTDA</p>
            <p>CNPJ: 91.942.306/0001-12</p>
            <p>Rua XV de novembro, 100, Rio de Janeiro, RJ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
