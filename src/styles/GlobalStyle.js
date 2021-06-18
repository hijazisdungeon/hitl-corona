import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
  }
`;
