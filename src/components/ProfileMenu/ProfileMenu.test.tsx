import { fireEvent, screen } from '@testing-library/react';
import themes from 'styles/themes';
import { renderWithTheme } from 'utils/tests/helpers';

import ProfileMenu from '.';

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<ProfileMenu />);
    expect(
      screen.getByRole('link', { name: /meu perfil/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /minha senha/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Meu endereço/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Minha escolaridade/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it(`should render the menu with an active link defined`, () => {
    renderWithTheme(<ProfileMenu />);
    screen.getByRole('navigation');
    fireEvent.click(screen.getByRole('link', { name: /meu perfil/i }));
    expect(screen.getByRole('link', { name: /meu perfil/i })).toHaveStyle({
      background: themes.colors.primary,
      color: themes.colors.titleWhite,
    });
    expect(screen.getByRole('link', { name: /minha senha/i })).toHaveStyle({
      background: themes.colors.white,
      color: themes.colors.titleBlack,
    });
  });
});
