import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Result = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};

    @media (max-width: 768px) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const PaginationList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    & > * {
      margin-left: ${theme.spacings.xxsmall};
    }
    & > *:first-child {
      margin-left: 0;
    }
    @media (max-width: 768px) {
      & > * {
        margin-left: calc(${theme.spacings.xxsmall} / 2);
      }
    }
  `}
`;

export const SuspensionPoints = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.semiBold};
  `}
`;
