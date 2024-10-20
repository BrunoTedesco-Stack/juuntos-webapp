import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FacilUsoSection = () => {
  // Usando o Intersection Observer para animações de entrada
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introdução */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in">
            Flexibilidade e Simplicidade
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
            Personalize o valor de cobertura, tenha controle orçamentário e uma gestão totalmente digital. Tudo isso sem burocracia!
          </p>
        </div>

        {/* Cards de Benefícios */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className={`p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Flexibilidade</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Escolha o limite mensal de cobertura que melhor atende às suas necessidades.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-teal-600 mb-2">Previsibilidade</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Mensalidade fixa, proporcionando controle financeiro e estabilidade no seu orçamento.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-indigo-600 mb-2">Gestão Digital</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Processo simples e 100% digital, eliminando a burocracia para o RH e os colaboradores.
            </p>
          </div>
        </div>

        {/* Passos para usar o App */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Veja como é fácil usar o Juuntos!
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-8">
            Siga os passos abaixo e aproveite todos os benefícios de forma prática e rápida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Etapa 1 */}
          <div className={`p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg rounded-lg transform transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-2">1</h3>
            <p className="text-sm md:text-base">Baixe o APP Juuntos, disponível para Android e iOS.</p>
          </div>

          {/* Etapa 2 */}
          <div className={`p-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg rounded-lg transform transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-2">2</h3>
            <p className="text-sm md:text-base">Ative o plano inserindo seu CPF no aplicativo.</p>
          </div>

          {/* Etapa 3 */}
          <div className={`p-6 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg rounded-lg transform transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-2">3</h3>
            <p className="text-sm md:text-base">Fotografe a sua receita médica diretamente pelo app.</p>
          </div>

          {/* Etapa 4 */}
          <div className={`p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg rounded-lg transform transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-2">4</h3>
            <p className="text-sm md:text-base">Selecione a farmácia mais conveniente para você.</p>
          </div>

          {/* Etapa 5 */}
          <div className={`p-6 bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg rounded-lg transform transition-transform duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-2">5</h3>
            <p className="text-sm md:text-base">Efetue a compra do medicamento via PIX, de forma segura.</p>
          </div>
        </div>

        {/* Conclusão */}
        <div className={`mt-12 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            Juuntos: Desburocratizando o acesso aos medicamentos que você precisa, de forma simples, rápida, na palma da sua mão!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilUsoSection;
