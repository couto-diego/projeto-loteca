import React from 'react';
import '../styles/global.css';

interface LotteryCardProps {
  numbers: string[];
  type: string;
  date: string;
  concurso: string;
  acumulou: boolean;
  premiacao?: { faixa: number; numero_ganhadores: number; valor_premio: number }[];
}

const LotteryCard: React.FC<LotteryCardProps> = ({ numbers, type, date, concurso, acumulou, premiacao }) => {
  return (
    <div className="lottery-card">
      {/* Números sorteados */}
      <div className="lottery-numbers">
        <h2>{type}</h2>
        <div className="numbers">
          {numbers.map((number, index) => (
            <span key={index}>{number}</span>
          ))}
        </div>
      </div>

      {/* Informações do concurso */}
      <div className="lottery-info">
        <h2>Informações do Concurso</h2>
        <p>Concurso: {concurso}</p>
        <p>Data: {date}</p>
        <p>{acumulou ? 'Acumulou!' : 'Não acumulou.'}</p>
        {!acumulou && premiacao && (
          <div className="premiacao">
            <h3>Premiação</h3>
            {premiacao.map((premio, index) => (
              <div key={index} className="premio-item">
                <p>Faixa {premio.faixa}: {premio.numero_ganhadores} ganhadores</p>
                <p>Prêmio: {premio.valor_premio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LotteryCard;