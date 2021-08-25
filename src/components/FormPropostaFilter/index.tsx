import React, { useState } from 'react';

import Button from 'components/Button';
import SelectField from 'components/SelectField';
import TextField from 'components/TextField';

import { FaSearch as SearchIcon } from 'react-icons/fa';

import {
  centroFields,
  departamentoFields,
  modalidadeFields,
} from 'utils/fields';

import * as S from './styles';

// TODO Backend Proposta por Edital
// TODO Componente muito similar ao de EditalFilter (Talvez refatorar)

export type Values = {
  titulo?: string;
  area_tematica?: string;
  centro?: string;
  departamento?: string;
  modalidade?: 'Curso' | 'Programa' | 'Projeto' | 'Evento' | '';
};

export type FormPropostaFilterProps = {
  title?: string;
  description?: string;
  initialValues?: Values;
  onFilter: (values: Values) => void;
};

const FormPropostaFilter: React.FC<FormPropostaFilterProps> = ({
  title = 'Propostas',
  description = 'Utilize filtros para buscar entre propostas aprovadas',
  initialValues = {},
  onFilter,
}: FormPropostaFilterProps) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name: string, value: string) => {
    setValues(s => ({ ...s, [name]: value }));
  };

  const handleFilter = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO Refatorar para poder utilizar este Cleaner em outros lugares
    const cleanValues = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(values).filter(([_, v]) => v !== ''),
    );
    onFilter(cleanValues);
  };

  return (
    <S.Container>
      <S.Header>
        <h3>{title}</h3>
        <p>{description}</p>
      </S.Header>
      <S.Body onSubmit={handleFilter}>
        <TextField
          name="titulo"
          type="text"
          label="Título"
          icon={<SearchIcon />}
          initialValue={values.titulo}
          iconPosition="right"
          placeholder="Informe o títudo que deseja pesquisar"
          onInputChange={v => handleChange('titulo', v)}
          className="fullWidth"
        />
        <TextField
          name="area_tematica"
          type="text"
          label="Área temática"
          initialValue={values.area_tematica}
          placeholder="Informe a área temática que deseja pesquisar"
          onInputChange={v => handleChange('area_tematica', v)}
          className="fullWidth"
        />
        <SelectField
          name="centro"
          label="Centro"
          placeholder="Selecione o centro"
          options={centroFields}
          initialValue={values.centro}
          onSelectChange={v => handleChange('centro', v)}
        />
        <SelectField
          name="departamento"
          label="Departamento"
          placeholder="Selecione o departamento"
          options={departamentoFields}
          initialValue={values.departamento}
          onSelectChange={v => handleChange('departamento', v)}
        />
        <SelectField
          name="modalidade"
          label="Modalidade"
          placeholder="Selecione a modalidade"
          options={modalidadeFields}
          initialValue={values.modalidade}
          onSelectChange={v => handleChange('modalidade', v)}
        />
        <Button icon={<SearchIcon />} type="submit">
          Filtrar
        </Button>
      </S.Body>
    </S.Container>
  );
};
export default FormPropostaFilter;
