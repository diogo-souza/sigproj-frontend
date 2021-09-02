import React, { useEffect, useState } from 'react';

import * as S from './styles';

type DropdownProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({
  title,
  children,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Validar se vale a pena isso
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <S.Container isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Container>
  );
};
export default Dropdown;
