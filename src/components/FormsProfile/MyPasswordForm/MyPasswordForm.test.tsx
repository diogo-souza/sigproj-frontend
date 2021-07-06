import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import MyPasswordForm from '.';

describe('<MyPasswordForm />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MyPasswordForm />);
    expect(
      screen.getByRole('heading', { name: /minha senha/i }),
    ).toBeInTheDocument();
  });
});
