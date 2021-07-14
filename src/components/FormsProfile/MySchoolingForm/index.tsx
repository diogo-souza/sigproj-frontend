import React from 'react';
import Heading from 'components/Heading';
import { useAuth } from 'hooks/auth';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Form } from '..';

const MySchoolingForm: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      <Heading lineBottom color="titleBlack" size="small">
        Minha escolaridade
      </Heading>
      <Form>
        <TextField
          label="Instituição"
          name="instituicao"
          type="text"
          initialValue={user?.universidade}
          placeholder="Selecione usa instituição"
          className="fullWidth"
        />
        <TextField
          label="Centro"
          name="centro"
          type="text"
          initialValue={user?.centro}
          placeholder="Selecione seu centro"
        />
        <TextField
          label="Departamento"
          name="departamento"
          type="text"
          initialValue={user?.departamento}
          placeholder="Selecione seu departamento"
        />
        <TextField
          label="Categoria"
          name="categoria"
          type="tel"
          initialValue={user?.categoria}
          placeholder="Selecione sua categoria"
        />
        <TextField
          label="Regime de trabalho"
          name="regime_de_trabalho"
          type="text"
          initialValue={user?.carga_trabalho}
          placeholder="Selecione sua carga de trabalho"
        />
        <TextField
          label="Titulação"
          name="titulacao"
          type="text"
          initialValue={user?.titulacao}
          placeholder="Selecione sua titulação"
        />
        <Button>Salvar</Button>
      </Form>
    </>
  );
};
export default MySchoolingForm;
