import React, { createContext, useCallback, useState, useContext } from 'react';

import {
  User,
  UsersPermissionsLoginInput,
  UsersUpdatePasswordInput,
  UsersUpdateSchoolingInput,
} from 'types/authTypes';

import { formatUser } from 'utils/formatters';

import api from '../services/api';

type AuthState = {
  token: string;
  user: User;
};

type AuthContextData = {
  user: User;
  signIn(credential: UsersPermissionsLoginInput): Promise<void>;
  updatePassword(passwords: UsersUpdatePasswordInput): Promise<void>;
  updateSchooling(degrees: UsersUpdateSchoolingInput): Promise<void>;
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

  const getUser = useCallback(async () => {
    const user_response = await api.get('/usuarios/perfil');
    const user = formatUser(user_response.data);
    return user;
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem(process.env.REACT_APP_USER!, JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token],
  );

  const signIn = useCallback(
    async ({ email, password }) => {
      const token_response = await api.post('/login', {
        email,
        senha: password,
      });

      const { token } = token_response.data;
      localStorage.setItem(process.env.REACT_APP_TOKEN!, token);

      const user = await getUser();
      updateUser(user);

      setData({ token, user });
    },
    [getUser, updateUser],
  );

  const updatePassword = useCallback(
    async ({ password, new_password, confirm_new_password }) => {
      try {
        await api.put('/usuarios/editar-perfil/atualizar-senha', {
          senha: password,
          novaSenha: new_password,
          confirmarSenha: confirm_new_password,
        });

        const user = await getUser();

        updateUser(user);
      } catch (e) {
        throw new Error(e.response.data.titulo);
      }
    },
    [getUser, updateUser],
  );

  const updateSchooling = useCallback(
    async ({
      university,
      center,
      departament,
      category,
      work_regime,
      school_degree,
    }) => {
      try {
        await api.put('/usuarios/editar-perfil/', {
          carga_trabalho: work_regime,
          categoria: category,
          centro: center,
          departamento: departament,
          universidade: university,
          titulacao: school_degree,
        });

        const user = await getUser();

        updateUser(user);
      } catch (e) {
        throw new Error(e.response.data.titulo);
      }
    },
    [getUser, updateUser],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, updatePassword, updateSchooling }}
    >
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
