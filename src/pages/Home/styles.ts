import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    h2 {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  > img {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const FaqSection = styled.div``;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.medium};

    > p {
      font-size: ${theme.font.sizes.large};

      & + p {
        margin-top: ${theme.spacings.xxsmall};
      }
    }

    > button {
      margin-top: ${theme.spacings.medium};
    }

    @media (max-width: 768px) {
      margin: 0;
    }
  `}
`;
