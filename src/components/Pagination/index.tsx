import React from 'react';
import PaginationItem from 'components/PaginationItem';
import * as S from './styles';

type PagitionProps = {
  currentPage: number;
  lastPage: number;
  elementsPerPage: number;
  totalCountOfElements: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0);
}

const Pagination: React.FC<PagitionProps> = ({
  currentPage,
  lastPage,
  totalCountOfElements,
  elementsPerPage,
  onPageChange,
}: PagitionProps) => {
  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  return (
    <S.Container>
      <S.Result>
        <strong>{currentPage * elementsPerPage - 3}</strong> -{' '}
        <strong>
          {Math.min(currentPage * elementsPerPage, totalCountOfElements)}
        </strong>{' '}
        de <strong>{totalCountOfElements}</strong>
      </S.Result>

      <S.PaginationList>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && (
              <S.SuspensionPoints>...</S.SuspensionPoints>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map(page => (
            <PaginationItem
              key={page}
              number={page}
              onPageChange={onPageChange}
            />
          ))}

        <PaginationItem
          isCurrent
          number={currentPage}
          onPageChange={onPageChange}
        />

        {nextPages.length > 0 &&
          nextPages.map(page => (
            <PaginationItem
              key={page}
              number={page}
              onPageChange={onPageChange}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <S.SuspensionPoints>...</S.SuspensionPoints>
            )}
            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </S.PaginationList>
    </S.Container>
  );
};

export default Pagination;
