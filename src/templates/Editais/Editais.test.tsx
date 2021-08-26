import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { useState as useStateMock } from 'react';

import EditaisTemplate from '.';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<EditaisTemplate />', () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
    window.scrollTo = jest.fn();
  });

  it('should render sections', () => {
    renderWithTheme(
      <EditaisTemplate
        page={1}
        editais={[
          {
            uuid: '1',
            titulo: 'Title 1',
            chamada: 'Headline',
            ativo: true,
            data_inicio: '2021-10-20',
            data_fim: '2022-10-20',
            modalidades: ['Evento'],
          },
        ]}
        onPageChange={setState}
      />,
    );
    expect(
      screen.getByText('Utilize filtros para buscar editais'),
    ).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
  });

  it('should render loading when data is being fetched', () => {
    renderWithTheme(
      <EditaisTemplate page={1} isLoading onPageChange={setState} />,
    );
    expect(screen.getByText(/carregando\.\.\./i)).toBeInTheDocument();
  });

  it('should render empty when no Editais found', () => {
    renderWithTheme(<EditaisTemplate page={1} onPageChange={setState} />);
    expect(
      screen.getByText(/Não encontramos editais para esses filtros/i),
    ).toBeInTheDocument();
  });

  it('should render empty when no Editais found', () => {
    renderWithTheme(<EditaisTemplate page={1} onPageChange={setState} />);
    expect(
      screen.getByText(/Não encontramos editais para esses filtros/i),
    ).toBeInTheDocument();
  });

  // TODO Testar se quando filtro é feito, a função push é executada levando os params
});
