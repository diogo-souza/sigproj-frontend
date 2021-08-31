import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import Empty from '.';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const props = {
  title: 'A simple title',
  description: 'A simple description',
};

describe('<Empty />', () => {
  it('should render/navigating correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />);

    expect(
      screen.getByRole('img', {
        name: /Uma mulher não encontrando um arquivo dentro de uma pasta/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /a simple title/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /ir para inicio/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalledWith('/');

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should not render link when hasLink is not passed', () => {
    renderWithTheme(<Empty {...props} />);

    expect(
      screen.queryByRole('button', { name: /ir para inicio/i }),
    ).not.toBeInTheDocument();
  });
});
