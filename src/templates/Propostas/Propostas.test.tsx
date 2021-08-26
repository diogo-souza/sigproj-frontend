import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { useState as useStateMock } from 'react';

import PropostasTemplate from '.';

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

describe('<PropostasTemplate />', () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
    window.scrollTo = jest.fn();
  });

  it('should render sections', () => {
    renderWithTheme(
      <PropostasTemplate
        page={1}
        propostas={[
          {
            uuid: 'id-1',
            titulo: 'Title 1',
            edital_uuid: 'edital-id-1',
            edital_titulo: 'Edital title 1',
            modalidade: 'Projeto',
            area_tematica: 'Cultura',
            centro: 'CCEN - Centro de Ciências Exatas e da Natureza',
            departamento: 'Departamento de Exatas',
          },
          {
            uuid: 'id-2',
            titulo: 'Title 2',
            edital_uuid: 'edital-id-2',
            edital_titulo: 'Edital title 2',
            modalidade: 'Projeto',
            area_tematica: 'Cultura',
            centro: 'CCEN - Centro de Ciências Exatas e da Natureza',
            departamento: 'Departamento de Exatas',
          },
        ]}
        onPageChange={setState}
      />,
    );
    expect(
      screen.getByText('Utilize filtros para buscar entre propostas aprovadas'),
    ).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
  });

  it('should render loading when data is being fetched', () => {
    renderWithTheme(
      <PropostasTemplate
        page={1}
        propostas={[
          {
            uuid: 'id-1',
            titulo: 'Title 1',
            edital_uuid: 'edital-id-1',
            edital_titulo: 'Edital title 1',
            modalidade: 'Projeto',
            area_tematica: 'Cultura',
            centro: 'CCEN - Centro de Ciências Exatas e da Natureza',
            departamento: 'Departamento de Exatas',
          },
          {
            uuid: 'id-2',
            titulo: 'Title 2',
            edital_uuid: 'edital-id-2',
            edital_titulo: 'Edital title 2',
            modalidade: 'Projeto',
            area_tematica: 'Cultura',
            centro: 'CCEN - Centro de Ciências Exatas e da Natureza',
            departamento: 'Departamento de Exatas',
          },
        ]}
        isLoading
        onPageChange={setState}
      />,
    );
    expect(screen.getByText(/carregando\.\.\./i)).toBeInTheDocument();
  });

  it('should render empty when no Editais found', () => {
    renderWithTheme(<PropostasTemplate page={1} onPageChange={setState} />);
    expect(
      screen.getByText(/Não encontramos propostas para esses filtros/i),
    ).toBeInTheDocument();
  });
  // TODO Testar se quando filtro é feito, a função push é executada levando os params
});
