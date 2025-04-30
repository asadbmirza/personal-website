import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header";
import Landing from "./pages/landing";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000080", // navy blue
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "Titillium Web, sans-serif",
    fontWeightRegular: 400,
    h1: {
      fontWeight: 400,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route element={<Landing />} path="/" />
        </Routes>
        {/*<Footer /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
