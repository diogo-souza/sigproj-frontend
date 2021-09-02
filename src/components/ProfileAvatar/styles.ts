import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Link as LinkRouterDOM } from 'react-router-dom';

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Name = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.titleWhite};
  `}
`;

export const Email = styled.span`
  ${({ theme }) => css`
    color: ${darken(0.1, theme.colors.lightGray)};
    margin-top: calc(${theme.spacings.xxsmall} / 2);
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    background-color: ${theme.colors.primary};

    > span {
      line-height: 1;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    > img,
    ${Avatar} {
      display: flex;
      align-items: center;
      justify-content: center;

      height: ${theme.spacings.xlarge};
      width: ${theme.spacings.xlarge};

      border-radius: 100%;
      border: 1px solid ${theme.colors.lightGray};

      margin-left: ${theme.spacings.xsmall};
    }

    @media (max-width: 768px) {
      ${Info} {
        display: none;
      }
      > img,
      ${Avatar} {
        margin-left: 0;
      }
    }
  `}
`;

export const Link = styled(LinkRouterDOM)``;

export const LogoutLink = styled.a``;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 24rem;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }

    ${Link},
    ${LogoutLink} {
      cursor: pointer;
      display: flex;
      align-items: center;
      text-decoration: none;
      background: ${theme.colors.white};
      color: ${theme.colors.black};
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      transition: background, color, ${theme.transition.default};

      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }

      > svg {
        font-size: 2.4rem;
      }

      > span {
        margin-left: ${theme.spacings.xsmall};
      }
    }
  `}
`;
