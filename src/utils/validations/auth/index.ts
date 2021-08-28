import Joi from 'joi';
import {
  UsersPermissionsLoginInput,
  UsersUpdatePasswordInput,
  UsersUpdateSchoolingInput,
} from 'types/authTypes';
import { fieldsValidations, getFieldErrors } from '..';

export function signInValidate(values: UsersPermissionsLoginInput) {
  const { email, password } = fieldsValidations;
  const schema = Joi.object({ email, password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

export function updatePasswordValidate(values: UsersUpdatePasswordInput) {
  const schema = Joi.object({
    password: Joi.string().min(6).max(16).required().messages({
      'string.min': 'Mínimo de 6 caracteres',
      'string.max': 'Máximo de 16 caracteres',
      'string.empty': 'Campo obrigatório',
    }),
    new_password: Joi.string()
      .min(6)
      .max(16)
      .disallow(Joi.ref('password'))
      .required()
      .messages({
        'any.invalid': 'Deve ser diferente da senha atual',
        'string.min': 'Mínimo de 6 caracteres',
        'string.max': 'Máximo de 16 caracteres',
        'string.empty': 'Campo obrigatório',
      }),
    confirm_new_password: Joi.string()
      .min(6)
      .max(16)
      .valid(Joi.ref('new_password'))
      .messages({
        'any.only': 'As senhas devem coincidir',
        'string.min': 'Mínimo de 6 caracteres',
        'string.max': 'Máximo de 16 caracteres',
        'string.empty': 'Campo obrigatório',
      }),
  });
  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

// TODO validação não está deixando os campos opcionais, para validar
// ele pede que necessariamente mova o Select do Schooling (Minha Escolaridade)
export function updateSchoolingValidate(values: UsersUpdateSchoolingInput) {
  const schema = Joi.object({
    university: Joi.string().optional().messages({
      'string.empty': 'Selecione uma instituição',
    }),
    center: Joi.string().optional().messages({
      'string.empty': 'Selecione um centro',
    }),
    departament: Joi.string().optional().messages({
      'string.empty': 'Selecione um departamento',
    }),
    category: Joi.string().optional().messages({
      'string.empty': 'Selecione uma categoria',
    }),
    work_regime: Joi.string().optional().messages({
      'string.empty': 'Selecione uma carga horária',
    }),
    school_degree: Joi.string().optional().messages({
      'string.empty': 'Selecione uma titulação',
    }),
  });
  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
