import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import PropostaList from '.';

describe('<PropostaList />', () => {
  beforeEach(() => {
    renderWithTheme(
      <PropostaList
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
      />,
    );
  });

  it('should validate the href attribute', () => {
    expect(screen.getByRole('link', { name: /title 1/i })).toHaveAttribute(
      'href',
      '/propostas/id-1',
    );
  });
});
