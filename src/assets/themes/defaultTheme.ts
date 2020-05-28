import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    background: "#EDEEF0",
    cardBackground: "#FFFFFF",
    text: "#19203A",
    additionalText: "#9097AF",
    invertedText: "#FFFFFF",
    primary: "#7D7CA4",
    primaryDark: "#36355F",
    primaryDarkest: "#2B2A53",
    secondary: "#4B49AB",
    border: "#E4E3E8",
    borderDarker: "#C4BFD8",
    error: "#BC3B3B",
    inputBackground: "#F1F2F7",
    errorInputBackground: "#F5E9E9",

    buttons: {
      primary: {
        color: "#FFFFFF",
        background: "#7D7CA4",
        backgroundHover: "#56557A",
        backgroundActive: "#47466A",
      },
      secondary: {
        color: "#19203A",
        background: "#FAFAFC",
        backgroundActive: "#E4E3E8",
        border: "#E4E3E8",
        borderHover: "#C4BFD8",
      },
    },
  },
};

export default defaultTheme;
