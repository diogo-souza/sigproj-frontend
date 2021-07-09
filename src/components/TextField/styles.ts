import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from '.';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>;

type ContainerProps = Pick<TextFieldProps, 'disabled'> & {
  error?: boolean;
};

export const Label = styled.label`
  ${({ theme }) => css`
    display: inline-block;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.titleBlack};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.titleBlack};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semiBold};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none
    }
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.1rem solid;
    border-color: ${theme.colors.lightGray};
    &:hover {
      border-color: ${theme.colors.gray};
    }
    &:focus-within {
      border-color: ${theme.colors.focus};
      box-shadow: 0 0 0 0.2rem ${theme.colors.focusShadow};
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
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputContainer} {
      border-color: ${theme.colors.danger};
      &:focus-within {
        box-shadow: 0 0 0 0.2rem ${theme.colors.dangerShadow};
      }
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.danger};
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && containerModifiers.disabled(theme)}
    ${error && containerModifiers.error(theme)}
  `}
`;
