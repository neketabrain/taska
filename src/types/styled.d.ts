import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      whites: string[];
      black: string;
      blacks: string[];
      primary: string;
      primaries: string[];
      bg: string;
      bgs: string[];
      text: string;
      texts: string[];
    };
  }
}
