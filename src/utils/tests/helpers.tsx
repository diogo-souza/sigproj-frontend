import { ThemeProvider } from 'styled-components';
import { render, RenderResult, MatcherFunction } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import theme from 'styles/themes';
import React from 'react';

type Query = (f: MatcherFunction) => HTMLElement;

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <Router>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>,
  );

export const withMarkup = (query: Query) => (text: string) => {
  const hasText = (node: Element) => node.textContent === text;
  return query((_, node) => {
    const childrenDontHaveText = Array.from(node!.children).every(
      child => !hasText(child),
    );
    return hasText(node!) && childrenDontHaveText;
  });
};
