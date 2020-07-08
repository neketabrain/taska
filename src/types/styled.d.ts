import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundHover: string;
      border: string;
      cardBoxShadow: string;
      error: string;
      errorOpacity: string;
      errorOutline: string;
      foreground: string;
      foregroundHover: string;
      primary: string;
      primaryActive: string;
      primaryHover: string;
      primaryOutline: string;
      secondary: string;
      secondaryActive: string;
      secondaryHover: string;
      secondaryOpacity: string;
      secondaryOutline: string;
      text: string;
      textSecondary: string;
    };
  }
}
