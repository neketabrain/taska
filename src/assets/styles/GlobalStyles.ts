import { createGlobalStyle } from "styled-components";

import { openSansFonts } from "../fonts";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
  
  html {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    
    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
  
  body {
    background-color: ${({ theme }): string => theme.colors.background};
    box-sizing: border-box;
    color: ${({ theme }): string => theme.colors.text};
    height: 100vh;
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  
  #root {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  
  ${openSansFonts}
`;

export default GlobalStyles;
