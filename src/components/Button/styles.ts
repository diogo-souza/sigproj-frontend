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
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
    }
    span + svg {
      margin-left: ${theme.spacings.xxsmall};
    }
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, color, fullWidth, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: ${theme.colors[color!]};
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    ${!!size && ContainerModifiers[size](theme)};
    ${!!fullWidth && ContainerModifiers.fullWidth()};
    ${hasIcon && ContainerModifiers.withIcon(theme)}
    transition: background-color 0.2s;
    :hover {
      background-color: ${darken(0.1, theme.colors.primary)};
    }
  `}
`;
