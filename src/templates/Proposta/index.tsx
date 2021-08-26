/* eslint-disable no-nested-ternary */
import React from 'react';

import { Container } from 'components/Container';

import Empty from 'components/Empty';

import { PropostaData } from 'types/propostaTypes';

export type PropostaTemplateProps = {
  proposta?: PropostaData;
  isLoading?: boolean;
};

const PropostaTemplate: React.FC<PropostaTemplateProps> = ({
  proposta,
  isLoading = false,
}: PropostaTemplateProps) => (
  <Container>
    {/* TODO Loading colocar commponente bonito */}
    {isLoading ? (
      <p>Carregando...</p>
    ) : proposta?.uuid ? (
      <>
        <h3>Informações da Proposta</h3>
        <p>{JSON.stringify(proposta)}</p>
      </>
    ) : (
      <Empty
        title="Proposta não encontrada"
        description="Não encontramos nenhuma proposta"
        hasLink
        path="/propostas?pagina=1"
        text="Ir para lista de propostas"
      />
    )}
  </Container>
);

export default PropostaTemplate;
