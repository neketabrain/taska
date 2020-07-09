import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ErrorBoundary } from "./components";
import { ThemeContextProvider } from "./context/themeContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
