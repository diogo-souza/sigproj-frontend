import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import FormEditalFilter from '.';

describe('<FormEditalFilter />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormEditalFilter onFilter={jest.fn} />);

    expect(
      screen.getByRole('textbox', { name: /título/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/data início/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/data final/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/modalidade/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /filtrar/i }),
    ).toBeInTheDocument();
  });

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <FormEditalFilter
        initialValues={{
          titulo: 'Simple Title',
          modalidade: 'Programa',
          data_inicio: '2021-08-23',
          data_fim: '2021-08-25',
        }}
        onFilter={jest.fn}
      />,
    );

    expect(screen.getByRole('textbox', { name: /título/i })).toHaveValue(
      'Simple Title',
    );
    expect(screen.getByLabelText(/data início/i)).toHaveValue('2021-08-23');
    expect(screen.getByLabelText(/data final/i)).toHaveValue('2021-08-25');
    expect(screen.getByLabelText(/modalidade/i)).toHaveValue('Programa');
  });

  it('should filter with initial values', () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <FormEditalFilter
        initialValues={{
          titulo: 'Simple Title',
          modalidade: 'Programa',
          data_inicio: '2021-08-23',
          data_fim: '2021-08-25',
        }}
        onFilter={onFilter}
      />,
    );

    userEvent.click(screen.getByRole('button', { name: /filtrar/i }));

    expect(onFilter).toBeCalledWith({
      titulo: 'Simple Title',
      modalidade: 'Programa',
      data_inicio: '2021-08-23',
      data_fim: '2021-08-25',
    });
  });

  it('should filter with typed values', async () => {
    const onFilter = jest.fn();

    renderWithTheme(<FormEditalFilter onFilter={onFilter} />);

    const titleInput = screen.getByRole('textbox', { name: /título/i });
    const title = 'This is my new filter';
    userEvent.type(titleInput, title);

    const initialDateInput = screen.getByLabelText(/data início/i);
    const initialDate = '2021-08-02';
    userEvent.type(initialDateInput, initialDate);

    const finalDateInput = screen.getByLabelText(/data final/i);
    const finalDate = '2021-08-10';
    userEvent.type(finalDateInput, finalDate);

    const modalityInput = screen.getByLabelText(/modalidade/i);
    const modality = 'Evento';
    userEvent.selectOptions(modalityInput, modality);

    await waitFor(() => {
      expect(titleInput).toHaveValue(title);
      expect(initialDateInput).toHaveValue(initialDate);
      expect(finalDateInput).toHaveValue(finalDate);
      expect(modalityInput).toHaveValue(modality);
    });

    userEvent.click(screen.getByRole('button', { name: /filtrar/i }));
    expect(onFilter).toBeCalledWith({
      titulo: title,
      data_inicio: initialDate,
      data_fim: finalDate,
      modalidade: modality,
    });
  });
});
