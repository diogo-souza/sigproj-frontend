import styled, { css } from 'styled-components';
import * as HeadingStyles from 'components/Heading/styles';
import media from 'styled-media-query';

export const Container = styled.footer`
  ${HeadingStyles.Container} {
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: flex;
      align-items: center;
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};

      > svg {
        width: ${theme.font.sizes.xlarge};
        margin-right: ${theme.spacings.xsmall};
      }
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.medium};
    text-align: center;
  `}
`;
