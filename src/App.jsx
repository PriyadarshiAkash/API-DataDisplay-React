// src/App.js
import React from "react";
import Navigation from "./Navigation";
import ItemList from "./ItemList";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navigation />
        <ItemList />
      </div>
    </ThemeProvider>
  );
};

export default App;
