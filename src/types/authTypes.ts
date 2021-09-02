export type UsersPermissionsLoginInput = {
  email: string;
  password: string;
};

export type UsersUpdatePasswordInput = {
  password: string;
  new_password: string;
  confirm_new_password: string;
};

export type UsersUpdateSchoolingInput = {
  university: string;
  center: string;
  departament: string;
  category: string;
  work_regime: string;
  school_degree: string;
};

export type UsersUpdateAddresInput = {
  street: string;
  residencial_number: string;
  complement: string;
  district: string;
  state: string;
  city: string;
  postal_code: string;
};

export type UsersUpdateProfileInput = {
  nome: string;
  gender: string;
  birth_date: string;
  phone: string;
  cellphone: string;
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
