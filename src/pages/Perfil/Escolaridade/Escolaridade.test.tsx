import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Escolaridade from '.';

describe('<Escolaridade />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Escolaridade />);
    expect(
      screen.getByRole('heading', { name: /minha conta/i }),
    ).toBeInTheDocument();
  });
});
