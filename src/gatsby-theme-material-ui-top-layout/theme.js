import { createTheme } from "@mui/material"
import { grey } from "@mui/material/colors"
// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#202020",
      light: "#474747",
      dark: "#000",
      contrastText: "#fff",
    },

    secondary: {
      main: "#c3574e",
      light: "#fa867a",
      dark: "#8e2826",
      contrastText: "#fff",
    },

    info: {
      main: "#f50057",
      light: "#ff5983",
      dark: "#bb002f",
      contrastText: "#fff",
    },

    text: {
      primary: "#202020",
    },
    background: {
      // default: "#202020",
      paper: "#fffdf3",
      default: "#d1b9db",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "5em",
      "@media (max-width:600px)": {
        fontSize: "3em",
      },
      "@media (min-width: 600px max-width:900px)": {
        fontSize: "4em",
      },
      fontFamily: "Tan Buster",
      fontWeight: 700,
      color: "#fff",
      // letterSpacing: -2,
      // lineHeight: 0.9,
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
      color: grey[700],
      fontFamily: ["Karla", "sans-serif"].join(","),
      textTransform: "uppercase",
    },
    subtitle2: {
      fontSize: ".9em",
      fontWeight: 600,
      fontFamily: "monospace",
    },
  },
})

export default theme
