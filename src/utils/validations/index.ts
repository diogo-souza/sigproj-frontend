import Joi from 'joi';

export const fieldsValidations = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Digite um E-mail válido',
      'string.empty': 'O e-mail é obrigatório',
    }),
  password: Joi.string().min(6).max(16).required().messages({
    'string.min': 'No mínimo 6 caracteres',
    'string.max': 'Máximo de 16 caracteres',
    'string.empty': 'A senha é obrigatória',
  }),
};

export type FieldErrors = {
  [key: string]: string;
};

export function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {};

  if (objError.error) {
    objError.error.details.forEach(err => {
      errors[err.path.join('.')] = err.message;
    });
  }

  return errors;
}
