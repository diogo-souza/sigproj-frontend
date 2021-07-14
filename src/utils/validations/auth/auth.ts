import Joi from 'joi';
import { UsersPermissionsLoginInput } from 'types/globalTypes';
import { fieldsValidations, getFieldErrors } from '..';

export function signInValidate(values: UsersPermissionsLoginInput) {
  const { email, password } = fieldsValidations;
  const schema = Joi.object({ email, password });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
