import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';
import { ButtonProps } from '.';

type ContainerProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'color' | 'fullWidth'>;

const ContainerModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
  `,
  fullWidth: (theme: DefaultTheme) => css`
    width: 100%;
    span + svg {
      margin-left: ${theme.spacings.xxsmall};
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    span + svg {
      margin-left: ${theme.spacings.xxsmall};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, color, fullWidth, hasIcon, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: ${theme.colors[color!]};
    color: ${theme.colors.titleWhite};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.focusShadow};
      border-color: ${theme.colors.focus};
    }

    ${hasIcon && ContainerModifiers.withIcon(theme)}
    ${!!size && ContainerModifiers[size](theme)};
    ${!!fullWidth && ContainerModifiers.fullWidth(theme)};
    ${disabled
      ? ContainerModifiers.disabled()
      : () => css`
          transition: background-color 0.2s;
          :hover {
            background-color: ${darken(0.1, theme.colors[color!])};
          }
        `}
  `}
`;
