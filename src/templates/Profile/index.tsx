import Heading from 'components/Heading';
import { Container } from 'components/Container';
import React from 'react';
import Base from 'templates/Base';
import ProfileMenu from 'components/ProfileMenu';
import * as S from './styles';

export type ProfileProps = {
  children: React.ReactNode;
};

const Profile: React.FC<ProfileProps> = ({ children }: ProfileProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary" color="titleBlack">
        Minha conta
      </Heading>
      <S.Main>
        <ProfileMenu />
        <S.Content>{children}</S.Content>
      </S.Main>
    </Container>
  </Base>
);

export default Profile;
