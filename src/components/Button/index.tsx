import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
  icon?: JSX.Element;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Container
    size={size}
    color={color}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  >
    {!!children && <span>{children}</span>}
    {!!icon && icon}
  </S.Container>
);

export default Button;
