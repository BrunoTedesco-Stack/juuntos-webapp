"use client";
import { useEffect, useRef } from "react";
import NavBar from '@/app/components/navbar'; 
import HomeSection from '@/app/components/home-section';
import SecondSection from '@/app/components/second-section';
import { motion } from 'framer-motion';
import { useNavbarColor } from '@/app/context/NavbarContext';
import PrivacyModal from './components/modalprivacidade';
import PlanosSection from '@/app/components/planos-section';
import SobreNos from '@/app/components/sobre-nos-section';

export default function TransitionsPage() {
  // Criar refs separados para cada seção
  const homeRef = useRef(null);
  const secondRef = useRef(null);
  const sobreRef = useRef(null);
  const planosRef = useRef(null);

  const { setNavbarColor } = useNavbarColor();

  // Certifique-se de que a página role para o topo no carregamento
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Observador para detectar interseção das seções
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Variável para armazenar a seção com maior visibilidade
        let maxRatio = 0;
        let activeSection = '';

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeSection = entry.target.id;
          }
        });

        // Atualiza a cor da navbar com base na seção mais visível
        switch (activeSection) {
          case 'home':
            setNavbarColor('bg-orange-700');
            break;
          case 'second':
            setNavbarColor('bg-violet-400');
            break;
          case 'sobre':
            setNavbarColor('bg-red-600');
            break;
          case 'planos':
            setNavbarColor('bg-blue-600');
            break;
          default:
            setNavbarColor('bg-gray-600');
        }
      },
      {
        rootMargin: '0px',
        threshold: Array.from(Array(101).keys(), (i) => i / 100), // Thresholds de 0 a 1 em incrementos de 0.01
      }
    );

    // Observar cada ref de seção separadamente
    const refs = [homeRef, secondRef, sobreRef, planosRef];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [setNavbarColor]);

  return (
    <div className="bg-orange-600 font-sans overflow-hidden">
      <PrivacyModal />
      <NavBar />

      {/* HomeSection */}
      <motion.section
        id="home"
        ref={homeRef}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black-600 via-orange-500 to-orange-600"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <HomeSection />
      </motion.section>

      {/* SecondSection */}
      <motion.section
        id="second"
        ref={secondRef}
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <SecondSection />
      </motion.section>

      {/* SobreNos */}
      <motion.section
        id="sobre"
        ref={sobreRef}
        className="flex items-center justify-center py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <SobreNos />
      </motion.section>

      {/* PlanosSection */}
      <motion.section
        id="planos"
        ref={planosRef}
        className="flex items-center justify-center bg-gradient-to-b from-white via-gray-100 to-gray-200"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <PlanosSection />
      </motion.section>
    </div>
  );
}
