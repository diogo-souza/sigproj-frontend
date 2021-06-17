import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
    height: 0.1rem;
    width: min(calc(${theme.grid.container} + ${theme.spacings.small}), 80%);
    background: rgba(181, 181, 181, 0.3);
    border: 0;
    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.xxlarge} * 2.5) auto ${theme.spacings.xxlarge};
    `}
  `}
`;