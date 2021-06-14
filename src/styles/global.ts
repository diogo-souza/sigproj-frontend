import { createGlobalStyle } from 'styled-components';
import OpenSansLight from '../fonts/OpenSans-Light.ttf';
import OpenSansRegular from '../fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../fonts/OpenSans-Bold.ttf';
import OpenSansExtraBold from '../fonts/OpenSans-ExtraBold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: "Open-Sans";
    font-weight: 300;
    src: local("Open-Sans"), url(${OpenSansLight}) format("truetype");
  }
  @font-face {
    font-family: "Open-Sans";
    font-weight: 400;
    src: local("Open-Sans"), url(${OpenSansRegular}) format("truetype");
  }
  @font-face {
    font-family: "Open-Sans";
    font-weight: 600;
    src: local("Open-Sans"), url(${OpenSansSemiBold}) format("truetype");
  }
  @font-face {
    font-family: "Open-Sans";
    font-weight: bold;
    src: local("Open-Sans"), url(${OpenSansBold}) format("truetype");
  }
  @font-face {
    font-family: "Open-Sans";
    font-weight: 800;
    src: local("Open-Sans"), url(${OpenSansExtraBold}) format("truetype");
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body{
    background: #FFFFFF;
    color: #312E38;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Open-Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: bold;
  }

  button{
    cursor: pointer;
  }
`;
