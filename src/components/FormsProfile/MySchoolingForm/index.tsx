import React, { useState } from 'react';
import Heading from 'components/Heading';
import { useAuth } from 'hooks/auth';
import Button from 'components/Button';
import SelectField from 'components/SelectField';
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi';
import {
  cargaTrabalhoFields,
  categoriaFields,
  centroFields,
  departamentoFields,
  instituicaoFields,
  titulacaoFields,
} from 'utils/fields';
import { FieldErrors } from 'utils/validations';
import { updateSchoolingValidate } from 'utils/validations/auth';
import { Form, FormError, FormLoading } from '..';

const MySchoolingForm: React.FC = () => {
  const [values, setValues] = useState({
    university: '',
    center: '',
    departament: '',
    category: '',
    work_regime: '',
    school_degree: '',
  });
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateSchooling } = useAuth();
  const { user } = useAuth();
  //
  const handleInput = (field: string, value: string) => {
    setValues(s => ({ ...s, [field]: value }));
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // TODO alterar para validar no onChange
    const errors = updateSchoolingValidate(values);
    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});
    try {
      await updateSchooling({ ...values });
    } catch (e) {
      setFormError(e.message);
    }
    setLoading(false);
  };
  return (
    <>
      <Heading lineBottom color="titleBlack" size="small">
        Minha escolaridade
      </Heading>
      {!!formError && (
        <FormError>
          <ErrorIcon />
          {formError}
        </FormError>
      )}
      <Form onSubmit={handleSubmit}>
        <SelectField
          label="Instituição"
          name="instituicao"
          initialValue={user?.universidade}
          placeholder="Selecione a instituição"
          className="fullWidth"
          options={instituicaoFields}
          error={fieldError.university}
          onSelectChange={v => handleInput('university', v)}
        />
        <SelectField
          label="Centro"
          name="centro"
          initialValue={user?.centro}
          placeholder="Selecione o centro"
          options={centroFields}
          error={fieldError.center}
          onSelectChange={v => handleInput('center', v)}
        />
        <SelectField
          label="Departamento"
          name="departamento"
          initialValue={user?.departamento}
          placeholder="Selecione o departamento"
          options={departamentoFields}
          error={fieldError.departament}
          onSelectChange={v => handleInput('departament', v)}
        />
        <SelectField
          label="Categoria"
          name="categoria"
          initialValue={user?.categoria}
          placeholder="Selecione a categoria"
          options={categoriaFields}
          error={fieldError.category}
          onSelectChange={v => handleInput('category', v)}
        />
        <SelectField
          label="Regime de trabalho"
          name="regime_de_trabalho"
          initialValue={user?.carga_trabalho}
          placeholder="Selecione a carga de trabalho"
          options={cargaTrabalhoFields}
          error={fieldError.work_regime}
          onSelectChange={v => handleInput('work_regime', v)}
        />
        <SelectField
          label="Titulação"
          name="titulacao"
          initialValue={user?.titulacao}
          placeholder="Selecione a titulação"
          options={titulacaoFields}
          error={fieldError.school_degree}
          onSelectChange={v => handleInput('school_degree', v)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Salvar</span>}
        </Button>
      </Form>
    </>
  );
};
export default MySchoolingForm;
