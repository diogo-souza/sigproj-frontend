import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Test</Heading>);
    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyle({
      color: '#FFFFFF',
    });
  });

  it('should render a title(color) heading when color is passed', () => {
    renderWithTheme(<Heading color="title">Test</Heading>);
    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyle({
      color: '#2b2b2b',
    });
  });

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Test</Heading>);
    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyle({
      'border-left': '0.7rem solid #B51222',
    });
  });

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Test</Heading>);
    expect(screen.getByRole('heading', { name: /Test/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #B51222',
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
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #B51222' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #B51222', {
      modifier: '::after',
    });
  });

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Test
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /Test/i });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #159CAE' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #159CAE', {
      modifier: '::after',
    });
  });
});
