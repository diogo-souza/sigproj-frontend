import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { UsersPermissionsLoginInput } from 'types/authTypes';
import SignInForm from '.';

const mockLogin = jest.fn(({ email, password }: UsersPermissionsLoginInput) => {
  return Promise.resolve({ email, password });
});

describe('<SignInForm />', () => {
  beforeEach(() => {
    renderWithTheme(<SignInForm />);
  });

  it('should render the form', () => {
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /entrar/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render the forgot password link', () => {
    expect(
      screen.getByRole('link', { name: /esqueceu sua senha\?/i }),
    ).toBeInTheDocument();
  });

  it('should render text to sign up if already have an account', () => {
    expect(
      screen.getByRole('link', { name: /cadastre-se/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/não possui um conta\?/i)).toBeInTheDocument();
  });

  it('should render separator', () => {
    expect(
      screen.getByRole('link', { name: /cadastre-se/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/não possui um conta\?/i)).toBeInTheDocument();
  });

  it('should render login social container', () => {
    expect(
      screen.getByRole('link', { name: /cadastre-se/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/não possui um conta\?/i)).toBeInTheDocument();
  });

  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByRole('button', { name: /entrar/i }));

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockLogin).not.toBeCalled();
  });

  it('should display matching error when email is invalid', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /e-mail/i }), {
      target: {
        value: 'test',
      },
    });

    fireEvent.input(screen.getByLabelText(/senha/i), {
      target: {
        value: 'password',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /entrar/i }));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(mockLogin).not.toBeCalled();
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toHaveValue(
      'test',
    );
    expect(screen.getByLabelText(/senha/i)).toHaveValue('password');
  });

  it('should display min length error when password is invalid', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /e-mail/i }), {
      target: {
        value: 'test@mail.com',
      },
    });

    fireEvent.input(screen.getByLabelText(/senha/i), {
      target: {
        value: 'pass',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /entrar/i }));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(mockLogin).not.toBeCalled();
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toHaveValue(
      'test@mail.com',
    );
    expect(screen.getByLabelText(/senha/i)).toHaveValue('pass');
  });

  it('should not display error when value is valid', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /e-mail/i }), {
      target: {
        value: 'test@mail.com',
      },
    });

    fireEvent.input(screen.getByLabelText(/senha/i), {
      target: {
        value: 'password',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /entrar/i }));

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
  });
});
