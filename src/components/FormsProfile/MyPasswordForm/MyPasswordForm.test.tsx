import { fireEvent, screen, waitFor } from '@testing-library/react';
import { UsersUpdatePasswordInput } from 'types/authTypes';
import { renderWithTheme } from 'utils/tests/helpers';
import MyPasswordForm from '.';

const mockupdatePassword = jest.fn(
  ({
    password,
    new_password,
    confirm_new_password,
  }: UsersUpdatePasswordInput) => {
    return Promise.resolve({ password, new_password, confirm_new_password });
  },
);

describe('<MyPasswordForm />', () => {
  beforeEach(() => {
    renderWithTheme(<MyPasswordForm />);
  });
  it('should render the password form', () => {
    expect(
      screen.getByRole('heading', { name: /minha senha/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/senha atual/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^nova senha/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/confirmação de nova senha/i),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();
  });

  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByRole('button', { name: /salvar/i }));

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockupdatePassword).not.toBeCalled();
  });

  it('should display matching error when data is invalid', async () => {
    fireEvent.input(screen.getByLabelText(/senha atual/i), {
      target: {
        value: '12345',
      },
    });

    fireEvent.input(screen.getByLabelText(/^nova senha/i), {
      target: {
        value: '123456789',
      },
    });

    fireEvent.input(screen.getByLabelText(/confirmação de nova senha/i), {
      target: {
        value: '0123456789',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /salvar/i }));

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockupdatePassword).not.toBeCalled();
    expect(screen.getByLabelText(/senha atual/i)).toHaveValue('12345');
    expect(screen.getByLabelText(/^nova senha/i)).toHaveValue('123456789');
    expect(screen.getByLabelText(/confirmação de nova senha/i)).toHaveValue(
      '0123456789',
    );
  });

  it('should not display error when value is valid', async () => {
    fireEvent.input(screen.getByLabelText(/senha atual/i), {
      target: {
        value: '12345678',
      },
    });

    fireEvent.input(screen.getByLabelText(/^nova senha/i), {
      target: {
        value: '123456789',
      },
    });

    fireEvent.input(screen.getByLabelText(/confirmação de nova senha/i), {
      target: {
        value: '123456789',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /salvar/i }));

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
  });
});
