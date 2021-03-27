import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, lightTheme } from 'styles';

type AppProps<T> = {
  Component: FC;
  pageProps: T;
};

const App = <T extends Object>({ Component, pageProps }: AppProps<T>): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
