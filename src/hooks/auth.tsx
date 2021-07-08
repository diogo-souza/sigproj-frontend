import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

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
  numero_residencial: number;
};

type User = {
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

  provider_id?: null;
  provider: ProviderTypes;
  endereco: Endereco;
  role_usuario: RolesTypes;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  signIn(credential: SignInCredentials): Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN!);
    const user = localStorage.getItem(process.env.REACT_APP_USER!);

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const token_response = await api.post('/login', { email, senha: password });
    const { token } = token_response.data;
    localStorage.setItem(process.env.REACT_APP_TOKEN!, token);

    const user_response = await api.get('/usuarios/perfil');
    const user = user_response.data;
    localStorage.setItem(process.env.REACT_APP_USER!, JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };