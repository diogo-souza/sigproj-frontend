import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

describe('<Home />', () => {
  it('should render the 4 sections', () => {
    renderWithTheme(<Home />);
    expect(screen.getAllByTestId('Section')).toHaveLength(4);
  });
});
