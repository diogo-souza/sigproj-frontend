import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import MyPasswordForm from '.';

describe('<MyPasswordForm />', () => {
  it('should render the password form', () => {
    renderWithTheme(<MyPasswordForm />);
    expect(
      screen.getByRole('heading', { name: /minha senha/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/senha atual/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^nova senha/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/confirmação de nova senha/i),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();
  });
});
