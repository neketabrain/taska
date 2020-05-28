import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      cardBackground: string;
      text: string;
      additionalText: string;
      invertedText: string;
      primary: string;
      primaryDark: string;
      secondary: string;
      border: string;
      borderDarker: string;
      error: string;
      inputBackground: string;
      errorInputBackground: string;

      buttons: {
        primary: {
          color: string;
          background: string;
          backgroundHover: string;
          backgroundActive: string;
        };
        secondary: {
          color: string;
          background: string;
          backgroundActive: string;
          border: string;
          borderHover: string;
        };
      };
    };
  }
}
