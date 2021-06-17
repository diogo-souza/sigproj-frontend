import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  label: string;
  labelFor: string;
  labelColor?: 'title' | 'white';
  fillColor?: 'primary' | 'secondary' | 'tertiary';
  name: string;
  value: RadioValue;
  onCheck?: (value?: RadioValue) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio: React.FC<RadioProps> = ({
  onCheck,
  label,
  labelFor,
  labelColor = 'title',
  value,
  fillColor = 'secondary',
  ...props
}: RadioProps) => {
  const onChange = () => {
    // eslint-disable-next-line no-unused-expressions
    !!onCheck && onCheck(value);
  };

  return (
    <S.Label htmlFor={labelFor} labelColor={labelColor}>
      <S.Input
        id={labelFor}
        onChange={onChange}
        type="radio"
        value={value}
        fillColor={fillColor}
        {...props}
      />
      <span>{label}</span>
    </S.Label>
  );
};
export default Radio;
