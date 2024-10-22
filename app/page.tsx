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

export default function TransitionsPage() {
  const { setNavbarColor } = useNavbarColor();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600">
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportEnter={() => setNavbarColor('bg-violet-600')}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <PlanosSection />
      </motion.section>


      {/* Facilidade Section */}
          <motion.section
        id="comousar"
        className=" flex items-center justify-center bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500"
        
       
       
       
      >
        <HowItWorksSection />
      </motion.section>
    </div>
  );
}
