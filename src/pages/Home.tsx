import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Select from '../components/Select';
import LotteryCard from '../components/LotteryCard';
import Footer from '../components/Footer'; // Importe o Footer
import { fetchLotteryData } from '../services/api';
import '../styles/global.css';

const Home: React.FC = () => {
  const [lotteryType, setLotteryType] = useState('megasena');
  const [lotteryData, setLotteryData] = useState<{
    numeros: string[];
    tipo: string;
    data: string;
    concurso: string;
    acumulou: boolean;
    premiacao?: { faixa: number; numero_ganhadores: number; valor_premio: number }[];
  } | null>(null);

  const lotteryOptions = [
    { value: 'megasena', label: 'Mega-Sena' },
    { value: 'quina', label: 'Quina' },
    { value: 'lotofacil', label: 'Lotofácil' },
    { value: 'lotomania', label: 'Lotomania' },
    { value: 'timemania', label: 'Timemania' },
    { value: 'diadesorte', label: 'Dia de Sorte' },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchLotteryData(lotteryType);
        setLotteryData(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLotteryData(null);
      }
    };
    getData();
  }, [lotteryType]);

  const handleLotteryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLotteryType(event.target.value);
  };

  return (
    <div className={`home ${lotteryType}`}>
      <Header />
      <Select options={lotteryOptions} onChange={handleLotteryChange} />
      {lotteryData ? (
        <LotteryCard
          numbers={lotteryData.numeros}
          type={lotteryData.tipo}
          date={lotteryData.data}
          concurso={lotteryData.concurso}
          acumulou={lotteryData.acumulou}
          premiacao={lotteryData.premiacao}
        />
      ) : (
        <p>Carregando dados...</p>
      )}
      <Footer /> {/* Adicione o Footer aqui */}
    </div>
  );
};

export default Home;