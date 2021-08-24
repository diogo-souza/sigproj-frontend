import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import EditalTemplate from '.';

describe('<EditalTemplate />', () => {
  it('should render the sections', () => {
    renderWithTheme(
      <EditalTemplate
        edital={{
          uuid: '1',
          titulo: 'Title 1',
          chamada: 'Headline',
          ativo: true,
          data_inicio: '2021-10-20',
          data_fim: '2022-10-20',
          modalidades: ['Evento'],
        }}
      />,
    );
    expect(screen.getByText('Informações do Edital')).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
  });
  it('should render loading when data is being fetched', () => {
    renderWithTheme(
      <EditalTemplate
        edital={{
          uuid: '1',
          titulo: 'Title 1',
          chamada: 'Headline',
          ativo: true,
          data_inicio: '2021-10-20',
          data_fim: '2022-10-20',
          modalidades: ['Evento'],
        }}
        isLoading
      />,
    );
    expect(screen.getByText(/carregando\.\.\./i)).toBeInTheDocument();
  });

  it('should render empty when no Editais found', () => {
    renderWithTheme(<EditalTemplate />);
    expect(
      screen.getByText(/Não encontramos nenhum edital/i),
    ).toBeInTheDocument();
  });
});
