import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import MySchoolingForm from '.';

describe('<MySchoolingForm />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MySchoolingForm />);
    expect(
      screen.getByRole('heading', { name: /minha escolaridade/i }),
    ).toBeInTheDocument();
  });
});
