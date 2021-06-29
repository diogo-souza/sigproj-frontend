import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/themes';

import userEvent from '@testing-library/user-event';
import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />,
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(
      screen.getByText(/checkbox label/i).closest('label'),
    ).toHaveAttribute('for', 'check');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        labelColor="titleBlack"
      />,
    );
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.titleBlack,
    });
  });

  it('should render with white label', () => {
    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        labelColor="titleWhite"
      />,
    );
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.titleWhite,
    });
  });

  it('should render with primary fillColor', () => {
    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        labelColor="titleWhite"
        fillColor="primary"
        isChecked
      />,
    );
    expect(screen.getByRole('checkbox')).toHaveStyle({
      background: theme.colors.primary,
    });
  });

  it('should render with secondary fillColor', () => {
    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        labelColor="titleWhite"
        fillColor="secondary"
        isChecked
      />,
    );
    expect(screen.getByRole('checkbox')).toHaveStyle({
      background: theme.colors.secondary,
    });
  });

  it('should render with tertiary fillColor', () => {
    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        labelColor="titleWhite"
        fillColor="tertiary"
        isChecked
      />,
    );
    expect(screen.getByRole('checkbox')).toHaveStyle({
      background: theme.colors.tertiary,
    });
  });

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" onCheck={onCheck} />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should call onCheck with false if the Checkbox is already checked', async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        onCheck={onCheck}
        isChecked
      />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox label/i)).toHaveFocus();
  });
});
