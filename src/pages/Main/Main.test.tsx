import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />);
    expect(screen.getByRole('heading', { name: /Main/i })).toBeInTheDocument();
  });
});
