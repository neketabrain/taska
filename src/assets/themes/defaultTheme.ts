import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    additionalText: "#9097AF",
    background: "#EDEEF0",
    border: "#E4E3E8",
    borderDarker: "#C4BFD8",
    borderDarkest: "#AEAEB4",
    cardBackground: "#FFFFFF",
    disabledInputBackground: "#FAFAFC",
    error: "#BC3B3B",
    errorInputBackground: "#F5E9E9",
    invertedText: "#FFFFFF",
    opacityDarkGrey: "rgba(0, 0, 0, 0.5)",
    opacityGrey: "rgba(0, 0, 0, 0.2)",
    opacitySuccessful: "#D9FFDA",
    outline:
      "inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3)",
    primary: "#7D7CA4",
    primaryDark: "#36355F",
    primaryDarkest: "#2B2A53",
    primaryLightest: "#F1F2F7",
    primaryOutline: "rgba(125, 124, 164, 0.4)",
    secondary: "#4B49AB",
    successfulText: "#087613",
    text: "#19203A",

    buttons: {
      primary: {
        background: "#7d7ca4",
        backgroundActive: "#47466A",
        backgroundHover: "#56557A",
        color: "#FFFFFF",
        outline: "0 0 0 0.2em rgba(125, 124, 164, 0.4)",
      },
      secondary: {
        background: "#FAFAFC",
        backgroundActive: "#E4E3E8",
        border: "#E4E3E8",
        borderHover: "#C4BFD8",
        color: "#19203A",
        outline:
          "inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3)",
      },
    },
  },
};

export default defaultTheme;
