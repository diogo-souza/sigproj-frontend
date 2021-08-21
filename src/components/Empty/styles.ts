import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    object-fit: cover;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    color: ${theme.colors.titleBlack};
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.medium};
  `}
`;
