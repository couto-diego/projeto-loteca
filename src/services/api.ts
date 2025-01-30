import axios from 'axios';

const API_URL = 'https://apiloterias.com.br/app/v2/resultado';

export const fetchLotteryData = async (lotteryType: string) => {
  try {
    const response = await axios.get(`${API_URL}?loteria=${lotteryType}&token=kJdfLjd38Jai2ek`);
    const data = response.data;

    return {
      numeros: data.dezenas,
      tipo: data.nome,
      data: data.data_concurso,
      concurso: data.numero_concurso,
      acumulou: data.acumulou,
      premiacao: data.premiacao,
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};