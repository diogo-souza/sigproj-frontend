import React from 'react';
import Main from 'pages/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/themes/ufpeTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
