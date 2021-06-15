import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.minorBg};
    padding: 0 ${theme.spacings.xsmall};
  `}
`;
