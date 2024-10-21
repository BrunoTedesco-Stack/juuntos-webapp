import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import LottieIcon from '@/app/components/LottieIcon';
export default function SobreNos() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600 py-16 px-6 sm:px-10 md:px-16 lg:px-24">
      <motion.div
        className="max-w-7xl mx-auto text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Cabeçalho da Seção */}
        <div className="mb-12">
          <motion.h1
            className="font-spacegrotesk text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 py-11"
            variants={textVariants}
          >
            <Typewriter
              words={['Inovação Digital na Saúde dos Colaboradores']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={40000}
            />
          </motion.h1>

         
      </div>
      </motion.div>
    </section>
  );
}
