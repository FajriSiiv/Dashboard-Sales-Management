import styled from "@emotion/styled";
import {
  Box,
  Stack,
  createTheme,
  ThemeProvider,
  PaletteOptions,
  PaletteMode,
} from "@mui/material";
import { useEffect, useState } from "react";
import useStore from "./store";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [modes, setModes] = useState<PaletteMode>("light");

  const paletteOptions: PaletteOptions = {
    mode: modes,
  };

  const darkTheme = createTheme({
    palette: paletteOptions,
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}></Box>
    </ThemeProvider>
  );
}

export default App;
