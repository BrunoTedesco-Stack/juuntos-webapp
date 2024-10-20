import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

export default function HomeSection() {
  // Estados para controlar a sequência de exibição
  const [startTypingSecond, setStartTypingSecond] = useState(false);
  const [startTypingJuuntos, setStartTypingJuuntos] = useState(false);
  const [startTypingThird, setStartTypingThird] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)' }
  };
  
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } }
  };
  
  const buttonVariants = {
    hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.4 } }
  };

  // useEffect para controlar os tempos das digitações e exibição do conteúdo
  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página para o topo ao carregar o componente

    // Timer para iniciar a digitação de "somos a"
    const secondTypingTimer = setTimeout(() => {
      setStartTypingSecond(true);
    }, 2000); // Pausa reduzida para 2s após "MUITO PRAZER"

    // Timer para iniciar a digitação de "Juuntos"
    const juuntosTypingTimer = setTimeout(() => {
      setStartTypingJuuntos(true);
    }, 3500); // Pausa de 1.5s após "somos a" começar

    // Timer para iniciar a digitação de "o Benefício Medicamento da sua empresa!"
    const thirdTypingTimer = setTimeout(() => {
      setStartTypingThird(true);
    }, 5000); // Pausa de 1.5s após "Juuntos" começar

    // Timer para exibir o restante do conteúdo (texto, botão e imagem)
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 9000); // Ajustado para sincronizar com o fim da terceira digitação

    return () => {
      clearTimeout(secondTypingTimer);
      clearTimeout(juuntosTypingTimer);
      clearTimeout(thirdTypingTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="bg-transparent text-white  w-full flex items-center justify-center px-8 overflow-hidden">
      <motion.div
        layout
        className={`w-full ${showContent ? 'mt-32' : ''}`}
      >
        <div
          className={`grid ${showContent ? 'grid-cols-1 md:grid-cols-2 gap-8' : 'grid-cols-1'} w-full lg:ml-36`}
        >
          {/* Texto */}
          <motion.div
            layout
            className={`  flex flex-col justify-center items-center ${showContent ? 'md:items-start' : ''}`}
          >
            <h1 className="font-spacemono font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-center md:text-left">
              {/* Typewriter para "MUITO PRAZER" */}
              <Typewriter
                words={['MUITO PRAZER ;)']}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              <br />
            </h1>

            {/* H2 aparece após "MUITO PRAZER" */}
            {startTypingSecond && (
              <h2 className="mt-4 underline font-spacegrotesk font-extrabold text-5xl sm:text-7xl md:text-5xl text-white  text-center md:text-left">
                {/* Typewriter para "somos a" */}
                <Typewriter
                  words={['SOMOS A']}
                  loop={1}
                  cursor
                  cursorStyle=""
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              </h2>
            )}

            {/* "Juuntos" aparece após "somos a" */}
            {startTypingJuuntos && (
              <h2 className="mt-4 underline font-spacegrotesk font-extrabold text-7xl sm:text-4xl md:text-8xl text-gray-700 text-center md:text-left">
                {/* Mantém "somos a" já escrito */}
                
                {/* Typewriter para "Juuntos" */}
                <Typewriter
                  words={['juuntos']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              </h2>
            )}

            {/* H3 aparece após "Somos a Juuntos" */}
            {startTypingThird && (
              <h3 className="mt-2 font-spacegrotesk text-2xl sm:text-3xl md:text-4xl text-orange-900 text-center md:text-left">
                <Typewriter
                  words={['o Benefício Medicamento da sua empresa !']}
                  loop={1}
                  cursor
                  cursorStyle=""
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h3>
            )}

            {/* Texto e Botão exibidos após a animação do Typewriter */}
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                
                className="mt-4"
              >
                <motion.div>
                  <p className="font-spacegrotesk text-lg text-center md:text-left">
                    Na Juuntos, facilitamos a vida dos seus colaboradores com inovação e agilidade.
                  </p>
                  <p className="font-spacegrotesk text-lg text-center md:text-left">
                    Nosso app, acessível em qualquer farmácia do Brasil, oferece uma experiência simples e confiável.
                  </p>
                  <p className="pd font-spacegrotesk text-lg text-center md:text-left">
                  É fácil e digital, o saldo é utilizado via PIX!
                  </p>
                 

                </motion.div>
                <div className="flex  h-auto justify-center md:justify-start mt-9">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="box w-auto  font-spacegrotesk text-4xl font-bold text-center bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 "
                  >
                    comece a usar agora!
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Imagem à Direita */}
          {showContent && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
              className="flex justify-center md:justify-end mt-8 md:mt-0"
            >
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src="/images/celular2.png"
                alt="Exemplo do aplicativo"
                width={250}
                height={100}
                className="md:w-[250px] md:h-[500px] md:mr-8 lg:w-[300px] lg:h-[600px] lg:mr-64 object-contain"
              />
            </motion.div>
          )}
        </div>
        <div className=" flex justify-center mt-8">

        </div>
      </motion.div>
    </section>
  );
}
