import React, { LabelHTMLAttributes } from 'react';
import * as S from './styles';

export type LabelProps = {
  hasError?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<LabelProps> = ({
  hasError = false,
  disabled = false,
  children,
  ...props
}: LabelProps) => (
  <S.Container hasError={hasError} disabled={disabled} {...props}>
    {children}
  </S.Container>
);

export default Label;
