import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FaEnvelope as MailIcon } from 'react-icons/fa';
import { unmask } from 'utils/masks';

import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField />', () => {
  it('should render with Label', () => {
    renderWithTheme(<TextField label="Label" name="Field" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('should renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<MailIcon data-testid="icon" />} iconPosition="right" />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('should chenges its value when typing', async () => {
    renderWithTheme(<TextField label="TextField" name="textfield" />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });
  });

  it('should not changes its value when disabled', async () => {
    renderWithTheme(<TextField label="TextField" name="TextField" disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
  });

  it('should not changes its value when read only', async () => {
    renderWithTheme(<TextField label="TextField" name="TextField" readOnly />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readOnly');

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
  });

  it('should render with Icon', () => {
    renderWithTheme(<TextField icon={<MailIcon data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<MailIcon data-testid="icon" />}
        label="TextField"
        name="TextField"
        error="Error message"
      />,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should use cep mask', async () => {
    renderWithTheme(
      <TextField label="TextField" name="textfield" mask="cep" />,
    );

    const input = screen.getByRole('textbox');
    const text = '00000000';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue('00000-000');
    });
  });

  it('should use cpf mask', async () => {
    renderWithTheme(
      <TextField label="TextField" name="textfield" mask="cpf" />,
    );

    const input = screen.getByRole('textbox');
    const text = '00000000000';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue('000.000.000-00');
    });
  });

  it('should use telefone mask', async () => {
    renderWithTheme(
      <TextField label="TextField" name="textfield" mask="telephoneNumber" />,
    );

    const input = screen.getByRole('textbox');
    const text = '00000000';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue('0000-0000');
    });
  });

  it('should use celular mask', async () => {
    renderWithTheme(
      <TextField label="TextField" name="textfield" mask="phoneNumber" />,
    );

    const input = screen.getByRole('textbox');
    const text = '00000000000';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue('(00) 00000-0000');
    });
  });

  it('should remove mask', async () => {
    renderWithTheme(
      <TextField label="TextField" name="textfield" mask="phoneNumber" />,
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const text = '00000000000';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue('(00) 00000-0000');
      expect(text).toMatch(unmask(input.value));
    });
  });

  it('should be accessible by tab', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" />);

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should not accessible by tab when disabled', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" disabled />);

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
