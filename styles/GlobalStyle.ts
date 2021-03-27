import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      Fira Sans,
      Droid Sans,
      Helvetica Neue,
      sans-serif;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
