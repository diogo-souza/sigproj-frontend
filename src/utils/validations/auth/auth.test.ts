import { signInValidate, updatePasswordValidate } from '.';

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

  describe('updatePasswordValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        password: '',
        new_password: '',
        confirm_new_password: '',
      };

      expect(updatePasswordValidate(values)).toMatchObject({
        password: 'Campo obrigatório',
        new_password: 'Campo obrigatório',
      });
    });

    it('should return invalid lenght password', () => {
      const values = {
        password: '12345',
        new_password: '12345',
        confirm_new_password: '',
      };
      expect(updatePasswordValidate(values)).toMatchObject({
        password: 'Mínimo de 6 caracteres',
        new_password: 'Mínimo de 6 caracteres',
      });
    });

    it('should return invalid lenght password', () => {
      const values = {
        password: '01010101010101010',
        new_password: '01010101010101010',
        confirm_new_password: '',
      };
      expect(updatePasswordValidate(values)).toMatchObject({
        password: 'Máximo de 16 caracteres',
        new_password: 'Máximo de 16 caracteres',
      });
    });

    it('should return invalid when password is equal to new_password', () => {
      const values = {
        password: '12345678',
        new_password: '12345678',
        confirm_new_password: '12345678',
      };
      expect(updatePasswordValidate(values)).toMatchObject({
        new_password: 'Deve ser diferente da senha atual',
      });
    });

    it('should return invalid when new_password is different to confirm_new_password', () => {
      const values = {
        password: '12345678',
        new_password: '0123456789',
        confirm_new_password: '012345678',
      };
      expect(updatePasswordValidate(values)).toMatchObject({
        confirm_new_password: 'As senhas devem coincidir',
      });
    });
  });
});
