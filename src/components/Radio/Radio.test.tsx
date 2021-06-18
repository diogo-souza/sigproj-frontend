import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/themes';

import userEvent from '@testing-library/user-event';
import Radio from '.';

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    renderWithTheme(
      <Radio
        name="anyName"
        value="anyValue"
        label="Radio"
        labelFor="check"
        labelColor="titleWhite"
      />,
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.white });
  });

  it('should render with label (title)', () => {
    renderWithTheme(
      <Radio
        name="anyName"
        value="anyValue"
        label="Radio"
        labelFor="Teste"
        labelColor="titleBlack"
      />,
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.titleBlack });
  });

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Radio
        name="anyName"
        value="anyValue"
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
      />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByLabelText('Radio'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith('anyValue');
  });

  it('Should be accessible with tab', () => {
    renderWithTheme(
      <Radio name="anyName" value="anyValue" label="Radio" labelFor="Radio" />,
    );

    const radio = screen.getByLabelText('Radio');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(radio).toHaveFocus();
  });
});
