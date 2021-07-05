import { useAuth } from 'hooks/auth';
import React from 'react';
import * as S from './styles';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <S.Container>
      <h1>Bem vindo de volta{!!user && ` ${user.nome}`}!</h1>
    </S.Container>
  );
};

export default Dashboard;
