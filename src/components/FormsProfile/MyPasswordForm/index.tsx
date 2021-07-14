import React from 'react';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Form } from '..';

const MyPasswordForm: React.FC = () => {
  return (
    <>
      <Heading lineBottom color="titleBlack" size="small">
        Minha senha
      </Heading>
      <Form>
        <TextField
          label="Senha atual"
          name="old_password"
          type="password"
          placeholder="Insira sua senha"
        />
        <TextField
          label="Nova senha"
          name="password"
          type="password"
          placeholder="Insira sua nova senha"
          style={{
            gridColumn: '1',
          }}
        />
        <TextField
          label="Confirmação de nova senha"
          name="confirm_password"
          type="password"
          placeholder="Confirme sua nova senha"
        />
        <Button>Salvar</Button>
      </Form>
    </>
  );
};
export default MyPasswordForm;
