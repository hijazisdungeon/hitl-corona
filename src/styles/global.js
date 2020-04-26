import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
  }
`;
