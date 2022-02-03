import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#21252b",
        color: "white",
        height: "100vh",
      },
    },
  },
  colors: {
    chalky: "#e5c07b",
    coral: "#e06c75",
    cyan: "#56b6c2",
    invalid: "#ffffff",
    ivory: "#abb2bf",
    stone: "#7d8799",
    malibu: "#61afef",
    sage: "#98c379",
    whiskey: "#d19a66",
    violet: "#c678dd",
    darkBackground: "#21252b",
    highlightBackground: "#2c313a",
    background: "#282c34",
    tooltipBackground: "#353a42",
    selection: "#3E4451",
    cursor: "#528bff",
  },
});

export default theme;
