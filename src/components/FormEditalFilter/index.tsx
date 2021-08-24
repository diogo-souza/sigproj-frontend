import React, { useState } from 'react';

import Button from 'components/Button';
import SelectField from 'components/SelectField';
import TextField from 'components/TextField';

import { FaSearch as SearchIcon } from 'react-icons/fa';

import { modalidadeFields } from 'utils/fields';

import * as S from './styles';

export type Values = {
  titulo?: string;
  data_inicio?: string;
  data_fim?: string;
  modalidade?: 'Curso' | 'Programa' | 'Projeto' | 'Evento' | '';
};

export type FormEditalFilterProps = {
  title?: string;
  description?: string;
  initialValues?: Values;
  onFilter: (values: Values) => void;
};

const FormEditalFilter: React.FC<FormEditalFilterProps> = ({
  title = 'Editais',
  description = 'Utilize filtros para buscar editais',
  initialValues = {},
  onFilter,
}: FormEditalFilterProps) => {
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
          name="data_inicio"
          type="date"
          label="Data início"
          initialValue={values.data_inicio}
          onInputChange={v => handleChange('data_inicio', v)}
        />
        <TextField
          name="data_fim"
          type="date"
          label="Data final"
          initialValue={values.data_fim}
          onInputChange={v => handleChange('data_fim', v)}
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
export default FormEditalFilter;
