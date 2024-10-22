import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
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

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Imagem à Esquerda */}
        <motion.img
          src="/images/relatorio.png"
          alt="Exemplo do aplicativo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="w-full md:w-[500px] h-auto object-contain "
        />

        {/* Texto à Direita */}
        <motion.div
          className="flex-1 text-white space-y-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.div
        className="lg:col-span-6 bg-orange-100 p-10 rounded-2xl shadow-xl hover:shadow-2xl "
        variants={cardVariants}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
          <h2 className="text-orange-500 font-spacegrotesk text-4xl md:text-5xl font-bold py-3">
            Autocuidado apoiado por profissionais qualificados
          </h2>
         
          <p className=" font-spacegrotesk text-lg md:text-xl text-orange-400 leading-relaxed py-6 px-3">
          Com a missão de atender nossos clientes e beneficiários, 
          a tecnologia da Juuntos aplica inteligência artificial 
          para atuar na saúde da sua empresa. 
          </p>
          <p className=" font-spacegrotesk text-lg md:text-xl text-orange-400 leading-relaxed py-6 px-3">
          
          Além disso, fornecemos 
          orientação consultiva a nossos clientes sobre estratégias de 
          promoção da saúde e mitigação de riscos de doenças, o que poderá 
          contribuir com a redução da sinistralidade do plano de saúde. 
          Isso gera um impacto positivo nos resultados das empresas e melhora o bem-estar dos colaboradores.
          </p>
          <ScrollLink 
        to="contato" 
        smooth={true} 
        duration={1000} 
        offset={0} 
        className="cursor-pointer"
      >
          <motion.div
           className="box w-auto  font-spacegrotesk text-4xl font-bold text-center bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 pt-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            vamos juuntos?
          </motion.div>
          </ScrollLink>
        </motion.div>
        </motion.div>


      </div>
        </div>
        <motion.div
            className="font-spacegrotesk text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-6 py-11 pt-11"
            variants={textVariants}
          >
            <Typewriter
              words={['com a juuntos você tem acesso a uma plataforma digital que simplifica a aquisição de medicamentos']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={40000}
            />
          </motion.div>


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
            <p className="font-spacegrotesk text-orange-200 mb-6">
              Nossa plataforma digital simplifica a aquisição de medicamentos. Acesse farmácias em todo o Brasil e realize compras de forma rápida e segura.
            </p>
            <ul className="font-spacegrotesk  list-disc ml-5 space-y-2 text-orange-200">
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
            <p className="font-spacegrotesk text-orange-200">
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
            <p className="font-spacegrotesk text-orange-200">
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
