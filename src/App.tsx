import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/themes';
import GlobalStyles from 'styles/global';

import Routes from 'routes';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyles />
    </Router>
  </ThemeProvider>
);

export default App;
