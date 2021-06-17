import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Accordion from '.';

describe('<Accordion />', () => {
  it('should render the Accordion', () => {
    renderWithTheme(
      <Accordion question="Pergunta teste" answer="Resposta teste" />,
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('should handle the open/close Accordion', () => {
    renderWithTheme(
      <Accordion question="Pergunta teste" answer="Resposta teste" />,
    );

    // Seleciona o Content
    const fullAccordionElement = screen.getByTestId('accordion-content');

    // Verifica se o Content está escondido
    expect(fullAccordionElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullAccordionElement).toHaveStyle({
      opacity: 0,
      'pointer-events': 'none',
    });

    // Clica no botão de abri menu e verifica se ele abriu
    fireEvent.click(screen.getByTestId('accordion-header'));
    expect(fullAccordionElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullAccordionElement).toHaveStyle({
      opacity: 1,
      'pointer-events': 'all',
    });

    // Clica no botão de fechar Content e verifica se ele fechou
    fireEvent.click(screen.getByTestId('accordion-header'));
    expect(fullAccordionElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullAccordionElement).toHaveStyle({
      opacity: 0,
      'pointer-events': 'none',
    });
  });
});
