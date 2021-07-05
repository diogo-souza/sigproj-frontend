import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import theme from 'styles/themes';
import React from 'react';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <Router>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>,
  );
