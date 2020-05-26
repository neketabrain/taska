import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bg: string;
      text: string;
      textDisabled: string;
      border: string;
      borderHover: string;
      inputBg: string;
      error: string;
      errorBg: string;

      buttons: {
        primary: {
          bg: string;
          hover: string;
          active: string;
        };
        secondary: {
          bg: string;
          border: string;
          borderHover: string;
        };
      };
    };
  }
}
