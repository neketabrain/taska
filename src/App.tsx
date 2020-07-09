import React, { useContext, useMemo, FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "./i18n";

import { GlobalStyles } from "./assets";
import { ToastContainer } from "./components";
import { ThemeContext } from "./context/themeContext";
import Router from "./pages";
import { configureStore } from "./store";
import { getLocale } from "./utils";

const store = configureStore();

const App: FC = () => {
  const { theme } = useContext(ThemeContext);
  const language = useMemo(() => getLocale(), []);

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={language} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <Router />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
