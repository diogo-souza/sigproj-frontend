import React from 'react';
import { Link } from 'react-router-dom';
import { PropostaData } from 'types/propostaTypes';
import * as S from './styles';

type PropostaListProps = {
  propostas: PropostaData[];
};

const PropostaList: React.FC<PropostaListProps> = ({
  propostas,
}: PropostaListProps) => {
  return (
    <S.Container>
      {propostas.map(proposta => (
        <Link key={proposta.uuid} to={`propostas/${proposta.uuid}`}>
          <div>
            <S.Title>{proposta.titulo}</S.Title>
          </div>
          <S.List>
            <li>
              <strong>Edital: </strong>
              {proposta.edital_titulo}
            </li>
            <li>
              <strong>Modalidade: </strong>
              {proposta.modalidade}
            </li>
            <li>
              <strong>Área temática: </strong>
              {proposta.area_tematica}
            </li>
            <li>
              <strong>Centro: </strong>
              {proposta.centro}
            </li>
            <li>
              <strong>Departamento: </strong>
              {proposta.departamento}
            </li>
          </S.List>
        </Link>
      ))}
    </S.Container>
  );
};
export default PropostaList;
