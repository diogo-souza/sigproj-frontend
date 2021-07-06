import React from 'react';
import {
  FaUserCircle as UserIcon,
  FaLock as LockIcon,
  FaMapMarkerAlt as AddressIcon,
  FaGraduationCap as GraduationIcon,
} from 'react-icons/fa';
import * as S from './styles';

const ProfileMenu: React.FC = () => {
  return (
    <S.Nav>
      <S.NavLink to="/perfil/eu" title="Meu perfil" activeClassName="isActive">
        <UserIcon size={24} />
        <span>Meu perfil</span>
      </S.NavLink>
      <S.NavLink
        to="/perfil/senha"
        title="Minha senha"
        activeClassName="isActive"
      >
        <LockIcon size={24} />
        <span>Minha senha</span>
      </S.NavLink>
      <S.NavLink
        to="/perfil/endereco"
        title="Meu endereço"
        activeClassName="isActive"
      >
        <AddressIcon size={24} />
        <span>Meu endereço</span>
      </S.NavLink>
      <S.NavLink
        to="/perfil/escolaridade"
        title="Minha escolaridade"
        activeClassName="isActive"
      >
        <GraduationIcon size={24} />
        <span>Minha escolaridade</span>
      </S.NavLink>
    </S.Nav>
  );
};

export default ProfileMenu;
