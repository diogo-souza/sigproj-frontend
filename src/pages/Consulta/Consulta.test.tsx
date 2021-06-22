import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Consulta from '.';

describe('<Consulta />', () => {
  it('should render with theme', () => {
    renderWithTheme(<Consulta />);
    expect(
      screen.getByRole('heading', { name: /consulta/i }),
    ).toBeInTheDocument();
  });
});
