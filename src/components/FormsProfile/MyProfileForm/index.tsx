import React from 'react';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import { useAuth } from 'hooks/auth';
import Button from 'components/Button';
import { Form } from '..';

const MyProfileForm: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      <Heading lineBottom color="titleBlack" size="small">
        Meu perfil
      </Heading>
      <Form>
        <TextField
          label="Nome completo"
          name="nome"
          type="text"
          initialValue={user?.nome}
          placeholder="Insira seu nome"
          className="fullWidth"
        />
        <TextField
          label="E-mail"
          name="email"
          type="email"
          value={user?.email}
          readOnly
          placeholder="Insira seu email"
          className="fullWidth"
        />
        <TextField
          label="Telefone"
          name="telefone"
          type="tel"
          initialValue={user?.telefone}
          placeholder="Insira seu telefone"
        />
        <TextField
          label="Celular"
          name="celular"
          type="tel"
          initialValue={user?.celular}
          placeholder="Insira seu celular"
        />
        <TextField
          label="CPF"
          name="cpf"
          type="text"
          initialValue={user?.cpf}
          placeholder="Insira seu cpf"
        />
        <TextField
          label="Data de nascimento"
          name="data_nascimento"
          type="text"
          initialValue={user?.data_nascimento}
        />
        <TextField
          label="Sexo"
          name="sexo"
          type="text"
          initialValue={user?.sexo}
          placeholder="Selecione seu sexo"
        />
        <TextField
          label="Tipo do usuário"
          name="role"
          type="text"
          value={user?.role_usuario}
          readOnly
        />
        <TextField
          label="Tipo institucional"
          name="institucional"
          type="text"
          value={user?.tipo_institucional}
          readOnly
        />
        <Button>Salvar</Button>
      </Form>
    </>
  );
};
export default MyProfileForm;
