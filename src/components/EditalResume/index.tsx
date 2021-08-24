/* eslint-disable react/no-danger */
import React from 'react';

import { EditalData } from 'types/editalTypes';

import * as S from './styles';

type EditalResumeProps = {
  edital: EditalData;
};

const EditalResume: React.FC<EditalResumeProps> = ({
  edital,
}: EditalResumeProps) => {
  return (
    <S.Container>
      <S.Header>
        <h3>Informações do Edital</h3>
        <p>Edital de Apoio ou de Fluxo Contínuo</p>
      </S.Header>
      <S.Content>
        <div>
          <S.Field>Título</S.Field>
          <S.Data>{edital.titulo}</S.Data>
        </div>
        <div>
          <S.Field>Chamada</S.Field>
          <S.Data>{edital.chamada}</S.Data>
        </div>
        <div>
          <S.Field>Data de inicio</S.Field>
          <S.Data>{edital.data_inicio}</S.Data>
        </div>
        <div>
          <S.Field>Data final</S.Field>
          <S.Data>{edital.data_fim}</S.Data>
        </div>
        <div>
          <S.Field>Modalidades</S.Field>
          <S.Data>
            {edital.modalidades && (
              <S.Modalities>
                {edital.modalidades.map(modalidade => (
                  <p key={modalidade}>{modalidade}</p>
                ))}
              </S.Modalities>
            )}
          </S.Data>
        </div>
        <div>
          <S.Field>Corpo</S.Field>
          <S.Data>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  edital?.corpo ||
                  `<p><strong>Não existe corpo para o edital</strong><p>`,
              }}
            />
          </S.Data>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default EditalResume;
