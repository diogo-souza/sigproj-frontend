export type UsersPermissionsLoginInput = {
  email: string;
  password: string;
};

export type UsersUpdatePasswordInput = {
  password: string;
  new_password: string;
  confirm_new_password: string;
};

type RolesTypes =
  | 'ROLE_ROOT'
  | 'ROLE_ADMIN'
  | 'ROLE_PROPONENTE'
  | 'ROLE_DISCENTE'
  | 'ROLE_USUARIO';

type ProviderTypes = 'local' | 'google';

type Endereco = {
  bairro: string;
  cep: string;
  cidade: string;
  complemento: string;
  estado: string;
  logradouro: string;
  numero_residencial: string;
};

export type User = {
  uuid: string;
  cpf: string;
  nome: string;
  email: string;
  sexo: string;
  celular: string;
  telefone: string;

  data_nascimento: string;

  universidade: string;
  centro: string;
  departamento: string;
  categoria: string;
  tipo_institucional: string;
  carga_trabalho: string;
  titulacao: string;

  provider_id?: string;
  provider: ProviderTypes;
  endereco: Endereco;
  role_usuario: RolesTypes;
};

export type AuthState = {
  token: string;
  user: User;
};
