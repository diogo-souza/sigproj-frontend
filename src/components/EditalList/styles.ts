import { darken, lighten } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

const maxIntValue = Number.MAX_SAFE_INTEGER;

type StatusProps = {
  isActive: boolean;
};

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primary};
  `}
`;

export const StatusModifiers = {
  active: (theme: DefaultTheme) => css`
    color: ${darken(0.3, theme.colors.success)};
    background-color: ${lighten(0.2, theme.colors.success)};
  `,
};

export const Status = styled.span<StatusProps>`
  ${({ theme, isActive }) => css`
    border-radius: ${`${maxIntValue}px`};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    color: ${darken(0.3, theme.colors.danger)};
    background-color: ${lighten(0.2, theme.colors.danger)};

    padding: 5.6px 10.4px;
    margin-left: ${theme.spacings.xxsmall};
    ${isActive && StatusModifiers.active(theme)}
  `}
`;

export const Headline = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.titleBlack};
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.xlarge};

    margin-top: ${theme.spacings.xxsmall};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}
`;

export const Modalities = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    color: ${theme.colors.titleWhite};
    p {
      margin-right: ${theme.spacings.xxsmall};
      background-color: ${darken(0.075, theme.colors.secondary)};
      border-radius: ${theme.border.radius};
      padding: 5.6px 10.4px;
      margin-top: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  `}
`;

export const DateContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xxsmall};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    p + p {
      margin-left: ${theme.spacings.xxsmall};
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

      transition: box-shadow ${theme.transition.default};
      &:hover {
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
          rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

        z-index: ${theme.layers.overlay};
        ${Title} {
          text-decoration: underline;
        }
      }

      > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      > div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }
      @media (max-width: 768px) {
        > div:first-child {
          align-items: flex-start;
        }
        > div:last-child {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  `}
`;
