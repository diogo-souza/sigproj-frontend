import React from 'react';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Container>
      <Menu />
      <Footer />
    </S.Container>
  );
};

export default Main;
