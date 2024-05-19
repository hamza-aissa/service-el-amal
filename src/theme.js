import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: 20,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      fontSize: 18,
    },
    body2: {
      fontWeight: 400,
      fontSize: 16,
    },
  },
});

export default theme;
