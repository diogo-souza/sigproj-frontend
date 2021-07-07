import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FaEnvelope as MailIcon } from 'react-icons/fa';

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
