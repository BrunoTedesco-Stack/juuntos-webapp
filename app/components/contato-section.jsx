import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    formaContato: '',
    mensagem: '',
  });

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode implementar a lógica para enviar os dados do formulário
    // Pode ser uma requisição para um servidor, integração com API, etc.
    // Por exemplo, você pode usar fetch() ou axios para enviar os dados para uma API

    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso!');
    // Limpar o formulário após o envio
    setFormData({
      nome: '',
      empresa: '',
      email: '',
      telefone: '',
      formaContato: '',
      mensagem: '',
    });
  };

  // Variantes de animação
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="contato"
      className="w-full px-6 py-20 bg-gradient-to-br from-orange-400 to-red-500 text-white font-spacegrotesk"
    >
      <div className="max-w-4xl mx-auto">
        {/* Título da Seção */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Entre em Contato Conosco
        </motion.h2>

        {/* Linha Divisória */}
        <div className="border-b-2 border-white w-1/3 mx-auto mb-12"></div>

        {/* Formulário de Contato */}
        <motion.form
          className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-xl"
          initial="hidden"
          animate="visible"
          variants={formVariants}
          onSubmit={handleSubmit}
        >
          {/* Campo Nome */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2" htmlFor="nome">
              Nome *
            </label>
            <input
              type="text"
              id="nome"
              required
              className="w-full px-4 py-2 rounded-lg text-black"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            />
          </div>

          {/* Campo Empresa */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2" htmlFor="empresa">
              Empresa *
            </label>
            <input
              type="text"
              id="empresa"
              required
              className="w-full px-4 py-2 rounded-lg text-black"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            />
          </div>

          {/* Campo E-mail */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2" htmlFor="email">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg text-black"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Campo Telefone */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2" htmlFor="telefone">
              Telefone *
            </label>
            <input
              type="tel"
              id="telefone"
              required
              className="w-full px-4 py-2 rounded-lg text-black"
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            />
          </div>

          {/* Seleção de Forma de Contato */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2">
              Selecione a forma de Contato Desejada: *
            </label>
            <div className="flex flex-col space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="formaContato"
                  value="WhatsApp"
                  required
                  className="form-radio text-orange-500"
                  checked={formData.formaContato === 'WhatsApp'}
                  onChange={(e) => setFormData({ ...formData, formaContato: e.target.value })}
                />
                <span className="ml-2">WhatsApp</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="formaContato"
                  value="Ligação"
                  className="form-radio text-orange-500"
                  checked={formData.formaContato === 'Ligação'}
                  onChange={(e) => setFormData({ ...formData, formaContato: e.target.value })}
                />
                <span className="ml-2">Ligação</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="formaContato"
                  value="E-mail"
                  className="form-radio text-orange-500"
                  checked={formData.formaContato === 'E-mail'}
                  onChange={(e) => setFormData({ ...formData, formaContato: e.target.value })}
                />
                <span className="ml-2">E-mail</span>
              </label>
            </div>
          </div>

          {/* Campo Mensagem (Opcional) */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2" htmlFor="mensagem">
              Mensagem (Opcional)
            </label>
            <textarea
              id="mensagem"
              className="w-full px-4 py-2 rounded-lg text-black"
              rows="4"
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
            ></textarea>
          </div>

          {/* Botão de Enviar */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-blue-500 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              <FaPaperPlane className="mr-2" />
              Enviar Mensagem
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContatoSection;
