// COMPONENTE NAVBAR.JSX
import { useNavbarColor } from '@/app/context/NavbarContext';
import { useState, useEffect } from "react";
import {motion} from 'framer-motion';
import Image from 'next/image'; 



export default function Navbar() {
    const { navbarColor } = useNavbarColor();
    const [logoColor, setLogoColor] = useState('black'); // Estado para controlar a cor do logo
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) { // Ajuste o valor conforme necessário
        setLogoColor('red'); // Cor do logo quando a página é rolada para baixo
      } else {
        setLogoColor('black'); // Cor do logo quando a página está no topo
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const [open, setOpen] = useState(false);
    return (
        <motion.nav className={`fixed top-0 left-0 h-50 w-full bg-opacity-85 transition-colors duration-500 ${navbarColor} shadow-2xl z-50`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          {/* Logotipo */}
          <Image
            src="/images/logo-branco.png"
            alt="Logotipo"
            width={200}
            height={50}
            style={{ 
              filter: `invert(${logoColor === 'black' ? 0 : 1})`,
              transition: 'filter 0.3s ease, transform 0.5s ease' 
            }} 
            className="hover:scale-110"
          />

          {/* Ícone de Menu para dispositivos móveis */}
          <div className="md:hidden">
            <button 
              id="menu-toggle"
              className="text-white focus:outline-none"
              onClick={() => setOpen(!open)} 
            >
              {/* Ícone Hamburger */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>

          {/* Links do Menu - Visível apenas em telas médias ou maiores */}
          <ul className="hidden md:flex space-x-8 text-white font-semibold">
            <li>
              <a href="#home" className="hover:text-gray-200 transition-colors duration-300">
                HOME
              </a>
            </li>
            <li>
              <a href="#sobre-nos" className="hover:text-gray-200 transition-colors duration-300">
                SOBRE NÓS
              </a>
            </li>
            <li>
              <a href="#nossos-planos" className="hover:text-gray-200 transition-colors duration-300">
                NOSSOS PLANOS
              </a>
            </li>
            <li>
              <a href="#fale-conosco" className="hover:text-gray-200 transition-colors duration-300">
                FALE CONOSCO
              </a>
            </li>
            <li>
              <a href="#entrar" className="hover:text-gray-200 transition-colors duration-300">
                ENTRAR
              </a>
            </li>
          </ul>
        </div>

        {/* Links do Menu para dispositivos móveis */}
        {open && (
          <ul className="md:hidden bg-orange-700 text-white flex flex-col space-y-4 p-4">
            <li>
              <a href="#home" className="hover:text-gray-200 transition-colors duration-300">
                HOME
              </a>
            </li>
            <li>
              <a href="#sobre-nos" className="hover:text-gray-200 transition-colors duration-300">
                SOBRE NÓS
              </a>
            </li>
            <li>
              <a href="#nossos-planos" className="hover:text-gray-200 transition-colors duration-300">
                NOSSOS PLANOS
              </a>
            </li>
            <li>
              <a href="#fale-conosco" className="hover:text-gray-200 transition-colors duration-300">
                FALE CONOSCO
              </a>
            </li>
            <li>
              <a href="#entrar" className="hover:text-gray-200 transition-colors duration-300">
                ENTRAR
              </a>
            </li>
          </ul>
        )}
      </motion.nav>
    );
}