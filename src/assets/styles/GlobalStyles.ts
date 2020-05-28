import { createGlobalStyle } from "styled-components";

import { openSansFonts } from "../fonts";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    
    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
  
  body {
    height: 100vh;
    margin: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }): string => theme.colors.background};
    color: ${({ theme }): string => theme.colors.text};
  }
  
  #root {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  
  ${openSansFonts}
`;

export default GlobalStyles;
