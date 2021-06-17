import { createGlobalStyle, css } from 'styled-components';

import OpenSansLight from '../fonts/OpenSans-Light.ttf';
import OpenSansRegular from '../fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../fonts/OpenSans-Bold.ttf';
import OpenSansExtraBold from '../fonts/OpenSans-ExtraBold.ttf';

export default createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: "Open-Sans";
    font-weight: 300;
    src: local("Open-Sans"), url(${OpenSansLight}) format("truetype");
  }
  @font-face {
    font-display: swap;
    font-family: "Open-Sans";
    font-weight: 400;
    src: local("Open-Sans"), url(${OpenSansRegular}) format("truetype");
  }
  @font-face {
    font-display: swap;
    font-family: "Open-Sans";
    font-weight: 600;
    src: local("Open-Sans"), url(${OpenSansSemiBold}) format("truetype");
  }
  @font-face {
    font-display: swap;
    font-family: "Open-Sans";
    font-weight: bold;
    src: local("Open-Sans"), url(${OpenSansBold}) format("truetype");
  }
  @font-face {
    font-display: swap;
    font-family: "Open-Sans";
    font-weight: 800;
    src: local("Open-Sans"), url(${OpenSansExtraBold}) format("truetype");
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    -mox-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.title};
    }

    body,
    input,
    textarea,
    select,
    button {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.bold};
    }

    button {
      cursor: pointer;
    }
  `}
`;
