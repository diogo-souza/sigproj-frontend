import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
  `}
`;

export const IconContainer = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  `}
`;

export const MenuNav = styled.div``;

export const MenuLink = styled(Link)`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.titleWhite};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover,
    &:focus {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const CreateAccount = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    z-index: ${theme.layers.menu};

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 100vh;
    pointer-events: ${isOpen ? 'all' : 'none'};

    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    overflow: hidden;
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    ${MenuLink} {
      color: ${theme.colors.titleBlack};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};

      transition: transform 0.3s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
    }

    ${RegisterBox} {
      transition: transform 0.3s ease-in-out;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
    }
  `}
`;
