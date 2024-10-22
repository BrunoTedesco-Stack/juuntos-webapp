"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Detecta o caminho atual
  const [logoColor, setLogoColor] = useState('black');
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  

  if (!isMounted) return null;

  // Verifica se estamos na página de políticas
  const isOnPoliciesPage = pathname === '/politicas';

  // Função para rolar para as seções na página inicial
  const handleScrollToSection = (sectionId) => {
    if (isOnPoliciesPage) {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  // Função para redirecionar para a página inicial
  const handleRedirectToHome = () => {
    router.push('/');
    setOpen(false);
  };

  return (
    <motion.nav className="fixed top-0 left-0 w-full bg-opacity-85 transition-colors duration-500 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Image
          src="/images/logo-branco.png"
          alt="Logotipo"
          width={200}
          height={50}
          style={{
            filter: `invert(${logoColor === 'black' ? 0 : 1})`,
            transition: 'filter 0.3s ease, transform 0.5s ease',
          }}
          className="hover:scale-110"
        />

        {/* Ícone de menu móvel */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links de navegação */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          {['home', 'sobre', 'planos', 'contato'].map((section) => (
            <li key={section}>
              <button
                onClick={() =>
                  isOnPoliciesPage ? handleRedirectToHome() : handleScrollToSection(section)
                }
                className="hover:text-gray-200 transition-colors duration-300 cursor-pointer"
              >
                {section.toUpperCase()}
              </button>
            </li>
          ))}
          <li>
            <Link href="/entrar" className="hover:text-gray-200 transition-colors duration-300">
              ENTRAR
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu móvel */}
      {open && (
        <ul className="md:hidden bg-orange-700 text-white flex flex-col space-y-4 p-4">
          {['home', 'sobre', 'planos', 'contato'].map((section) => (
            <li key={section}>
              <button
                onClick={() =>
                  isOnPoliciesPage ? handleRedirectToHome() : handleScrollToSection(section)
                }
                className="hover:text-gray-200 transition-colors duration-300 cursor-pointer"
              >
                {section.toUpperCase()}
              </button>
            </li>
          ))}
          <li>
            <Link href="/entrar" className="hover:text-gray-200 transition-colors duration-300">
              ENTRAR
            </Link>
          </li>
        </ul>
      )}
    </motion.nav>
  );
}
