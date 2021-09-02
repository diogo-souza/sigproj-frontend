import React, { useState } from 'react';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import { useAuth } from 'hooks/auth';
import Button from 'components/Button';
import SelectField from 'components/SelectField';
import { sexoFields, tipoInstitucionalFields } from 'utils/fields';
import { updateProfileValidate } from 'utils/validations/auth';
import { FieldErrors } from 'utils/validations';
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi';
import { Form, FormError, FormLoading } from '..';

const MyProfileForm: React.FC = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateProfile } = useAuth();
  const { user } = useAuth();

  const [values, setValues] = useState({
    nome: user.nome,
    gender: user.sexo,
    birth_date: user.data_nascimento,
    phone: user.telefone,
    cellphone: user.celular,
  });

  const handleInput = (field: string, value: string) => {
    setValues(s => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // TODO alterar para validar no onChange
    const errors = updateProfileValidate(values);
    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});
    try {
      await updateProfile({ ...values });
    } catch (e) {
      setFormError(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Heading lineBottom color="titleBlack" size="small">
        Meu perfil
      </Heading>
      {!!formError && (
        <FormError>
          <ErrorIcon />
          {formError}
        </FormError>
      )}
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Nome completo"
          name="nome"
          type="text"
          initialValue={values.nome}
          placeholder="Insira seu nome completo"
          className="fullWidth"
          error={fieldError.nome}
          onInputChange={v => handleInput('nome', v)}
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
          initialValue={values.phone}
          placeholder="0000-0000"
          error={fieldError.phone}
          onInputChange={v => handleInput('phone', v)}
        />
        <TextField
          label="Celular"
          name="celular"
          type="tel"
          mask="phoneNumber"
          initialValue={values.cellphone}
          placeholder="(00) 00000-0000"
          error={fieldError.cellphone}
          onInputChange={v => handleInput('cellphone', v)}
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
          initialValue={values.birth_date}
          error={fieldError.birth_date}
          onInputChange={v => handleInput('birth_date', v)}
        />
        <SelectField
          label="Sexo"
          name="sexo"
          placeholder="Selecione seu sexo..."
          initialValue={values.gender}
          options={sexoFields}
          error={fieldError.gender}
          onSelectChange={v => handleInput('gender', v)}
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
        <Button disabled={loading} type="submit">
          {loading ? <FormLoading /> : <span>Salvar</span>}
        </Button>
      </Form>
    </>
  );
};
export default MyProfileForm;
