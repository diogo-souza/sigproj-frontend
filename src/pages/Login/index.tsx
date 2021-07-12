import React from 'react';
import Base from 'templates/Base';

import SignInForm from 'components/FormsAuth/SignInForm';
import Heading from 'components/Heading';
import * as S from './styles';

const Login: React.FC = () => {
  return (
    <S.Container>
      <Base>
        <S.Content>
          <S.ContentContainer>
            <Heading color="titleBlack" lineColor="primary" lineLeft>
              Login
            </Heading>
            <SignInForm />
          </S.ContentContainer>
        </S.Content>
      </Base>
    </S.Container>
  );
};
export default Login;
