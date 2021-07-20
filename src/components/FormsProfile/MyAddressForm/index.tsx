import React from 'react';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { useAuth } from 'hooks/auth';
import SelectField from 'components/SelectField';
import { cidadeFields, estadosFields } from 'utils/fields';
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
          mask="cep"
          initialValue={user?.endereco.cep}
          placeholder="00000-000"
        />
        <SelectField
          label="Estado"
          name="estado"
          initialValue={
            estadosFields.find(estado => estado.text === user?.endereco.estado)
              ?.value
          }
          placeholder="Selecione seu estado"
          options={estadosFields}
        />
        <SelectField
          label="Cidade"
          name="cidade"
          initialValue={user?.endereco.cidade}
          placeholder="Selecione sua cidade"
          options={cidadeFields(user?.endereco.estado)}
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
