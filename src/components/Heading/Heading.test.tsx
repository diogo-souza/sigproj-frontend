import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/themes';
import Heading from '.';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Test</Heading>);
    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyle({
      color: '#FFFFFF',
    });
  });

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="titleBlack">Test</Heading>);
    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyle({
      color: theme.colors.titleBlack,
    });
  });

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Test</Heading>);
    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`,
    });
  });

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Test</Heading>);
    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after',
      },
    );
  });

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Test</Heading>);
    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyle({
      'font-size': '1.6rem',
    });

    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after',
      },
    );
  });

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Test</Heading>);

    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyle({
      'font-size': '5.2rem',
    });
  });

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Test
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /Test/i });
    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`,
    });
    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after',
      },
    );
  });

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Test
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /Test/i });
    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`,
    });
    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after',
      },
    );
  });
});
