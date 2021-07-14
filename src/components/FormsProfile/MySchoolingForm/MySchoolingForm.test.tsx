import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import MySchoolingForm from '.';

describe('<MySchoolingForm />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MySchoolingForm />);
    expect(
      screen.getByRole('heading', { name: /minha escolaridade/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/instituição/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/centro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/departamento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/categoria/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/regime de trabalho/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/titulação/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();
  });
});
