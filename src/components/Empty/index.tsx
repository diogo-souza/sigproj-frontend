import React from 'react';
import notFoundImg from 'assets/images/notFound.svg';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button';
import * as S from './styles';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
  path?: string;
  text?: string;
};

const Empty: React.FC<EmptyProps> = ({
  title,
  description,
  hasLink = false,
  path = '/',
  text = 'Ir para inicio',
}: EmptyProps) => {
  const { push } = useHistory();
  return (
    <S.Container>
      <img
        src={notFoundImg}
        alt="Uma mulher não encontrando um arquivo dentro de uma pasta"
        width={500}
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && <Button onClick={() => push(path)}>{text}</Button>}
    </S.Container>
  );
};
export default Empty;
