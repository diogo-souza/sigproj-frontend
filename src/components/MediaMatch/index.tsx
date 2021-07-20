import styled, { css } from 'styled-components';

type customBreakpointsType = {
  huge: 'string';
  large: 'string';
  lmedium: 'string';
  medium: 'string';
  small: 'string';
};

const customBreakpoints = {
  huge: '1440px',
  large: '1170px',
  medium: '769px',
  lmedium: '768px',
  small: '450px',
};

type breakpoint = keyof customBreakpointsType;

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    @media (max-width: ${customBreakpoints[size]}) {
      display: block;
    }
  `,

  greaterThan: (size: breakpoint) => css`
    @media (min-width: ${customBreakpoints[size]}) {
      display: block;
    }
  `,
};

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;
