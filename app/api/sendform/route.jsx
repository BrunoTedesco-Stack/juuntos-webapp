export async function POST(req) {
    try {
      // Extrair os dados do corpo da requisição
      const formData = await req.json();
  
      // Enviar os dados para o backend
      const response = await fetch('http://20.121.57.135/:5000/save-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        return new Response(JSON.stringify({ message: 'Formulário salvo com sucesso no backend!' }), {
          status: 200,
        });
      } else {
        return new Response(JSON.stringify({ error: 'Falha ao salvar o formulário no backend.' }), {
          status: 500,
        });
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      return new Response(JSON.stringify({ error: 'Erro ao enviar os dados para o backend.' }), {
        status: 500,
      });
    }
  }