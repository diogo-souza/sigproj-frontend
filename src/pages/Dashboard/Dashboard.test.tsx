import { render } from '@testing-library/react';

import Dashboard from '.';

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    render(<Dashboard />);
  });
});
