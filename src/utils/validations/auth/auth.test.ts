import { signInValidate } from './auth';

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' };

      expect(signInValidate(values)).toMatchObject({
        email: 'O e-mail é obrigatório',
        password: 'A senha é obrigatória',
      });
    });

    it('should return invalid email error', () => {
      const values = { email: 'invalid-email', password: '123456' };
      expect(signInValidate(values)).toMatchObject({
        email: 'Digite um E-mail válido',
      });
    });

    it('should return invalid password error', () => {
      const values = { email: 'test@mail.com', password: '12345' };
      expect(signInValidate(values)).toMatchObject({
        password: 'No mínimo 6 caracteres',
      });
    });
  });
});
