import React, { useState } from 'react';
import {
  FaBars as MenuIcon,
  FaTimes as CloseIcon,
  FaUser as UserIcon,
} from 'react-icons/fa';
import Logo from 'components/Logo';
import Button from 'components/Button';
import MediaMatch from 'components/MediaMatch';

import * as S from './styles';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container>
      <Logo />

      <MediaMatch lessThan="lmedium">
        <S.IconContainer onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Abrir Menu" />
        </S.IconContainer>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Inicio</S.MenuLink>
          <S.MenuLink href="#">Consulta</S.MenuLink>
          <S.MenuLink href="#">Fale Conosco</S.MenuLink>
          <Button icon={<UserIcon />}>Logar</Button>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Fechar Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Inicio</S.MenuLink>
          <S.MenuLink href="#">Consulta</S.MenuLink>
          <S.MenuLink href="#">Fale Conosco</S.MenuLink>
        </S.MenuNav>
        <S.RegisterBox>
          <Button fullWidth size="large">
            Logar
          </Button>
          <span>ou</span>
          <S.CreateAccount href="#" title="Crie uma conta">
            Crie uma conta
          </S.CreateAccount>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Container>
  );
};
export default Menu;
