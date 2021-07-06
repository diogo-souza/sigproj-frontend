import React from 'react';
import Heading from 'components/Heading';
import * as S from './styles';

const MyAddressForm: React.FC = () => (
  <S.Container>
    <Heading lineBottom color="titleBlack" size="small">
      Meu endereço
    </Heading>
  </S.Container>
);

export default MyAddressForm;
