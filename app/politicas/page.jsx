"use client";

import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/rodape-section';
import { motion } from 'framer-motion';

const PoliticaPage = () => {
  // Variantes de animação para o conteúdo
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="flex-grow px-6 py-20 bg-gradient-to-b from-orange-800 via-orange-700 to-orange-800">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          {/* Título da Página */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-500 text-center">
            Política de Privacidade e Termos de Uso
          </h1>

          {/* Linha Divisória */}
          <div className="border-b-2 border-orange-500 mb-12 w-1/3 mx-auto"></div>

          {/* Conteúdo de Política de Privacidade */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
              1. Política de Privacidade
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Nós, da <span className="font-semibold">Juuntos Assistência Farmacêutica Ltda</span>, respeitamos a sua
              privacidade e estamos comprometidos em proteger seus dados pessoais. Este documento descreve como
              coletamos, utilizamos e armazenamos suas informações, de acordo com as leis vigentes, incluindo a Lei
              Geral de Proteção de Dados (LGPD).
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">1.1 Coleta de Dados</h3>
            <p className="text-lg leading-relaxed mb-4">
              Coletamos informações pessoais que você nos fornece ao utilizar nossos serviços, como nome, e-mail, telefone
              e informações de pagamento. Podemos também coletar dados automaticamente, como seu endereço IP, tipo de
              navegador e páginas visitadas.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">1.2 Uso de Dados</h3>
            <p className="text-lg leading-relaxed mb-4">
              Utilizamos seus dados para fornecer e melhorar nossos serviços, incluindo o atendimento ao cliente, envio
              de informações relevantes, e personalização da sua experiência no site.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">1.3 Compartilhamento de Dados</h3>
            <p className="text-lg leading-relaxed mb-4">
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a execução dos
              nossos serviços, cumprimento de obrigações legais ou proteção de nossos interesses legítimos.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">1.4 Segurança dos Dados</h3>
            <p className="text-lg leading-relaxed mb-4">
              Implementamos medidas de segurança adequadas para proteger seus dados contra acesso não autorizado,
              alteração, divulgação ou destruição.
            </p>
          </section>

          {/* Conteúdo de Termos de Uso */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
              2. Termos de Uso
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Ao utilizar nosso site e serviços, você concorda com os seguintes Termos de Uso. Recomendamos que você leia
              atentamente antes de utilizar nossos serviços.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">2.1 Uso Adequado</h3>
            <p className="text-lg leading-relaxed mb-4">
              Você concorda em utilizar nosso site de maneira ética e em conformidade com as leis aplicáveis. É
              proibido o uso do site para fins ilegais ou para a transmissão de conteúdo ofensivo, prejudicial ou
              enganoso.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">2.2 Propriedade Intelectual</h3>
            <p className="text-lg leading-relaxed mb-4">
              Todos os conteúdos do nosso site, incluindo textos, imagens, logotipos e design, são protegidos por leis
              de propriedade intelectual. Você concorda em não reproduzir, distribuir ou modificar qualquer parte do
              conteúdo sem nossa autorização expressa.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">2.3 Modificações nos Termos</h3>
            <p className="text-lg leading-relaxed mb-4">
              Reservamo-nos o direito de modificar os Termos de Uso a qualquer momento. Qualquer alteração será
              comunicada aos usuários e será eficaz a partir do momento da publicação.
            </p>
          </section>
        </motion.div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default PoliticaPage;
