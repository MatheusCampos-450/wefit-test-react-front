import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  body {
    background: ${({ theme }) => theme.background};
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

  @media(max-width: 375px) {
    html {
      font-size: 81.25%;
    }
  }
`;

export default GlobalStyles;
