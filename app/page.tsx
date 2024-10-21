"use client";
import { useEffect, useState, useRef } from "react";
import NavBar from '@/app/components/navbar'; 
import HomeSection from '@/app/components/home-section';
import SecondSection from '@/app/components/second-section';
import { motion } from 'framer-motion';
import { useNavbarColor } from '@/app/context/NavbarContext';
import PrivacyModal from './components/modalprivacidade';
import FacilUsoSection from '@/app/components/facil-uso'
import PlanosSection from '@/app/components/planos-section'
import SobreNos from '@/app/components/sobre-nos-section'

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
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black-600 via-orange-500 to-orange-600"
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
        className=" flex items-center justify-center  "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
       <SecondSection />
       
      </motion.section>
      </div>

      <div>
      <motion.section
        id="section1"
        ref={sectionRefs[0]}
        className=" flex items-center justify-center  "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
       <SobreNos />
       
      </motion.section>
      </div>

      <div className=" bg-gradient-to-b from-white via-gray-100 to-gray-200 ">
      <motion.section
        id="section1"
        ref={sectionRefs[0]}
        className=" flex items-center justify-center"
        
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
       <PlanosSection />
       
      </motion.section>
      </div>
      
  


    
      {/* Additional space below HomeSection */}
      <motion.div
       id="section2"
       ref={sectionRefs[1]}
       style={{
        backgroundImage: "url('/images/juuntos-violet.png')",
        backgroundSize: "cover", // Ajusta a imagem para cobrir toda a área do container
        backgroundPosition: "center", // Centraliza a imagem
        backgroundRepeat: "no-repeat", // Evita repetição da imagem
        height: "100vh", // Altura de 100% da altura da tela
        width: "100%", // Largura de 100% da tela
      }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700"
      >
       
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
