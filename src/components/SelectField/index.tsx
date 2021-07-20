import React, { SelectHTMLAttributes, useState } from 'react';
import { FaChevronDown as ArrowDownIcon } from 'react-icons/fa';

import Label from 'components/Label';
import * as S from './styles';

export type SelectFieldProps = {
  label?: string;
  initialValue?: string;
  disabled?: boolean;
  error?: string;
  options?: {
    value: string;
    text: string;
  }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  placeholder,
  initialValue = '',
  disabled = false,
  error,
  style,
  className,
  options,
  ...props
}: SelectFieldProps) => {
  const [selected, setSelected] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value;
    setSelected(newValue);
  };

  return (
    <S.Container
      disabled={disabled}
      error={!!error}
      style={style}
      className={className}
    >
      {!!label && (
        <Label htmlFor={name} disabled={disabled} hasError={!!error}>
          {label}
        </Label>
      )}
      <S.SelectContainer>
        <S.Select
          name={name}
          value={selected}
          onChange={onChange}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        >
          {!!placeholder && <option value="">{placeholder}</option>}
          {options?.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </S.Select>
        <ArrowDownIcon />
      </S.SelectContainer>
      {!!error && <S.Error role="alert">{error}</S.Error>}
    </S.Container>
  );
};

export default SelectField;
