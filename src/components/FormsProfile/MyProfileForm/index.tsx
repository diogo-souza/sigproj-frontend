import React from 'react';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import { useAuth } from 'hooks/auth';
import Button from 'components/Button';
import SelectField from 'components/SelectField';
import { sexoFields, tipoInstitucionalFields } from 'utils/fields';
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
          placeholder="Insira seu nome completo"
          className="fullWidth"
        />
        <TextField
          label="E-mail"
          name="email"
          type="email"
          value={user?.email}
          readOnly
          placeholder="Insira seu e-mail"
          className="fullWidth"
        />
        <TextField
          label="Telefone"
          name="telefone"
          type="tel"
          mask="telephoneNumber"
          initialValue={user?.telefone}
          placeholder="0000-0000"
        />
        <TextField
          label="Celular"
          name="celular"
          type="tel"
          mask="phoneNumber"
          initialValue={user?.celular}
          placeholder="(00) 00000-0000"
        />
        <TextField
          label="CPF"
          name="cpf"
          type="text"
          mask="cpf"
          initialValue={user?.cpf}
          placeholder="000.000.000-00"
        />
        <TextField
          label="Data de nascimento"
          name="data_nascimento"
          type="date"
          initialValue={user?.data_nascimento}
        />
        <SelectField
          label="Sexo"
          name="sexo"
          placeholder="Selecione seu sexo..."
          initialValue={user?.sexo}
          options={sexoFields}
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
          value={
            tipoInstitucionalFields.find(
              tipo => tipo.value === user?.tipo_institucional,
            )?.text
          }
          readOnly
        />
        <Button>Salvar</Button>
      </Form>
    </>
  );
};
export default MyProfileForm;
