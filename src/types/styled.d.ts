import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      bg: string;
      text: string;
      textDisabled: string;
      border: string;
      borderHover: string;
      inputBg: string;
    };
  }
}
