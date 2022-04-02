import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#379683",
      },
      secondary: {
        main: "#5cdb95",
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      htmlFontSize: 10,
    },
  })
);

export default theme;
