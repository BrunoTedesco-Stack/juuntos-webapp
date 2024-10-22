import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContatoSection = () => {
  const [isMounted, setIsMounted] = useState(false); // Controle de montagem no lado do cliente
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    formaContato: '',
    mensagem: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // Estado para exibir o modal
  const [modalMessage, setModalMessage] = useState(''); // Mensagem do modal
  const [modalType, setModalType] = useState('success'); // Tipo do modal (success ou error)

  // UseEffect para definir isMounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Verifica se está montado antes de renderizar o conteúdo
  if (!isMounted) {
    return <div className="w-full h-screen flex items-center justify-center text-white">Carregando...</div>;
  }

  // Função para lidar com a mudança nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para validar o formulário
  const validateForm = () => {
    let errors = {};
    if (!formData.nome.trim()) errors.nome = 'Nome é obrigatório.';
    if (!formData.empresa.trim()) errors.empresa = 'Empresa é obrigatória.';
    if (!formData.email.trim()) {
      errors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'E-mail inválido.';
    }
    if (!formData.telefone.trim()) errors.telefone = 'Telefone é obrigatório.';
    if (!formData.formaContato) errors.formaContato = 'Selecione uma forma de contato.';
    return errors;
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});

      try {
        const response = await fetch('http://localhost:5000/save-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setModalMessage('Formulário enviado com sucesso!');
          setModalType('success');
          setShowModal(true);
          setFormData({
            nome: '',
            empresa: '',
            email: '',
            telefone: '',
            formaContato: '',
            mensagem: '',
          });
        } else {
          setModalMessage('Erro ao salvar o formulário. Tente novamente.');
          setModalType('error');
          setShowModal(true);
        }
      } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
        setModalMessage('Erro ao enviar o formulário. Verifique sua conexão.');
        setModalType('error');
        setShowModal(true);
      }
    }
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Variantes de animação para o formulário
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Variantes de animação para o botão
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="contato"
      className="w-full px-6 py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-white font-spacegrotesk"
    >
      <div className="max-w-4xl mx-auto">
        {/* Título da Seção */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Fale Conosco
        </motion.h2>

        {/* Linha Divisória */}
        <div className="border-b-2 border-orange-300 w-1/3 mx-auto mb-12"></div>

        {/* Formulário de Contato */}
        <motion.form
          className="bg-black bg-opacity-90 p-8 rounded-xl shadow-xl border border-orange-600"
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
              name="nome"
              className={`w-full px-4 py-2 rounded-lg text-black bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                formErrors.nome ? 'border-2 border-red-500' : ''
              }`}
              value={formData.nome}
              onChange={handleInputChange}
            />
            {formErrors.nome && <p className="text-red-500 mt-1">{formErrors.nome}</p>}
          </div>

          {/* Campo Empresa */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2" htmlFor="empresa">
              Empresa *
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              className={`w-full px-4 py-2 rounded-lg text-black bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                formErrors.empresa ? 'border-2 border-red-500' : ''
              }`}
              value={formData.empresa}
              onChange={handleInputChange}
            />
            {formErrors.empresa && <p className="text-red-500 mt-1">{formErrors.empresa}</p>}
          </div>

          {/* Campo E-mail */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2" htmlFor="email">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 rounded-lg text-black bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                formErrors.email ? 'border-2 border-red-500' : ''
              }`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
          </div>

          {/* Campo Telefone */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2" htmlFor="telefone">
              Telefone *
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className={`w-full px-4 py-2 rounded-lg text-black bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                formErrors.telefone ? 'border-2 border-red-500' : ''
              }`}
              value={formData.telefone}
              onChange={handleInputChange}
            />
            {formErrors.telefone && <p className="text-red-500 mt-1">{formErrors.telefone}</p>}
          </div>

          {/* Seleção de Forma de Contato */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2">
              Selecione a forma de Contato Desejada: *
            </label>
            <div className="flex flex-col space-y-2">
              {['WhatsApp', 'Ligação', 'E-mail'].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="formaContato"
                    value={option}
                    className="form-radio text-orange-500"
                    checked={formData.formaContato === option}
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
            {formErrors.formaContato && (
              <p className="text-red-500 mt-1">{formErrors.formaContato}</p>
            )}
          </div>

          {/* Campo Mensagem (Opcional)
          {/* Campo Mensagem (Opcional) */}
          <div className="mb-6">
            <label className="block text-xl font-semibold mb-2" htmlFor="mensagem">
              Mensagem (Opcional)
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              className="w-full px-4 py-2 rounded-lg text-black bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              rows="4"
              value={formData.mensagem}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Botão de Enviar */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-600"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaPaperPlane className="mr-2" />
              Enviar Mensagem
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Modal de Sucesso ou Erro */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <motion.div
            className={`bg-black p-8 rounded-xl shadow-2xl text-center border-4 ${
              modalType === 'success' ? 'border-green-500' : 'border-red-500'
            }`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${
                modalType === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {modalType === 'success' ? 'Sucesso!' : 'Erro!'}
            </h2>
            <p className="text-lg text-white mb-6">{modalMessage}</p>
            <button
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ContatoSection;
