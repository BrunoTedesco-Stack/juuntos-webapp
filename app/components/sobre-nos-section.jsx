import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

export default function SobreNos() {
  const [isExpanded, setIsExpanded] = useState(true); // Alterado para iniciar expandido

  // Variantes de animação
  const containerVariants = {
    collapsed: { height: 100 },
    expanded: {
      height: 'auto',
      transition: { type: 'spring', stiffness: 70, damping: 15 },
    },
  };

  const titleVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    tap: { scale: 0.98, transition: { duration: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    initial: { rotate: 0 },
    animate: { rotate: isExpanded ? 180 : 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="w-full px-6 py-12 bg-gradient-to-br from-orange-400 to-red-500 text-white font-spacegrotesk">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="expanded" // Inicia expandido
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={containerVariants}
      >
        {/* Cabeçalho da Seção */}
        <motion.div
          className="flex justify-center items-center cursor-pointer"
          variants={titleVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Sobre Nós
          </h1>
          <motion.span
            className="ml-2 text-4xl"
            variants={iconVariants}
            initial="initial"
            animate="animate"
          >
            {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
          </motion.span>
        </motion.div>

        {/* Linha Divisória */}
        <div className="border-b-2 border-white w-1/3 mx-auto mb-8"></div>

        {/* Conteúdo Expandido */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          initial="visible" // Inicia visível
          animate="visible"
          variants={cardVariants}
        >
          {/* Card 1 */}
          <motion.div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                🤝 Assistência com Cuidado
              </h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Na <span className="font-bold">Juuntos</span>, acreditamos que a
              assistência farmacêutica vai além do simples fornecimento de
              serviços; é uma questão de cuidado e parceria. Oferecemos
              soluções inovadoras que atendem às necessidades específicas de
              cada empresa.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                🛡️ Ética e Segurança
              </h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Nosso compromisso com a ética e a honestidade garante que nossos
              serviços sejam não apenas efetivos, mas também seguros. Buscamos
              constantemente novas maneiras de melhorar e simplificar
              processos.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                💼 Relacionamento com Clientes
              </h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
              Valorizamos a relação com nossos clientes e trabalhamos para ser a
              escolha querida e confiável em assistência farmacêutica. Juntos,
              construímos um futuro mais saudável e responsável.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
