import React from 'react';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { useAuth } from 'hooks/auth';
import { Form } from '..';

const MyAddressForm: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      <Heading lineBottom color="titleBlack" size="small">
        Meu endereço
      </Heading>
      <Form>
        <TextField
          label="CEP"
          name="cep"
          type="text"
          initialValue={user?.endereco.cep}
          placeholder="Insira seu CEP"
        />
        <TextField
          label="Estado"
          name="estado"
          type="text"
          initialValue={user?.endereco.estado}
          placeholder="Selecione seu estado"
        />
        <TextField
          label="Cidade"
          name="cidade"
          type="text"
          initialValue={user?.endereco.cidade}
          placeholder="Selecione sua cidade"
        />
        <TextField
          label="Bairro"
          name="bairro"
          type="text"
          initialValue={user?.endereco.bairro}
          placeholder="Insira seu bairro"
        />
        <TextField
          label="Logradouro"
          name="logradouro"
          type="text"
          initialValue={user?.endereco.logradouro}
          placeholder="Insira seu logradouro"
        />
        <TextField
          label="Número"
          name="numero"
          type="number"
          initialValue={user?.endereco.numero_residencial}
          placeholder="Insira seu número"
        />
        <TextField
          label="Complemento"
          name="complemento"
          type="text"
          initialValue={user?.endereco.complemento}
          placeholder="Insira seu complemento"
        />
        <Button>Salvar</Button>
      </Form>
    </>
  );
};
export default MyAddressForm;
