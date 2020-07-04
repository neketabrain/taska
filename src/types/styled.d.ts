import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      additionalText: string;
      background: string;
      border: string;
      borderDarker: string;
      borderDarkest: string;
      cardBackground: string;
      disabledInputBackground: string;
      error: string;
      errorInputBackground: string;
      invertedText: string;
      opacityDarkGrey: string;
      opacityGrey: string;
      opacitySuccessful: string;
      outline: string;
      primary: string;
      primaryDark: string;
      primaryDarkest: string;
      primaryLightest: string;
      primaryOutline: string;
      secondary: string;
      successfulText: string;
      text: string;

      buttons: {
        primary: {
          background: string;
          backgroundActive: string;
          backgroundHover: string;
          color: string;
          outline: string;
        };
        secondary: {
          background: string;
          backgroundActive: string;
          border: string;
          borderHover: string;
          color: string;
          outline: string;
        };
      };
    };
  }
}
