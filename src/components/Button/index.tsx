import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

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
