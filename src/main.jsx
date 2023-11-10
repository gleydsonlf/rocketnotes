import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

// import Details from "./pages/Details";
import theme from "./Styles/theme";
import GlobalStyles from "./Styles/global";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
