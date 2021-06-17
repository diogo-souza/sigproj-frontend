import styled, { css } from 'styled-components';
import { RadioProps } from '.';

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
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

export const Input = styled.input<Pick<RadioProps, 'fillColor'>>`
  ${({ theme, fillColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors[fillColor!]};
    border-radius: 50%;
    background: transparent;
    transition: background 0.1s ease-in-out;
    outline: none;
    cursor: pointer;
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors[fillColor!]};
    }
    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors[fillColor!]};
      transition: opacity 0.1s ease-in-out;
      opacity: 0;
      position: absolute;
    }
    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;
