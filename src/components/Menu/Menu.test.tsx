import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument();
  });
  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);
    // Seleciona o Menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // Verifica se o Menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    // Clica no botão de abri menu e verifica se ele abriu
    fireEvent.click(screen.getByLabelText(/abrir menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({
      opacity: 1,
      'pointer-events': 'all',
    });

    // Clica no botão de abri menu e verifica se ele abriu
    fireEvent.click(screen.getByLabelText(/fechar menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({
      opacity: 0,
      'pointer-events': 'none',
    });
  });
});
