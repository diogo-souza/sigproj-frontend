import styled, { css, DefaultTheme } from 'styled-components';

type AccordionProps = {
  isOpen: boolean;
};

export const Header = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-align: start;
    position: relative;
    justify-content: space-between;
    padding: ${theme.spacings.small};

    color: ${theme.colors.titleBlack};
    font-size: ${theme.font.sizes.large};

    border: none;
    background-color: inherit;
    > svg {
      transition: transform 0.6s;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.titleBlack};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.semiBold};
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    pointer-events: none;
    transition: padding 0.6s ease, opacity 0.6s ease, margin 0.6s ease;
  `}
`;

const AccordionModifiers = {
  isOpen: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    border: 1px solid rgba(18, 18, 18, 0.3);

    ${Header} {
      border-bottom: 1px solid rgba(120, 120, 120, 0.3);
      > svg {
        transform: rotate(90deg);
      }
    }
    ${Content} {
      opacity: 1;
      max-height: 100%;
      pointer-events: all;
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      p,
      ul {
        margin: ${theme.spacings.xsmall} 0;
      }

      ul {
        padding-left: ${theme.spacings.small};
      }
    }
  `,
};

export const Container = styled.main<AccordionProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;

    & + & {
      border-top: 1px solid rgba(18, 18, 18, 0.3);
    }

    transition: background-color 0.6s;
    &:hover {
      border: 1px solid rgba(18, 18, 18, 0.3);
      background-color: ${theme.colors.white};
    }

    ${isOpen && AccordionModifiers.isOpen(theme)}
  `}
`;
