import React, { useState } from 'react';

import { FcGoogle as Googleicon } from 'react-icons/fc';
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi';
import { FaEnvelope as MailIcon, FaLock as LockIcon } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { useAuth } from 'hooks/auth';

import { FieldErrors } from 'utils/validations';
import { signInValidate } from 'utils/validations/auth/auth';

import Button from 'components/Button';
import TextField from 'components/TextField';
import { FormContainer, FormError, FormLink, FormLoading } from '..';

import * as S from './styles';

const SignInForm: React.FC = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleInput = (field: string, value: string) => {
    setValues(s => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = signInValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});
    try {
      await signIn({ ...values });
    } catch {
      setFormError(true);
    }
    setLoading(false);
  };

  return (
    <FormContainer>
      {formError && (
        <FormError>
          <ErrorIcon />
          Ocorreu um erro ao fazer login, cheque suas credenciais
        </FormError>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          name="email"
          type="email"
          label="E-mail"
          placeholder="Insira seu e-mail"
          onInputChange={v => handleInput('email', v)}
          autoFocus
          error={fieldError?.email}
          icon={<MailIcon />}
        />

        <TextField
          name="password"
          label="Senha"
          type="password"
          placeholder="Insira sua Senha"
          onInputChange={v => handleInput('password', v)}
          error={fieldError?.password}
          icon={<LockIcon />}
        />

        <S.ForgotPassword to="#">Esqueceu sua senha?</S.ForgotPassword>
        <Button size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Entrar</span>}
        </Button>
        <FormLink>
          Não possui um conta? <Link to="/">Cadastre-se</Link>
        </FormLink>
      </form>
      <S.Separator>Ou continue com</S.Separator>
      <S.SocialLoginContainer>
        <S.SocialLoginButton disabled={loading}>
          <Googleicon size={20} />
          <span>Login social com Google</span>
        </S.SocialLoginButton>
      </S.SocialLoginContainer>
    </FormContainer>
  );
};
export default SignInForm;
