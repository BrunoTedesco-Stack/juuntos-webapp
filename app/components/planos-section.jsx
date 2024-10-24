import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const PlanosSection = () => {
  // Usando o Intersection Observer para animação ao entrar e sair da view
  const { ref, inView } = useInView({
    triggerOnce: false, // Permite que a animação ocorra sempre que o elemento entra na view
    threshold: 0.1, // Inicia a animação quando 10% do elemento está visível
  });

  // Variantes para animação dos textos e ícones
  const listItemVariants = [
    {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
  ];

  return (
    <section id="planos" className="py-20 bg-transparent relative overflow-hidden">
      <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center justify-center mb-4"
            >
              <FaStar className="text-white text-5xl mr-4" />
              <h2 className="font-spacegrotesk text-5xl font-extrabold text-white mb-4 relative inline-block">
                Conheça nossos planos
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400 rounded-lg transform scale-x-0 origin-left transition-transform duration-500"></span>
              </h2>
            </motion.div>
         
          </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 bg-violet-500 py-11 rounded-lg shadow-lg relative overflow-hidden">
        
        {/* Pseudo-elemento com a imagem de fundo rotacionada */}
        <div 
          className="absolute inset-0 z-0 transform -rotate-45 scale-100 opacity-30 bg-center bg-no-repeat bg-cover" 
          style={{ 
            backgroundImage: "url('/images/linhas-brancas.png')",
          }} 
        />

        {/* Conteúdo principal */}
        <div className="relative z-10">
          {/* Título da Seção com Ícone e Animação */}
          <div className="text-center mb-16">

            <p className="font-spacegrotesk text-2xl text-gray-700">
              Temos planos para todas as necessidades, escolha o seu!
            </p>
          </div>

          {/* Cards dos Planos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card: Juuntos 100 */}
            <ScrollLink 
        to="contato" 
        smooth={true} 
        duration={1000} 
        offset={0} 
        className="cursor-pointer"
      >
            <div className="relative group p-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 w-full h-full bg-indigo-600 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
              <h3 className="font-spacegrotesk text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                Juuntos 100
              </h3>
              <p className="font-spacegrotesk text-lg text-white mb-8">
                Medicamentos prescritos, genéricos e tarjados com R$100,00 mensal de cobertura para cada colaborador.
              </p>
              
              <button className="font-spacegrotesk py-3 px-6 bg-white text-blue-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Saiba mais
              </button>
             
            </div>
            </ScrollLink>

            {/* Card: Juuntos 200 */}
            <ScrollLink 
        to="contato" 
        smooth={true} 
        duration={1000} 
        offset={0} 
        className="cursor-pointer"
      >
            <div className="relative group p-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 w-full h-full bg-indigo-600 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
              <h3 className="font-spacegrotesk text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                Juuntos 200
              </h3>
              <p className="font-spacegrotesk text-lg text-white mb-8">
                Medicamentos prescritos, genéricos e tarjados com R$200,00 mensal de cobertura para cada colaborador.
              </p>
             
              <button className="font-spacegrotesk py-3 px-6 bg-white text-blue-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Saiba mais
              </button>
             
            </div>
            </ScrollLink>

            {/* Card: Juuntos 200+ */}
            <ScrollLink 
        to="contato" 
        smooth={true} 
        duration={1000} 
        offset={0} 
        className="cursor-pointer"
      >
            <div className="relative group p-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 w-full h-full bg-indigo-600 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
              <h3 className="font-spacegrotesk text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                Juuntos 200 +
              </h3>
              <p className="font-spacegrotesk text-lg text-white mb-8">
                Medicamentos prescritos, de marca ou genéricos e tarjados com R$200,00 mensal de cobertura para cada colaborador.
              </p>
              
              <button className="font-spacegrotesk py-3 px-6 bg-white text-blue-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Saiba mais
              </button>
              
            </div>
            </ScrollLink>
          </div>

          {/* Benefícios dos Planos com Destaque */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8" ref={ref}>
            {[
              'Flexibilidade para escolha do valor do limite mensal de cobertura',
              'Mensalidade fixa com previsibilidade orçamentária',
              'Gestão simples e digital (sem burocracia para o RH)',
            ].map((text, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white border-4 border-gray-200 rounded-3xl shadow-lg flex flex-col items-center"
                variants={listItemVariants[index]}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                exit="hidden"
                transition={{
                  duration: 0.5,
                  delay: index * 0.6,
                  ease: 'easeOut',
                }}
              >
                <FaCheck className="text-violet-500 mb-4 text-4xl" />
                <p className="font-spacegrotesk text-xl text-gray-600 font-semibold text-center">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>



  );
};

export default PlanosSection;
