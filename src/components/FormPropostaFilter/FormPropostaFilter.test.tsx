import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import FormPropostaFilter from '.';

describe('<FormPropostaFilter />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormPropostaFilter onFilter={jest.fn} />);

    expect(
      screen.getByRole('textbox', { name: /título/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /área temática/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/centro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/departamento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/modalidade/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /filtrar/i }),
    ).toBeInTheDocument();
  });

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <FormPropostaFilter
        initialValues={{
          titulo: 'Simple Title',
          area_tematica: 'Thematic area',
          centro: 'CCEN - Centro de Ciências Exatas e da Natureza',
          departamento: 'Exatas',
          modalidade: 'Projeto',
        }}
        onFilter={jest.fn}
      />,
    );

    expect(screen.getByRole('textbox', { name: /título/i })).toHaveValue(
      'Simple Title',
    );

    expect(screen.getByRole('textbox', { name: /área temática/i })).toHaveValue(
      'Thematic area',
    );

    expect(screen.getByLabelText(/centro/i)).toHaveValue(
      'CCEN - Centro de Ciências Exatas e da Natureza',
    );

    expect(screen.getByLabelText(/departamento/i)).toHaveValue('Exatas');

    expect(screen.getByLabelText(/modalidade/i)).toHaveValue('Projeto');
  });

  it('should filter with initial values', () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <FormPropostaFilter
        initialValues={{
          titulo: 'Simple Title',
          area_tematica: 'Thematic area',
          centro: 'CCEN - Centro de Ciências Exatas e da Natureza',
          departamento: 'Exatas',
          modalidade: 'Projeto',
        }}
        onFilter={onFilter}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: /filtrar/i }));

    expect(onFilter).toBeCalledWith({
      titulo: 'Simple Title',
      area_tematica: 'Thematic area',
      centro: 'CCEN - Centro de Ciências Exatas e da Natureza',
      departamento: 'Exatas',
      modalidade: 'Projeto',
    });
  });

  it('should filter with typed values', async () => {
    const onFilter = jest.fn();

    renderWithTheme(<FormPropostaFilter onFilter={onFilter} />);

    const titleInput = screen.getByRole('textbox', { name: /título/i });
    const title = 'This is my new filter';
    userEvent.type(titleInput, title);

    const thematicAreaInput = screen.getByRole('textbox', {
      name: /área temática/i,
    });
    const thematicArea = 'Thematic area';
    userEvent.type(thematicAreaInput, thematicArea);

    const centerInput = screen.getByLabelText(/centro/i);
    const center = 'CCEN - Centro de Ciências Exatas e da Natureza';
    userEvent.selectOptions(centerInput, center);

    const departamentInput = screen.getByLabelText(/departamento/i);
    const departament = 'Exatas';
    userEvent.selectOptions(departamentInput, departament);

    const modalityInput = screen.getByLabelText(/modalidade/i);
    const modality = 'Projeto';
    userEvent.selectOptions(modalityInput, modality);

    await waitFor(() => {
      expect(titleInput).toHaveValue(title);
      expect(thematicAreaInput).toHaveValue(thematicArea);
      expect(centerInput).toHaveValue(center);
      expect(departamentInput).toHaveValue(departament);
      expect(modalityInput).toHaveValue(modality);
    });

    userEvent.click(screen.getByRole('button', { name: /filtrar/i }));
    expect(onFilter).toBeCalledWith({
      titulo: title,
      area_tematica: thematicArea,
      centro: center,
      departamento: departament,
      modalidade: modality,
    });
  });
});
