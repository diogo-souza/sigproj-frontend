import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { FaUser } from 'react-icons/fa';
import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Test</Button>);
    expect(screen.getByRole('button', { name: /Test/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Test</Button>);
    expect(screen.getByRole('button', { name: /Test/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });
  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Test</Button>);
    expect(screen.getByRole('button', { name: /Test/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.0rem',
      'font-size': '1.6rem',
    });
  });
  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Test</Button>);
    expect(screen.getByRole('button', { name: /Test/i })).toHaveStyle({
      width: '100%',
    });
  });
  it('should render an icon version', () => {
    renderWithTheme(<Button icon={<FaUser data-testid="icon" />}>Test</Button>);
    expect(screen.getByText(/Test/i)).toBeInTheDocument();
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
  });
});
