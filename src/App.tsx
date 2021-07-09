import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/themes';
import GlobalStyles from 'styles/global';
import 'nprogress/nprogress.css';
import 'styles/nprogress.css';

import Routes from 'routes';
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
