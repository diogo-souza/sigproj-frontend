import styled, { css } from 'styled-components';

import * as HeadingStyles from 'components/Heading/styles';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    @media (min-width: 768px) {
      width: 36rem;
    }
    ${HeadingStyles.Container} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;
