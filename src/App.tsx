import "./App.css";
import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import ScrollToTop from "./scroll_to_top";
import Landing from "./pages/landing/landing";
import Background from "./components/background";
import { lightTheme, darkTheme } from "./themes";
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import Experience from "./pages/experience/experience";

const ThemeToggleContext = createContext({
  toggleTheme: () => {},
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>(
    Cookies.get("theme") === "light" ? lightTheme : darkTheme
  );

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
    Cookies.set("theme", currentTheme === lightTheme ? "dark" : "light", {
      expires: 1,
    });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
          <Background />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "15vh",
            }}
          >
            <BrowserRouter>
              <ScrollToTop />
              <Box sx={{ p: "0px 24px" }}>
                <Header />
                <Routes>
                  <Route element={<Landing />} path="/" />
                  <Route element={<Experience />} path="/experience" />
                </Routes>
              </Box>
              <Footer />
            </BrowserRouter>
          </Box>
        </Box>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}

export default App;
