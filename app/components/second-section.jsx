import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import LottieIcon from '@/app/components/LottieIcon';
export default function SecondSection() {
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
            className="font-spacegrotesk text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
            variants={textVariants}
          >
            <Typewriter
              words={['BENEFÍCIOS DO CUIDADO COM A SAÚDE']}
              loop={1}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>
          <motion.p
            className="font-spacegrotesk text-lg sm:text-xl md:text-2xl text-center max-w-4xl mx-auto mb-6"
            variants={textVariants}
          >
            Uma abordagem digital e inovadora para o cuidado com a saúde dos colaboradores, promovendo bem-estar, qualidade de vida e redução de custos.
          </motion.p>
          <motion.p
            className="font-spacegrotesk text-base sm:text-lg md:text-xl text-center max-w-4xl mx-auto"
            variants={textVariants}
          >
            Oferecemos um conjunto de ferramentas para facilitar e simplificar o cuidado com a saúde do colaborador. Através de um processo digital de aquisição de medicamentos, proporcionamos uma experiência única e exclusiva. Utilizamos Inteligência Artificial para orientar de forma consultiva sobre prevenção de agravamento de doenças e ações de promoção à saúde, contribuindo para o bem-estar, melhoria da qualidade de vida e controle da sinistralidade do seu plano de saúde.
          </motion.p>
        </div>

        {/* Cards com Layout Responsivo */}
        <motion.div
          className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-12"
          variants={containerVariants}
        >
          {/* Card Principal Grande */}
          <motion.div
            className="lg:col-span-6 bg-black p-10 rounded-2xl shadow-xl hover:shadow-2xl "
            variants={cardVariants}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="font-spacegrotesk text-2xl font-bold text-orange-600 mb-4">
            <LottieIcon animationName="rocket" /> Inovação Digital
            </h3>
            <p className="font-spacegrotesk text-gray-100 mb-6">
              Nossa plataforma digital simplifica a aquisição de medicamentos. Acesse farmácias em todo o Brasil e realize compras de forma rápida e segura.
            </p>
            <ul className="font-spacegrotesk list-disc ml-5 space-y-2 text-gray-600">
              <li>Aquisição rápida e segura pelo app</li>
              <li>Uso do saldo via PIX em qualquer farmácia</li>
              <li>Experiência personalizada para o usuário</li>
            </ul>
          </motion.div>

          {/* Card Vertical Menor */}
          <motion.div
            className="lg:col-span-3 bg-black p-10 rounded-2xl shadow-xl hover:shadow-2xl "
            variants={cardVariants}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="font-spacegrotesk text-2xl font-bold text-orange-600 mb-4">
            <LottieIcon animationName="aiicon" /> IA Consultiva
            </h3>
            <p className="font-spacegrotesk text-gray-600">
              Inteligência Artificial para orientação personalizada, promovendo saúde preventiva e bem-estar otimizado.
            </p>
          </motion.div>

          {/* Card Vertical Menor */}
          <motion.div
            className="lg:col-span-3 bg-black p-10 rounded-2xl shadow-xl hover:shadow-2xl "
            variants={cardVariants}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="font-spacegrotesk text-2xl font-bold  text-orange-600 mb-4">
            <LottieIcon animationName="redux" /> Redução de Custos
            </h3>
            <p className="font-spacegrotesk text-gray-600">
              Controle de sinistralidade e custos de saúde mais eficientes, com soluções de gestão de saúde.
            </p>
          </motion.div>

          {/* Card Horizontal */}
          <motion.div
            className="lg:col-span-8 bg-black p-10 rounded-2xl shadow-xl hover:shadow-2xl "
            variants={cardVariants}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="font-spacegrotesk text-2xl font-bold  text-orange-600 mb-4">
            <LottieIcon animationName="health" /> Benefícios do Cuidado com a Saúde
            </h3>
            <p className="font-spacegrotesk text-orange-400 mb-6">
              Promover o cuidado com a saúde traz benefícios para colaboradores e empresas:
            </p>
            <ul className="font-spacegrotesk list-disc ml-5 space-y-2 text-orange-200">
              <li>Mais engajamento e produtividade</li>
              <li>Redução de absenteísmo</li>
              <li>Maior satisfação e qualidade de vida</li>
              <li>Melhor controle de custos com saúde</li>
            </ul>
          </motion.div>

          {/* Card Pequeno */}
          <motion.div
            className="lg:col-span-4 bg-black p-10 rounded-2xl shadow-xl hover:shadow-2xl "
            variants={cardVariants}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="font-spacegrotesk text-2xl font-bold text-orange-600 mb-4">
            <LottieIcon animationName="global" /> Acesso Global
            </h3>
            <p className="font-spacegrotesk text-orange-200">
              Plataforma com acesso a qualquer farmácia no Brasil, proporcionando uma experiência de saúde completa e inclusiva.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
