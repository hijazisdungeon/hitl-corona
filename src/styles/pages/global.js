import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    word-wrap: break-word;
    max-width: 100vw;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font: 1.6rem 'Montserrat', sans-serif;
    color: #fff;
    background-color: #f0f0f5;
  }


  @media (max-width: 1024px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 612px) {
    html {
      font-size: 40%;
    }
  }

  @media (max-width: 306px) {
    html {
      font-size: 30%;
    }
  }
`;