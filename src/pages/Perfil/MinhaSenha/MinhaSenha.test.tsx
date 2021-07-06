import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import MinhaSenha from '.';

describe('<MinhaSenha />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MinhaSenha />);
    expect(
      screen.getByRole('heading', { name: /minha conta/i }),
    ).toBeInTheDocument();
  });
});
