import { createGlobalStyle } from "styled-components";

import Fonts from "../fonts";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    height: 100%;
    width: 100%;
  }
  
  body {
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }): string => theme.colors.bg};
  }
  
  #root {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  
  ${Fonts}
`;

export default GlobalStyles;
