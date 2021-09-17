import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fontsource/roboto";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(245,169,221)",
    },
    secondary: {
      main: "rgb(109,208,239)",
    },
  },
  background: "rgb(233, 237, 222)",
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
