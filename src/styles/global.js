import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font: 1.6rem 'Montserrat', sans-serif;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
  }
`;
