import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/themes';
import Routes from 'routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes />
      <GlobalStyles />
    </Router>
  </ThemeProvider>
);

export default App;
