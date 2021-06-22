import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Login from '.';

describe('<Login />', () => {
  it('should render with theme', () => {
    renderWithTheme(<Login />);
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  });
});
