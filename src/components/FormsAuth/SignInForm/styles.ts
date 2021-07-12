import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { darken, lighten } from 'polished';

export const Container = styled.main``;

export const ForgotPassword = styled(Link)`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
      text-decoration: underline;
    }
  `}
`;

export const Separator = styled.span`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
    display: flex;
    align-items: center;
    text-align: center;

    &::after,
    &::before {
      content: '';
      flex: 1;
      border-bottom: 1px solid ${theme.colors.gray};
    }
  `}
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLoginButtonModifiers = {
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
    }
  `,
};

export const SocialLoginButton = styled.button`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 5rem;
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    border-radius: ${theme.border.radius};

    color: ${theme.colors.titleBlack};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightGray};
    ${disabled
      ? SocialLoginButtonModifiers.disabled()
      : () => css`
          transition: background-color 0.2s;
          :hover {
            background-color: ${darken(0.05, theme.colors.white)};
          }
        `}
    > svg {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`;
