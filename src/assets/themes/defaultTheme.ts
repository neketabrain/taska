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
    disabledInputBackground: "#FAFAFC",
    errorInputBackground: "#F5E9E9",
    outline:
      "inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3)",
    opacityGrey: "rgba(0, 0, 0, 0.2)",
    opacityDarkGrey: "rgba(0, 0, 0, 0.5)",

    buttons: {
      primary: {
        color: "#FFFFFF",
        background: "#7d7ca4",
        backgroundHover: "#56557A",
        backgroundActive: "#47466A",
        outline: "0 0 0 0.2em rgba(125, 124, 164, 0.4)",
      },
      secondary: {
        color: "#19203A",
        background: "#FAFAFC",
        backgroundActive: "#E4E3E8",
        border: "#E4E3E8",
        borderHover: "#C4BFD8",
        outline:
          "inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3)",
      },
    },
  },
};

export default defaultTheme;
