import React, { useState } from 'react';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi';

import { updatePasswordValidate } from 'utils/validations/auth';
import { FieldErrors } from 'utils/validations';
import { useAuth } from 'hooks/auth';
import { Form, FormError, FormLoading } from '..';

const MyPasswordForm: React.FC = () => {
  const [values, setValues] = useState({
    password: '',
    new_password: '',
    confirm_new_password: '',
  });
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const { updatePassword } = useAuth();

  const handleInput = (field: string, value: string) => {
    setValues(s => ({ ...s, [field]: value }));
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // TODO alterar para validar no onChange
    const errors = updatePasswordValidate(values);
    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});
    try {
      await updatePassword({ ...values });
    } catch (e) {
      setFormError(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Heading lineBottom color="titleBlack" size="small">
        Minha senha
      </Heading>
      {!!formError && (
        <FormError>
          <ErrorIcon />
          {formError}
        </FormError>
      )}
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Senha atual"
          name="password"
          type="password"
          placeholder="Insira sua senha"
          onInputChange={v => handleInput('password', v)}
          error={fieldError.password}
        />
        <TextField
          label="Nova senha"
          name="new_password"
          type="password"
          placeholder="Insira sua nova senha"
          onInputChange={v => handleInput('new_password', v)}
          error={fieldError.new_password}
          style={{
            gridColumn: '1',
          }}
        />
        <TextField
          label="Confirmação de nova senha"
          name="confirm_new_password"
          type="password"
          placeholder="Confirme sua nova senha"
          onInputChange={v => handleInput('confirm_new_password', v)}
          error={fieldError.confirm_new_password}
        />
        <Button type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Salvar</span>}
        </Button>
      </Form>
    </>
  );
};
export default MyPasswordForm;
