import React from 'react';

import { AuthProvider } from './auth';
import { EditalProvider } from './edital';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <EditalProvider>{children}</EditalProvider>
  </AuthProvider>
);

export default AppProvider;
