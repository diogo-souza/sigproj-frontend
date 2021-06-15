import styled, { css } from 'styled-components';
import { generateMedia } from 'styled-media-query';

type customBreakpointsType = {
  huge: 'string';
  large: 'string';
  lmedium: 'string';
  medium: 'string';
  small: 'string';
};

const customBreakpoints = generateMedia({
  huge: '1440px',
  large: '1170px',
  lmedium: '767px',
  medium: '768px',
  small: '450px',
});

type breakpoint = keyof customBreakpointsType;

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${customBreakpoints.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${customBreakpoints.greaterThan(size)` display: block `}
  `,
};

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;
