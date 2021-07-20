import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 100%;
    display: grid;
    gap: ${theme.spacings.xsmall};

    > button {
      margin-top: ${theme.spacings.xxlarge};
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacings.medium};

      > button {
        grid-column: 1 / 3;
        justify-self: end;
        margin-top: 0;
      }
      .fullWidth {
        grid-column-end: span 2;
      }
    }
  `}
`;
