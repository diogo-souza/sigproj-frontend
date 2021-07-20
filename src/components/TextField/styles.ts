import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from '.';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition' | 'icon'>;

type ContainerProps = Pick<TextFieldProps, 'disabled' | 'readOnly'> & {
  error?: boolean;
};

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition, icon }) => css`
    color: ${theme.colors.titleBlack};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semiBold};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.white}
        inset;
      filter: none;
    }

    ${!!icon &&
    css`
        padding-${iconPosition}: ${theme.spacings.xsmall};
    `}
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 0 12px;
    border: 0.1rem solid;
    border-color: ${theme.colors.gray};
    height: ${theme.spacings.large};
    &:hover {
      border-color: ${theme.colors.darkGray};
    }
    transition: border-color ${theme.transition.fast},
      box-shadow ${theme.transition.fast};
    &:focus-within {
      border-color: ${theme.colors.focus};
      box-shadow: 0 0 0 0.3rem ${theme.colors.focusShadow};
    }
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};
    & > svg {
      width: 100%;
      color: ${theme.colors.titleBlack};
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.small};
  `}
`;

const containerModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.darkGray};
      &::placeholder {
        color: currentColor;
      }
    }
    ${InputContainer} {
      background: ${theme.colors.lightGray};
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputContainer} {
      border-color: ${theme.colors.danger};
      &:focus-within {
        box-shadow: 0 0 0 0.3rem ${theme.colors.dangerShadow};
      }
    }
    ${Icon} {
      color: ${theme.colors.danger};
    }
  `,
  readOnly: (theme: DefaultTheme) => css`
    ${InputContainer} {
      border-color: ${theme.colors.darkGray};
      background-color: ${theme.colors.lightGray};
      &:focus-within {
        border-color: ${theme.colors.focus};
        box-shadow: 0 0 0 0.3rem ${theme.colors.focusShadow};
      }
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, disabled, error, readOnly }) => css`
    ${disabled && containerModifiers.disabled(theme)}
    ${error && containerModifiers.error(theme)}
    ${!!readOnly && containerModifiers.readOnly(theme)}
  `}
`;
