import styled, { css } from 'styled-components';
import { CheckboxProps } from '.';

type ContainerProps = Pick<CheckboxProps, 'labelColor' | 'fillColor'>;

export const Label = styled.label<ContainerProps>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    > span {
      padding-left: ${theme.spacings.xxsmall};
      color: ${theme.colors[labelColor!]};
      line-height: 1.8rem;
    }
  `}
`;

export const Input = styled.input<ContainerProps>`
  ${({ theme, fillColor, labelColor }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors[labelColor!]};
    border-radius: 0.2rem;
    transition: background border 0.1s ease-in-out;
    position: relative;
    outline: none;
    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: 0.1s ease-in-out;
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors[fillColor!]};
    }
    &:hover {
      border-color: ${theme.colors.gray};
      transition: 0.1s ease-in-out;
    }
    &:checked {
      border-color: ${theme.colors[fillColor!]};
      background: ${theme.colors[fillColor!]};
      &:before {
        opacity: 1;
      }
    }
  `}
`;
