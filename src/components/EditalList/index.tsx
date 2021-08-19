import React from 'react';
import { Link } from 'react-router-dom';
import { EditalData } from 'types/editalTypes';
import * as S from './styles';

type EditalListProps = {
  editais: EditalData[];
};

const EditalList: React.FC<EditalListProps> = ({
  editais,
}: EditalListProps) => (
  <S.Container>
    {editais.map(edital => (
      <Link key={edital.uuid} to={`editais/${edital.uuid}`}>
        <div>
          <S.Title>{edital.titulo}</S.Title>
          <S.Status isActive={edital.ativo}>{`${
            edital.ativo ? 'Ativo' : 'Inativo'
          }`}</S.Status>
        </div>
        <S.Headline>{edital.chamada}</S.Headline>
        <div>
          <S.Modalities>
            {edital.modalidades.map(modalidade => (
              <p key={modalidade}>{modalidade}</p>
            ))}
          </S.Modalities>
          <S.DateContainer>
            <p>De {edital.data_inicio}</p>
            <p>Até {edital.data_fim}</p>
          </S.DateContainer>
        </div>
      </Link>
    ))}
  </S.Container>
);

export default EditalList;
