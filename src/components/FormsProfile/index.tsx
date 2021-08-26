import styled, { css } from 'styled-components';
import dotsImg from 'assets/images/dots.svg';

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

export const FormError = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.small};

    svg {
      margin-right: ${theme.spacings.xxsmall};
      font-size: 20px;
    }
  `}
`;

export const FormLoading = styled.img.attrs(() => ({
  src: dotsImg,
  alt: 'Carregando...',
}))`
  color: #000;
  width: 4rem;
`;
