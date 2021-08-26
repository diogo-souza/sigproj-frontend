import styled, { css } from 'styled-components';
import { darken } from 'polished';

import * as TextFieldStyles from 'components/TextField/styles';
import * as ButtonStyles from 'components/Button/styles';
import dotsImg from 'assets/images/dots.svg';

export const FormContainer = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Container} {
      margin: ${theme.spacings.xsmall} 0 ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Container} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
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

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
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
