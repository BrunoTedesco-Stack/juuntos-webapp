import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaDownload,
  FaIdCard,
  FaCamera,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaMagic,
} from "react-icons/fa";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Instale o APP Juuntos",
      description: "Disponível em Android e iOS",
      icon: <FaDownload size={40} />,
    },
    {
      id: 2,
      title: "Ative o seu plano",
      description: "Informe o seu CPF",
      icon: <FaIdCard size={40} />,
    },
    {
      id: 3,
      title: "Tire uma foto da receita",
      description: "Envie a receita médica pelo app",
      icon: <FaCamera size={40} />,
    },
    {
      id: 4,
      title: "Escolha a farmácia",
      description: "Selecione a mais conveniente",
      icon: <FaMapMarkerAlt size={40} />,
    },
    {
      id: 5,
      title: "Compre via PIX",
      description: "Efetue a compra rapidamente",
      icon: <FaMoneyBillWave size={40} />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Reduzido para maior fluidez
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween", // Transição mais leve
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false, // Permite animações repetidas
    threshold: 0.2, // Sensibilidade aumentada para tornar mais responsivo
  });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center bg-transparent"
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-10 flex items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <FaMagic className="mr-3" />
        Veja como é fácil usar!
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-11 rounded-lgrelative overflow-hidden text-center">
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[18%] p-6 rounded-lg shadow-xl text-white flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 transition-transform hover:scale-105"
              style={{ willChange: "transform, opacity" }}
              variants={cardVariants}
            >
              <div className="mb-4 text-4xl">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-center">{step.description}</p>
              <div className="mt-4 text-lg font-bold bg-blue-700 text-white px-4 py-2 rounded-full">
                Passo {step.id} de {steps.length}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center mt-10 text-lg font-medium text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Juuntos desburocratiza o acesso aos medicamentos que você precisa de
          maneira simples e rápida, na palma da sua mão!
        </motion.p>
      </div>
    </section>
  );
}
