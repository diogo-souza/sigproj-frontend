import styled, { css, DefaultTheme } from 'styled-components';

import { LabelProps } from '.';

const containerModifiers = {
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    color: ${theme.colors.gray};
    &::placeholder {
      color: currentColor;
    }
  `,
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.danger};
  `,
};

export const Container = styled.label<LabelProps>`
  ${({ theme, hasError, disabled }) => css`
    display: inline-block;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.titleBlack};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    margin-bottom: ${theme.spacings.xxsmall};

    ${disabled && containerModifiers.disabled(theme)}
    ${hasError && containerModifiers.error(theme)}
  `}
`;
