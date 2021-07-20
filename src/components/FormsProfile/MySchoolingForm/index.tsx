import React from 'react';
import Heading from 'components/Heading';
import { useAuth } from 'hooks/auth';
import Button from 'components/Button';
import SelectField from 'components/SelectField';
import {
  cargaTrabalhoFields,
  categoriaFields,
  centroFields,
  departamentoFields,
  instituicaoFields,
  titulacaoFields,
} from 'utils/fields';
import { Form } from '..';

const MySchoolingForm: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      <Heading lineBottom color="titleBlack" size="small">
        Minha escolaridade
      </Heading>
      <Form>
        <SelectField
          label="Instituição"
          name="instituicao"
          initialValue={user?.universidade}
          placeholder="Selecione a instituição"
          className="fullWidth"
          options={instituicaoFields}
        />
        <SelectField
          label="Centro"
          name="centro"
          initialValue={user?.centro}
          placeholder="Selecione o centro"
          options={centroFields}
        />
        <SelectField
          label="Departamento"
          name="departamento"
          initialValue={user?.departamento}
          placeholder="Selecione o departamento"
          options={departamentoFields}
        />
        <SelectField
          label="Categoria"
          name="categoria"
          initialValue={user?.categoria}
          placeholder="Selecione a categoria"
          options={categoriaFields}
        />
        <SelectField
          label="Regime de trabalho"
          name="regime_de_trabalho"
          initialValue={user?.carga_trabalho}
          placeholder="Selecione a carga de trabalho"
          options={cargaTrabalhoFields}
        />
        <SelectField
          label="Titulação"
          name="titulacao"
          initialValue={user?.titulacao}
          placeholder="Selecione a titulação"
          options={titulacaoFields}
        />
        <Button>Salvar</Button>
      </Form>
    </>
  );
};
export default MySchoolingForm;
