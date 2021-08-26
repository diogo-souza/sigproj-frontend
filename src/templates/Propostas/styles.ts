import styled, { css } from 'styled-components';
import * as PropostaListProps from 'components/PropostaList/styles';
import * as PaginationProps from 'components/Pagination/styles';

export const Main = styled.main`
  ${({ theme }) => css`
    ${PropostaListProps.Container} {
      margin-bottom: ${theme.spacings.small};
    }
    ${PaginationProps.Container} {
      margin: 0 ${theme.spacings.small};
      @media (max-width: 768px) {
        margin: 0;
      }
    }
  `}
`;
