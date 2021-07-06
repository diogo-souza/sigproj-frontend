import React from 'react';
import Heading from 'components/Heading';
import * as S from './styles';

const MyProfileForm: React.FC = () => (
  <S.Container>
    <Heading lineBottom color="titleBlack" size="small">
      Meu perfil
    </Heading>
  </S.Container>
);

export default MyProfileForm;
