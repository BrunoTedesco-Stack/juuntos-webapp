

import { motion } from "framer-motion";
import {
  FaDownload,
  FaIdCard,
  FaCamera,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaMagic,
} from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

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

  return (
    <section className="flex flex-col items-center justify-center bg-transparent ">
                <motion.h2
          className="text-4xl font-bold text-white mb-10 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaMagic className="mr-3" />
          Veja como é fácil usar!
        </motion.h2>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-500 py-11 rounded-lg shadow-lg relative overflow-hidden text-center">


        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="p-6 rounded-lg shadow-xl text-white flex flex-col items-center justify-center bg-white bg-opacity-20 transform transition-transform hover:scale-105"
              variants={cardVariants}
            >
              <div className="mb-4 text-4xl">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-center">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center mt-10 text-lg font-medium text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Juuntos desburocratiza o acesso aos medicamentos que você precisa de maneira simples e
          rápida, na palma da sua mão!
        </motion.p>
      </div>
    </section>
  );
}
