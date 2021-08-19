import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import EditalResume from '.';

describe('<EditalResume />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <EditalResume
        edital={{
          uuid: 'id-1',
          titulo: 'Title 1',
          ativo: true,
          data_inicio: '19/08/2021',
          data_fim: '20/08/2021',
          chamada: 'headline 1',
          modalidades: ['Programa', 'Projeto'],
          corpo: '<p>Insira o corpo do edital aqui</p>\n',
        }}
      />,
    );
    expect(screen.getByText(/title 1/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
