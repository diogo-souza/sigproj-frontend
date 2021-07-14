import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

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
  readOnly,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      readOnly={readOnly}
    >
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
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
