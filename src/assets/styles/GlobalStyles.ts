import { createGlobalStyle } from "styled-components";

import "rc-tooltip/assets/bootstrap.css";

import { openSansFonts } from "../fonts";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
  
  html, body {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    height: 100%;
    margin: 0;
    padding: 0;
    
    @media screen and (max-width: 700px) {
      font-size: 16px;
    }
  }
  
  body {
    background-color: ${({ theme }): string => theme.colors.background};
    color: ${({ theme }): string => theme.colors.text};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  
  ${openSansFonts};
`;

export default GlobalStyles;
