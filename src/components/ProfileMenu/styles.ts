import styled, { css } from 'styled-components';
import { NavLink as NavLinkRRD } from 'react-router-dom';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    @media (min-width: 768px) {
      flex-direction: column;
      border: 0;
      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    }
  `}
`;

export const NavLink = styled(NavLinkRRD)`
  ${({ theme, activeClassName }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.titleBlack};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};
    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.titleWhite};
    }
    > span {
      margin-left: ${theme.spacings.xsmall};
    }
    @media (max-width: 768px) {
      width: min(24px, 100%);
      justify-content: center;
      flex: 1;
      > span {
        display: none;
      }
    }
    &.${activeClassName} {
      background: ${theme.colors.primary};
      color: ${theme.colors.titleWhite};
    }
  `}
`;
