import * as yup from 'yup';

export type SignInFormData = {
  email: string;
  password: string;
};

export const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
});
