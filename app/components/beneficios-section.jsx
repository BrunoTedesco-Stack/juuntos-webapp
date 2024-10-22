import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  FaCheck,
  FaHeart,
  FaMobileAlt,
  FaRegSmileBeam,
  FaHandsHelping,
  FaShieldAlt,
  FaStar, // Importação adicionada
} from 'react-icons/fa';

const BeneficiosSection = () => {
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

  // Conteúdos dos cards
  const cards = [
    {
      id: 1,
      title: 'Estimulamos a promoção da saúde e prevenção de agravos e doenças',
      icon: <FaHeart className="text-white mb-4 text-4xl" />,
    },
    {
      id: 2,
      title: 'Acesso online e seguro em qualquer farmácia do Brasil, avaliamos prescrições médicas com Inteligência Artificial',
      icon: <FaMobileAlt className="text-white mb-4 text-4xl" />,
    },
    {
      id: 3,
      title: 'Farmacêutica online para estimular o engajamento nos tratamentos e aconselhamentos',
      icon: <FaRegSmileBeam className="text-white mb-4 text-4xl" />,
    },
    {
      id: 4,
      title: 'Proporcionamos a redução dos abandonos de tratamento e controle de condições crônicas de saúde, diminuindo a sinistralidade do seu plano de saúde',
      icon: <FaShieldAlt className="text-white mb-4 text-4xl" />,
    },
    {
      id: 5,
      title: 'Ajudamos a melhorar a qualidade de vida dos seus colaboradores e família',
      icon: <FaHandsHelping className="text-white mb-4 text-4xl" />,
    },
    {
      id: 6,
      title: 'Nosso benefício é um diferencial para a atração e retenção de talentos',
      icon: <FaStar className="text-white mb-4 text-4xl" />,
    },
  ];

  return (
    <section className="py-20 bg-transparent relative overflow-hidden" ref={ref}>
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center justify-center mb-4"
        >
          <FaHeart className="text-white text-5xl mr-4" />
          <h2 className="font-spacegrotesk text-5xl font-extrabold text-white mb-4 relative inline-block">
            Promovendo Saúde e Bem-Estar
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
          {/* Seção para Empresa e Beneficiários */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Para Empresa */}
            <div className="p-8 bg-white bg-opacity-20 rounded-3xl shadow-xl">
              <h3 className="font-spacegrotesk text-3xl font-bold text-white mb-4">
                Para a Empresa
              </h3>
              <p className="font-spacegrotesk text-lg text-white">
                Através da redução de abandonos de tratamentos e agravo de doenças não tratadas, contribuímos com a redução dos custos de saúde e sinistralidade de planos de saúde. O bem-estar do colaborador aumenta a produtividade e o sentimento de pertencimento, ajudando a reter os seus melhores talentos.
              </p>
            </div>
            {/* Para os Beneficiários */}
            <div className="p-8 bg-white bg-opacity-20 rounded-3xl shadow-xl">
              <h3 className="font-spacegrotesk text-3xl font-bold text-white mb-4">
                Para os Beneficiários
              </h3>
              <p className="font-spacegrotesk text-lg text-white">
                Um aplicativo simples e fácil de utilizar, onde recebe um crédito que pode utilizar via PIX em qualquer farmácia do Brasil e que promove o engajamento com o cuidado à saúde.
              </p>
            </div>
          </div>

          {/* Texto Principal */}
          <div className="text-center mb-16">
            <p className="font-spacegrotesk text-2xl text-white">
              Promovemos o acesso desburocratizado a medicamentos através da nossa solução tecnológica, de forma ágil e segura para facilitar a vida do seu colaborador! O medicamento certo, no momento certo e em qualquer lugar do Brasil.
            </p>
          </div>

          {/* Cards dos Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="relative group p-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                variants={listItemVariants[index % 3]}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                exit="hidden"
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-indigo-600 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
                {card.icon}
                <p className="font-spacegrotesk text-lg text-white mt-4">
                  {card.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Chamada para Ação */}
          <div className="mt-20 text-center">
            <h3 className="font-spacegrotesk text-3xl font-bold text-white mb-4">
              Online, simples e rápido!
            </h3>
            <p className="font-spacegrotesk text-xl text-white mb-8">
              CONHEÇA TODOS OS DETALHES, FALE COM O SEU REPRESENTANTE COMERCIAL!
            </p>
            <button className="font-spacegrotesk py-3 px-6 bg-orange-300 text-violet-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white">
              Indique a Juuntos para a sua empresa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
