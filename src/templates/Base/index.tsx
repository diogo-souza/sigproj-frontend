import React from 'react';
import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import * as S from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base: React.FC<BaseTemplateProps> = ({ children }: BaseTemplateProps) => (
  <S.Container>
    <S.SectionHeader>
      <Container>
        <Menu />
      </Container>
    </S.SectionHeader>

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Container>
);

export default Base;
