import React, { useState } from 'react';
import TextField from 'components/TextField';
import { FaEnvelope as MailIcon, FaLock as LockIcon } from 'react-icons/fa';
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi';
import { FcGoogle as Googleicon } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'hooks/auth';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { signInFormSchema, SignInFormData } from 'utils/validations/auth';
import { FormContainer, FormError, FormLink, FormLoading } from '..';

import * as S from './styles';

const SignInForm: React.FC = () => {
  const { signIn } = useAuth();
  const [hasError, setHasError] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signInHandler: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }: SignInFormData) => {
    try {
      setHasError(false);
      await signIn({ email, password });
    } catch (error) {
      setHasError(true);
      reset({ email, password: '' });
    }
  };

  return (
    <FormContainer>
      {!!hasError && (
        <FormError>
          <ErrorIcon />
          Ocorreu um erro ao fazer login, cheque suas credenciais
        </FormError>
      )}
      <form onSubmit={handleSubmit(signInHandler)} noValidate>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              label="E-mail"
              type="email"
              icon={<MailIcon />}
              placeholder="Insira seu e-mail"
              autoFocus
              error={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              label="Senha"
              type="password"
              placeholder="Insira sua Senha"
              icon={<LockIcon />}
              error={errors.password?.message}
              {...field}
            />
          )}
        />

        <S.ForgotPassword to="#">Esqueceu sua senha?</S.ForgotPassword>
        <Button size="large" fullWidth disabled={isSubmitting}>
          {isSubmitting ? <FormLoading /> : <span>Entrar</span>}
        </Button>
        <FormLink>
          Não possui um conta? <Link to="/">Cadastre-se</Link>
        </FormLink>
      </form>
      <S.Separator>Ou continue com</S.Separator>
      <S.SocialLoginContainer>
        <S.SocialLoginButton disabled={isSubmitting}>
          <Googleicon size={20} />
          <span>Login social com Google</span>
        </S.SocialLoginButton>
      </S.SocialLoginContainer>
    </FormContainer>
  );
};
export default SignInForm;
