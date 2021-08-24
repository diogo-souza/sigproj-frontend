/* eslint-disable no-nested-ternary */
import React from 'react';

import { Container } from 'components/Container';

import EditalResume from 'components/EditalResume';
import Empty from 'components/Empty';

import { EditalData } from 'types/editalTypes';

export type EditalTemplateProps = {
  edital?: EditalData;
  isLoading?: boolean;
};

const EditalTemplate: React.FC<EditalTemplateProps> = ({
  edital,
  isLoading = false,
}: EditalTemplateProps) => (
  <Container>
    {/* TODO Loading colocar commponente bonito */}
    {isLoading ? (
      <p>Carregando...</p>
    ) : edital?.uuid ? (
      <EditalResume edital={edital} />
    ) : (
      <Empty
        title="Edital não encontrado"
        description="Não encontramos nenhum edital"
        hasLink
        path="/editais?pagina=1"
        text="Ir para lista de editais"
      />
    )}
  </Container>
);

export default EditalTemplate;
