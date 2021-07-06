import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import MeuPerfil from '.';

describe('<MeuPerfil />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MeuPerfil />);
    expect(
      screen.getByRole('heading', { name: /minha conta/i }),
    ).toBeInTheDocument();
  });
});
