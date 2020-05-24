import React from "react";
import { ThemeProvider } from "styled-components";

import { Theme, GlobalStyles } from "./assets";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme.defaultTheme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
