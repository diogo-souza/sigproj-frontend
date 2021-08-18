import styled, { css, DefaultTheme } from 'styled-components';
import { PaginationItemProps } from '.';

type ContainerProps = Pick<PaginationItemProps, 'isCurrent'>;

const ContainerModifiers = {
  current: (theme: DefaultTheme) => css`
    cursor: default;
    color: ${theme.colors.white};
    background-color: ${theme.colors.tertiary};
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, isCurrent }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.tertiary};
    font-weight: ${theme.font.semiBold};

    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};

    padding: ${theme.spacings.xxsmall};
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};

    background-color: ${theme.colors.white};

    ${isCurrent && ContainerModifiers.current(theme)}

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.focusShadow};
      border-color: ${theme.colors.focus};
    }
  `}
`;
