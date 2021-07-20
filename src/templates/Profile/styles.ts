import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 32rem 1fr;
      gap: ${theme.grid.gutter};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    color: ${theme.colors.titleBlack};
    padding: ${theme.spacings.xsmall};
  `}
`;
