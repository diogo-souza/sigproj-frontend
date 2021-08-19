import styled, { css } from 'styled-components';

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
    height: 0.1rem;
    width: min(calc(${theme.grid.container} + ${theme.spacings.small}), 80%);
    background: ${theme.colors.shadow};
    border: 0;

    @media (min-width: 768px) {
      margin: calc(${theme.spacings.xxlarge} * 2.5) auto
        ${theme.spacings.xxlarge};
    }
  `}
`;
