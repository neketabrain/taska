import 'styled-components';
import { lightTheme } from 'styles';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: typeof lightTheme.borderRadius;
    colors: typeof lightTheme.colors;
    shadows: typeof lightTheme.shadows;
    transition: typeof lightTheme.transition;
  }
}
