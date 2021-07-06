import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import MyAddressForm from '.';

describe('<MyAddressForm />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MyAddressForm />);
    expect(
      screen.getByRole('heading', { name: /meu endereço/i }),
    ).toBeInTheDocument();
  });
});
