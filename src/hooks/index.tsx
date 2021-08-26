import React from 'react';

import { AuthProvider } from './auth';
import { EditalProvider } from './edital';
import { PropostaProvider } from './proposta';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <EditalProvider>
      <PropostaProvider>{children}</PropostaProvider>
    </EditalProvider>
  </AuthProvider>
);

export default AppProvider;
