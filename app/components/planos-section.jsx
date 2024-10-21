
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const PlanosSection = () => {
  // Usando o Intersection Observer para animações de entrada
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
<section id="planos" className="py-20 bg-transparent relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Elementos Decorativos */}
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      <div className="w-3/4 h-3/4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    {/* Título da Seção */}
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
        Conheça nossos planos
      </h2>
      <p className="text-2xl text-gray-700 animate-fade-in-up delay-200">
        Temos planos para todas as necessidades, escolha o seu!
      </p>
    </div>

    {/* Cards dos Planos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
      {/* Card: Celeste */}
      <div className="relative group p-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <div className="absolute inset-0 w-full h-full bg-blue-500 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
          Celeste <span className="font-light">- Juuntos 100</span>
        </h3>
        <p className="text-lg text-white mb-8">
          Medicamentos prescritos, genéricos e tarjados com R$100,00 mensal de cobertura para cada colaborador.
        </p>
        <button className="py-3 px-6 bg-white text-blue-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white">
          Saiba mais
        </button>
      </div>

      {/* Card: Turquesa */}
      <div className="relative group p-8 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <div className="absolute inset-0 w-full h-full bg-teal-500 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
          Turquesa <span className="font-light">- Juuntos 200</span>
        </h3>
        <p className="text-lg text-white mb-8">
          Medicamentos prescritos, genéricos e tarjados com R$200,00 mensal de cobertura para cada colaborador.
        </p>
        <button className="py-3 px-6 bg-white text-teal-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-teal-600 hover:text-white">
          Saiba mais
        </button>
      </div>

      {/* Card: Royal */}
      <div className="relative group p-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <div className="absolute inset-0 w-full h-full bg-indigo-600 opacity-10 blur-xl rounded-3xl transition-all duration-500 group-hover:opacity-30"></div>
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
          Royal <span className="font-light">- Juuntos 200</span>
        </h3>
        <p className="text-lg text-white mb-8">
          Medicamentos prescritos, de marca ou genéricos e tarjados com R$200,00 mensal de cobertura para cada colaborador.
        </p>
        <button className="py-3 px-6 bg-white text-indigo-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-indigo-600 hover:text-white">
          Saiba mais
        </button>
      </div>
    </div>

    {/* Benefícios dos Planos */}
    <div className="mt-20 text-center relative z-10">
      <p className="text-xl text-gray-800 font-medium mb-4 animate-fade-in-up delay-300">
        Flexibilidade para escolha do valor do limite mensal de cobertura
      </p>
      <p className="text-xl text-gray-800 font-medium mb-4 animate-fade-in-up delay-500">
        Mensalidade fixa com previsibilidade orçamentária
      </p>
      <p className="text-xl text-gray-800 font-medium animate-fade-in-up delay-700">
        Gestão simples e digital (sem burocracia para o RH)
      </p>
    </div>
  </div>
</section>

);
};

export default PlanosSection;