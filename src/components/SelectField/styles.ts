import styled, { css, DefaultTheme } from 'styled-components';

import { SelectFieldProps } from '.';

type ContainerProps = Pick<SelectFieldProps, 'disabled'> & {
  error?: boolean;
};

export const Select = styled.select`
  ${({ theme }) => css`
    color: ${theme.colors.titleBlack};
    cursor: pointer;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semiBold};
    appearance: none;
    border: 0;
    outline: none;
    width: 100%;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large}
      ${theme.spacings.xxsmall} 12px;
    background: transparent;
  `}
`;

export const SelectContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    border: 0.1rem solid;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};

    border-color: ${theme.colors.gray};
    &:hover {
      border-color: ${theme.colors.darkGray};
    }
    > svg {
      color: ${theme.colors.titleBlack};

      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);

      width: 2rem;
      height: 1.2rem;
      pointer-events: none;
    }
    &:focus-within {
      border-color: ${theme.colors.focus};
      box-shadow: 0 0 0 0.3rem ${theme.colors.focusShadow};
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.small};
  `};
`;

const containerModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${SelectContainer} {
      background: ${theme.colors.lightGray};
    }
    ${Select},
    ${SelectContainer},
    option {
      cursor: not-allowed;
      color: ${theme.colors.darkGray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${SelectContainer} {
      border-color: ${theme.colors.danger};
      &:focus-within {
        box-shadow: 0 0 0 0.3rem ${theme.colors.dangerShadow};
      }
    }
    svg {
      color: ${theme.colors.danger};
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, disabled, error }) => css`
    ${error && containerModifiers.error(theme)}
    ${disabled && containerModifiers.disabled(theme)}
  `}
`;
