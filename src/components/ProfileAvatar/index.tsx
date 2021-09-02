import React, { useCallback } from 'react';

import { FiLogOut as SignOutIcon } from 'react-icons/fi';
import { RiAccountCircleFill as ProfileIcon } from 'react-icons/ri';

import Dropdown from 'components/Dropdown';

import { useAuth } from 'hooks/auth';

import * as S from './styles';

export type ProfileAvatarProps = {
  name: string;
  email: string;
  src?: string;
};

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  name,
  email,
  src = '',
}: ProfileAvatarProps) => {
  const { signOut } = useAuth();

  const getInitials = useCallback((userName: string) => {
    const names = userName.split(' ');
    const initials =
      names[0][0] + (names.length > 1 ? names[names.length - 1][0] : '');

    return initials.toUpperCase();
  }, []);

  return (
    <Dropdown
      title={
        <S.Container aria-label="Abrir menu">
          <S.Info>
            <S.Name>{name}</S.Name>
            <S.Email>{email}</S.Email>
          </S.Info>
          {!src ? (
            <S.Avatar>
              <span>{getInitials(name)}</span>
            </S.Avatar>
          ) : (
            <img src={src} alt={name} />
          )}
        </S.Container>
      }
    >
      <S.Nav>
        <S.Link to="/perfil/eu">
          <ProfileIcon />
          <span>Meu perfil</span>
        </S.Link>

        <S.LogoutLink
          role="button"
          onClick={() => {
            signOut();
          }}
        >
          <SignOutIcon />
          <span>Sair</span>
        </S.LogoutLink>
      </S.Nav>
    </Dropdown>
  );
};
export default ProfileAvatar;
