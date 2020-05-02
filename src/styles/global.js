import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
  }
`;
