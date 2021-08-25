import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    border-bottom: 1px solid ${theme.colors.gray};
    > h3 {
      font-size: ${theme.font.sizes.xxlarge};
    }
    > p {
      color: ${darken(0.2, theme.colors.gray)};
      font-size: ${theme.font.sizes.medium};
    }

    @media (max-width: 768px) {
      > h3 {
        font-size: ${theme.font.sizes.xlarge};
      }
    }
  `}
`;

export const Body = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: 1fr 1fr 1fr;
    padding: ${theme.spacings.small};

    .fullWidth {
      grid-column-end: span 3;
    }

    > button {
      grid-column: 3 / 4;
      justify-self: end;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};
    ${Header} {
      padding: calc(${theme.spacings.small} - 4px) ${theme.spacings.small};
    }
  `}
`;
