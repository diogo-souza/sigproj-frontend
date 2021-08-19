import { screen } from '@testing-library/react';
import { darken, lighten } from 'polished';
import theme from 'styles/themes';
import { renderWithTheme } from 'utils/tests/helpers';

import EditalList from '.';

describe('<EditalList />', () => {
  beforeEach(() => {
    renderWithTheme(
      <EditalList
        editais={[
          {
            uuid: 'id-1',
            titulo: 'Title 1',
            ativo: true,
            data_inicio: '19/08/2021',
            data_fim: '20/08/2021',
            chamada: 'headline 1',
            modalidades: ['Evento', 'Programa', 'Projeto'],
          },
          {
            uuid: 'id-2',
            titulo: 'Title 2',
            ativo: false,
            data_inicio: '19/08/2021',
            data_fim: '20/08/2021',
            chamada: 'headline 2',
            modalidades: ['Evento', 'Curso', 'Programa', 'Projeto'],
          },
        ]}
      />,
    );
  });

  it('should validate the href attribute', () => {
    expect(screen.getByRole('link', { name: /title 1/i })).toHaveAttribute(
      'href',
      '/editais/id-1',
    );
  });

  it('should validate the style of Title', () => {
    expect(screen.getByText(/title 1/i)).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('should validate the style of Headline', () => {
    expect(screen.getByText(/headline 1/i)).toHaveStyle({
      color: theme.colors.titleBlack,
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('should validate the style of Status', () => {
    const activeStatus = screen.getByText(/^ativo/i);
    const inactiveStatus = screen.getByText(/inativo/i);
    expect(activeStatus).toHaveStyle({
      color: darken(0.3, theme.colors.success),
      'background-color': lighten(0.2, theme.colors.success),
    });
    expect(inactiveStatus).toHaveStyle({
      color: darken(0.3, theme.colors.danger),
      'background-color': lighten(0.2, theme.colors.danger),
    });
  });
  it('should validate the style of Modalities', () => {
    expect(screen.getByText(/curso/i).closest('div')).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        color: #FFFFFF;
      }

      .c0 p {
        margin-right: 0.8rem;
        background-color: #117d8c;
        border-radius: 0.4rem;
        padding: 5.6px 10.4px;
        margin-top: 8px;
      }

      .c0 p:last-child {
        margin-right: 0;
      }

      @media (max-width:768px) {

      }

      <div
        class="c0"
      >
        <p>
          Evento
        </p>
        <p>
          Curso
        </p>
        <p>
          Programa
        </p>
        <p>
          Projeto
        </p>
      </div>
    `);
  });
});
