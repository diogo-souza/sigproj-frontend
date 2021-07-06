import React from 'react';
import Heading from 'components/Heading';
import * as S from './styles';

const MyPasswordForm: React.FC = () => (
  <S.Container>
    <Heading lineBottom color="titleBlack" size="small">
      Minha senha
    </Heading>
  </S.Container>
);

export default MyPasswordForm;
