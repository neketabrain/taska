import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundHover: string;
      border: string;
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
      secondaryOutline: string;
      successful: string;
      successfulOpacity: string;
      text: string;
      textSecondary: string;
    };
  }
}
