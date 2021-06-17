import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label: string;
  labelFor: string;
  labelColor?: 'title' | 'white';
  fillColor?: 'primary' | 'secondary' | 'tertiary';
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({
  onCheck,
  isChecked = false,
  label,
  labelFor,
  labelColor = 'title',
  value,
  fillColor = 'secondary',
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);

    // eslint-disable-next-line no-unused-expressions
    !!onCheck && onCheck(status);
  };

  return (
    <S.Label htmlFor={labelFor} labelColor={labelColor}>
      <S.Input
        id={labelFor}
        onChange={onChange}
        type="checkbox"
        checked={checked}
        value={value}
        fillColor={fillColor}
        {...props}
      />
      <span>{label}</span>
    </S.Label>
  );
};

export default Checkbox;
