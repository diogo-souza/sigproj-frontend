import React, { InputHTMLAttributes, useState } from 'react';

import { cep, cpf, phoneNumber, telephoneNumber } from 'utils/masks';

import Label from 'components/Label';
import * as S from './styles';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
  mask?: 'cep' | 'cpf' | 'phoneNumber' | 'telephoneNumber';
} & InputHTMLAttributes<HTMLInputElement>;

const handleMask = {
  cep: (e: React.ChangeEvent<HTMLInputElement>) => cep(e),
  cpf: (e: React.ChangeEvent<HTMLInputElement>) => cpf(e),
  phoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => phoneNumber(e),
  telephoneNumber: (e: React.ChangeEvent<HTMLInputElement>) =>
    telephoneNumber(e),
};

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  icon,
  iconPosition = 'left',
  initialValue = '',
  disabled = false,
  error,
  onInputChange,
  style,
  className,
  readOnly,
  mask,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue || '');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (mask) {
      const currentMask = handleMask[mask];
      currentMask(e);
    }
    const newValue = e.currentTarget.value;
    setValue(newValue);

    // eslint-disable-next-line no-unused-expressions
    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Container
      disabled={disabled}
      error={!!error}
      style={style}
      className={className}
      readOnly={readOnly}
    >
      {!!label && (
        <Label htmlFor={name} disabled={disabled} hasError={!!error}>
          {label}
        </Label>
      )}
      <S.InputContainer>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          name={name}
          value={value}
          onChange={onChange}
          iconPosition={iconPosition}
          disabled={disabled}
          icon={icon}
          readOnly={readOnly}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputContainer>
      {!!error && <S.Error role="alert">{error}</S.Error>}
    </S.Container>
  );
};
export default TextField;
