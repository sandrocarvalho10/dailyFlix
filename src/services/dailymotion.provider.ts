// dailymotion-provider.js
import axios from "axios";

// Função para fazer a autenticação do usuário na API do Dailymotion
async function authenticate(email, password) {
  try {
    // Faz uma chamada POST para a API do Dailymotion com as credenciais do usuário
    const response = await axios.post(
      "https://api.dailymotion.com/oauth/token",
      {
        grant_type: "password",
        client_id: process.env.NEXT_PUBLIC_API_KEY,
        client_secret: process.env.NEXT_PUBLIC_TOKEN_SECRET_API,
        username: email,
        password: password,
      }
    );

    // Verifica se a resposta é bem-sucedida
    if (response.status === 200) {
      // Retorna o token de acesso obtido da API do Dailymotion
      return {
        accessToken: response.data.access_token,
      };
    } else {
      // Retorna um erro
      throw new Error("Erro ao autenticar usuário na API do Dailymotion");
    }
  } catch (error) {
    // Retorna um erro
    throw new Error("Erro ao autenticar usuário na API do Dailymotion");
  }
}

// Exporta a função authenticate como provedor personalizado
export default authenticate;
