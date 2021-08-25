import styled, { css } from 'styled-components';

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primary};
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    color: ${theme.colors.titleBlack};
    margin-top: ${theme.spacings.xxsmall};
    > li {
      font-size: ${theme.font.sizes.medium};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    a {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: space-between;

      background-color: ${theme.colors.white};

      text-decoration: none;

      padding: ${theme.spacings.medium};

      & + a {
        border-top: 1px solid ${theme.colors.gray};
      }

      &:first-child {
        border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
      }
      &:last-child {
        border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      }

      &:only-child {
        border-radius: ${theme.border.radius};
      }

      transition: box-shadow ${theme.transition.default};
      &:hover {
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
          rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

        z-index: ${theme.layers.overlay};
        ${Title} {
          text-decoration: underline;
        }
      }

      > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      @media (max-width: 768px) {
        > div {
          align-items: flex-start;
        }
      }
    }
  `}
`;
