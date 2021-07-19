import React, { createContext, useCallback, useState, useContext } from 'react';
import { User, UsersPermissionsLoginInput } from 'types/globalTypes';
import { formatUser } from 'utils/formatters';

import api from '../services/api';

type AuthState = {
  token: string;
  user: User;
};

type AuthContextData = {
  user: User;
  signIn(credential: UsersPermissionsLoginInput): Promise<void>;
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
    const user = formatUser(user_response.data);

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
