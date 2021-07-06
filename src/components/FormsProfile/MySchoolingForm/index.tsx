import React from 'react';
import Heading from 'components/Heading';
import * as S from './styles';

const MySchoolingForm: React.FC = () => (
  <S.Container>
    <Heading lineBottom color="titleBlack" size="small">
      Minha escolaridade
    </Heading>
  </S.Container>
);

export default MySchoolingForm;
