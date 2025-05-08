import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    link?: {
      main: string;
    };
  }
  interface PaletteOptions {
    link?: {
      main: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#41616e",
    },
    secondary: {
      main: "#f0f0f0",
    },
    text: {
      primary: "#0f0f0f",
      secondary: "#000080",
    },
    link: {
      main: "#000080", // navy blue
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

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#203036",
    },
    secondary: {
      main: "#0f0f0f",
    },
    text: {
      primary: "#f0f0f0",
      secondary: "#ffff80",
    },
    link: {
      main: "#ffff80",
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
