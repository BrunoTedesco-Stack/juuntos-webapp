"use client";

import { useEffect } from "react";
import NavBar from '@/app/components/navbar'; 
import HomeSection from '@/app/components/home-section';
import SecondSection from '@/app/components/second-section';
import { motion } from 'framer-motion';
import { useNavbarColor } from '@/app/context/NavbarContext';
import PrivacyModal from './components/modalprivacidade';
import PlanosSection from '@/app/components/planos-section';
import SobreNos from '@/app/components/sobre-nos-section';
import HowItWorksSection from '@/app/components/facilidade-section';
import BeneficiosSection from '@/app/components/beneficios-section';
import ContatoSection from '@/app/components/contato-section';
import Footer from '@/app/components/rodape-section';
import { FaWhatsapp } from 'react-icons/fa';

export default function TransitionsPage() {
  const { setNavbarColor } = useNavbarColor();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // URL para iniciar uma conversa no WhatsApp (substitua pelo seu número de WhatsApp)
  const whatsappUrl = "https://wa.me/5511987900115"; // Altere para o número correto

  return (
    <div className="bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600 relative">
      <PrivacyModal />
      <NavBar />

      {/* HomeSection */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black-600 via-orange-500 to-orange-600"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setNavbarColor('bg-orange-700')}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <HomeSection />
      </motion.section>

      {/* SecondSection */}
      <motion.section
        id="second"
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setNavbarColor('bg-orange-700')}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <SecondSection />
      </motion.section>

      {/* SobreNos */}
      <motion.section
        id="sobre"
        className="min-h-screen flex items-center justify-center py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setNavbarColor('bg-orange-700')}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <SobreNos />
      </motion.section>

      {/* PlanosSection */}
      <motion.section
        id="planos"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500"
      >
        <PlanosSection />
      </motion.section>

      {/* Facilidade Section */}
      <motion.section
        id="comousar"
        className="flex items-center justify-center bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500"
      >
        <HowItWorksSection />
      </motion.section>

      {/* Beneficios Section */}
      <motion.section
        id="beneficios"
        className="flex items-center justify-center bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500"
      >
        <BeneficiosSection />
      </motion.section>

      {/* ContatoSection */}
      <motion.section
        id="contato"
        className="flex items-center justify-center bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500"
      >
        <ContatoSection />
      </motion.section>

      {/* Rodapé */}
      <motion.section
        id="rodape"
        className="flex items-center justify-center bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500"
      >
        <Footer/>
      </motion.section>

      {/* Botão flutuante de WhatsApp com balão de mensagem */}
      <motion.div
        className="fixed bottom-6 right-6 flex items-center space-x-3 z-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Balão de mensagem */}
        <div className="bg-green-600 text-white p-3 rounded-lg shadow-lg text-sm hidden md:block">
          <p>Precisa de ajuda? Fale conosco!</p>
        </div>

        {/* Botão de WhatsApp */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:bg-green-600"
        >
          <FaWhatsapp size={24} />
        </motion.a>
      </motion.div>
    </div>
  );
}
