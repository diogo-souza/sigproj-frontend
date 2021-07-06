import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import MyProfileForm from '.';

describe('<MyProfileForm />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MyProfileForm />);
    expect(
      screen.getByRole('heading', { name: /meu perfil/i }),
    ).toBeInTheDocument();
  });
});
