import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationItem: React.FC<PaginationItemProps> = ({
  number,
  isCurrent = false,
  onPageChange,
  ...props
}: PaginationItemProps) => {
  return (
    <S.Container
      disabled={isCurrent}
      isCurrent={isCurrent}
      type="submit"
      {...(!isCurrent ? { onClick: () => onPageChange(number) } : {})}
      {...props}
    >
      {number}
    </S.Container>
  );
};
export default PaginationItem;
