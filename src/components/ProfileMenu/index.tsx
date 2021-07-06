import React from 'react';
import {
  FaUserCircle as UserIcon,
  FaLock as LockIcon,
  FaMapMarkerAlt as AddressIcon,
  FaGraduationCap as GraduationIcon,
} from 'react-icons/fa';
import * as S from './styles';

export type ProfileMenuProps = {
  activeLink?:
    | '/perfil/eu'
    | '/perfil/senha'
    | '/perfil/endereco'
    | '/perfil/ensino';
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  activeLink,
}: ProfileMenuProps) => (
  <S.Nav>
    <S.Link
      isActive={activeLink === '/perfil/eu'}
      to="/perfil/eu"
      title="Meu perfil"
    >
      <UserIcon size={24} />
      <span>Meu perfil</span>
    </S.Link>
    <S.Link
      isActive={activeLink === '/perfil/senha'}
      to="/perfil/senha"
      title="Minha senha"
    >
      <LockIcon size={24} />
      <span>Minha senha</span>
    </S.Link>
    <S.Link
      isActive={activeLink === '/perfil/endereco'}
      to="/perfil/endereco"
      title="Meu endereço"
    >
      <AddressIcon size={24} />
      <span>Meu endereço</span>
    </S.Link>
    <S.Link
      isActive={activeLink === '/perfil/ensino'}
      to="/perfil/escolaridade"
      title="Minha escolaridade"
    >
      <GraduationIcon size={24} />
      <span>Minha escolaridade</span>
    </S.Link>
  </S.Nav>
);

export default ProfileMenu;
