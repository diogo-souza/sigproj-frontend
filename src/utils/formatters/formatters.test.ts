/* eslint-disable no-irregular-whitespace */
import { formatDate, formatCurrency, formatUser } from '.';

describe('formatters', () => {
  describe('formatUser()', () => {
    it('should format user', () => {
      expect(
        formatUser({
          uuid: 'uuid',
          cpf: '00000000000',
          nome: 'Fulano',
          provider: 'local',
          provider_id: '',
          role_usuario: 'ROLE_ROOT',
          tipo_institucional: 'Discente Pos-Graduacao',
          carga_trabalho: '20',
          email: 'administrador@admin.com',
          universidade: 'Universidade',
          sexo: 'Masculino',
          data_nascimento: '2020-10-10',
          titulacao: 'Ensino Medio',
          centro: 'CAC - Centro de Artes e Comunicação',
          departamento: 'Departamento de Artes',
          categoria: 'categoria',
          telefone: '00000000',
          celular: '00000000000',
          endereco: {
            logradouro: 'rua 1',
            numero_residencial: '12',
            complemento: 'casa',
            bairro: 'Caetes I',
            estado: 'Pernambuco',
            cidade: 'Abreu e Lima',
            cep: '00000000',
          },
        }),
      ).toMatchObject({
        uuid: 'uuid',
        cpf: '000.000.000-00',
        nome: 'Fulano',
        provider: 'local',
        provider_id: '',
        role_usuario: 'ROLE_ROOT',
        tipo_institucional: 'Discente Pos-Graduacao',
        carga_trabalho: '20',
        email: 'administrador@admin.com',
        universidade: 'Universidade',
        sexo: 'Masculino',
        data_nascimento: '2020-10-10',
        titulacao: 'Ensino Medio',
        centro: 'CAC - Centro de Artes e Comunicação',
        departamento: 'Departamento de Artes',
        categoria: 'categoria',
        telefone: '0000-0000',
        celular: '(00) 00000-0000',
        endereco: {
          logradouro: 'rua 1',
          numero_residencial: '12',
          complemento: 'casa',
          bairro: 'Caetes I',
          estado: 'Pernambuco',
          cidade: 'Abreu e Lima',
          cep: '00000-000',
        },
      });
    });
  });
  describe('formatDate()', () => {
    it('should format date', () => {
      expect(formatDate('2021-07-19')).toMatch('19/07/2021');
    });
  });
  describe('formatCurrency()', () => {
    it('should format money', () => {
      expect(formatCurrency(123456.78)).toMatchInlineSnapshot(
        `"R$ 123.456,78"`,
      );
    });
  });
});
