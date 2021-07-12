import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  label?: string;
  initialValue?: string;
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
> = (
  {
    label,
    name,
    icon,
    iconPosition = 'left',
    disabled = false,
    error,
    ...props
  }: TextFieldProps,
  ref,
) => {
  return (
    <S.Container disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputContainer>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          ref={ref}
          iconPosition={iconPosition}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputContainer>
      {!!error && <S.Error role="alert">{error}</S.Error>}
    </S.Container>
  );
};
export default forwardRef(TextField);
