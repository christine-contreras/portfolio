import { createTheme } from "@mui/material"

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#f8d7b1",
      light: "#ffffe3",
      dark: "#c4a681",
      contrastText: "#081c16",
    },
    secondary: {
      main: "#081c16",
      light: "#2f433c",
      dark: "#000",
      contrastText: "#fff",
    },
    info: {
      main: "#d4cdc5",
      light: "#fffff8",
      dark: "#a39c95",
      contrastText: "#081c16",
    },
    text: {
      primary: "#fff",
    },
    background: {
      default: "#081c16",
      paper: "#d4cdc5",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "6em",
      "@media (max-width:600px)": {
        fontSize: "4em",
      },
      fontFamily: ["Karla", "sans-serif"].join(","),
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 0.9,
    },
    h2: {
      fontSize: "3.5em",
      "@media (max-width:600px)": {
        fontSize: "2.5em",
      },
      fontFamily: ["Karla", "sans-serif"].join(","),
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 0.9,
    },
    h3: {
      fontSize: "3em",
      "@media (max-width:600px)": {
        fontSize: "2em",
      },
      fontFamily: ["Karla", "sans-serif"].join(","),
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 0.9,
    },
    h4: {
      fontSize: "2.5em",
      "@media (max-width:600px)": {
        fontSize: "1.5em",
      },
      fontFamily: ["Karla", "sans-serif"].join(","),
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 0.9,
    },
    h5: {
      fontSize: "2em",
      "@media (max-width:600px)": {
        fontSize: "1.75em",
      },
      fontFamily: ["Karla", "sans-serif"].join(","),
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 0.9,
    },
    subtitle1: {
      fontSize: "1.25em",
      fontWeight: 700,
      fontFamily: ["Karla", "sans-serif"].join(","),
    },
    subtitle2: {
      fontSize: ".9em",
      fontWeight: 600,
    },
  },
})

export default theme
