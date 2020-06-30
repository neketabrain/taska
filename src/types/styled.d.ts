import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      cardBackground: string;
      text: string;
      additionalText: string;
      invertedText: string;
      primaryLightest: string;
      primary: string;
      primaryDark: string;
      primaryDarkest: string;
      secondary: string;
      border: string;
      borderDarker: string;
      borderDarkest: string;
      error: string;
      disabledInputBackground: string;
      errorInputBackground: string;
      outline: string;
      opacityGrey: string;
      opacityDarkGrey: string;
      successfulText: string;
      opacitySuccessful: string;
      primaryOutline: string;

      buttons: {
        primary: {
          color: string;
          background: string;
          backgroundHover: string;
          backgroundActive: string;
          outline: string;
        };
        secondary: {
          color: string;
          background: string;
          backgroundActive: string;
          border: string;
          borderHover: string;
          outline: string;
        };
      };
    };
  }
}
