import { Container } from 'components/Container';
import Empty from 'components/Empty';
import React from 'react';
import Base from 'templates/Base';

const Page404: React.FC = () => (
  <Base>
    <Container>
      <Empty
        title="404 - Página não encontrada"
        description="Ops...esta página não existe."
        hasLink
      />
    </Container>
  </Base>
);

export default Page404;
