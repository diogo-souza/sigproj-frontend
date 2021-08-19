import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    border-bottom: 1px solid ${theme.colors.gray};
    > h3 {
      font-size: ${theme.font.sizes.xxlarge};
    }
    > p {
      color: ${darken(0.2, theme.colors.gray)};
    }

    @media (max-width: 768px) {
      > h3 {
        font-size: ${theme.font.sizes.xlarge};
      }
      > p {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const Content = styled.dl`
  ${({ theme }) => css`
    > div {
      display: grid;
      grid-template-columns: 1fr 2fr;
      & + div {
        border-top: 1px solid ${theme.colors.gray};
      }

      @media (max-width: 768px) {
        display: block;
      }
    }
  `}
`;

export const Field = styled.dt`
  ${({ theme }) => css`
    color: ${darken(0.2, theme.colors.gray)};
  `}
`;

export const Modalities = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    flex: 1 0 50%;
    color: ${theme.colors.titleWhite};
    p {
      font-size: ${theme.font.sizes.small};
      margin-right: ${theme.spacings.xxsmall};
      background-color: ${darken(0.075, theme.colors.secondary)};
      border-radius: ${theme.border.radius};
      padding: calc(5.6px * 0.9) calc(10.4px * 0.9);
      margin-top: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  `}
`;

export const Data = styled.dd`
  ${({ theme }) => css`
    color: ${darken(0.2, theme.colors.titleBlack)};
    font-weight: ${theme.font.bold};

    > div {
      font-weight: ${theme.font.semiBold};
      font-weight: ;
      h2 {
        font-weight: ${theme.font.bold};
        font-size: calc(${theme.font.sizes.large} * 2);
        margin-bottom: 2.5rem;
      }
      p {
        text-align: justify;
      }

      > div + div {
        margin-top: ${theme.spacings.xsmall};
      }
    }

    @media (max-width: 768px) {
      margin-top: calc(${theme.spacings.xxsmall} / 2);
    }

    ${Modalities} {
      margin-top: -8px;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    ${Header} {
      padding: calc(${theme.spacings.small} - 4px) ${theme.spacings.small};
    }
    ${Content} {
      > * {
        padding: calc(${theme.spacings.small} - 4px) ${theme.spacings.small};
      }
    }
  `}
`;
