import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Label from '.';

describe('<Label />', () => {
  it('should render the label', () => {
    renderWithTheme(<Label>label</Label>);
    expect(screen.getByText(/label/i)).toBeInTheDocument();
  });
});
