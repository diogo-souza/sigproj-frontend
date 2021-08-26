import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import PropostaTemplate from '.';

describe('<Proposta />', () => {
  it('should render the sections', () => {
    renderWithTheme(
      <PropostaTemplate
        proposta={{
          uuid: 'id-1',
          titulo: 'Title 1',
          edital_uuid: 'edital-id-1',
          edital_titulo: 'Edital title 1',
          modalidade: 'Projeto',
          area_tematica: 'Cultura',
          centro: 'CCEN - Centro de Ciências Exatas e da Natureza',
          departamento: 'Departamento de Exatas',
        }}
      />,
    );
    expect(screen.getByText(/informações da Proposta/i)).toBeInTheDocument();
    expect(screen.getByText(/Title 1/i)).toBeInTheDocument();
  });

  it('should render loading when data is being fetched', () => {
    renderWithTheme(
      <PropostaTemplate
        proposta={{
          uuid: 'id-1',
          titulo: 'Title 1',
          edital_uuid: 'edital-id-1',
          edital_titulo: 'Edital title 1',
          modalidade: 'Projeto',
          area_tematica: 'Cultura',
          centro: 'CCEN - Centro de Ciências Exatas e da Natureza',
          departamento: 'Departamento de Exatas',
        }}
        isLoading
      />,
    );
    expect(screen.getByText(/carregando\.\.\./i)).toBeInTheDocument();
  });

  it('should render empty when no Propostas found', () => {
    renderWithTheme(<PropostaTemplate />);
    expect(
      screen.getByText(/Não encontramos nenhuma proposta/i),
    ).toBeInTheDocument();
  });
});
