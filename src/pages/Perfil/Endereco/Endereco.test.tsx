import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Endereco from '.';

describe('<Endereco />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Endereco />);
    expect(
      screen.getByRole('heading', { name: /minha conta/i }),
    ).toBeInTheDocument();
  });
});
