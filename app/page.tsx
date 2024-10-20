"use client";
import { useEffect, useState, useRef } from "react";
import NavBar from '@/app/components/navbar'; 
import HomeSection from '@/app/components/home-section';
import SecondSection from '@/app/components/second-section';
import { motion } from 'framer-motion';
import { useNavbarColor } from '@/app/context/NavbarContext';
import PrivacyModal from './components/modalprivacidade';
import FacilUsoSection from '@/app/components/facil-uso'

import Linhas from '/public/images/linhas.svg'; // Importa o SVG como um componente React

export default function TransitionsPage() {
  // Create an array of refs for your sections
  const sectionRefs = [
    useRef(null),
    useRef(null),
    // Add more refs if you have more sections
  ];
  const { setNavbarColor } = useNavbarColor();

  // Ensure the page scrolls to the top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [color, setColor] = useState('#f97316'); // State to control color

  const handleMouseEnter = () => {
    setColor('#ea580c'); // Change color on mouse enter
  };

  const handleMouseLeave = () => {
    setColor('#f97316'); // Revert to original color on mouse leave
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case 'section1':
                setNavbarColor('bg-orange-700');
                break;
              case 'section2':
                setNavbarColor('bg-violet-400');
                break;
              case 'section3':
                setNavbarColor('bg-red-600');
                break;
              default:
                setNavbarColor('bg-blue-600');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section ref
    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [setNavbarColor]);

  return (
    <div className="bg-orange-600 font-sans overflow-hidden">
       <PrivacyModal />
      {/* Render the NavBar component */}
      <NavBar />

      {/* First HOME section with fixed size */}
      <motion.section
        id="section1"
        ref={sectionRefs[0]}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HomeSection />
      </motion.section>
      
      <div>
      <motion.section
        id="section1"
        ref={sectionRefs[0]}
        className=" flex items-center justify-center bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600 "
        style={{ backgroundImage: "url('/images/linhas.svg')" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
       <SecondSection />
       
      </motion.section>
      </div>
      



      <div className="relative w-full  overflow-hidden bg-gray-800">
      <section id="planos" className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Elementos Decorativos */}
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      <div className="w-3/4 h-3/4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    {/* Título da Seção */}
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
        Conheça nossos planos
      </h2>
      <p className="text-2xl text-gray-700 animate-fade-in-up delay-200">
        Temos planos para todas as necessidades, escolha o seu!
      </p>
    </div>

    {/* Cards dos Planos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
      {/* Card: Celeste */}
      <div className="relative group p-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <div className="absolute inset-0 w-full h-full bg-blue-500 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
          Celeste <span className="font-light">- Juuntos 100</span>
        </h3>
        <p className="text-lg text-white mb-8">
          Medicamentos prescritos, genéricos e tarjados com R$100,00 mensal de cobertura para cada colaborador.
        </p>
        <button className="py-3 px-6 bg-white text-blue-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white">
          Saiba mais
        </button>
      </div>

      {/* Card: Turquesa */}
      <div className="relative group p-8 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <div className="absolute inset-0 w-full h-full bg-teal-500 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
          Turquesa <span className="font-light">- Juuntos 200</span>
        </h3>
        <p className="text-lg text-white mb-8">
          Medicamentos prescritos, genéricos e tarjados com R$200,00 mensal de cobertura para cada colaborador.
        </p>
        <button className="py-3 px-6 bg-white text-teal-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-teal-600 hover:text-white">
          Saiba mais
        </button>
      </div>

      {/* Card: Royal */}
      <div className="relative group p-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <div className="absolute inset-0 w-full h-full bg-indigo-600 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
          Royal <span className="font-light">- Juuntos 200</span>
        </h3>
        <p className="text-lg text-white mb-8">
          Medicamentos prescritos, de marca ou genéricos e tarjados com R$200,00 mensal de cobertura para cada colaborador.
        </p>
        <button className="py-3 px-6 bg-white text-indigo-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:text-white">
          Saiba mais
        </button>
      </div>
    </div>

    {/* Benefícios dos Planos */}
    <div className="mt-20 text-center relative z-10">
      <p className="text-xl text-gray-800 font-medium mb-4 animate-fade-in-up delay-300">
        Flexibilidade para escolha do valor do limite mensal de cobertura
      </p>
      <p className="text-xl text-gray-800 font-medium mb-4 animate-fade-in-up delay-500">
        Mensalidade fixa com previsibilidade orçamentária
      </p>
      <p className="text-xl text-gray-800 font-medium animate-fade-in-up delay-700">
        Gestão simples e digital (sem burocracia para o RH)
      </p>
    </div>
  </div>
</section>

      </div>

      {/* Additional space below HomeSection */}
      <motion.div
       id="section2"
       ref={sectionRefs[1]}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700"
      >
        <FacilUsoSection />
      </motion.div>

      {/* Another section with animation */}
      <motion.section
       
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        {/* Additional content */}
      </motion.section>
    </div>
  );
}
