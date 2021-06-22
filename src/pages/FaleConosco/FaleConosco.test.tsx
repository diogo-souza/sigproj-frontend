import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FaleConosco from '.';

describe('<FaleConosco />', () => {
  it('should render with theme', () => {
    renderWithTheme(<FaleConosco />);
    expect(
      screen.getByRole('heading', { name: /fale conosco/i }),
    ).toBeInTheDocument();
  });
});
