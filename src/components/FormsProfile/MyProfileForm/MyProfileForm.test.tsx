import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import MyProfileForm from '.';

describe('<MyProfileForm />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MyProfileForm />);
    expect(
      screen.getByRole('heading', { name: /meu perfil/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/celular/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cpf/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/data de nascimento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/sexo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tipo do usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tipo institucional/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();
  });
});
