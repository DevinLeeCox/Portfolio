import { Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import FullMenu from "../features/menu/FullMenu";
import PizzaBuilder from "../features/pizzabuilder/PizzaBuilder";
import NavBar from "./layout/NavBar";

function App() {
  const themePreference = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themePreference ? "dark" : "light",
        },
      }),
    [themePreference]
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Container sx={{ mt: "24px" }}>
          <FullMenu />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
