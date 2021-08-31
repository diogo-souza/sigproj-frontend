import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    position: relative;
    display: flex;
    align-items: center;
    z-index: ${theme.layers.modal};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    margin-top: ${theme.spacings.small};

    cursor: auto;

    background: ${theme.colors.white};
    color: ${theme.colors.titleBlack};

    z-index: ${theme.layers.modal};

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -1.2rem;
      right: 0;

      transform: translateX(-50%);
    }
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: ${rgba(theme.colors.black, 0.5)};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`;

type ContainerProps = {
  isOpen?: boolean;
};

const ContainerModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
    visibility: hidden;
  `,
};
export const Container = styled.div<ContainerProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && ContainerModifiers.open()}
      ${!isOpen && ContainerModifiers.close()}
    }
  `}
`;
