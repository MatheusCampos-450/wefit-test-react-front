import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font: 400 16px "Inter", sans-serif;
  };

  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  body {
    background: #2F2E41;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyles;
