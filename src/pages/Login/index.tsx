import React from 'react';
import Base from 'templates/Base';
import { Container } from 'components/Container';

import * as S from './styles';

const Login: React.FC = () => (
  <S.Container>
    <Base>
      <Container>
        <h1>Login</h1>
      </Container>
    </Base>
  </S.Container>
);

export default Login;
