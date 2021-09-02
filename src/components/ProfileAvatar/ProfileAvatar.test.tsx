import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import ProfileAvatar from '.';

describe('<ProfileAvatar />', () => {
  it('should render the component', () => {
    renderWithTheme(
      <ProfileAvatar
        name="Guilherme Carneiro de Farias"
        email="guicfarias11@gmail.com"
      />,
    );
    expect(
      screen.getByText(/guilherme carneiro de farias/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/guicfarias11@gmail\.com/i)).toBeInTheDocument();

    expect(screen.getByText('GF')).toBeInTheDocument();

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('should render the image when src is passed', () => {
    renderWithTheme(
      <ProfileAvatar
        name="Guilherme Carneiro de Farias"
        email="guicfarias11@gmail.com"
        src="https://github.com/Guilherme-Farias.png"
      />,
    );
    expect(
      screen.getByText(/guilherme carneiro de farias/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/guicfarias11@gmail\.com/i)).toBeInTheDocument();

    expect(screen.queryByText('GF')).not.toBeInTheDocument();

    expect(screen.queryByRole('img')).toBeInTheDocument();
  });

  it('should render the menu', () => {
    renderWithTheme(
      <ProfileAvatar
        name="Guilherme Carneiro de Farias"
        email="guicfarias11@gmail.com"
      />,
    );

    userEvent.click(screen.getByText(/guilherme carneiro de farias/i));

    expect(
      screen.getByRole('link', { name: /meu perfil/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /sair/i })).toBeInTheDocument();
  });
});
