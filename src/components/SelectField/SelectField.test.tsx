import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import SelectField from '.';

describe('<SelectField />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SelectField label="Label" name="Field" />);
    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render without Label', () => {
    renderWithTheme(<SelectField />);
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<SelectField placeholder="Hey you" />);

    expect(screen.getByRole('option', { name: /hey you/i })).toHaveValue('');
  });

  it('should changes its value when select', async () => {
    renderWithTheme(
      <SelectField
        data-testid="select"
        label="TextField"
        name="textfield"
        options={[
          { value: 'test 1', text: 'Teste 1' },
          { value: 'test 2', text: 'Teste 2' },
          { value: 'test 3', text: 'Teste 3' },
        ]}
      />,
    );

    const select = screen.getByTestId('select') as HTMLSelectElement;
    userEvent.selectOptions(select, 'test 3');
    const options = screen.getAllByRole('option') as HTMLOptionElement[];

    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();
  });

  it('should not changes its value when disabled', async () => {
    renderWithTheme(
      <SelectField
        data-testid="select"
        label="TextField"
        name="textfield"
        disabled
        options={[
          { value: 'test 1', text: 'Teste 1' },
          { value: 'test 2', text: 'Teste 2' },
          { value: 'test 3', text: 'Teste 3' },
        ]}
      />,
    );

    const select = screen.getByTestId('select') as HTMLSelectElement;
    expect(select).toBeDisabled();

    userEvent.selectOptions(select, 'test 3');
    const options = screen.getAllByRole('option') as HTMLOptionElement[];

    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <SelectField label="TextField" name="TextField" error="Error message" />,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be accessible by tab', () => {
    renderWithTheme(
      <SelectField data-testid="select" label="TextField" name="TextField" />,
    );

    const select = screen.getByTestId('select') as HTMLSelectElement;
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(select).toHaveFocus();
  });

  it('should not accessible by tab when disabled', () => {
    renderWithTheme(
      <SelectField
        data-testid="select"
        label="TextField"
        name="TextField"
        disabled
      />,
    );

    const select = screen.getByTestId('select') as HTMLSelectElement;
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(select).not.toHaveFocus();
  });
});
