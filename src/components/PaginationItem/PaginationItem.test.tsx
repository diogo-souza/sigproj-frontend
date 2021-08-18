import { useState as useStateMock } from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/themes';
import userEvent from '@testing-library/user-event';
import PaginationItem from '.';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<PaginationItem />', () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
  });

  it('should render the PaginationItem', () => {
    renderWithTheme(<PaginationItem number={1} onPageChange={setState} />);
    expect(screen.getByRole('button', { name: /1/ })).toBeInTheDocument();
  });

  it('should render the PaginationItem with default style', () => {
    renderWithTheme(<PaginationItem number={1} onPageChange={setState} />);
    expect(screen.getByRole('button', { name: /1/ })).toHaveStyle({
      color: theme.colors.tertiary,
      'background-color': theme.colors.white,
    });
  });

  it('should render the PaginationItem with current style', () => {
    renderWithTheme(
      <PaginationItem number={1} onPageChange={setState} isCurrent />,
    );
    expect(screen.getByRole('button', { name: /1/ })).toHaveStyle({
      color: theme.colors.white,
      'background-color': theme.colors.tertiary,
    });
  });

  it('should dispatch onPageChange when status change with no current button', async () => {
    renderWithTheme(<PaginationItem number={1} onPageChange={setState} />);
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(setState).toHaveBeenCalledTimes(1);
    });
  });

  it('should not dispatch onPageChange when status change with current button', async () => {
    renderWithTheme(
      <PaginationItem number={1} onPageChange={setState} isCurrent />,
    );
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(setState).toHaveBeenCalledTimes(0);
    });
  });
});
