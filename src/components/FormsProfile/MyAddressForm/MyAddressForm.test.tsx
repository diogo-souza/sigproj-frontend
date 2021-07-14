import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import MyAddressForm from '.';

describe('<MyAddressForm />', () => {
  it('should render the address form', () => {
    renderWithTheme(<MyAddressForm />);
    expect(
      screen.getByRole('heading', { name: /meu endereço/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/cep/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/estado/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bairro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/logradouro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/número/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/complemento/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();
  });
});
