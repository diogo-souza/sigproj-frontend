import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Footer from '.';

describe('<Footer />', () => {
  it('should render 2 column topics', () => {
    renderWithTheme(<Footer />);
    expect(
      screen.getByRole('heading', { name: /proexc/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sti/i })).toBeInTheDocument();
  });
});
