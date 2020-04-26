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
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
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
